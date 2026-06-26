import { BookMarked } from 'lucide-react'
import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import { science } from '../data/content'
import { getIcon } from './icons'

/**
 * "Wissen & Verantwortung": sachliche, evidenzbasierte Einordnung mit
 * kompakter Quellen-Infobox. Keine medizinischen Versprechen.
 */
export default function ScienceSection() {
  return (
    <Section id="wissenschaft" aria-label="Wissenschaftlich fundiertes Wissen" className="bg-natural">
      <SectionHeader eyebrow={science.eyebrow} title={science.title} intro={science.intro} />

      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {science.items.map((item, i) => {
          const Icon = getIcon(item.icon)
          return (
            <Reveal as="li" key={item.title} delay={i * 0.06} className="card hover:-translate-y-1 hover:shadow-lift">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-honeygold/12 text-honeygold">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-lg font-semibold text-forest">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
            </Reveal>
          )
        })}
      </ul>

      {/* Kompakte Quellenbox */}
      <Reveal className="mx-auto mt-10 max-w-3xl">
        <div className="flex gap-4 rounded-2xl border border-forest/15 bg-forest/5 p-5">
          <BookMarked className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink/70">{science.sources}</p>
        </div>
      </Reveal>
    </Section>
  )
}
