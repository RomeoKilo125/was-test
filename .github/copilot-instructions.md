# Copilot Instructions

## Commands

**From the repository root:**
```bash
npm install          # installs all workspace dependencies (root, backend, frontend)
npm run dev          # starts Express API (port 3000) + Vue dev server (port 5173) concurrently
npm run build        # builds the Vue frontend to frontend/dist
npm start            # starts the Express server (serves built frontend + API)
npm test             # runs backend tests via Node's built-in test runner
```

**Backend only:**
```bash
cd backend
npm run dev          # nodemon-watched server
node --test src/some.test.js   # run a single test file
```

**Frontend only:**
```bash
cd frontend
npm run dev          # Vite dev server; set VITE_API_BASE=http://localhost:3000 for standalone use
```

## Architecture

npm workspaces monorepo. The Express backend (`backend/`) serves the REST API and, in production, also serves the built Vue frontend from `frontend/dist`. In development, Vite and Express run as two separate processes.

**Backend** (`backend/src/`):
- `db.js` — opens/creates the SQLite database at `backend/data/quiz.db`, runs schema migrations, seeds `question_bank` from `questions.js` on startup, and exports the `better-sqlite3` db instance. All DB access across the codebase goes through this module.
- `questions.js` — the question bank as a static JS array (121 KB). Each entry has `domain`, `stem`, `options`, `correctOption` (0-indexed integer), `explanation`, and `resource`.
- `server.js` — all Express routes. No separate router files.

**Frontend** (`frontend/src/`):
- `App.vue` — the entire UI. Single-component architecture; all state and API calls live here.
- API base URL is read from `import.meta.env.VITE_API_BASE` (empty string in production, since Express serves the frontend).

**SQLite schema** (auto-created by `db.js`):
- `question_bank` — static question data
- `quiz_attempts` — one row per attempt (UUID id, timestamps)
- `attempt_questions` — ordered question assignment per attempt (attempt_id, sequence, question_id)
- `responses` — one row per answered question, upserted on re-answer

## Key Conventions

**Question IDs are SHA-256 hashes of the stem.** The `stemToId` function in `db.js` derives `id = sha256(stem).slice(0, 16)`. Never set question IDs manually — changing a question's `stem` changes its ID and orphans any existing responses.

**All database calls are synchronous.** `better-sqlite3` is synchronous by design. Do not introduce `async/await` for database operations.

**Backend uses CommonJS; frontend uses ES modules.** `backend/package.json` has `"type": "commonjs"` (use `require`/`module.exports`). `frontend/package.json` has `"type": "module"` (use `import`/`export`).

**Attempt question selection is domain-weighted:** 30 from "Creating Accessible Web Solutions", 30 from "Identifying Accessibility Issues", 15 from "Remediating Issues" (mirrors IAAP WAS content outline weights). After selection, questions are Fisher-Yates shuffled so domains interleave.

**Responses are upserted.** `POST /api/attempts/:id/responses` uses `INSERT … ON CONFLICT DO UPDATE`, so users can change answers and the latest answer is always preserved.

**Legacy schema migration:** `db.js` detects an old INTEGER primary key on `question_bank` and drops all tables to recreate them. This is a one-time migration guard — don't remove it.

**The three WAS domain names are exact strings** used as foreign-key-like values across `question_bank` and analytics queries:
- `"Creating Accessible Web Solutions"`
- `"Identifying Accessibility Issues"`
- `"Remediating Issues"`

**No frontend component split.** All UI state, computed values, and API helpers are in `App.vue`. If adding a new view (e.g., an admin page), consider extracting to a new component rather than growing `App.vue` further.
