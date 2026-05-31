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
db.pragma('foreign_keys = ON')

function shouldResetSchema() {
  const hasQuestionBank = db
    .prepare("SELECT 1 AS present FROM sqlite_master WHERE type = 'table' AND name = 'question_bank'")
    .get()

  if (!hasQuestionBank) {
    return false
  }

  const idCol = db
    .prepare('PRAGMA table_info(question_bank)')
    .all()
    .find((col) => col.name === 'id')

  if (!idCol) {
    return true
  }

  if (idCol.type && idCol.type.toUpperCase().includes('INT')) {
    return true
  }

  const questionIds = db.prepare('SELECT id FROM question_bank').all()
  if (questionIds.some((row) => typeof row.id === 'string' && /^[0-9a-f]{16}$/i.test(row.id))) {
    return true
  }

  const hasUsers = db
    .prepare("SELECT 1 AS present FROM sqlite_master WHERE type = 'table' AND name = 'users'")
    .get()
  if (!hasUsers) {
    return true
  }

  const attemptsColumns = db.prepare('PRAGMA table_info(quiz_attempts)').all()
  if (!attemptsColumns.some((col) => col.name === 'user_id')) {
    return true
  }

  return false
}

if (shouldResetSchema()) {
  db.exec(`
    DROP TABLE IF EXISTS responses;
    DROP TABLE IF EXISTS attempt_questions;
    DROP TABLE IF EXISTS quiz_attempts;
    DROP TABLE IF EXISTS question_bank;
    DROP TABLE IF EXISTS users;
  `)
}

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS question_bank (
    id TEXT PRIMARY KEY,
    domain TEXT NOT NULL,
    stem TEXT NOT NULL,
    options_json TEXT NOT NULL,
    correct_option INTEGER NOT NULL,
    explanation TEXT NOT NULL,
    resource TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS quiz_attempts (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    started_at TEXT NOT NULL,
    completed_at TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS attempt_questions (
    attempt_id TEXT NOT NULL,
    sequence INTEGER NOT NULL,
    question_id TEXT NOT NULL,
    PRIMARY KEY (attempt_id, sequence),
    FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id),
    FOREIGN KEY (question_id) REFERENCES question_bank(id)
  );

  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    attempt_id TEXT NOT NULL,
    question_id TEXT NOT NULL,
    selected_option INTEGER NOT NULL,
    is_correct INTEGER NOT NULL,
    answered_at TEXT NOT NULL,
    UNIQUE (attempt_id, question_id),
    FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id),
    FOREIGN KEY (question_id) REFERENCES question_bank(id)
  );
`)

const seenKeys = new Set()
for (const row of questions) {
  if (typeof row.key !== 'string' || !row.key.trim()) {
    throw new Error('Each question must include a non-empty key string.')
  }

  if (seenKeys.has(row.key)) {
    throw new Error(`Duplicate question key found: ${row.key}`)
  }

  seenKeys.add(row.key)
}

const upsert = db.prepare(`
  INSERT INTO question_bank (id, domain, stem, options_json, correct_option, explanation, resource)
  VALUES (?, ?, ?, ?, ?, ?, ?)
  ON CONFLICT(id) DO UPDATE SET
    domain = excluded.domain,
    stem = excluded.stem,
    options_json = excluded.options_json,
    correct_option = excluded.correct_option,
    explanation = excluded.explanation,
    resource = excluded.resource
`)

const tx = db.transaction((rows) => {
  for (const row of rows) {
    upsert.run(
      row.key,
      row.domain,
      row.stem,
      JSON.stringify(row.options),
      row.correctOption,
      row.explanation,
      row.resource
    )
  }
})

tx(questions)

module.exports = db
