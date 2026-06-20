import type { CampsiteConfig } from "../types";

/**
 * Wildcamping Kleinwalsertal — autofreier Waldzeltplatz im Wildental an der Breitach.
 * Inhalte zu 100 % aus raw/digest abgeleitet. Bilder: einmalig, motivtreu, vom Platz.
 * Kein `theme`-Feld (Original-Palette), heroVariant immer "center".
 */
const IMG = "/campsites/wildcamping-kwt";

const wildcampingKwt: CampsiteConfig = {
  name: "Wildcamping Kleinwalsertal",
  shortName: "Wildcamping",
  slug: "wildcamping-kwt",
  ort: "Mittelberg im Wildental",
  region: "Vorarlberg",
  brandKind: "Wildcamping",
  regionLong: "Wildental · Kleinwalsertal · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Echtes Wildcampen im Wald an der Breitach",
  claimEmphasis: "an der Breitach",
  emailDetail: "euer Service, Gäste am Parkplatz abzuholen und in den Wald zu begleiten",
  intro:
    "Seit 2020 betreiben Bine und Ronny einen kleinen Waldzeltplatz im Wildental — direkt an der Breitach, autofrei und nur zu Fuß erreichbar. Acht Zeltplätze, ein Glampingzelt und viel ursprüngliche Natur.",

  logo: { src: `${IMG}/logo.png`, alt: "Wildcamping Kleinwalsertal Logo" },

  statement: {
    text: "Keine Fahrzeuge, kein Trubel — nur Wald, Lagerfeuer und das Rauschen der Breitach.",
    emphasis: "das Rauschen der Breitach",
  },

  pillars: [
    {
      title: "Zelten mitten im Wald",
      text: "Acht naturbelassene Plätze auf einem Hektar Wald — dein Zelt steht zwischen Bäumen direkt am Bach.",
      image: { src: `${IMG}/tent-canvas.webp`, alt: "Zelt im sonnigen Wald des Wildcamping Kleinwalsertal" },
    },
    {
      title: "Wildnis mit Ronny",
      text: "Ronnys Wildnisschule bietet Einsteigerkurse: Feuer machen, Tarp spannen, Knoten und Bogenschießen.",
      image: { src: `${IMG}/burmi-kids.webp`, alt: "Tarp und Hängematte beim Bushcraft im Wald" },
    },
    {
      title: "Weniger ist mehr",
      text: "Kein Auto, kein WLAN-Stress — dafür Hängematte, Lagerfeuer und Sterne über dem Vorzelt.",
      image: { src: `${IMG}/hammock.webp`, alt: "Hängematte zwischen Bäumen im Waldzeltplatz" },
    },
  ],

  usps: [
    "Nur Zelte, keine Fahrzeuge",
    "Direkt an der Breitach",
    "Hunde willkommen",
    "Bushcraft-Kurse vor Ort",
    "Wald-Glamping",
    "Lagerfeuerküche",
  ],

  trust: {
    heading: "Warum Wildcampen hier anders ist",
    headingEmphasis: "anders",
    intro:
      "Acht Zeltplätze, ein Glampingzelt, kein Auto und kein WLAN-Stress — dafür Lagerfeuer, der Bach vor der Tür und zwei Gastgeber, die mit ihren Hunden Piwo und Loui mitten im Wald leben.",
  },

  awards: [],

  saison: { von: "Juni", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero.webp`, alt: "Die Breitach am Wildcamping Kleinwalsertal im Wildental" },
  },

  camping: {
    heading: "Schlafen im Wildcamp",
    intro:
      "Zwei Arten, im Wald zu übernachten — dein eigenes Zelt auf einem von acht Plätzen oder unser fertig eingerichtetes Glampingzelt mit echtem Bett.",
    features: [
      {
        title: "Acht Zeltplätze im Wald",
        text: "Stell dein Zelt auf einem Hektar Wald auf — naturbelassen, ruhig und direkt am Gebirgsbach.",
        image: { src: `${IMG}/tent-forest.webp`, alt: "Zelt auf einem Waldplatz am Gebirgsbach" },
      },
      {
        title: "Wald-Glampingzelt",
        text: "Lieber Komfort? Unser Baumwollzelt mit Bett, Matratze und eigener überdachter Terrasse für bis zu fünf Personen.",
        image: { src: `${IMG}/glamping.webp`, alt: "Eingerichtetes Glampingzelt mit Bett und überdachter Terrasse" },
      },
    ],
  },

  galerie: {
    heading: "Bushcraft, Burmi & Lagerfeuer",
    headingEmphasis: "Burmi",
    intro:
      "Vom Feuermachen bis zum Burmitreff für Kinder — ein paar Eindrücke aus dem Leben in unserem Waldcamp.",
    tag: "Juni bis September",
    images: [
      { src: `${IMG}/bushcraft-tarp.webp`, alt: "Burmitreff: Maskottchen Burmi und Kinder am Lagerplatz" },
      { src: `${IMG}/burmi-owners.webp`, alt: "Bine und Ronny mit Maskottchen Burmi im Wald" },
      { src: `${IMG}/fire.webp`, alt: "Feuer machen lernen im Bushcraft-Kurs" },
      { src: `${IMG}/archery.webp`, alt: "Bogenschießen mit Ronnys Wildnisschule" },
    ],
  },

  anreise: {
    heading: "Den letzten Weg zu Fuß",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über Oberstdorf und die Walserstraße ins Kleinwalsertal bis ins Wildental — am kostenpflichtigen Parkplatz endet die Autofahrt.",
      },
      {
        title: "Zu Fuß ins Camp",
        text: "Vom Parkplatz holen wir dich ab und tragen gemeinsam das Gepäck rund 600 m in den Wald.",
      },
      {
        title: "Mit dem Bus",
        text: "Die Bushaltestelle Abzweig Schwendle liegt fußläufig — Busfahren im Tal ist in der Kurtaxe inklusive.",
      },
    ],
  },

  booking: {
    heading: "Bereit für eine Nacht im Wald?",
    headingEmphasis: "im Wald",
    intro: "Sag uns Zeitraum, Personenzahl und Zeltgröße — Bine und Ronny melden sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Zeltplatz je Person/Nacht zzgl. 10 € Zeltplatzgebühr — ab 4 Nächten günstiger. Glamping ab 55 €/Nacht für 2 Personen bei längerem Aufenthalt. Zzgl. 4,40 € Kurtaxe/Person ab 14 J. · nur Barzahlung vor Ort.",
    highlight: {
      title: "Autofrei & ursprünglich",
      text: "Wir holen dich am Parkplatz ab — die letzten 600 m in den Wald geht es zu Fuß.",
    },
    categories: [
      { id: "zelt", label: "Zeltplatz", perNight: 50, perExtraGuest: 20 },
      { id: "glamping", label: "Wald Glamping", perNight: 100, perExtraGuest: 15 },
    ],
  },

  kontakt: {
    tel: "+43 676 7586262",
    telHref: "tel:+436767586262",
    mail: "wildcamping-kwt@gmx.at",
    adresse: "Wildentalstraße · 6993 Mittelberg · Vorarlberg",
    coords: { lat: 47.321029, lng: 10.1615905, approx: true },
  },

  languages: ["DE"],

  nav: [
    { label: "Camp", href: "#camping", children: [
      { label: "Zeltplatz", href: "#camping" },
      { label: "Glamping", href: "#camping" },
    ]},
    { label: "Eindrücke", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default wildcampingKwt;
