import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import PollenField from './PollenField'
import { regionalNature } from '../data/content'
import { getIcon } from './icons'

/**
 * Emotionale, regionale Sektion mit Hintergrundillustrationen (Konturlinien,
 * Wabenstruktur, Bluetenstaub) und drei Landschafts-Karten.
 */
export default function RegionalNatureSection() {
  return (
    <Section
      id="region"
      aria-label="Natur und Region"
      className="relative overflow-hidden bg-gradient-to-b from-natural to-honeycream/40"
    >
      <div aria-hidden="true" className="absolute inset-0 honeycomb-bg opacity-40" />
      <PollenField count={12} />

      <div className="relative">
        <SectionHeader eyebrow={regionalNature.eyebrow} title={regionalNature.title} />
        <Reveal className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-ink/75 sm:text-lg">{regionalNature.text}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {regionalNature.cards.map((card, i) => {
            const Icon = getIcon(card.icon)
            return (
              <Reveal as="article" key={card.title} delay={i * 0.1} className="card group overflow-hidden hover:-translate-y-1 hover:shadow-lift">
                <div
                  role="img"
                  aria-label={`${card.title} (Bildplatzhalter)`}
                  className="mb-5 flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br from-forest/85 to-forest text-honeycream"
                >
                  <Icon className="h-10 w-10 opacity-80" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-forest">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
