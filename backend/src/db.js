const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const Database = require('better-sqlite3')
const questions = require('./questions')

function stemToId(stem) {
  return crypto.createHash('sha256').update(stem).digest('hex').slice(0, 16)
}

const dataDir = path.join(__dirname, '..', 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const dbPath = path.join(dataDir, 'quiz.db')
const db = new Database(dbPath)

db.pragma('foreign_keys = ON')

// If the question_bank table was created with an integer PK (legacy schema),
// drop all tables so they are recreated below with stable text IDs.
const legacyIdCol = db
  .prepare("PRAGMA table_info(question_bank)")
  .all()
  .find((col) => col.name === 'id' && col.type === 'INTEGER')

if (legacyIdCol) {
  db.exec(`
    DROP TABLE IF EXISTS responses;
    DROP TABLE IF EXISTS attempt_questions;
    DROP TABLE IF EXISTS quiz_attempts;
    DROP TABLE IF EXISTS question_bank;
  `)
}

db.exec(`
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
    started_at TEXT NOT NULL,
    completed_at TEXT
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

const existingIds = new Set(
  db.prepare('SELECT id FROM question_bank').all().map((row) => row.id)
)
const missingQuestions = questions.filter((row) => !existingIds.has(stemToId(row.stem)))

if (missingQuestions.length > 0) {
  const insert = db.prepare(`
    INSERT INTO question_bank (id, domain, stem, options_json, correct_option, explanation, resource)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `)

  const tx = db.transaction((rows) => {
    for (const row of rows) {
      insert.run(
        stemToId(row.stem),
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
