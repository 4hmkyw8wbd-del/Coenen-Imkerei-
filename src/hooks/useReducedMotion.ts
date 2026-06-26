import { useEffect, useState } from 'react'

/**
 * Liefert true, wenn die Nutzerin reduzierte Bewegung bevorzugt
 * (prefers-reduced-motion). Wird genutzt, um Animationen abzuschalten.
 */
export function usePrefersReducedMotion(): boolean {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setReduced(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}
