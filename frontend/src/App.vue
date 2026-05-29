<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000'
const EXAM_DURATION_MINUTES = 120

const attemptId = ref(null)
const question = ref(null)
const index = ref(0)
const total = ref(0)
const selectedOption = ref(null)
const submitted = ref(false)
const summary = ref(null)
const review = ref(null)
const analysis = ref(null)
const loading = ref(false)
const error = ref('')
const elapsedSeconds = ref(0)
let timerId = null

const progressLabel = computed(() => `${index.value + 1} / ${total.value}`)
const remainingSeconds = computed(() => Math.max(EXAM_DURATION_MINUTES * 60 - elapsedSeconds.value, 0))
const scoreLabel = computed(() =>
  summary.value ? `${summary.value.correctTotal}/${summary.value.answeredTotal} (${summary.value.score}%)` : ''
)

function formatDuration(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

function startTimer() {
  stopTimer()
  elapsedSeconds.value = 0
  timerId = setInterval(() => {
    elapsedSeconds.value += 1
  }, 1000)
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
}

async function requestJson(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })
  const payload = await response.json()
  if (!response.ok) {
    throw new Error(payload.error || 'Request failed')
  }
  return payload
}

async function startPracticeTest() {
  error.value = ''
  loading.value = true
  summary.value = null
  review.value = null
  analysis.value = null

  try {
    const created = await requestJson('/api/attempts', { method: 'POST' })
    attemptId.value = created.attemptId
    total.value = created.questionCount
    index.value = 0
    startTimer()
    await loadQuestion(0)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

async function loadQuestion(nextIndex) {
  if (!attemptId.value) {
    return
  }

  const payload = await requestJson(`/api/attempts/${attemptId.value}/questions/${nextIndex}`)
  question.value = payload.question
  total.value = payload.total
  index.value = payload.index
  selectedOption.value = payload.existingResponse
  submitted.value = payload.existingResponse !== null
}

async function submitResponse() {
  if (!attemptId.value || !question.value || selectedOption.value === null) {
    return
  }

  loading.value = true
  error.value = ''

  try {
    await requestJson(`/api/attempts/${attemptId.value}/responses`, {
      method: 'POST',
      body: JSON.stringify({
        questionId: question.value.id,
        selectedOption: selectedOption.value
      })
    })

    submitted.value = true
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

async function nextStep() {
  if (!attemptId.value || !submitted.value) {
    return
  }

  const isLast = index.value + 1 >= total.value
  loading.value = true
  error.value = ''

  try {
    if (isLast) {
      summary.value = await requestJson(`/api/attempts/${attemptId.value}/summary`)
      review.value = await requestJson(`/api/attempts/${attemptId.value}/review`)
      analysis.value = await requestJson('/api/analysis/overview')
      question.value = null
      stopTimer()
    } else {
      await loadQuestion(index.value + 1)
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onBeforeUnmount(() => {
  stopTimer()
})
</script>

<template>
  <main class="app-shell">
    <header>
      <h1>WAS Practice Test</h1>
      <p>
        Practice exam aligned to IAAP WAS body-of-knowledge themes, with one-question-at-a-time delivery and
        response analytics.
      </p>
    </header>

    <p v-if="error" class="error" role="alert">{{ error }}</p>

    <section v-if="!attemptId && !summary" class="card">
      <h2>Start your simulated exam</h2>
      <p>This set includes {{ total || 30 }} questions across accessibility foundations, standards, design, development, testing, and governance.</p>
      <button :disabled="loading" @click="startPracticeTest">{{ loading ? 'Starting…' : 'Start Practice Test' }}</button>
    </section>

    <section v-else-if="question" class="card">
      <div class="meta">
        <span>Question {{ progressLabel }}</span>
        <span>{{ question.domain }}</span>
        <span>Time remaining: {{ formatDuration(remainingSeconds) }}</span>
      </div>

      <h2>{{ question.stem }}</h2>

      <fieldset :disabled="submitted || loading">
        <legend class="sr-only">Answer options</legend>
        <label v-for="(option, optionIndex) in question.options" :key="option" class="option">
          <input v-model="selectedOption" type="radio" :value="optionIndex" name="answer" />
          <span>{{ option }}</span>
        </label>
      </fieldset>

      <div class="actions">
        <button v-if="!submitted" :disabled="selectedOption === null || loading" @click="submitResponse">
          {{ loading ? 'Submitting…' : 'Submit Answer' }}
        </button>
        <button v-else :disabled="loading" @click="nextStep">
          {{ index + 1 >= total ? 'Finish Exam' : 'Next Question' }}
        </button>
      </div>
    </section>

    <section v-else-if="summary" class="card">
      <h2>Exam complete</h2>
      <p><strong>Score:</strong> {{ scoreLabel }}</p>
      <p><strong>Time used:</strong> {{ formatDuration(elapsedSeconds) }}</p>

      <h3>Domain breakdown</h3>
      <ul>
        <li v-for="domain in summary.domainBreakdown" :key="domain.domain">
          {{ domain.domain }} — {{ domain.correct }}/{{ domain.answered }} ({{ domain.accuracy }}%)
        </li>
      </ul>

      <h3 v-if="analysis">All-attempt analytics</h3>
      <p v-if="analysis">
        Attempts: {{ analysis.attempts }} · Responses: {{ analysis.responses }} ·
        Accuracy: {{ analysis.accuracy === null ? 'N/A' : `${analysis.accuracy}%` }}
      </p>

      <section v-if="review" class="review">
        <h3>Question Review</h3>
        <article
          v-for="item in review.questions"
          :key="item.id"
          class="feedback"
          :class="item.isCorrect === null ? '' : item.isCorrect ? 'correct' : 'incorrect'"
        >
          <p class="review-meta">Q{{ item.sequence + 1 }} · {{ item.domain }}</p>
          <p><strong>{{ item.stem }}</strong></p>
          <ul class="review-options">
            <li
              v-for="(option, i) in item.options"
              :key="i"
              :class="{
                'selected': i === item.selectedOption,
                'correct-answer': i === item.correctOption
              }"
            >
              {{ option }}
              <span v-if="i === item.correctOption"> ✓</span>
              <span v-else-if="i === item.selectedOption && !item.isCorrect"> ✗</span>
            </li>
          </ul>
          <p>{{ item.explanation }}</p>
          <p><strong>Reference:</strong> {{ item.resource }}</p>
        </article>
      </section>

      <button :disabled="loading" @click="startPracticeTest">Take Another Attempt</button>
    </section>
  </main>
</template>
