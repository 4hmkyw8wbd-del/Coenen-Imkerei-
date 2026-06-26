import Section, { SectionHeader } from './Section'
import TrustCards from './TrustCards'
import { values } from '../data/content'
import { getIcon } from './icons'

/** Werteversprechen als vier hochwertige Karten. */
export default function ValueProposition() {
  const cards = values.map((v) => ({ title: v.title, text: v.text, Icon: getIcon(v.icon) }))

  return (
    <Section id="werte" aria-label="Werteversprechen" className="bg-natural">
      <SectionHeader
        eyebrow="Unser Anspruch"
        title="Was unseren Honig ausmacht"
        intro="Vier Grundsätze prägen unsere Arbeit – von der Wiese bis ins Glas."
      />
      <div className="mt-12">
        <TrustCards cards={cards} columns={4} />
      </div>
    </Section>
  )
}
