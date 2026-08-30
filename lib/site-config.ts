export const siteConfig = {
  name: "Lerncoaching Engeli",
  owner: "Seraina Engeli",
  tagline: "Lerncoaching für Kinder, Jugendliche und Eltern in Chur",
  url: "https://www.lerncoaching-engeli.ch",
  locale: "de-CH",
  address: {
    street: "Brandisstrasse 12",
    zip: "7000",
    city: "Chur",
    region: "Graubünden",
    country: "CH",
  },
  phone: "+41 79 465 22 16",
  phoneHref: "tel:+41794652216",
  email: "seraina@lerncoaching-engeli.ch",
  emailHref: "mailto:seraina@lerncoaching-engeli.ch",
  mapsUrl: "https://maps.app.goo.gl/gtJ5RGyLocBAu1NP7",
} as const;

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Lerncoaching",
    href: "/uebersicht-hausaufgaben",
    children: [
      { label: "Übersicht", href: "/uebersicht-hausaufgaben" },
      { label: "Hausaufgaben Kinder", href: "/lerncoaching/hausaufgaben-kinder" },
      { label: "Hausaufgaben Jugendliche", href: "/lerncoaching/hausaufgaben-jugendliche" },
      { label: "Prüfungsangst", href: "/lerncoaching/pruefungsangst" },
      { label: "Lernstrategien", href: "/lerncoaching/lernstrategie" },
      { label: "Ablauf & Kosten", href: "/lerncoaching/ablauf-kosten" },
    ],
  },
  {
    label: "Workshops & Vorträge",
    href: "/workshops-vortraege",
    children: [
      { label: "Übersicht", href: "/workshops-vortraege" },
      { label: "Workshop «Clever lernen»", href: "/workshops-vortraege/workshop" },
      { label: "Vortrag «Mit Kindern lernen»", href: "/workshops-vortraege/vortrag" },
    ],
  },
  {
    label: "Über mich",
    href: "/ueber-mich/werdegang",
    children: [
      { label: "Werdegang", href: "/ueber-mich/werdegang" },
      { label: "Philosophie", href: "/ueber-mich/philosophie" },
    ],
  },
  {
    label: "Kontakt",
    href: "/ueber-uns/kontakt",
  },
];

export const footerLinks: NavChild[] = [
  { label: "Lerncoaching", href: "/uebersicht-hausaufgaben" },
  { label: "Workshops & Vorträge", href: "/workshops-vortraege" },
  { label: "Über mich", href: "/ueber-mich/werdegang" },
  { label: "Kontakt", href: "/ueber-uns/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
