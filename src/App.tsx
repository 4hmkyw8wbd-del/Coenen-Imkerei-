import Header from './components/Header'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import AboutApiary from './components/AboutApiary'
import HoneyQuality from './components/HoneyQuality'
import ProcessSection from './components/ProcessSection'
import PollinationSection from './components/PollinationSection'
import BeeYearTimeline from './components/BeeYearTimeline'
import ScienceSection from './components/ScienceSection'
import RegionalNatureSection from './components/RegionalNatureSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

/**
 * One-Page-Aufbau der Imkerei-Coenen-Webseite. Die Reihenfolge fuehrt von
 * Vertrauensaufbau (Werte, Imkerei) ueber Produkt/Qualitaet, Wissen und
 * Region hin zum Anfragebereich.
 */
export default function App() {
  return (
    <>
      <a
        href="#start"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-honeygold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <AboutApiary />
        <HoneyQuality />
        <ProcessSection />
        <PollinationSection />
        <BeeYearTimeline />
        <ScienceSection />
        <RegionalNatureSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
