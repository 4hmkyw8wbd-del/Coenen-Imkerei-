import { useMemo } from 'react'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

type PollenFieldProps = {
  count?: number
  className?: string
}

/**
 * Dezente, rein dekorative Pollenpartikel-Ebene. Aria-hidden und bei
 * prefers-reduced-motion vollstaendig deaktiviert.
 */
export default function PollenField({ count = 14, className = '' }: PollenFieldProps) {
  const reduced = usePrefersReducedMotion()

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        bottom: Math.random() * 60,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 9,
        duration: 7 + Math.random() * 6,
      })),
    [count],
  )

  if (reduced) return null

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-honeygold/40"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `pollen-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
