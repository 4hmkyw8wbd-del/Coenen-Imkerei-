import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { products, microtrust } from '../data/content'

/**
 * Drei Produktkarten als Vorschau. Noch kein echter Shop und keine Preise –
 * die CTA fuehrt zur Anfrage ueber den Kontaktbereich.
 */
export default function ProductsPreview() {
  return (
    <div>
      <h3 className="text-center font-display text-2xl font-semibold text-forest">Unsere Gläser im Überblick</h3>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink/60">
        Verfügbarkeit und Sorten wechseln mit der Saison. Bei Interesse einfach kurz anfragen.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((p, i) => (
          <Reveal as="article" key={p.name} delay={i * 0.1} className="card flex flex-col hover:-translate-y-1.5 hover:shadow-lift">
            {/* Glas-Platzhalter */}
            <div
              role="img"
              aria-label={`${p.name} – Produktbild (Platzhalter)`}
              className="relative mb-5 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-honeycream to-honeygold/60"
            >
              <div className="absolute inset-0 honeycomb-bg opacity-30" />
              <div className="relative h-24 w-20 rounded-lg bg-gradient-to-b from-honeygold to-wood/80 shadow-soft">
                <span className="absolute inset-x-2 top-2 h-1.5 rounded-full bg-wood/70" />
              </div>
            </div>

            <h4 className="text-xl font-semibold text-forest">{p.name}</h4>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-honeygold">{p.sizes}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.description}</p>

            <a href="#kontakt" className="btn-secondary mt-5 w-full">
              {p.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        ))}
      </div>

      {/* Vertrauens-Mikrotexte */}
      <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-wood/80">
        {microtrust.map((m) => (
          <li key={m} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-honeygold" aria-hidden="true" />
            {m}
          </li>
        ))}
      </ul>
    </div>
  )
}
