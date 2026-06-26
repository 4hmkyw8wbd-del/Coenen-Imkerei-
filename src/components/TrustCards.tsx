import { type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

export type TrustCard = {
  title: string
  text: string
  Icon: LucideIcon
}

type TrustCardsProps = {
  cards: TrustCard[]
  columns?: 2 | 3 | 4
}

const colClass: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

/**
 * Wiederverwendbares Karten-Raster mit Icon, Titel und Text.
 * Sanfter Lift-Effekt beim Hover.
 */
export default function TrustCards({ cards, columns = 4 }: TrustCardsProps) {
  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass[columns]}`}>
      {cards.map((card, i) => (
        <Reveal as="article" key={card.title} delay={i * 0.08} className="card group hover:-translate-y-1 hover:shadow-lift">
          <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-honeygold/12 text-honeygold transition-colors group-hover:bg-honeygold/20">
            <card.Icon className="h-6 w-6" strokeWidth={1.75} />
          </span>
          <h3 className="text-xl font-semibold text-forest">{card.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{card.text}</p>
        </Reveal>
      ))}
    </div>
  )
}
