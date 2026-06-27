import Section from './Section'
import Reveal from './Reveal'
import { about } from '../data/content'
import beesOnComb from '../assets/bees-on-comb.jpg'

/** Sektion "Über die Imkerei" mit ruhiger Bild-/Text-Komposition und Eckdaten. */
export default function AboutApiary() {
  return (
    <Section id="imkerei" aria-label="Über die Imkerei" className="bg-natural">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Echtes Bild aus dem Bienenvolk */}
        <Reveal className="order-last lg:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-wood/10 shadow-lift">
            <img
              src={beesOnComb}
              alt="Dicht von Bienen besetzte Wabe bei der Durchsicht eines Volkes"
              width={1024}
              height={1800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full bg-natural/90 px-4 py-1.5 text-xs font-medium text-forest shadow-soft">
              Durchsicht im Bienenvolk
            </span>
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
