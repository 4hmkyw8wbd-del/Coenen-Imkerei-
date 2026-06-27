import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { hero } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useReducedMotion'
import PollenField from './PollenField'
import honeycombFrame from '../assets/honeycomb-frame.jpg'

/**
 * Hero-Sektion mit warmem Naturverlauf, halbtransparenten Hexagon-Elementen,
 * einer dezent animierten Bienenfluglinie und Premium-Badges.
 * Parallax und Bewegung werden bei prefers-reduced-motion deaktiviert.
 */
export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const { scrollY } = useScroll()
  const yArt = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 90])
  const yText = useTransform(scrollY, [0, 500], [0, reduced ? 0 : -30])

  return (
    <section id="start" className="relative overflow-hidden warm-gradient">
      {/* Dekorative Ebenen */}
      <div aria-hidden="true" className="absolute inset-0 honeycomb-bg opacity-50" />
      <HexagonField yArt={yArt} reduced={reduced} />
      <PollenField count={16} />

      <div className="container-page relative grid min-h-[88vh] items-center gap-12 py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: yText }} className="max-w-2xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {hero.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-wood/15 bg-white/60 px-3 py-1 text-xs font-semibold text-wood backdrop-blur-sm"
              >
                <Check className="h-3.5 w-3.5 text-honeygold" />
                {b}
              </span>
            ))}
          </div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl font-semibold leading-[1.08] text-forest sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <p className="mt-6 text-lg font-medium text-wood sm:text-xl">{hero.subheadline}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">{hero.body}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="btn-primary">
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#imkerei" className="btn-secondary">
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        {/* Echtes Fokusbild: sonnenbeschienene Wabe voller Bienen */}
        <motion.div style={{ y: yArt }} className="relative hidden lg:block">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/50 shadow-lift">
            <img
              src={honeycombFrame}
              alt="Sonnenbeschienene Honigwabe mit Bienen aus einem unserer Völker"
              width={1800}
              height={1350}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-full bg-natural/90 px-3.5 py-1.5 text-xs font-semibold text-forest shadow-soft">
              Aus unseren Völkern
            </span>
          </div>
        </motion.div>
      </div>

      <BeeFlightLine reduced={reduced} />
    </section>
  )
}

function HexagonField({ yArt, reduced }: { yArt: MotionValue<number>; reduced: boolean }) {
  return (
    <motion.div aria-hidden="true" style={{ y: reduced ? 0 : yArt }} className="absolute inset-0">
      <svg className="absolute right-[6%] top-[12%] h-40 w-40 text-honeygold/20" viewBox="0 0 100 100">
        <polygon points="50,3 95,27 95,73 50,97 5,73 5,27" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute left-[4%] bottom-[18%] h-24 w-24 text-wood/15" viewBox="0 0 100 100">
        <polygon points="50,3 95,27 95,73 50,97 5,73 5,27" fill="currentColor" />
      </svg>
      <svg className="absolute left-[40%] top-[8%] h-16 w-16 text-forest/10" viewBox="0 0 100 100">
        <polygon points="50,3 95,27 95,73 50,97 5,73 5,27" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    </motion.div>
  )
}

/** Dezent animierte Bienenfluglinie als gestrichelter Pfad. */
function BeeFlightLine({ reduced }: { reduced: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1200 600"
    >
      <motion.path
        d="M-20 120 C 200 40, 380 220, 600 140 S 980 40, 1220 180"
        fill="none"
        stroke="#7A4E18"
        strokeOpacity="0.28"
        strokeWidth="1.5"
        strokeDasharray="2 9"
        initial={reduced ? false : { pathLength: 0 }}
        animate={reduced ? {} : { pathLength: 1 }}
        transition={{ duration: 2.4, ease: 'easeInOut' }}
      />
    </svg>
  )
}
