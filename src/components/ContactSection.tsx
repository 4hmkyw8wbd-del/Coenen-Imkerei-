import { type FormEvent, useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Info } from 'lucide-react'
import Section, { SectionHeader } from './Section'
import Reveal from './Reveal'
import { contact } from '../data/content'

/**
 * Anfragebereich mit Frontend-Dummy-Formular und Kontaktkarte.
 * Es findet kein echter Versand statt – das Formular ist ein visuelles
 * Grundgeruest und zeigt nach dem Absenden nur eine Bestaetigungsnotiz.
 */
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Dummy: kein echter Versand, nur visuelle Rueckmeldung.
    setSubmitted(true)
  }

  return (
    <Section id="kontakt" aria-label="Honig anfragen" className="bg-forest text-natural">
      <SectionHeader eyebrow={contact.eyebrow} title={contact.title} />
      <Reveal className="mx-auto mt-5 max-w-2xl text-center">
        <p className="text-base leading-relaxed text-natural/80">{contact.text}</p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Formular */}
        <Reveal className="rounded-3xl bg-natural p-7 text-ink shadow-lift sm:p-8">
          {submitted ? (
            <div role="status" className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-honeygold/15 text-honeygold">
                <Send className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-semibold text-forest">Vielen Dank für Ihr Interesse</h3>
              <p className="mt-2 max-w-sm text-sm text-ink/70">
                Dies ist ein gestalterisches Grundgerüst – es wurde noch keine Nachricht versendet. Die technische
                Versandfunktion kann später ergänzt werden.
              </p>
              <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary mt-6">
                Eingaben zurücksetzen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" id="name" autoComplete="name" />
                <Field label="E-Mail" id="email" type="email" autoComplete="email" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="product" className="mb-1.5 block text-sm font-medium text-forest">
                    Gewünschtes Produkt
                  </label>
                  <select id="product" name="product" className="field">
                    {contact.products.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <Field label="Menge" id="amount" placeholder="z. B. 2 Gläser" />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-forest">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Ihre Nachricht an uns"
                  className="field resize-y"
                />
              </div>

              <div className="flex items-start gap-2 rounded-lg bg-honeycream/50 p-3 text-xs leading-relaxed text-wood">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <p>{contact.formNote}</p>
              </div>

              <button type="submit" className="btn-primary w-full">
                {contact.cta}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>

        {/* Kontaktkarte */}
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="rounded-3xl border border-natural/15 bg-natural/5 p-7">
            <h3 className="font-display text-xl font-semibold">Direkt erreichen</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <ContactRow Icon={Mail} label="E-Mail">
                <a href={`mailto:${contact.card.email}`} className="hover:text-honeygold">
                  {contact.card.email}
                </a>
              </ContactRow>
              <ContactRow Icon={Phone} label="Telefon">
                <a href={`tel:${contact.card.phone.replace(/\s/g, '')}`} className="hover:text-honeygold">
                  {contact.card.phone}
                </a>
              </ContactRow>
              <ContactRow Icon={MapPin} label="Ort">
                {contact.card.place}
              </ContactRow>
              <ContactRow Icon={Clock} label="Abholung">
                {contact.card.pickup}
              </ContactRow>
            </ul>
          </div>
          <p className="rounded-2xl bg-honeygold/10 p-4 text-xs leading-relaxed text-honeycream">
            Kontaktdaten sind Platzhalter und vor dem Livegang durch echte Angaben zu ersetzen.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  ...rest
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-forest">
        {label}
      </label>
      <input id={id} name={id} type={type} className="field" {...rest} />
    </div>
  )
}

function ContactRow({
  Icon,
  label,
  children,
}: {
  Icon: typeof Mail
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-honeygold/15 text-honeygold">
        <Icon className="h-4 w-4" />
      </span>
      <span className="flex flex-col">
        <span className="text-xs uppercase tracking-wider text-natural/50">{label}</span>
        <span className="text-natural/90">{children}</span>
      </span>
    </li>
  )
}
