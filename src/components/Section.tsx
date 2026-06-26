import { type ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  id?: string
}

/** Einheitlicher Sektionskopf (Eyebrow, Titel, Einleitung). */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'center',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
  return (
    <div className={alignment}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight text-forest sm:text-4xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">{intro}</p>}
    </div>
  )
}

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  'aria-label'?: string
}

/** Semantischer Sektions-Wrapper mit Anker-ID und Standardabstand. */
export default function Section({ id, children, className = '', ...rest }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`} {...rest}>
      <div className="container-page">{children}</div>
    </section>
  )
}
