const fs = require('fs')
const path = require('path')
const Database = require('better-sqlite3')
const questions = require('./questions')

const dataDir = path.join(__dirname, '..', 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const dbPath = path.join(dataDir, 'quiz.db')
const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS question_bank (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    domain TEXT NOT NULL,
    stem TEXT NOT NULL,
    options_json TEXT NOT NULL,
    correct_option INTEGER NOT NULL,
    explanation TEXT NOT NULL,
    resource TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS quiz_attempts (
    id TEXT PRIMARY KEY,
    started_at TEXT NOT NULL,
    completed_at TEXT
  );

  CREATE TABLE IF NOT EXISTS attempt_questions (
    attempt_id TEXT NOT NULL,
    sequence INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    PRIMARY KEY (attempt_id, sequence),
    FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id),
    FOREIGN KEY (question_id) REFERENCES question_bank(id)
  );

  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    attempt_id TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    selected_option INTEGER NOT NULL,
    is_correct INTEGER NOT NULL,
    answered_at TEXT NOT NULL,
    UNIQUE (attempt_id, question_id),
    FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id),
    FOREIGN KEY (question_id) REFERENCES question_bank(id)
  );
`)

// Migrate any legacy domain names to the three WAS content outline domains.
// Runs at startup whenever legacy names are detected so the DB stays current
// as new questions arrive from other agents.
const legacyCount = db
  .prepare(
    `SELECT COUNT(*) as cnt FROM question_bank
     WHERE domain NOT IN (
       'Creating Accessible Web Solutions',
       'Identifying Accessibility Issues',
       'Remediating Issues'
     )`
  )
  .get().cnt

if (legacyCount > 0) {
  db.transaction(() => {
    // Bulk remap old category names
    db.prepare(
      `UPDATE question_bank SET domain = 'Creating Accessible Web Solutions'
       WHERE domain IN ('Accessibility Foundations', 'Standards and Laws', 'Design and UX', 'Development Techniques')`
    ).run()
    db.prepare(
      `UPDATE question_bank SET domain = 'Identifying Accessibility Issues'
       WHERE domain = 'Testing and QA'`
    ).run()
    db.prepare(
      `UPDATE question_bank SET domain = 'Remediating Issues'
       WHERE domain = 'Program Management'`
    ).run()
    // Per-question corrections for items bulk-moved to the wrong domain above
    db.prepare(
      `UPDATE question_bank SET domain = 'Identifying Accessibility Issues'
       WHERE stem LIKE '%color%required fields%'`
    ).run()
    db.prepare(
      `UPDATE question_bank SET domain = 'Remediating Issues'
       WHERE stem LIKE '%map product requirements to WCAG%'`
    ).run()
    db.prepare(
      `UPDATE question_bank SET domain = 'Remediating Issues'
       WHERE stem LIKE '%VPAT%'`
    ).run()
  })()
}

const existingStems = new Set(
  db.prepare('SELECT stem FROM question_bank').all().map((row) => row.stem)
)
const missingQuestions = questions.filter((row) => !existingStems.has(row.stem))

if (missingQuestions.length > 0) {
  const insert = db.prepare(`
    INSERT INTO question_bank (domain, stem, options_json, correct_option, explanation, resource)
    VALUES (?, ?, ?, ?, ?, ?)
  `)

  const tx = db.transaction((rows) => {
    for (const row of rows) {
      insert.run(
        row.domain,
        row.stem,
        JSON.stringify(row.options),
        row.correctOption,
        row.explanation,
        row.resource
      )
    }
  })

  tx(missingQuestions)
}

module.exports = db
