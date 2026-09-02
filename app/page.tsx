import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { Eyebrow } from "@/components/Eyebrow";
import { Hero } from "@/components/Hero";
import { IntroCurtain } from "@/components/IntroCurtain";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingCard } from "@/components/PricingCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GrowthPathIllustration } from "@/components/illustrations/GrowthPathIllustration";
import {
  IconBackpack,
  IconBulb,
  IconGroup,
  IconHeart,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Lerncoaching Engeli – Lerncoaching für Kinder, Jugendliche und Eltern in Chur",
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
  { text: "Hausaufgaben werden jeden Abend zum Kampf?", tilt: "sm:-rotate-2" },
  { text: "Die Motivation fehlt?", tilt: "sm:rotate-1" },
  { text: "Trotz langem Lernen bleibt der Erfolg aus?", tilt: "sm:-rotate-1" },
  { text: "Prüfungen lösen Stress oder Angst aus?", tilt: "sm:rotate-2" },
];

const offers = [
  {
    icon: <IconBackpack className="h-6 w-6" />,
    title: "Hausaufgaben",
    description:
      "Für Kinder und Jugendliche, wenn Motivation, Organisation oder Selbständigkeit fehlen.",
    href: "/uebersicht-hausaufgaben",
  },
  {
    icon: <IconHeart className="h-6 w-6" />,
    title: "Prüfungsangst",
    description:
      "Strategien gegen belastende Gedanken, Blockaden und übermässigen Prüfungsstress.",
    href: "/lerncoaching/pruefungsangst",
  },
  {
    icon: <IconBulb className="h-6 w-6" />,
    title: "Lernstrategien",
    description:
      "Effizienter lernen, Inhalte besser verstehen, strukturieren und langfristig behalten.",
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
  {
    title: "Erstgespräch",
    description: "Kennenlernen und die momentane Situation verstehen.",
  },
  {
    title: "Ziel formulieren",
    description: "Gemeinsam festlegen, was erreicht werden soll.",
  },
  {
    title: "Lösungsweg entwickeln",
    description: "Passende Strategien gemeinsam erarbeiten.",
  },
  {
    title: "Ausprobieren",
    description: "Anwenden, nachbesprechen, weiterentwickeln.",
  },
  { title: "Ziel erreicht", description: "Abschlussgespräch und Ausblick." },
];

// One continuous background flows from the intro through the closing
// philosophy quote: plum at the very top, settling into the page's paper
// tone for the long middle stretch, then easing back into plum. Stops are
// percentages of this wrapper's own height, measured against the actual
// rendered sections (not guessed) so the transitions land in blank padding
// rather than over text: the top one finishes before the Hero heading, and
// the bottom one starts only once "Konditionen" has fully passed and
// finishes inside the philosophy section, whose own opaque background
// covers it regardless — so it can never sit behind unprotected text.
const flowingBackground = {
  background: `linear-gradient(to bottom,
    var(--color-petrol) 0%,
    var(--color-petrol) 9%,
    var(--color-canvas) 15%,
    var(--color-canvas) 90%,
    var(--color-petrol) 92.5%,
    var(--color-petrol) 100%
  )`,
};

export default function HomePage() {
  return (
    <>
      <div style={flowingBackground}>
        <IntroCurtain />
        <Hero
          eyebrow="Lerncoaching in Chur"
          title="Lernen darf leichter werden."
          underlineWord="leichter"
          description="Lerncoaching für Kinder, Jugendliche und Eltern in Chur – individuell, wertschätzend und praxisnah."
          primaryCta={{
            label: "Unverbindlich Kontakt aufnehmen",
            href: "/ueber-uns/kontakt",
          }}
          secondaryCta={{
            label: "Lerncoaching entdecken",
            href: "/uebersicht-hausaufgaben",
          }}
        />

        {/* Vertrauensbereich */}
        <section className="border-y border-line">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <ScrollReveal>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {trustItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-petrol"
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-terracotta-strong"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* Empathie-Sektion */}
        <section>
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl">
                Kommt Ihnen das bekannt vor?
              </h2>
            </ScrollReveal>
            <div className="mx-auto mt-10 grid gap-5 sm:grid-cols-2">
              {empathyQuestions.map((q, i) => (
                <ScrollReveal key={q.text} delayMs={i * 90}>
                  <p
                    className={`rounded-card border border-line bg-surface px-6 py-5 text-base font-medium text-petrol shadow-soft transition-transform hover:rotate-0 ${q.tilt}`}
                  >
                    {q.text}
                  </p>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delayMs={200}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Lernen lässt sich verändern. Gemeinsam finden wir heraus, was
                hinter den Schwierigkeiten steckt und welche Strategien wirklich
                helfen.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Angebote */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-2xl">
              <Eyebrow>Coaching-Themen</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">Wobei ich unterstütze</h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {offers.map((offer, i) => (
                <ScrollReveal key={offer.title} delayMs={i * 90}>
                  <ServiceCard {...offer} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Was Lerncoaching bedeutet */}
        <section>
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <ScrollReveal
              direction="none"
              className="relative aspect-[4/3] overflow-hidden rounded-card"
            >
              <GrowthPathIllustration />
            </ScrollReveal>
            <div>
              <Eyebrow>Was Lerncoaching für mich bedeutet</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">
                Mut und Freude am Lernen behalten
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Lernende ein Stück auf ihrem Lernweg begleiten und beraten zu
                dürfen, bereitet mir grosse Freude. Ich möchte durch meine
                Arbeit beitragen, dass Kinder und Jugendliche den Mut und die
                Freude am Lernen behalten und entdecken, dass sie ihr
                Lernverhalten gezielt und positiv beeinflussen können – selbst
                wenn die Motivation hin und wieder durch Abwesenheit glänzt.
              </p>
              <p className="mt-5 font-hand text-2xl text-petrol">
                — Seraina Engeli
              </p>
            </div>
          </div>
        </section>

        {/* Lerncoaching vs. Nachhilfe */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-2xl">
              <Eyebrow>Der Unterschied</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">
                Lerncoaching ist keine klassische Nachhilfe
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={150} className="mt-10">
              <ComparisonTable
                columns={[
                  {
                    title: "Nachhilfe",
                    focus: "Was muss ich lernen?",
                    points: [
                      "Fachlicher Stoff wird erklärt und geübt.",
                      "Unterstützung bei konkreten Schulinhalten.",
                    ],
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
            </ScrollReveal>
            <p className="mt-8 max-w-2xl text-sm text-ink-soft">
              Mehr zum Ablauf und den Konditionen:{" "}
              <Link
                href="/lerncoaching/ablauf-kosten"
                className="font-semibold text-petrol underline"
              >
                Ablauf & Kosten
              </Link>
            </p>
          </div>
        </section>

        {/* So funktioniert's */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Eyebrow>Ablauf</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">
                So funktioniert das Coaching
              </h2>
            </div>
            <div className="mt-12">
              <ProcessSteps steps={steps} />
            </div>
          </div>
        </section>

        {/* Über Seraina Engeli */}
        <section>
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
            <ScrollReveal>
              <Eyebrow>Über mich</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">Seraina Engeli</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Primarlehrerin, Mutter zweier schulpflichtiger Söhne und
                ausgebildeter Lerncoach – mit langjähriger Unterrichtserfahrung
                auf verschiedenen Schulstufen und einer Ausbildung an der
                Lernakademie für Lerncoaching in Zürich.
              </p>
              <ArrowLink href="/ueber-mich/werdegang" className="mt-6">
                Werdegang lesen
              </ArrowLink>
            </ScrollReveal>
          </div>
        </section>

        {/* Workshop & Vortrag */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-2xl">
              <Eyebrow>Für Gruppen</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">Workshops & Vorträge</h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <ScrollReveal>
                <ServiceCard
                  icon={<IconGroup className="h-6 w-6" />}
                  title="Workshop «Clever lernen»"
                  description="Für Kinder zwischen 11 und 13 Jahren: verstehen, wie das Gehirn lernt, und effektivere Lernstrategien einüben."
                  href="/workshops-vortraege/workshop"
                  ctaLabel="Workshop entdecken"
                />
              </ScrollReveal>
              <ScrollReveal delayMs={90}>
                <ServiceCard
                  icon={<IconGroup className="h-6 w-6" />}
                  title="Vortrag «Mit Kindern lernen»"
                  description="Für Eltern, Lehrpersonen und Bildungseinrichtungen: praxisnahe Antworten auf die häufigsten Fragen rund ums Lernen."
                  href="/workshops-vortraege/vortrag"
                  ctaLabel="Vortrag entdecken"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Preis-Teaser */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
              <ScrollReveal>
                <Eyebrow>Transparent</Eyebrow>
                <h2 className="text-3xl sm:text-4xl">Konditionen</h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                  Klar und ohne Überraschungen – alle Details zu Dauer, Kosten
                  und Absagefristen.
                </p>
                <ArrowLink href="/lerncoaching/ablauf-kosten" className="mt-6">
                  Ablauf & Kosten ansehen
                </ArrowLink>
              </ScrollReveal>
              <ScrollReveal delayMs={150} direction="none">
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Empty on purpose: gives the gradient below room to actually be
            seen blending from light to plum. Right up against either
            section it would be hidden — this one has no text, no
            background of its own, so the blend reads as gradual instead
            of a hard cut. */}
        <div className="h-24 sm:h-40" aria-hidden="true" />

        {/* Philosophie — the one solid-ink break on the page. Its own
            opaque bg-petrol is a safety net: even if the gradient above
            hasn't quite finished by the time this section starts, its
            own background still guarantees full contrast underneath. */}
        <section className="bg-petrol">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                aria-hidden="true"
                className="mx-auto mb-6 text-terracotta-light"
              >
                <path
                  d="M0 28V16.6C0 7.6 5.4 1.7 14.6 0l1.7 4.9C10 6.6 7.4 10 7.4 14.4h7.2V28H0Zm19.8 0V16.6c0-9 5.4-14.9 14.6-16.6l1.6 4.9c-6.2 1.7-8.8 5.1-8.8 9.5h7.2V28H19.8Z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-display text-3xl leading-snug text-canvas italic sm:text-4xl">
                Auch der weiteste Weg beginnt mit einem ersten Schritt.
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-canvas/60">
                — Konfuzius
              </p>
              <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-canvas/80">
                Jeder Mensch lernt anders – so einzigartig wie ein
                Fingerabdruck.
              </p>
              <ArrowLink
                href="/ueber-mich/philosophie"
                tone="onDark"
                className="mx-auto mt-5"
              >
                Mehr zur Philosophie
              </ArrowLink>
            </ScrollReveal>
          </div>
        </section>
      </div>

      <CTASection
        title="Bereit für den ersten Schritt?"
        description="Nehmen Sie unverbindlich Kontakt auf – ich freue mich auf Ihre Nachricht."
        primaryCta={{
          label: "Unverbindlich Kontakt aufnehmen",
          href: "/ueber-uns/kontakt",
        }}
      />
    </>
  );
}
