import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  /** HTML-Element, als das gerendert wird (z. B. 'li', 'article'). */
  as?: 'div' | 'li' | 'article' | 'section'
  y?: number
}

/**
 * Sanftes Fade-/Slide-in beim Scrollen. Respektiert prefers-reduced-motion:
 * dann wird der Inhalt ohne Bewegung sofort sichtbar gerendert.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  y = 18,
}: RevealProps) {
  const reduced = usePrefersReducedMotion()
  const MotionTag = motion[as]

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  )
}
