<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '')
const EXAM_DURATION_MINUTES = 120

const token = ref(localStorage.getItem('was_token') || '')
const currentUser = ref(localStorage.getItem('was_username') || '')
const authMode = ref('login')
const authUsername = ref('')
const authPassword = ref('')
const authError = ref('')
const authLoading = ref(false)

const attemptId = ref(null)
const question = ref(null)
const index = ref(0)
const total = ref(0)
const selectedOption = ref(null)
const savedOption = ref(null)
const summary = ref(null)
const review = ref(null)
const analysis = ref(null)
const loading = ref(false)
const error = ref('')
const elapsedSeconds = ref(0)
let timerId = null

const isAuthenticated = computed(() => Boolean(token.value))
const progressLabel = computed(() => `${index.value + 1} / ${total.value}`)
const needsSubmit = computed(() => selectedOption.value !== null && selectedOption.value !== savedOption.value)
const isAnswered = computed(() => savedOption.value !== null)
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

function logout() {
  token.value = ''
  currentUser.value = ''
  localStorage.removeItem('was_token')
  localStorage.removeItem('was_username')
  attemptId.value = null
  question.value = null
  summary.value = null
  review.value = null
  analysis.value = null
  stopTimer()
}

async function requestJson(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(token.value ? { Authorization: 'Bearer ' + token.value } : {}),
    ...(options.headers || {})
  }
  const response = await fetch(`${API_BASE}${path}`, { ...options, headers })
  const payload = await response.json()
  if (!response.ok) {
    if (response.status === 401) {
      logout()
    }
    throw new Error(payload.error || 'Request failed')
  }
  return payload
}

async function submitAuth() {
  authError.value = ''
  authLoading.value = true
  try {
    const endpoint = authMode.value === 'register' ? '/api/auth/register' : '/api/auth/login'
    const data = await requestJson(endpoint, {
      method: 'POST',
      body: JSON.stringify({ username: authUsername.value, password: authPassword.value })
    })
    token.value = data.token
    currentUser.value = data.username
    localStorage.setItem('was_token', data.token)
    localStorage.setItem('was_username', data.username)
    authUsername.value = ''
    authPassword.value = ''
  } catch (err) {
    authError.value = err.message
  } finally {
    authLoading.value = false
  }
}

onMounted(async () => {
  if (token.value) {
    try {
      const me = await requestJson('/api/auth/me')
      currentUser.value = me.username
      localStorage.setItem('was_username', me.username)
    } catch {
      logout()
    }
  }
})

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
  savedOption.value = payload.existingResponse
  selectedOption.value = payload.existingResponse
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

    savedOption.value = selectedOption.value
    await nextStep()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

async function goBack() {
  if (index.value === 0 || !attemptId.value) return
  loading.value = true
  error.value = ''
  try {
    await loadQuestion(index.value - 1)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

async function nextStep() {
  if (!attemptId.value || !isAnswered.value || needsSubmit.value) {
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
      <div v-if="isAuthenticated" class="user-bar">
        <span>Signed in as <strong>{{ currentUser }}</strong></span>
        <button class="btn-link" @click="logout">Sign out</button>
      </div>
    </header>

    <section v-if="!isAuthenticated" class="card">
      <h2>{{ authMode === 'login' ? 'Sign in' : 'Create account' }}</h2>
      <p v-if="authError" class="error" role="alert">{{ authError }}</p>
      <form @submit.prevent="submitAuth">
        <label class="field-label">
          Username
          <input
            v-model="authUsername"
            type="text"
            autocomplete="username"
            required
            minlength="3"
            maxlength="30"
            pattern="[a-zA-Z0-9_]+"
          />
        </label>
        <label class="field-label">
          Password
          <input
            v-model="authPassword"
            type="password"
            :autocomplete="authMode === 'register' ? 'new-password' : 'current-password'"
            required
            minlength="8"
          />
        </label>
        <button type="submit" :disabled="authLoading">
          {{ authLoading ? 'Please wait…' : authMode === 'login' ? 'Sign in' : 'Create account' }}
        </button>
      </form>
      <p class="auth-toggle">
        <span v-if="authMode === 'login'">
          No account yet?
          <button class="btn-link" @click="authMode = 'register'; authError = ''">Create one</button>
        </span>
        <span v-else>
          Already have an account?
          <button class="btn-link" @click="authMode = 'login'; authError = ''">Sign in</button>
        </span>
      </p>
    </section>

    <template v-else>
      <p v-if="error" class="error" role="alert">{{ error }}</p>

      <section v-if="!attemptId && !summary" class="card">
        <h2>Start your simulated exam</h2>
        <p>This set includes {{ total || 75 }} questions across the three WAS content outline domains: Creating Accessible Web Solutions, Identifying Accessibility Issues, and Remediating Issues.</p>
        <button :disabled="loading" @click="startPracticeTest">{{ loading ? 'Starting…' : 'Start Practice Test' }}</button>
      </section>

      <section v-else-if="question" class="card">
        <div class="meta">
          <span>Question {{ progressLabel }}</span>
          <span>{{ question.domain }}</span>
          <span>Time remaining: {{ formatDuration(remainingSeconds) }}</span>
        </div>

        <h2>{{ question.stem }}</h2>

        <fieldset :disabled="loading">
          <legend class="sr-only">Answer options</legend>
          <label v-for="(option, optionIndex) in question.options" :key="option" class="option">
            <input v-model="selectedOption" type="radio" :value="optionIndex" name="answer" />
            <span>{{ option }}</span>
          </label>
        </fieldset>

        <div class="actions">
          <button v-if="index > 0" :disabled="loading" @click="goBack">
            ← Previous
          </button>
          <button v-if="needsSubmit" :disabled="loading" @click="submitResponse">
            {{ loading ? 'Submitting…' : 'Submit Answer' }}
          </button>
          <button v-if="isAnswered && !needsSubmit" :disabled="loading" @click="nextStep">
            {{ index + 1 >= total ? 'Finish Exam' : 'Next →' }}
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
    </template>
  </main>
</template>
