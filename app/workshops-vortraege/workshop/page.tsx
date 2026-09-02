import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { PricingCard } from "@/components/PricingCard";
import { IconCheck, IconMapPin } from "@/components/icons";
import { CTASection } from "@/components/CTASection";
import { WorkshopIllustration } from "@/components/illustrations/WorkshopIllustration";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Workshop «Clever lernen» für Kinder – Lerncoaching Chur",
  description:
    "Workshop «Clever lernen» in Chur für Kinder zwischen 11 und 13 Jahren: effektivere Lernstrategien, Konzentration und Motivation – basierend auf dem Konzept von Grolimund/Rietzler.",
  path: "/workshops-vortraege/workshop",
});

const learnings = [
  "Wie ihr Gehirn lernt und wie sie ihm helfen können, sich Dinge besser zu merken",
  "Wie sie Wichtiges von Unwichtigem unterscheiden, effektiver lernen und Zeit einsparen können",
  "Wie sie sich Texte in Biologie, Geschichte, Geografie & Co. erschliessen und merken können",
  "Wie sie Informationen ordnen, darstellen und kurze Zusammenfassungen schreiben können",
  "Welche Lernstrategien sinnvoll sind",
  "Wie sie Konzentration und Motivation steigern können",
];

const registrationFields = [
  "Name und Vorname",
  "Geburtsdatum",
  "Adresse",
  "Handynummer von Mutter/Vater",
  "Zusätzliche Informationen (z.B. Allergien) – werden vertraulich behandelt",
];

const mailtoHref = `${siteConfig.emailHref}?subject=${encodeURIComponent(
  "Anmeldung Workshop «Clever lernen»",
)}&body=${encodeURIComponent(
  "Ich möchte mein Kind für den Workshop «Clever lernen» anmelden.\n\nName und Vorname des Kindes:\nGeburtsdatum:\nAdresse:\nHandynummer von Mutter/Vater:\nZusätzliche Informationen (z.B. Allergien):\n",
)}`;

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshop"
        title="Workshop «Clever lernen»"
        description="Der Workshop beruht auf dem Konzept der Psychologen Grolimund/Rietzler."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Workshops & Vorträge", href: "/workshops-vortraege" },
          { label: "Workshop «Clever lernen»" },
        ]}
      />

      <ContentSection illustration={<WorkshopIllustration />}>
        <p>
          Wenn die Menge der Hausaufgaben von Schuljahr zu Schuljahr zunimmt und Kinder immer mehr
          Schulfächer und Prüfungen bewältigen müssen, stossen viele Schülerinnen und Schüler mit
          ihren Lernstrategien an ihre Grenzen. Damit die Lust am Lernen in dieser wichtigen Phase
          nicht auf der Strecke bleibt, hilft es vielen Kindern zu wissen:
        </p>
        <ul className="space-y-2.5">
          {learnings.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <IconCheck className="mt-1 h-4 w-4 shrink-0 text-terracotta-strong" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Beim Kurstag erhalten die Schülerinnen und Schüler konkrete Tipps, die sie in
          verschiedenen Übungen gleich umsetzen können. Der Workshop ist keine Nachhilfe – die
          Teilnehmenden lernen Strategien kennen, die sie befähigen, Prüfungen selbständig
          vorzubereiten.
        </p>
      </ContentSection>

      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <PricingCard
              title="Workshop «Clever lernen»"
              price="CHF 195"
              unit="inkl. Kursmaterial"
              details={[
                'Das Buch "Clever lernen" wird als Arbeitsbuch benutzt und ist im Preis inbegriffen.',
                "Geeignet für Kinder zwischen 11 und 13 Jahren.",
                "Teilnehmerzahl: max. 8 Personen",
                "Durchführung ab 4 Teilnehmenden",
              ]}
              footnote="Bei Nichterscheinen ohne Absage wird der gesamte Betrag verrechnet, da der freigewordene Platz nicht mehr vergeben werden kann."
            />
            <div className="rounded-card border border-line bg-surface p-8">
              <h3 className="text-xl">Wo</h3>
              <p className="mt-4 flex items-start gap-3 text-base text-ink-soft">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-strong" />
                <span>
                  {siteConfig.address.street} (1. Stock)
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </p>
              <h3 className="mt-8 text-xl">Geeignet für</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Kinder zwischen 11 und 13 Jahren, die gerne neue Lernstrategien kennenlernen
                möchten und in der Lage sind, einem halbtägigen Kurs in einer Gruppe mit
                Gleichaltrigen konzentriert zu folgen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl">Anmeldung</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Für die Anmeldung werden folgende Angaben benötigt:
          </p>
          <ul className="mt-5 space-y-2 text-sm text-ink-soft">
            {registrationFields.map((field) => (
              <li key={field} className="flex items-start gap-3">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-strong" />
                {field}
              </li>
            ))}
          </ul>
          <a
            href={mailtoHref}
            className="mt-8 inline-flex items-center justify-center rounded-button bg-petrol px-6 py-3.5 text-base font-semibold text-canvas transition-colors hover:bg-petrol-strong"
          >
            Workshop anfragen / anmelden
          </a>
        </div>
      </section>

      <CTASection
        title="Fragen zum Workshop?"
        description="Melden Sie sich unverbindlich per Telefon oder E-Mail."
        primaryCta={{ label: "Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
