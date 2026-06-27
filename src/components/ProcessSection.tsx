import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import { process } from '../data/content'
import honeyFiltering from '../assets/honey-filtering.jpg'

/**
 * Prozess "Vom Volk ins Glas" als nummerierte, ruhige Schrittfolge.
 * Staerkt das Vertrauen durch nachvollziehbare Arbeitsweise.
 */
export default function ProcessSection() {
  return (
    <Section id="prozess" aria-label="Vom Volk ins Glas" className="honeycomb-bg bg-honeycream/30">
      <SectionHeader eyebrow={process.eyebrow} title={process.title} />

      {/* Echtes Bild: Honig laeuft schonend durch das Doppelsieb */}
      <Reveal className="mx-auto mt-12 max-w-5xl">
        <figure className="relative overflow-hidden rounded-3xl border border-wood/10 shadow-lift">
          <img
            src={honeyFiltering}
            alt="Frisch geschleuderter Honig läuft schonend durch ein Doppelsieb"
            width={1350}
            height={1800}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 text-sm font-medium text-natural">
            Schonend geschleudert und gesiebt – ohne unnötiges Erhitzen.
          </figcaption>
        </figure>
      </Reveal>

      <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.08} className="card relative hover:-translate-y-1 hover:shadow-lift">
            <span className="font-display text-4xl font-semibold text-honeygold/40">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-forest">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
