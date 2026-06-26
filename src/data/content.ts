/**
 * Zentrale Inhalts- und Platzhalterdatei der Imkerei-Coenen-Webseite.
 *
 * Alle redaktionellen Texte, Eckdaten und Platzhalter liegen hier an einer
 * Stelle, damit Inhalte ohne Eingriff in die Komponenten gepflegt und die
 * Seite spaeter leicht erweitert werden kann (Shop, Formular-Backend usw.).
 *
 * Platzhalter sind bewusst in eckigen Klammern oder als Beispielwerte
 * gehalten und muessen vor dem Livegang durch echte Angaben ersetzt werden.
 */

export const brand = {
  name: 'Imkerei Coenen',
  subline: 'Regionaler Honig aus sorgfältiger Bienenhaltung',
  region: 'Niedersachsen', // Raum Diepholz / Vechta / Aschen
  ctaPrimary: 'Honig anfragen',
}

export type NavItem = { label: string; href: string }

export const nav: NavItem[] = [
  { label: 'Start', href: '#start' },
  { label: 'Imkerei', href: '#imkerei' },
  { label: 'Honig', href: '#honig' },
  { label: 'Bestäubung', href: '#bestaeubung' },
  { label: 'Bienenjahr', href: '#bienenjahr' },
  { label: 'Wissenschaft', href: '#wissenschaft' },
  { label: 'Kontakt', href: '#kontakt' },
]

export const hero = {
  badges: ['regional', 'naturbelassen', 'schonend verarbeitet', 'ohne Zusätze'],
  headline: 'Naturbelassener Honig aus regionaler Bienenhaltung',
  subheadline:
    'Sorgfältig geerntet, schonend verarbeitet und geprägt von den Blüten unserer Landschaft.',
  body:
    'Unsere kleine Imkerei arbeitet im Rhythmus der Natur: mit gesunden Bienenvölkern, regionaler Blütenvielfalt und einem klaren Anspruch an Qualität, Transparenz und Verantwortung.',
  ctaPrimary: 'Honig anfragen',
  ctaSecondary: 'Mehr über unsere Bienen erfahren',
}

export type Value = { title: string; text: string; icon: string }

export const values: Value[] = [
  {
    title: 'Naturbelassen',
    text:
      'Unser Honig bleibt das, was er ist: ein von Bienen erzeugtes Naturprodukt. Ohne künstliche Zusätze und ohne unnötige Verarbeitung.',
    icon: 'Leaf',
  },
  {
    title: 'Regional',
    text:
      'Die Tracht stammt aus der Umgebung: Wiesen, Gärten, Obstblüten, Hecken, Linden und landwirtschaftlich geprägte Landschaften.',
    icon: 'MapPin',
  },
  {
    title: 'Sorgfältig verarbeitet',
    text:
      'Von der Entnahme der Waben bis zum Abfüllen steht eine ruhige, saubere und schonende Arbeitsweise im Mittelpunkt.',
    icon: 'Droplet',
  },
  {
    title: 'Verantwortungsvoll geimkert',
    text:
      'Im Zentrum steht nicht maximale Ausbeute, sondern das Zusammenspiel aus Bienengesundheit, Naturnähe und Qualität.',
    icon: 'HeartHandshake',
  },
]

export const about = {
  eyebrow: 'Über die Imkerei',
  title: 'Klein, persönlich und nah an der Natur',
  paragraphs: [
    'Unsere Imkerei ist klein, persönlich und nah an der Natur. Jedes Volk wird regelmäßig beobachtet, aber nicht unnötig gestört. Die Arbeit richtet sich nach Wetter, Blüte, Volksentwicklung und Jahreszeit.',
    'Gerade diese Nähe macht den Unterschied: Honig entsteht nicht industriell, sondern aus vielen kleinen Entscheidungen im Umgang mit den Bienen.',
    'Im Zentrum unserer Arbeit steht nicht die maximale Ernte, sondern das Gleichgewicht zwischen Bienengesundheit, Blütenvielfalt und sorgfältigem Handwerk. Jeder Honig erzählt von der Landschaft, aus der er stammt.',
  ],
  facts: [
    { label: 'Standort', value: '[Region / Ort einsetzen]' },
    { label: 'Bienenvölker', value: '[Anzahl einsetzen]' },
    { label: 'Beutensystem', value: '[z. B. Deutsch Normalmaß / Segeberger]' },
    { label: 'Honigsorten', value: '[Frühtracht, Sommertracht, Lindenhonig …]' },
    { label: 'Imker', value: '[Name einsetzen]' },
  ],
}

export const honeyQuality = {
  eyebrow: 'Honigqualität',
  title: 'Honigqualität beginnt lange vor dem Glas',
  intro:
    'Was später im Glas landet, entscheidet sich auf der Wiese, im Garten und an der Wabe. Wir achten auf jeden Schritt – von der Blüte bis zum Abfüllen.',
  points: [
    {
      title: 'Blütenvielfalt',
      text:
        'Honig spiegelt die Landschaft wider. Jede Ernte ist anders, weil Blüte, Wetter und Jahreszeit variieren.',
      icon: 'Flower2',
    },
    {
      title: 'Schonende Ernte',
      text:
        'Die Waben werden sorgfältig entnommen, geschleudert und der Honig anschließend behutsam weiterverarbeitet.',
      icon: 'Combine',
    },
    {
      title: 'Naturbelassenheit',
      text:
        'Honig ist ein Naturprodukt, dem grundsätzlich nichts hinzugefügt werden soll. Unser Anspruch ist, den Honig so unverfälscht wie möglich ins Glas zu bringen.',
      icon: 'Leaf',
    },
    {
      title: 'Transparenz',
      text:
        'Jede Charge soll perspektivisch mit Erntezeitpunkt, Sorte, Standortregion und kurzer Beschreibung versehen werden können.',
      icon: 'ScrollText',
    },
    {
      title: 'Sensorik',
      text:
        'Wir beschreiben Honig über Geschmack, Farbe, Konsistenz und Herkunft – nicht über unzulässige Heilversprechen.',
      icon: 'Sparkles',
    },
  ],
  varieties: [
    {
      name: 'Frühtracht',
      text: 'hell, mild, blumig, geprägt von Obstblüte, Löwenzahn und Frühjahrsblüten',
    },
    {
      name: 'Sommertracht',
      text: 'kräftiger, aromatischer, oft mit Noten von Linde, Wiese und Kräutern',
    },
    {
      name: 'Lindenhonig',
      text: 'frisch, leicht mentholartig, markant und intensiv',
    },
    {
      name: 'Wald- / Honigtauhonig',
      text: 'dunkler, malziger, würziger, mineralischer',
    },
  ],
}

export type Product = {
  name: string
  sizes: string
  description: string
  cta: string
}

export const products: Product[] = [
  {
    name: 'Frühtracht',
    sizes: '250 g / 500 g',
    description: 'Hell, mild und blumig – der Auftakt der Saison aus Obstblüte und Frühjahrsblüten.',
    cta: 'Verfügbarkeit anfragen',
  },
  {
    name: 'Sommertracht',
    sizes: '250 g / 500 g',
    description: 'Kräftiger und aromatischer, mit Noten von Linde, Wiese und Kräutern.',
    cta: 'Verfügbarkeit anfragen',
  },
  {
    name: 'Geschenkglas / Probierpaket',
    sizes: 'nach Verfügbarkeit',
    description: 'Eine kleine Auswahl zum Verschenken oder Probieren – ideal als Mitbringsel.',
    cta: 'Verfügbarkeit anfragen',
  },
]

export const microtrust = [
  'Solange der Vorrat reicht',
  'Jede Ernte ist anders',
  'Abholung nach Absprache',
  'Kleine Chargen statt Massenware',
  'Naturprodukt mit Herkunft',
]

export const pollination = {
  eyebrow: 'Bestäubungsleistung',
  title: 'Bienen leisten mehr als Honig',
  intro:
    'Honig ist nur ein sichtbarer Teil der Bienenleistung. Mindestens genauso wichtig ist die Bestäubung. Wenn Arbeiterinnen Blüten besuchen, sammeln sie Nektar und Pollen. Dabei übertragen sie Pollen von Blüte zu Blüte und ermöglichen so Fruchtbildung, Samenbildung und genetische Vielfalt vieler Pflanzen.',
  facts: [
    'Viele Kulturpflanzen profitieren von tierischer Bestäubung.',
    'Häufig genannt wird, dass etwa drei Viertel der wichtigsten Nahrungspflanzenarten zumindest teilweise von Bestäubern abhängen.',
    'Bezogen auf die weltweite Produktionsmenge wird oft ein Anteil von etwa 35 % genannt, der zumindest teilweise von tierischer Bestäubung beeinflusst wird.',
    'Die Honigbiene Apis mellifera ist eine besonders bedeutende, vom Menschen betreute Bestäuberart – sie ersetzt aber nicht die Vielfalt wildlebender Bestäuber.',
  ],
  conclusion:
    'Ohne Bestäuber würden Vielfalt, Erträge und Qualität vieler Obst-, Gemüse-, Nuss- und Samenpflanzen deutlich leiden.',
  steps: [
    { label: 'Blüte', text: 'Nektar und Pollen locken Bienen an.', icon: 'Flower2' },
    { label: 'Bestäubung', text: 'Pollen wird von Blüte zu Blüte übertragen.', icon: 'Bug' },
    { label: 'Frucht & Samen', text: 'Befruchtung ermöglicht Frucht- und Samenbildung.', icon: 'Apple' },
  ],
  terms: [
    { term: 'Nektar', text: 'Zuckerhaltiger Pflanzensaft – die Grundlage für Honig und ein Lockmittel für Bestäuber.' },
    { term: 'Pollen', text: 'Eiweißreiche Blütenpollen dienen als Nahrung und werden beim Sammeln übertragen.' },
    { term: 'Arbeiterin', text: 'Sammelbienen besuchen viele Blüten und übertragen dabei Pollen.' },
    { term: 'Fruchtbildung', text: 'Aus der bestäubten Blüte entstehen Frucht und Samen.' },
  ],
}

export type Season = {
  name: string
  text: string
  icon: string
}

export const beeYear: Season[] = [
  {
    name: 'Frühling',
    text:
      'Die Völker wachsen, erste Trachten beginnen, Obstblüte und Löwenzahn prägen die Landschaft. Jetzt entscheidet sich, wie stark ein Volk in die Saison startet.',
    icon: 'Sprout',
  },
  {
    name: 'Sommer',
    text:
      'Die Sammelleistung erreicht ihren Höhepunkt. Je nach Wetter, Tracht und Volksstärke entsteht Sommerhonig mit eigenem Charakter.',
    icon: 'Sun',
  },
  {
    name: 'Herbst',
    text:
      'Nach der Honigernte steht die Vorbereitung auf den Winter im Mittelpunkt: Futterversorgung, Gesundheitskontrolle und ruhige Einwinterung.',
    icon: 'Leaf',
  },
  {
    name: 'Winter',
    text:
      'Das Volk sitzt in der Wintertraube. Die Imkerei wird vorbereitet, Material gepflegt und das kommende Jahr geplant.',
    icon: 'Snowflake',
  },
]

export const process = {
  eyebrow: 'Vom Volk ins Glas',
  title: 'Ein ruhiger, sauberer Weg',
  steps: [
    { title: 'Beobachten', text: 'Regelmäßige, behutsame Kontrolle der Völker im Rhythmus der Jahreszeit.' },
    { title: 'Ernten', text: 'Reife Waben werden sorgfältig entnommen, sobald der Honig so weit ist.' },
    { title: 'Schleudern', text: 'Schonendes Schleudern und Sieben, ohne den Honig unnötig zu erhitzen.' },
    { title: 'Abfüllen', text: 'Behutsames Abfüllen in kleine Chargen – Naturprodukt mit Herkunft.' },
  ],
}

export const science = {
  eyebrow: 'Wissen & Verantwortung',
  title: 'Fundiert statt nur romantisch',
  intro:
    'Wir sprechen gern über Bienen – aber sachlich und nachvollziehbar. Hier finden Sie eine kurze, evidenzbasierte Einordnung.',
  items: [
    {
      title: 'Apis mellifera',
      text:
        'Apis mellifera ist die westliche Honigbiene und lebt als staatenbildendes Insekt in komplexen Kolonien mit klarer Arbeitsteilung.',
      icon: 'Bug',
    },
    {
      title: 'Arbeiterinnen',
      text:
        'Arbeiterinnen übernehmen je nach Alter unterschiedliche Aufgaben: Brutpflege, Wabenbau, Reinigung, Verteidigung und Sammelflug.',
      icon: 'Users',
    },
    {
      title: 'Honig als Naturprodukt',
      text:
        'Honig entsteht aus Nektar oder Honigtau, wird von Bienen verarbeitet, eingedickt und in Waben gelagert.',
      icon: 'Droplet',
    },
    {
      title: 'Bestäubung',
      text:
        'Die Bestäubung hat große ökologische und landwirtschaftliche Bedeutung für Vielfalt, Erträge und Qualität vieler Pflanzen.',
      icon: 'Flower2',
    },
    {
      title: 'Grenzen der Aussagekraft',
      text:
        'Wissenschaftliche Aussagen bleiben differenziert. Honig wird traditionell geschätzt, darf auf einer Verkaufsseite aber nicht als Heilmittel dargestellt werden.',
      icon: 'ShieldCheck',
    },
  ],
  sources:
    'Quellenhinweise: IPBES, FAO/USDA, Klein et al. 2007, EU-Honigrichtlinie, deutsche Honigverordnung, Health-Claims-Verordnung. (Platzhalter – vor Livegang prüfen und konkretisieren.)',
}

export const regionalNature = {
  eyebrow: 'Natur & Region',
  title: 'Honig aus einer Landschaft, nicht aus einer Fabrik',
  text:
    'Regionaler Honig ist immer auch ein Abdruck seiner Umgebung. Wiesen, Gärten, Hecken, Obstbäume, Linden, Feldränder und Blühflächen prägen, was die Bienen sammeln und was später im Glas landet. Dadurch entsteht kein standardisiertes Massenprodukt, sondern ein Lebensmittel mit Herkunft, Jahreszeit und Charakter.',
  cards: [
    { title: 'Blühende Gärten', text: 'Vielfältige Garten- und Zierpflanzen liefern über die Saison verteilt Nektar und Pollen.', icon: 'Flower' },
    { title: 'Obst- und Wiesenlandschaft', text: 'Obstblüte und artenreiche Wiesen prägen die hellen, milden Frühtrachten.', icon: 'Trees' },
    { title: 'Hecken, Linden und Feldränder', text: 'Linden, Hecken und Feldränder geben dem Sommerhonig seinen kräftigen Charakter.', icon: 'Wheat' },
  ],
}

export const contact = {
  eyebrow: 'Honig anfragen',
  title: 'Honig anfragen',
  text:
    'Da Honig ein saisonales Naturprodukt ist, hängt die Verfügbarkeit von Ernte, Sorte und Jahr ab. Schreiben Sie uns gerne eine kurze Nachricht, wenn Sie Interesse an einem Glas, einem Geschenkpaket oder einer bestimmten Sorte haben.',
  formNote:
    'Dieses Formular ist zunächst als visuelles Grundgerüst angelegt. Die technische Versandfunktion kann später integriert werden.',
  cta: 'Anfrage vorbereiten',
  card: {
    email: 'honig@beispiel-imkerei.de',
    phone: '0123 456789',
    place: '[Ort / Region einsetzen]',
    pickup: 'Abholung nach Absprache',
  },
  products: ['Frühtracht', 'Sommertracht', 'Lindenhonig', 'Geschenkglas / Probierpaket', 'Noch unsicher'],
}

export const footer = {
  about:
    'Kleine regionale Imkerei aus Niedersachsen. Naturbelassener Honig, sorgfältige Bienenhaltung und transparente Verarbeitung.',
  legal: [
    { label: 'Impressum', note: 'Platzhalter' },
    { label: 'Datenschutz', note: 'Platzhalter' },
    { label: 'Lebensmittelkennzeichnung', note: 'Platzhalter' },
    { label: 'Kontakt', note: '' },
  ],
  disclaimer:
    'Hinweis: Diese Seite ist ein gestalterisches Grundgerüst. Rechtliche Pflichtangaben (Impressum, Datenschutz, Lebensmittelkennzeichnung) sind Platzhalter und vor einer Veröffentlichung durch geprüfte Angaben zu ersetzen.',
}
