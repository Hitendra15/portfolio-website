const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'
).replace(/\/+$/, '')

export class ApiError extends Error {
  constructor(message, { status = 0, data = null } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }

  /** DRF validation errors -> { fieldName: 'first message' } */
  get fieldErrors() {
    if (this.status !== 400 || !this.data || typeof this.data !== 'object') return {}

    return Object.fromEntries(
      Object.entries(this.data).map(([field, messages]) => [
        field,
        Array.isArray(messages) ? messages[0] : String(messages),
      ]),
    )
  }
}

function messageFor(status) {
  if (status === 400) return 'Please check the highlighted fields and try again.'
  if (status === 429) return 'Too many messages sent. Please try again later.'
  if (status >= 500) return 'The server had a problem. Please try again in a moment.'
  return `Request failed (${status}).`
}

async function request(endpoint, { body, ...options } = {}) {
  let response

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...(body !== undefined && { 'Content-Type': 'application/json' }),
      },
      ...(body !== undefined && { body: JSON.stringify(body) }),
    })
  } catch (error) {
    if (error.name === 'AbortError') throw error // request was cancelled on purpose
    throw new ApiError('Could not reach the server. Please check your connection.')
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new ApiError(messageFor(response.status), { status: response.status, data })
  }

  return data
}

export const apiGet = (endpoint, signal) => request(endpoint, { signal })

export const apiPost = (endpoint, body) => request(endpoint, { method: 'POST', body })
