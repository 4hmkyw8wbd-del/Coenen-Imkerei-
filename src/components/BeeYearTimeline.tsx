import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import { beeYear } from '../data/content'
import { getIcon } from './icons'

/**
 * Das Bienenjahr als Timeline – horizontal auf Desktop, vertikal auf Mobile.
 * Dezente Motion beim Scrollen ueber die Reveal-Komponente.
 */
export default function BeeYearTimeline() {
  return (
    <Section id="bienenjahr" aria-label="Das Bienenjahr" className="bg-natural">
      <SectionHeader
        eyebrow="Im Rhythmus der Natur"
        title="Das Bienenjahr"
        intro="Vier Jahreszeiten, vier Aufgaben – die Arbeit folgt dem, was draußen passiert."
      />

      <div className="relative mt-14">
        {/* Verbindungslinie */}
        <div
          aria-hidden="true"
          className="absolute left-6 top-0 h-full w-px bg-wood/15 md:left-0 md:top-12 md:h-px md:w-full"
        />

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-5">
          {beeYear.map((season, i) => {
            const Icon = getIcon(season.icon)
            return (
              <Reveal as="li" key={season.name} delay={i * 0.1} className="relative pl-16 md:pl-0 md:pt-20">
                {/* Knotenpunkt mit Icon */}
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-honeygold bg-natural text-honeygold shadow-soft md:left-1/2 md:-translate-x-1/2">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className="md:text-center">
                  <h3 className="text-xl font-semibold text-forest">{season.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{season.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
