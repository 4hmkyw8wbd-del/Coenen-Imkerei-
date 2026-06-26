import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import { process } from '../data/content'

/**
 * Prozess "Vom Volk ins Glas" als nummerierte, ruhige Schrittfolge.
 * Staerkt das Vertrauen durch nachvollziehbare Arbeitsweise.
 */
export default function ProcessSection() {
  return (
    <Section id="prozess" aria-label="Vom Volk ins Glas" className="honeycomb-bg bg-honeycream/30">
      <SectionHeader eyebrow={process.eyebrow} title={process.title} />

      <ol className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
