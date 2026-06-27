# Imkerei Coenen – Webseiten-Grundgerüst

Modernes, responsives One-Page-Grundgerüst für eine kleine, regionale Imkerei aus
Niedersachsen (Raum Diepholz). Die Seite dient als digitales Aushängeschild, baut
Vertrauen auf, erklärt die naturnahe Arbeitsweise und bereitet den späteren
Honigverkauf vor.

## Tech-Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (eigene Naturpalette und Font-Tokens)
- **Framer Motion** für dezente, `prefers-reduced-motion`-sichere Animationen
- **lucide-react** für Icons
- Schriften: Cormorant Garamond (Headings) + Inter (Fließtext) via Google Fonts

## Entwicklung

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server (http://localhost:5173)
npm run build    # Produktionsbuild (TypeScript-Check + Vite)
npm run preview  # Build lokal ansehen
```

## Struktur

```
src/
  data/content.ts          Zentrale Texte & Platzhalter (eine Quelle der Wahrheit)
  hooks/useReducedMotion.ts
  components/
    Header, Hero, ValueProposition, TrustCards, AboutApiary,
    HoneyQuality, ProductsPreview, PollinationSection, BeeYearTimeline,
    ScienceSection, ProcessSection, RegionalNatureSection,
    ContactSection, Footer
    Section, Reveal, PollenField, icons   (Hilfs-/Deko-Komponenten)
```

## Inhalte pflegen

Sämtliche Texte, Sorten, Eckdaten und Kontaktangaben liegen in
`src/data/content.ts`. Änderungen dort wirken sich automatisch auf alle
Komponenten aus.

## Platzhalter (vor Livegang ersetzen)

- Eckdaten der Imkerei: Standort/Ort, Anzahl Bienenvölker, Beutensystem,
  Imkername (`about.facts` in `content.ts`)
- Kontaktdaten: E-Mail, Telefon, Ort (`contact.card`)
- Rechtliche Pflichtseiten: Impressum, Datenschutz, Lebensmittelkennzeichnung
  (Footer – aktuell als Platzhalter markiert)
- Quellenangaben in der Wissens-Sektion konkretisieren
- Bilder: echte Imkereifotos sind in Hero, Imkerei, Prozess und Bestäubung
  eingebunden (`src/assets/`). Weitere Bereiche (Produkte, Region) nutzen noch
  stilisierte Platzhalter und können bei Bedarf mit Fotos ergänzt werden.

## Bilder aufbereiten

Originalfotos werden mit `sharp` web-optimiert (max. ~1800 px, JPEG):

```bash
SRC_DIR=/pfad/zu/originalen npm run optimize-images
```

Das Skript (`scripts/optimize-images.mjs`) schreibt nach `src/assets/`
(Inhaltsbilder) und `public/og-image.jpg` (Vorschaubild für Social Media).

## Wichtige inhaltliche Leitplanken

Die Texte sind bewusst **ohne medizinische Heilversprechen** formuliert.
Bestäubungs-Aussagen sind differenziert gehalten (keine pauschalen
„95 %"-Behauptungen). „Bio"/„DIB" werden nicht verwendet, solange keine
Zertifizierung vorliegt. Es werden keine echten Preise genannt.

## Sinnvolle nächste Schritte

1. Echte Bilder und Logo einbinden
2. Kontaktformular an ein Backend / einen Mailservice anbinden
3. Geprüfte Rechtstexte (Impressum, Datenschutz) ergänzen
4. Optional: kleiner Shop oder Bestellsystem
5. Echte Eckdaten und Quellen eintragen
