import { Hexagon } from 'lucide-react'
import { brand, nav, footer } from '../data/content'

/** Footer mit Navigation, klar gekennzeichneten Rechts-Platzhaltern und Hinweis. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-wood/10 bg-ink text-natural/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-honeygold/15 text-honeygold">
              <Hexagon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg font-semibold text-natural">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-natural/60">{footer.about}</p>
        </div>

        <nav aria-label="Footer-Navigation">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-honeygold">Seiten</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-natural/70 transition-colors hover:text-honeygold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-honeygold">Rechtliches</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a href="#" className="text-natural/70 transition-colors hover:text-honeygold">
                  {item.label}
                  {item.note && (
                    <span className="ml-2 rounded bg-natural/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-natural/50">
                      {item.note}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-natural/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-natural/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {brand.name}. Alle Rechte vorbehalten.</p>
          <p className="max-w-2xl md:text-right">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
