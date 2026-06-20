import type { CampsiteConfig } from "../types";

/**
 * Wildcamping Kleinwalsertal — Waldzeltplatz im Wildental (Gemeinde Mittelberg).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Du-Anrede. Bilder provenance-gebunden.
 * Kein `theme` (Original-Palette), heroVariant "center".
 */
const IMG = "/campsites/wildcamping-kwt";

const wildcampingKwt: CampsiteConfig = {
  name: "Wildcamping Kleinwalsertal",
  shortName: "Wildcamping",
  slug: "wildcamping-kwt",
  ort: "Mittelberg",
  region: "Kleinwalsertal",
  brandKind: "Naturzeltplatz im Wald",
  regionLong: "Kleinwalsertal · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Mutter Natur als Gastgeber",
  claimEmphasis: "Mutter Natur",
  emailDetail: "euer Waldzeltplatz direkt an der Breitach",

  intro:
    "Seit 2020 betreiben wir unseren Waldzeltplatz im Wildental — acht Zeltplätze und ein Glampingzelt auf einem Hektar Wald, direkt an der rauschenden Breitach. Keine Fahrzeuge, kein Lärm: nur du, dein Zelt und die Natur.",

  logo: { src: `${IMG}/logo-8e625106bb.png`, alt: "Wildcamping Kleinwalsertal Logo" },

  statement: {
    text: "Was du brauchst, trägst du 600 Meter zu Fuß in den Wald — alles andere ist hier ohnehin zu viel.",
    emphasis: "600 Meter zu Fuß",
  },

  pillars: [
    {
      title: "Zeltplatz im Wald",
      text: "Stell dein Zelt auf unserem ein Hektar großen Waldgrundstück auf — acht Plätze, mehr nicht.",
      image: { src: `${IMG}/gallery-97fb885748.webp`, alt: "Zelt im sonnigen Wald des Wildcamping Kleinwalsertal" },
    },
    {
      title: "Bushcraft-Lager",
      text: "Der separate Gruppenplatz mit eigener überdachter Feuerstelle — Platz für 15 bis 20 Leute.",
      image: { src: `${IMG}/gallery-84d55c7898.webp`, alt: "Erwachsene bauen ein Tarp im Bushcraft-Kurs im Wald" },
    },
    {
      title: "Wald-Glamping",
      text: "Lieber ein Bett mit Matratze und Stehhöhe? Unser Baumwollzelt verbindet Komfort und Wildnis.",
      image: { src: `${IMG}/accommodation-ff24b2d30c.webp`, alt: "Eingerichtetes Glampingzelt mit überdachter Terrasse im Wald" },
    },
  ],

  usps: [
    "Nur Zelte, keine Fahrzeuge",
    "Direkt an der Breitach",
    "Hunde herzlich willkommen",
    "Bushcraft-Schule vor Ort",
    "Gemeinschaftsküche & Feuer",
    "Naturwellness-Pool",
  ],

  trust: {
    heading: "Echtes Wildcamping, ganz ohne schlechtes Gewissen",
    headingEmphasis: "ohne schlechtes Gewissen",
    intro:
      "Du willst das Gefühl von Wildcampen, aber legal? Bei uns stellst du dein Zelt mitten in den Wald an der Breitach — mit Respekt vor der Natur, überdachter Feuerküche und zwei Hunden, die dich begrüßen.",
  },

  awards: [],

  saison: { von: "Juni", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/gallery-7234342861.webp`, alt: "Gebirgsbach Breitach im Wald beim Wildcamping Kleinwalsertal" },
  },

  camping: {
    heading: "Leben mitten im Wald",
    intro:
      "Eine überdachte Gemeinschaftsküche mit Lagerfeuer, eine Schwerkraft-Dusche, Kompost-Trenntoilette und für Mutige der Sprung in den Naturpool — viel mehr brauchst du im Wald nicht.",
    features: [
      {
        title: "Einfach mal durchatmen",
        text: "Häng deine Hängematte zwischen zwei Bäume, hör dem Wald zu und lass den Alltag 600 Meter hinter dir.",
        image: { src: `${IMG}/gallery-b4ae2558e9.webp`, alt: "Hängematte zwischen Bäumen im Wald" },
      },
      {
        title: "Bushcraft-Schule vor Ort",
        text: "Ronny bringt dir mit seiner Wildnisschule Feuertechnik, Knoten und Tarpbau bei — direkt am Camp.",
        image: { src: `${IMG}/gallery-051212200b.webp`, alt: "Feuermachen mit Zunderbündel im Bushcraft-Kurs" },
      },
    ],
  },

  anreise: {
    heading: "Die letzten 600 Meter gehst du zu Fuß",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über Oberstdorf ins Kleinwalsertal bis zum Abzweig Schwendle im Wildental — der Parkplatz liegt rund 600 Meter vom Camp.",
      },
      {
        title: "Die letzten Meter",
        text: "Vom kostenpflichtigen Parkplatz holen wir dich ab und tragen gemeinsam dein Gepäck zu Fuß ins Camp.",
      },
      {
        title: "Mit Bus & Bahn",
        text: "Bahn bis Oberstdorf, weiter mit dem Wanderbus; die Bushaltestelle Schwendle ist mit der Kurtaxe kostenlos.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus dem Wildental",
    headingEmphasis: "Wildental",
    intro:
      "Hängematten, Lagerfeuer und Kurse für Groß und Klein — ein paar ehrliche Eindrücke aus unserem Wald im Wildental.",
    tag: "Juni bis September",
    images: [
      { src: `${IMG}/gallery-d531ecc740.webp`, alt: "Zelt im stillen Abendwald" },
      { src: `${IMG}/gallery-2012e2f151.webp`, alt: "Maskottchen Burmi beim Holzhacken mit Kindern im Ferienprogramm" },
      { src: `${IMG}/gallery-3ba58fe0af.webp`, alt: "Bine und Ronny, eure Gastgeber, beim Ferienprogramm" },
    ],
  },

  booking: {
    heading: "Pack den Rucksack — wir halten dir den Platz frei",
    headingEmphasis: "Pack den Rucksack",
    intro:
      "Sag uns Zeitraum, Personenzahl und Zeltgröße — wir haben nur acht Plätze und melden uns persönlich bei dir.",
    pricesArePlaceholder: false,
    priceNote:
      "Zeltplatz: Richtpreis für 2 Personen inkl. Zeltplatzgebühr, 1 Nacht — ab der 4. Nacht günstiger (ab 10 € pro Person). Dazu 4,40 € Kurtaxe pro Person/Nacht ab 14 Jahren (Gemeinde Mittelberg). Vor Ort nur Barzahlung.",
    highlight: {
      title: "Wir holen dich ab",
      text: "Vom Parkplatz tragen wir gemeinsam dein Gepäck die letzten 600 Meter ins Camp.",
    },
    categories: [
      { id: "zeltplatz", label: "Zeltplatz", perNight: 50, perExtraGuest: 20 },
      { id: "glamping", label: "Wald-Glamping", perNight: 100, perExtraGuest: 15 },
    ],
  },

  kontakt: {
    coords: { lat: 47.361648, lng: 10.188097 },
    tel: "+43 676 7586262",
    telHref: "tel:+436767586262",
    mail: "wildcamping-kwt@gmx.at",
    adresse: "Alte Schwendestraße 26 · 6991 Riezlern · Österreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Übernachten", href: "#camping" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default wildcampingKwt;
