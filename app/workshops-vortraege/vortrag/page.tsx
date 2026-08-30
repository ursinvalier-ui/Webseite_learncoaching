import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { IconCheck } from "@/components/icons";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vortrag «Mit Kindern lernen» – Lerncoaching Engeli",
  description:
    "Vortrag «Mit Kindern lernen» für Eltern, Lehrpersonen und Bildungseinrichtungen: praxisnahe Antworten zu Motivation, Selbständigkeit und Lernstrategien.",
  path: "/workshops-vortraege/vortrag",
});

const questions = [
  "Wie kann ich mein Kind für das Lernen und die Hausaufgaben motivieren?",
  "Wie kann ich mein Kind zu mehr Selbständigkeit anregen?",
  "Welche Lernstrategien sind für Primarschulkinder geeignet?",
  "Wie kann ich die Hausaufgabenkämpfe reduzieren?",
  "Wie kann ich dazu beitragen, dass mein Kind gerne liest?",
];

const mailtoHref = `${siteConfig.emailHref}?subject=${encodeURIComponent(
  "Anfrage Vortrag «Mit Kindern lernen»",
)}`;

export default function VortragPage() {
  return (
    <>
      <PageHero
        eyebrow="Vortrag"
        title="Vortrag «Mit Kindern lernen»"
        description="Der Vortrag beruht auf dem Konzept der Psychologen Grolimund/Rietzler."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Workshops & Vorträge", href: "/workshops-vortraege" },
          { label: "Vortrag «Mit Kindern lernen»" },
        ]}
      />

      <ContentSection image={{ src: "/images/vortrag.webp", alt: "Vortrag für Eltern und Lehrpersonen" }}>
        <p>
          Eltern und Lehrkräfte wünschen sich, dass Kinder eine glückliche Schulzeit erleben. Wir
          möchten, dass sie das Lernen als etwas Sinnvolles und Schönes begreifen, im Unterricht
          gut mitarbeiten und die Hausaufgaben in Ruhe erledigen.
        </p>
        <p>
          Im Vortrag wird erklärt, wie diese positive Entwicklung angestossen werden kann. Die
          Inhalte orientieren sich an der aktuellen psychologischen Forschung und geben
          praxisnahe Antworten auf folgende Fragen:
        </p>
        <ul className="space-y-2.5">
          {questions.map((q) => (
            <li key={q} className="flex items-start gap-3">
              <IconCheck className="mt-1 h-4 w-4 shrink-0 text-terracotta-strong" />
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <p>
          Eltern und Lehrkräfte erhalten konkrete Tipps, die sie gleich im Alltag umsetzen können.
        </p>
      </ContentSection>

      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-card border border-line bg-surface p-8">
            <h2 className="text-2xl">Nächster Vortrag</h2>
            <p className="mt-3 text-base text-ink-soft">Aktuelle Termine auf Anfrage.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl">Vortrag organisieren</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Sind Sie Vorstandsmitglied eines Vereins, Mitglied eines Elternforums oder einer
              Bildungseinrichtung und interessieren sich für den Vortrag? Kontaktieren Sie mich
              unverbindlich per E-Mail oder telefonisch. Ich freue mich.
            </p>
            <a
              href={mailtoHref}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-petrol px-6 py-3.5 text-base font-semibold text-canvas shadow-soft transition-colors hover:bg-petrol-strong"
            >
              Vortrag anfragen
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Interesse an einem Vortrag für Ihre Institution?"
        description="Nehmen Sie unverbindlich Kontakt auf."
        primaryCta={{ label: "Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
