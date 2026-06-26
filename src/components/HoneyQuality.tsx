import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import ProductsPreview from './ProductsPreview'
import { honeyQuality } from '../data/content'
import { getIcon } from './icons'

/**
 * Zentrale Verkaufssektion: Qualitaetsprinzipien, Sortencharakter und
 * eine Produktvorschau. Rechtlich vorsichtig formuliert, ohne Heilversprechen.
 */
export default function HoneyQuality() {
  return (
    <Section id="honig" aria-label="Honigqualität" className="honeycomb-bg bg-honeycream/30">
      <SectionHeader eyebrow={honeyQuality.eyebrow} title={honeyQuality.title} intro={honeyQuality.intro} />

      {/* Qualitaetsprinzipien */}
      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {honeyQuality.points.map((p, i) => {
          const Icon = getIcon(p.icon)
          return (
            <Reveal as="li" key={p.title} delay={i * 0.06} className="card hover:-translate-y-1 hover:shadow-lift">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-lg font-semibold text-forest">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
            </Reveal>
          )
        })}
      </ul>

      {/* Sortencharakter */}
      <Reveal className="mx-auto mt-14 max-w-5xl">
        <h3 className="text-center font-display text-2xl font-semibold text-forest">Sorten und ihr Charakter</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {honeyQuality.varieties.map((v) => (
            <div
              key={v.name}
              className="flex gap-4 rounded-2xl border border-wood/10 bg-white/70 p-5"
            >
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-honeygold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-wood">{v.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Produktvorschau */}
      <div className="mt-16">
        <ProductsPreview />
      </div>
    </Section>
  )
}
