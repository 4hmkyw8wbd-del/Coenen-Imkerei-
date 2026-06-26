import { useEffect, useState } from 'react'
import { Menu, X, Hexagon } from 'lucide-react'
import { brand, nav } from '../data/content'

/**
 * Sticky-Header, der beim Scrollen von transparent auf hochwertig-solide
 * wechselt. Mit zugaenglichem, per Tastatur bedienbarem Mobile-Menue.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Schliessen mit Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-wood/10 bg-natural/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between py-3.5">
        <a href="#start" className="group flex items-center gap-2.5" aria-label={`${brand.name} – zur Startseite`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honeygold/15 text-honeygold transition-colors group-hover:bg-honeygold/25">
            <Hexagon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold text-forest">{brand.name}</span>
            <span className="mt-0.5 hidden text-[11px] text-ink/60 sm:block">{brand.subline}</span>
          </span>
        </a>

        {/* Desktop-Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-honeygold"
            >
              {item.label}
            </a>
          ))}
          <a href="#kontakt" className="btn-primary">
            {brand.ctaPrimary}
          </a>
        </nav>

        {/* Mobile-Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-forest/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile-Navigation */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation mobil"
          className="border-t border-wood/10 bg-natural/98 backdrop-blur-md lg:hidden"
        >
          <ul className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-ink/80 hover:bg-forest/5 hover:text-honeygold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary w-full">
                {brand.ctaPrimary}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
