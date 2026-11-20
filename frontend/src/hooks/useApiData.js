import { useEffect, useState } from 'react'

/**
 * Load data from the Django API.
 *
 * - While loading, and if the API is unreachable or returns nothing,
 *   `fallback` (the static data in siteData.js) is shown so the page never breaks.
 * - `source` tells you where the data came from: 'api' or 'fallback'.
 * - In development, the browser console explains why a fallback was used.
 *
 * `fetcher` must be a stable function (use the ones from services/portfolioApi.js).
 */
export function useApiData(fetcher, fallback, label = 'data') {
  const [state, setState] = useState({ data: fallback, loading: true, source: 'fallback' })

  useEffect(() => {
    const controller = new AbortController()

    fetcher(controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return

        const isEmpty = data == null || (Array.isArray(data) && data.length === 0)

        if (isEmpty) {
          if (import.meta.env.DEV) {
            console.warn(
              `[api] No ${label} returned by the backend - showing static fallback. ` +
                'Run "python manage.py seed_portfolio" (or add data in /admin/).',
            )
          }
          setState({ data: fallback, loading: false, source: 'fallback' })
          return
        }

        setState({ data, loading: false, source: 'api' })
      })
      .catch((error) => {
        if (error.name === 'AbortError') return

        if (import.meta.env.DEV) {
          console.warn(`[api] Could not load ${label} - showing static fallback.`, error)
        }
        setState({ data: fallback, loading: false, source: 'fallback' })
      })

    return () => controller.abort()
    // fetcher/fallback are module-level constants, so this runs once per mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}
