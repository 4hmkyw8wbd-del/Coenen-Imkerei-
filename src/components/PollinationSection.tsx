import { ArrowRight } from 'lucide-react'
import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import PollenField from './PollenField'
import { pollination } from '../data/content'
import { getIcon } from './icons'

/**
 * Bestaeubungs-Sektion: wissenschaftlich differenziert formuliert.
 * Mit Bluete-zu-Biene-zu-Frucht-Diagramm, Statistik-Karten,
 * dezenten Pollenpunkten und interaktiven Hover-/Fokus-Erklaerungen.
 */
export default function PollinationSection() {
  return (
    <Section id="bestaeubung" aria-label="Bestäubungsleistung der Bienen" className="relative overflow-hidden bg-forest text-natural">
      <PollenField count={18} />
      <div className="relative">
        <SectionHeader eyebrow={pollination.eyebrow} title={pollination.title} />
        <Reveal className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-natural/80 sm:text-lg">{pollination.intro}</p>
        </Reveal>

        {/* Bluete -> Bestaeubung -> Frucht */}
        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-stretch gap-4 md:flex-row md:items-center">
          {pollination.steps.map((step, i) => {
            const Icon = getIcon(step.icon)
            return (
              <div key={step.label} className="flex flex-1 items-center gap-4 md:flex-col">
                <Reveal delay={i * 0.12} className="flex flex-1 flex-col items-center rounded-2xl border border-natural/15 bg-natural/5 p-6 text-center md:w-full">
                  <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-honeygold/20 text-honeygold">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <p className="font-display text-xl font-semibold">{step.label}</p>
                  <p className="mt-1.5 text-sm text-natural/70">{step.text}</p>
                </Reveal>
                {i < pollination.steps.length - 1 && (
                  <ArrowRight className="h-6 w-6 shrink-0 rotate-90 text-honeygold/70 md:rotate-0" aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>

        {/* Differenzierte Fakten */}
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <ul className="space-y-3">
            {pollination.facts.map((f) => (
              <li key={f} className="flex gap-3 rounded-xl bg-natural/5 p-4 text-sm leading-relaxed text-natural/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-honeygold" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-honeygold/30 bg-honeygold/10 p-5 text-center text-base font-medium text-honeycream">
            {pollination.conclusion}
          </p>
        </Reveal>

        {/* Interaktive Begriffe (Hover / Fokus) */}
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-honeygold">
            Begriffe zum Entdecken
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pollination.terms.map((t) => (
              <div
                key={t.term}
                tabIndex={0}
                className="group relative cursor-default rounded-xl border border-natural/15 bg-natural/5 p-4 text-center transition-colors hover:bg-natural/10 focus-visible:bg-natural/10"
              >
                <span className="font-semibold text-honeycream">{t.term}</span>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute inset-x-2 bottom-full z-10 mb-2 rounded-lg bg-ink p-3 text-left text-xs leading-relaxed text-natural opacity-0 shadow-lift transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  {t.text}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
