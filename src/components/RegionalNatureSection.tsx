import Section from './Section'
import Reveal from './Reveal'
import PollenField from './PollenField'
import { regionalNature } from '../data/content'
import { getIcon } from './icons'
import rapeseedField from '../assets/rapeseed-field.jpg'

/**
 * Emotionale, regionale Sektion. Ein echtes Landschaftsfoto (Rapsblüte in der
 * Abendsonne) liegt als ueberlagerter Hintergrund unter dem Inhalt; darueber
 * stehen Ueberschrift, Einleitung und drei lichtdurchlaessige Landschafts-Karten.
 */
export default function RegionalNatureSection() {
  return (
    <Section
      id="region"
      aria-label="Natur und Region"
      className="relative overflow-hidden bg-forest text-natural"
    >
      {/* Echtes Foto als ueberlagerter Hintergrund */}
      <img
        src={rapeseedField}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/70 to-ink/90"
      />
      <div aria-hidden="true" className="absolute inset-0 honeycomb-bg opacity-20" />
      <PollenField count={12} />

      <div className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">{regionalNature.eyebrow}</p>
          <h2 className="text-3xl font-semibold leading-tight text-honeycream sm:text-4xl">
            {regionalNature.title}
          </h2>
        </div>
        <Reveal className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-natural/85 sm:text-lg">{regionalNature.text}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {regionalNature.cards.map((card, i) => {
            const Icon = getIcon(card.icon)
            return (
              <Reveal
                as="article"
                key={card.title}
                delay={i * 0.1}
                className="group rounded-2xl border border-natural/15 bg-natural/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-natural/15"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-honeygold/20 text-honeygold">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl font-semibold text-honeycream">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-natural/80">{card.text}</p>
              </Reveal>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-natural/55">
          Rapsblüte in der Abendsonne – Tracht aus der Region.
        </p>
      </div>
    </Section>
  )
}
