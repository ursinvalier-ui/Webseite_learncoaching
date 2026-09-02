import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Werdegang von Seraina Engeli – Lerncoaching Chur",
  description:
    "Primarlehrerin, Mutter zweier Söhne und ausgebildeter Lerncoach: der Werdegang von Seraina Engeli, Lerncoaching Engeli in Chur.",
  path: "/ueber-mich/werdegang",
});

const milestones = [
  {
    year: "1992",
    text: "Erste Stelle als frischgebackene Pädagogin mit Lehrerpatent in der EMS Schiers.",
  },
  {
    year: "1992–2001",
    text: "Vielfältige Unterrichtserfahrung auf allen Primarstufen im Glarnerland und in Graubünden – authentisch und wertschätzend den Lernenden begegnen war und ist bis heute das Credo.",
  },
  {
    year: "nach 9 Jahren",
    text: "Sprachaufenthalt im Ausland, anschliessend Ausbildung zur Oberstufenlehrerin für Italienisch.",
  },
  {
    year: "ab 2004",
    text: "Nach der Geburt des ersten Sohnes Teilzeitarbeit als Stellvertretung in Oberstufe und Berufsschule – Italienischunterricht für Lehrlinge und Sekundarschüler:innen sowie Deutschkurse an der Gewerbeschule Chur.",
  },
  {
    year: "als Mutter",
    text: "Als Mutter zweier Söhne neue Facetten des Schul- und Familienalltags kennengelernt: welcher Druck auf Kindern lasten kann und wie nah Erfolgs- und Misserfolgserlebnisse beieinanderliegen.",
  },
  {
    year: "Ausbildung zum Lerncoach",
    text: "Zweijährige Ausbildung an der Lernakademie für Lerncoaching in Zürich, bei den Psychologen Fabian Grolimund und Stefanie Rietzler.",
  },
];

export default function WerdegangPage() {
  return (
    <>
      <PageHero
        eyebrow="Über mich"
        title="Werdegang"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über mich", href: "/ueber-mich/werdegang" },
          { label: "Werdegang" },
        ]}
      />

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:px-8">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-card shadow-soft lg:mx-0">
            <Image
              src="/images/portrait-seraina.webp"
              alt="Porträt von Seraina Engeli"
              fill
              sizes="(min-width: 1024px) 26vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-xl font-medium leading-relaxed text-petrol">
              Ich bin Primarlehrerin, Mutter zweier schulpflichtiger Söhne und ausgebildeter
              Lerncoach.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Lehrerin war von meinem ersten Schultag an mein Traumberuf – nicht zuletzt dank
              meiner Erstklasslehrerin, die mich von Beginn weg für den Schulstoff begeistern
              konnte. Zu sehen, dass Lernende, egal welchen Alters, trotz Lernschwierigkeiten und
              Motivationsproblemen durchhielten und sich den Herausforderungen stellten,
              beeindruckte mich stets aufs Neue. Es bestärkte mich in meinem Wunsch, Lernenden
              vertiefter und gezielter helfen zu können. Durch diesen zusätzlichen Blickwinkel als
              Mutter war mir klar: Ich möchte Lernenden und Eltern mit Rat und Tat zur Seite
              stehen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl">Stationen</h2>
          <ol className="mt-10 space-y-0">
            {milestones.map((milestone, index) => (
              <li key={milestone.year} className="relative flex gap-5 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-terracotta-strong" aria-hidden="true" />
                  {index < milestones.length - 1 && (
                    <span aria-hidden="true" className="mt-1 w-px flex-1 bg-line" />
                  )}
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-terracotta-text">
                    {milestone.year}
                  </p>
                  <p className="mt-1.5 text-base leading-relaxed text-ink-soft">{milestone.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Lernen Sie mich kennen"
        description="Nehmen Sie unverbindlich Kontakt auf – ich freue mich auf Ihre Nachricht."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
        secondaryCta={{ label: "Philosophie lesen", href: "/ueber-mich/philosophie" }}
      />
    </>
  );
}
