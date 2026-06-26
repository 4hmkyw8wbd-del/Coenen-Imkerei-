import Section from './Section'
import Reveal from './Reveal'
import { about } from '../data/content'

/** Sektion "Über die Imkerei" mit ruhiger Bild-/Text-Komposition und Eckdaten. */
export default function AboutApiary() {
  return (
    <Section id="imkerei" aria-label="Über die Imkerei" className="bg-natural">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Bildplatzhalter */}
        <Reveal className="order-last lg:order-first">
          <div
            role="img"
            aria-label="Ruhige Naturaufnahme der Imkerei mit Bienenstöcken auf einer Wiese (Bildplatzhalter)"
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-wood/10 bg-gradient-to-br from-forest/90 to-forest shadow-lift"
          >
            <div className="absolute inset-0 honeycomb-bg opacity-30" />
            <div className="absolute inset-0 flex items-end p-6">
              <span className="rounded-full bg-natural/90 px-4 py-2 text-xs font-medium text-forest">
                Bildplatzhalter · ruhige Naturaufnahme
              </span>
            </div>
            {/* angedeutete Beuten */}
            <div className="absolute bottom-1/3 left-8 h-16 w-12 rounded-md bg-honeycream/80" />
            <div className="absolute bottom-1/3 left-24 h-20 w-12 rounded-md bg-honeygold/70" />
            <div className="absolute bottom-1/3 right-12 h-14 w-12 rounded-md bg-wood/60" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-3">{about.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight text-forest sm:text-4xl">{about.title}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/75">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-wood/10 pt-6 sm:grid-cols-2">
              {about.facts.map((f) => (
                <div key={f.label} className="flex flex-col">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-honeygold">{f.label}</dt>
                  <dd className="mt-1 text-sm text-ink/80">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
