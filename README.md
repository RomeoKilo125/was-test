# WAS Practice Test (Full Stack)

A full-stack WAS practice test app with:

- **Vue 3 + Vite frontend** for one-question-at-a-time exam flow
- **Node.js + Express backend**
- **SQLite data layer** for question bank, attempts, responses, and aggregate analysis

The practice bank is aligned to IAAP WAS body-of-knowledge themes (foundations, standards/laws, UX/design, development, QA, and program governance) and includes source references for each question.

## Project structure

- `/frontend` Vue client
- `/backend` API + SQLite database (`/backend/data/quiz.db`)

## Run locally

### Root project commands

From the repository root:

```bash
npm install
npm run dev
```

- `npm install` installs root, frontend, and backend dependencies through npm workspaces.
- `npm run dev` starts both the Express API and the Vue dev server together.

For a production-style local run:

```bash
npm install
npm run build
npm start
```

That builds the Vue app and serves it from the Express server on `http://localhost:3000`.

### 1) Start API

```bash
cd backend
npm install
npm run dev
```

API runs at `http://localhost:3000`.

### 2) Start frontend

```bash
cd frontend
npm install
npm run dev
```

UI runs at `http://localhost:5173`. For standalone frontend development, set `VITE_API_BASE=http://localhost:3000`.

## Render deployment

This repository is set up for a single-service deployment.

- **Build command:** `npm install && npm run build`
- **Start command:** `npm start`

Render can deploy from the repository root, build the Vue frontend, and run the Express backend, which serves the built frontend from `frontend/dist`.

## API summary

- `POST /api/attempts` → start a quiz attempt
- `GET /api/attempts/:attemptId/questions/:index` → fetch one question
- `POST /api/attempts/:attemptId/responses` → save answer
- `GET /api/attempts/:attemptId/summary` → score + per-domain breakdown
- `GET /api/analysis/overview` → aggregate analytics across all attempts

## Notes

- Question order is randomized per attempt.
- Responses are upserted (answer changes are preserved).
- The app stores explanations and source references with each question for study review.
