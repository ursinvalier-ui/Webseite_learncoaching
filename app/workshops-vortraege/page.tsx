import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { IconGroup, IconPodium } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Workshops & Vorträge – Lerncoaching Engeli",
  description:
    "Workshop «Clever lernen» für Kinder von 11–13 Jahren und Vortrag «Mit Kindern lernen» für Eltern, Lehrpersonen und Bildungseinrichtungen.",
  path: "/workshops-vortraege",
});

export default function WorkshopsVortraegeOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Für Gruppen"
        title="Workshops & Vorträge"
        description="Zwei Formate für Schulen, Elternvereine und Bildungseinrichtungen – beide beruhen auf dem Konzept der Psychologen Grolimund/Rietzler."
        crumbs={[{ label: "Startseite", href: "/" }, { label: "Workshops & Vorträge" }]}
      />
      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <ServiceCard
              icon={<IconGroup className="h-6 w-6" />}
              title="Workshop «Clever lernen»"
              description="Für Kinder zwischen 11 und 13 Jahren: verstehen, wie das Gehirn lernt, Wichtiges von Unwichtigem unterscheiden und effektiver lernen."
              href="/workshops-vortraege/workshop"
              ctaLabel="Mehr Infos"
            />
            <ServiceCard
              icon={<IconPodium className="h-6 w-6" />}
              title="Vortrag «Mit Kindern lernen»"
              description="Für Eltern, Lehrpersonen und Bildungseinrichtungen: praxisnahe Antworten auf die häufigsten Fragen rund ums Lernen und Hausaufgaben."
              href="/workshops-vortraege/vortrag"
              ctaLabel="Mehr Infos"
            />
          </div>
        </div>
      </section>
      <CTASection
        title="Workshop oder Vortrag organisieren?"
        description="Sind Sie Vorstandsmitglied eines Vereins, Mitglied eines Elternforums oder einer Bildungseinrichtung? Ich freue mich auf Ihre Anfrage."
        primaryCta={{ label: "Unverbindlich anfragen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
