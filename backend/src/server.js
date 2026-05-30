const cors = require('cors')
const crypto = require('crypto')
const express = require('express')
const fs = require('fs')
const path = require('path')
const db = require('./db')

const app = express()
const port = process.env.PORT || 3000
const frontendDistPath = path.resolve(__dirname, '..', '..', 'frontend', 'dist')

app.use(cors())
app.use(express.json())

function getAttemptOr404(res, attemptId) {
  const attempt = db.prepare('SELECT * FROM quiz_attempts WHERE id = ?').get(attemptId)
  if (!attempt) {
    res.status(404).json({ error: 'Quiz attempt not found.' })
    return null
  }
  return attempt
}

function getQuestionForAttempt(attemptId, index) {
  return db
    .prepare(
      `
      SELECT aq.sequence, qb.id, qb.domain, qb.stem, qb.options_json, qb.explanation, qb.resource
      FROM attempt_questions aq
      JOIN question_bank qb ON qb.id = aq.question_id
      WHERE aq.attempt_id = ? AND aq.sequence = ?
    `
    )
    .get(attemptId, index)
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.post('/api/attempts', (req, res) => {
  const attemptId = crypto.randomUUID()
  const now = new Date().toISOString()

  // Select questions proportional to WAS content outline domain weights:
  // 40% Creating, 40% Identifying, 20% Remediating → 30 / 30 / 15 of 75
  const DOMAIN_TARGETS = [
    { domain: 'Creating Accessible Web Solutions', count: 30 },
    { domain: 'Identifying Accessibility Issues', count: 30 },
    { domain: 'Remediating Issues', count: 15 }
  ]

  const selectFromDomain = db.prepare(
    'SELECT id FROM question_bank WHERE domain = ? ORDER BY RANDOM() LIMIT ?'
  )

  let poolIds = []
  for (const { domain, count } of DOMAIN_TARGETS) {
    const rows = selectFromDomain.all(domain, count)
    poolIds.push(...rows.map((r) => r.id))
  }

  // Fisher-Yates shuffle so questions from different domains are interleaved
  for (let i = poolIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[poolIds[i], poolIds[j]] = [poolIds[j], poolIds[i]]
  }

  if (poolIds.length === 0) {
    return res.status(500).json({ error: 'Question bank is empty.' })
  }

  const createAttempt = db.prepare(
    'INSERT INTO quiz_attempts (id, started_at, completed_at) VALUES (?, ?, NULL)'
  )
  const assignQuestion = db.prepare(
    'INSERT INTO attempt_questions (attempt_id, sequence, question_id) VALUES (?, ?, ?)'
  )

  const tx = db.transaction(() => {
    createAttempt.run(attemptId, now)
    poolIds.forEach((questionId, sequence) => {
      assignQuestion.run(attemptId, sequence, questionId)
    })
  })

  tx()

  return res.status(201).json({
    attemptId,
    questionCount: poolIds.length,
    startedAt: now
  })
})

app.get('/api/attempts/:attemptId/questions/:index', (req, res) => {
  const { attemptId } = req.params
  const index = Number.parseInt(req.params.index, 10)

  if (!Number.isInteger(index) || index < 0) {
    return res.status(400).json({ error: 'Question index must be a non-negative integer.' })
  }

  if (!getAttemptOr404(res, attemptId)) {
    return
  }

  const question = getQuestionForAttempt(attemptId, index)
  const total = db
    .prepare('SELECT COUNT(*) as total FROM attempt_questions WHERE attempt_id = ?')
    .get(attemptId).total

  if (!question) {
    return res.status(404).json({ error: 'Question not found for this attempt.' })
  }

  const answered = db
    .prepare('SELECT selected_option FROM responses WHERE attempt_id = ? AND question_id = ?')
    .get(attemptId, question.id)

  return res.json({
    index,
    total,
    question: {
      id: question.id,
      domain: question.domain,
      stem: question.stem,
      options: JSON.parse(question.options_json),
      explanation: question.explanation,
      resource: question.resource
    },
    existingResponse: answered ? answered.selected_option : null
  })
})

app.post('/api/attempts/:attemptId/responses', (req, res) => {
  const { attemptId } = req.params
  const { questionId, selectedOption } = req.body

  if (!getAttemptOr404(res, attemptId)) {
    return
  }

  if (typeof questionId !== 'string' || !questionId || !Number.isInteger(selectedOption)) {
    return res.status(400).json({ error: 'questionId must be a non-empty string and selectedOption must be an integer.' })
  }

  const question = db
    .prepare(
      `
      SELECT qb.id, qb.correct_option
      FROM question_bank qb
      JOIN attempt_questions aq ON aq.question_id = qb.id
      WHERE qb.id = ? AND aq.attempt_id = ?
    `
    )
    .get(questionId, attemptId)

  if (!question) {
    return res.status(404).json({ error: 'Question not found in this attempt.' })
  }

  const optionsCount = JSON.parse(
    db.prepare('SELECT options_json FROM question_bank WHERE id = ?').get(questionId).options_json
  ).length

  if (selectedOption < 0 || selectedOption >= optionsCount) {
    return res.status(400).json({ error: 'selectedOption is out of range.' })
  }

  const isCorrect = Number(selectedOption === question.correct_option)
  const answeredAt = new Date().toISOString()

  db.prepare(
    `
    INSERT INTO responses (attempt_id, question_id, selected_option, is_correct, answered_at)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT (attempt_id, question_id)
    DO UPDATE SET
      selected_option = excluded.selected_option,
      is_correct = excluded.is_correct,
      answered_at = excluded.answered_at
  `
  ).run(attemptId, questionId, selectedOption, isCorrect, answeredAt)

  return res.status(201).json({
    questionId,
    selectedOption,
    isCorrect: Boolean(isCorrect)
  })
})

app.get('/api/attempts/:attemptId/summary', (req, res) => {
  const { attemptId } = req.params
  const attempt = getAttemptOr404(res, attemptId)
  if (!attempt) {
    return
  }

  const totals = db
    .prepare(
      `
      SELECT
        (SELECT COUNT(*) FROM attempt_questions WHERE attempt_id = ?) as question_total,
        (SELECT COUNT(*) FROM responses WHERE attempt_id = ?) as answered_total,
        (SELECT COALESCE(SUM(is_correct), 0) FROM responses WHERE attempt_id = ?) as correct_total
    `
    )
    .get(attemptId, attemptId, attemptId)

  const domainBreakdown = db
    .prepare(
      `
      SELECT
        qb.domain,
        COUNT(*) as answered,
        SUM(r.is_correct) as correct
      FROM responses r
      JOIN question_bank qb ON qb.id = r.question_id
      WHERE r.attempt_id = ?
      GROUP BY qb.domain
      ORDER BY qb.domain
    `
    )
    .all(attemptId)
    .map((row) => ({
      domain: row.domain,
      answered: row.answered,
      correct: row.correct || 0,
      accuracy: row.answered ? Number((((row.correct || 0) / row.answered) * 100).toFixed(1)) : 0
    }))

  if (!attempt.completed_at && totals.answered_total === totals.question_total) {
    db.prepare('UPDATE quiz_attempts SET completed_at = ? WHERE id = ?').run(
      new Date().toISOString(),
      attemptId
    )
  }

  const score = totals.answered_total
    ? Number(((totals.correct_total / totals.answered_total) * 100).toFixed(1))
    : 0

  return res.json({
    attemptId,
    startedAt: attempt.started_at,
    completedAt:
      totals.answered_total === totals.question_total
        ? db.prepare('SELECT completed_at FROM quiz_attempts WHERE id = ?').get(attemptId).completed_at
        : null,
    questionTotal: totals.question_total,
    answeredTotal: totals.answered_total,
    correctTotal: totals.correct_total,
    score,
    domainBreakdown
  })
})

app.get('/api/attempts/:attemptId/review', (req, res) => {
  const { attemptId } = req.params
  if (!getAttemptOr404(res, attemptId)) {
    return
  }

  const rows = db
    .prepare(
      `
      SELECT
        aq.sequence,
        qb.id,
        qb.domain,
        qb.stem,
        qb.options_json,
        qb.correct_option,
        qb.explanation,
        qb.resource,
        r.selected_option,
        r.is_correct
      FROM attempt_questions aq
      JOIN question_bank qb ON qb.id = aq.question_id
      LEFT JOIN responses r ON r.attempt_id = aq.attempt_id AND r.question_id = qb.id
      WHERE aq.attempt_id = ?
      ORDER BY aq.sequence
    `
    )
    .all(attemptId)
    .map((row) => ({
      sequence: row.sequence,
      id: row.id,
      domain: row.domain,
      stem: row.stem,
      options: JSON.parse(row.options_json),
      correctOption: row.correct_option,
      selectedOption: row.selected_option,
      isCorrect: row.selected_option !== null ? Boolean(row.is_correct) : null,
      explanation: row.explanation,
      resource: row.resource
    }))

  return res.json({ attemptId, questions: rows })
})

app.get('/api/analysis/overview', (req, res) => {
  const overall = db
    .prepare(
      `
      SELECT
        COUNT(DISTINCT qa.id) as attempts,
        COUNT(r.id) as responses,
        COALESCE(SUM(r.is_correct), 0) as correct
      FROM quiz_attempts qa
      LEFT JOIN responses r ON r.attempt_id = qa.id
    `
    )
    .get()

  const domainStats = db
    .prepare(
      `
      SELECT
        qb.domain,
        COUNT(r.id) as responses,
        COALESCE(SUM(r.is_correct), 0) as correct
      FROM question_bank qb
      LEFT JOIN responses r ON r.question_id = qb.id
      GROUP BY qb.domain
      ORDER BY qb.domain
    `
    )
    .all()
    .map((row) => ({
      domain: row.domain,
      responses: row.responses,
      correct: row.correct,
      accuracy: row.responses ? Number(((row.correct / row.responses) * 100).toFixed(1)) : null
    }))

  res.json({
    attempts: overall.attempts,
    responses: overall.responses,
    accuracy: overall.responses ? Number(((overall.correct / overall.responses) * 100).toFixed(1)) : null,
    domainStats
  })
})

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath))

  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`WAS practice API running on http://localhost:${port}`)
})
