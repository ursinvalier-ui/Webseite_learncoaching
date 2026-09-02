import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingCard } from "@/components/PricingCard";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ablauf & Kosten – Lerncoaching Chur",
  description:
    "So läuft ein Lerncoaching bei Lerncoaching Engeli in Chur ab: vom Erstgespräch bis zum Ziel. Transparente Konditionen: CHF 120 pro 60 Minuten.",
  path: "/lerncoaching/ablauf-kosten",
});

const steps = [
  {
    title: "Erstgespräch",
    description: "Kennenlernen, die momentane Situation analysieren und klären, was durchs Lerncoaching erhofft wird.",
  },
  { title: "Ziel formulieren", description: "Gemeinsam ein klares, erreichbares Ziel festlegen." },
  { title: "Lösungsweg entwickeln", description: "Gemeinsam passende Strategien erarbeiten." },
  {
    title: "Ausprobieren",
    description: "Ausprobieren, nachbesprechen, weiterentwickeln, erneut ausprobieren.",
  },
  { title: "Ziel erreicht", description: "Abschlussgespräch und Ausblick." },
];

export default function AblaufKostenPage() {
  return (
    <>
      <PageHero
        eyebrow="Lerncoaching"
        title="Ablauf & Kosten"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Lerncoaching", href: "/uebersicht-hausaufgaben" },
          { label: "Ablauf & Kosten" },
        ]}
      />

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Ablauf Lerncoaching</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Schritt für Schritt zum Ziel</h2>
          </div>
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Der Unterschied</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Unterschied zur Nachhilfe</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Im Lerncoaching geht es darum, die Ursachen von Lernschwierigkeiten zu erkennen und
              die persönliche Lernkompetenz weiterzuentwickeln. Der Fokus liegt auf dem «Wie lerne
              ich». Das Coaching ist zeitlich begrenzt.
            </p>
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
                    "Ursachen von Lernschwierigkeiten erkennen.",
                    "Persönliche Lernkompetenz weiterentwickeln.",
                    "Zeitlich begrenztes Coaching.",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Konditionen</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Transparent und ohne Überraschungen</h2>
          </div>
          <div className="mt-10 max-w-md">
            <PricingCard
              title="Lerncoaching"
              price="CHF 120"
              unit="/ 60 Minuten"
              details={[
                "Vor- und Nachbereitung inklusive",
                "Kurze Telefongespräche bis 10 Min. inklusive",
              ]}
              footnote={
                <div className="space-y-3">
                  <p>
                    Falls Sie einen Termin verschieben oder nicht wahrnehmen können, melden Sie
                    sich bitte spätestens 24 Stunden im Voraus per E-Mail, SMS oder telefonisch
                    ab. Andernfalls muss der Betrag in Rechnung gestellt werden.
                  </p>
                  <p>
                    <strong className="text-ink">Versicherung:</strong> Der Versicherungsschutz
                    ist Sache der Klientinnen und Klienten.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Erstgespräch anfragen"
        description="Nehmen Sie unverbindlich Kontakt auf – ich melde mich gerne bei Ihnen."
        primaryCta={{ label: "Erstgespräch anfragen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
