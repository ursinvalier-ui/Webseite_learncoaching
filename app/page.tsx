import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingCard } from "@/components/PricingCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { IconBackpack, IconBulb, IconGroup, IconHeart } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lerncoaching Engeli – Lerncoaching für Kinder, Jugendliche und Eltern in Chur",
  description:
    "Ich möchte durch meine Arbeit beitragen, dass Kinder und Jugendliche den Mut und die Freude am Lernen behalten und entdecken, dass sie ihr Lernverhalten gezielt und positiv beeinflussen können.",
  path: "/",
});

const trustItems = [
  "Individuelles Lerncoaching",
  "Langjährige pädagogische Erfahrung",
  "Für Kinder, Jugendliche & Eltern",
  "Persönlich in Chur",
];

const empathyQuestions = [
  "Hausaufgaben werden jeden Abend zum Kampf?",
  "Die Motivation fehlt?",
  "Trotz langem Lernen bleibt der Erfolg aus?",
  "Prüfungen lösen Stress oder Angst aus?",
];

const offers = [
  {
    icon: <IconBackpack className="h-6 w-6" />,
    title: "Hausaufgaben",
    description: "Für Kinder und Jugendliche, wenn Motivation, Organisation oder Selbständigkeit fehlen.",
    href: "/uebersicht-hausaufgaben",
  },
  {
    icon: <IconHeart className="h-6 w-6" />,
    title: "Prüfungsangst",
    description: "Strategien gegen belastende Gedanken, Blockaden und übermässigen Prüfungsstress.",
    href: "/lerncoaching/pruefungsangst",
  },
  {
    icon: <IconBulb className="h-6 w-6" />,
    title: "Lernstrategien",
    description: "Effizienter lernen, Inhalte besser verstehen, strukturieren und langfristig behalten.",
    href: "/lerncoaching/lernstrategie",
  },
  {
    icon: <IconGroup className="h-6 w-6" />,
    title: "Elternberatung",
    description:
      "Eltern erhalten Begleitung, damit sie ihr Kind hilfreich unterstützen können, ohne dass Lernen dauerhaft zum Konflikt wird.",
    href: "/lerncoaching/ablauf-kosten",
  },
];

const steps = [
  { title: "Erstgespräch", description: "Kennenlernen und die momentane Situation verstehen." },
  { title: "Ziel formulieren", description: "Gemeinsam festlegen, was erreicht werden soll." },
  { title: "Lösungsweg entwickeln", description: "Passende Strategien gemeinsam erarbeiten." },
  { title: "Ausprobieren", description: "Anwenden, nachbesprechen, weiterentwickeln." },
  { title: "Ziel erreicht", description: "Abschlussgespräch und Ausblick." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Lerncoaching in Chur"
        title="Lernen darf leichter werden."
        description="Lerncoaching für Kinder, Jugendliche und Eltern in Chur – individuell, wertschätzend und praxisnah."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
        secondaryCta={{ label: "Lerncoaching entdecken", href: "/uebersicht-hausaufgaben" }}
        image={{ src: "/images/hero-home.webp", alt: "Seraina Engeli im Coaching-Gespräch" }}
      />

      {/* Vertrauensbereich */}
      <section className="border-y border-line bg-canvas-alt">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-petrol">
                <span className="h-2 w-2 shrink-0 rounded-full bg-terracotta-strong" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Empathie-Sektion */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl">Kommt Ihnen das bekannt vor?</h2>
          <div className="mx-auto mt-8 grid gap-4 sm:grid-cols-2">
            {empathyQuestions.map((q) => (
              <p
                key={q}
                className="rounded-card border border-line bg-surface px-6 py-5 text-base font-medium text-petrol"
              >
                {q}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Lernen lässt sich verändern. Gemeinsam finden wir heraus, was hinter den
            Schwierigkeiten steckt und welche Strategien wirklich helfen.
          </p>
        </div>
      </section>

      {/* Angebote */}
      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
              Coaching-Themen
            </p>
            <h2 className="text-3xl sm:text-4xl">Wobei ich unterstütze</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer) => (
              <ServiceCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Was Lerncoaching bedeutet */}
      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft">
            <Image
              src="/images/teaser-lernstrategie.webp"
              alt="Symbolbild: gemeinsam neue Lernwege entdecken"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 46vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
              Was Lerncoaching für mich bedeutet
            </p>
            <h2 className="text-3xl sm:text-4xl">Mut und Freude am Lernen behalten</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Lernende ein Stück auf ihrem Lernweg begleiten und beraten zu dürfen, bereitet mir
              grosse Freude. Ich möchte durch meine Arbeit beitragen, dass Kinder und Jugendliche
              den Mut und die Freude am Lernen behalten und entdecken, dass sie ihr Lernverhalten
              gezielt und positiv beeinflussen können – selbst wenn die Motivation hin und wieder
              durch Abwesenheit glänzt.
            </p>
            <p className="mt-6 text-sm font-medium text-petrol">— Seraina Engeli</p>
          </div>
        </div>
      </section>

      {/* Lerncoaching vs. Nachhilfe */}
      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
              Der Unterschied
            </p>
            <h2 className="text-3xl sm:text-4xl">Lerncoaching ist keine klassische Nachhilfe</h2>
          </div>
          <div className="mt-10">
            <ComparisonTable
              columns={[
                {
                  title: "Nachhilfe",
                  focus: "Was muss ich lernen?",
                  points: ["Fachlicher Stoff wird erklärt und geübt.", "Unterstützung bei konkreten Schulinhalten."],
                },
                {
                  title: "Lerncoaching",
                  focus: "Wie lerne ich?",
                  points: [
                    "Ursachen von Lernschwierigkeiten werden erkannt.",
                    "Die persönliche Lernkompetenz wird weiterentwickelt.",
                    "Das Coaching ist zeitlich begrenzt.",
                  ],
                },
              ]}
            />
          </div>
          <p className="mt-8 max-w-2xl text-sm text-ink-soft">
            Mehr zum Ablauf und den Konditionen:{" "}
            <Link href="/lerncoaching/ablauf-kosten" className="font-semibold text-petrol underline">
              Ablauf & Kosten
            </Link>
          </p>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
              Ablauf
            </p>
            <h2 className="text-3xl sm:text-4xl">So funktioniert das Coaching</h2>
          </div>
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* Über Seraina Engeli */}
      <section className="bg-canvas-alt">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:px-8">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-card shadow-soft">
            <Image
              src="/images/portrait-seraina.webp"
              alt="Porträt von Seraina Engeli"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 24vw, 60vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
              Über mich
            </p>
            <h2 className="text-3xl sm:text-4xl">Seraina Engeli</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Primarlehrerin, Mutter zweier schulpflichtiger Söhne und ausgebildeter Lerncoach –
              mit langjähriger Unterrichtserfahrung auf verschiedenen Schulstufen und einer
              Ausbildung an der Lernakademie für Lerncoaching in Zürich.
            </p>
            <Link
              href="/ueber-mich/werdegang"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-text"
            >
              Werdegang lesen
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop & Vortrag */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
              Für Gruppen
            </p>
            <h2 className="text-3xl sm:text-4xl">Workshops & Vorträge</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ServiceCard
              icon={<IconGroup className="h-6 w-6" />}
              title="Workshop «Clever lernen»"
              description="Für Kinder zwischen 11 und 13 Jahren: verstehen, wie das Gehirn lernt, und effektivere Lernstrategien einüben."
              href="/workshops-vortraege/workshop"
              ctaLabel="Workshop entdecken"
            />
            <ServiceCard
              icon={<IconGroup className="h-6 w-6" />}
              title="Vortrag «Mit Kindern lernen»"
              description="Für Eltern, Lehrpersonen und Bildungseinrichtungen: praxisnahe Antworten auf die häufigsten Fragen rund ums Lernen."
              href="/workshops-vortraege/vortrag"
              ctaLabel="Vortrag entdecken"
            />
          </div>
        </div>
      </section>

      {/* Preis-Teaser */}
      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
                Transparent
              </p>
              <h2 className="text-3xl sm:text-4xl">Konditionen</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                Klar und ohne Überraschungen – alle Details zu Dauer, Kosten und Absagefristen.
              </p>
              <Link
                href="/lerncoaching/ablauf-kosten"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-text"
              >
                Ablauf & Kosten ansehen
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
            <PricingCard
              title="Lerncoaching"
              price="CHF 120"
              unit="/ 60 Minuten"
              details={[
                "Vor- und Nachbereitung inklusive",
                "Kurze Telefongespräche bis 10 Min. inklusive",
                "Absage bitte mind. 24 Std. im Voraus",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <QuoteBlock
            quote="Auch der weiteste Weg beginnt mit einem ersten Schritt."
            cite="Konfuzius"
          />
          <p className="mt-8 text-center text-base leading-relaxed text-ink-soft">
            Jeder Mensch lernt anders – so einzigartig wie ein Fingerabdruck.{" "}
            <Link href="/ueber-mich/philosophie" className="font-semibold text-petrol underline">
              Mehr zur Philosophie
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Bereit für den ersten Schritt?"
        description="Nehmen Sie unverbindlich Kontakt auf – ich freue mich auf Ihre Nachricht."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
