import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { QuoteBlock } from "@/components/QuoteBlock";
import { TopicList } from "@/components/TopicList";
import { CTASection } from "@/components/CTASection";
import { PruefungsangstIllustration } from "@/components/illustrations/PruefungsangstIllustration";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Prüfungsangst bei Kindern & Jugendlichen – Lerncoaching Chur",
  description:
    "Prüfungsangst hat Ursachen, die sich verstehen lassen. Lerncoaching hilft Kindern und Jugendlichen in Chur, Angstgedanken durch Mutgedanken zu ersetzen.",
  path: "/lerncoaching/pruefungsangst",
});

export default function PruefungsangstPage() {
  return (
    <>
      <PageHero
        eyebrow="Lerncoaching"
        title="Prüfungsangst"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Lerncoaching", href: "/uebersicht-hausaufgaben" },
          { label: "Prüfungsangst" },
        ]}
      />

      <ContentSection illustration={<PruefungsangstIllustration />}>
        <p>
          Nervosität vor Prüfungen ist eigentlich nützlich, da sie die Sauerstoffversorgung
          ankurbelt und dadurch die Denkleistung verbessert. Doch verschiedene Faktoren können
          dazu beitragen, dass sich daraus eine Angst entwickelt, Denkblockaden auftreten und die
          Konzentration abhandenkommt. Körperliche Symptome wie Bauchweh, Schlafstörungen oder
          Kopfschmerzen sind nicht selten Begleiterscheinungen.
        </p>
        <p>
          Deshalb ist es wichtig, genau hinzuschauen, welcher Faktor die Prüfungsangst aufrecht
          erhält: Gibt es Lücken im Lernstoff, werden hilfreiche Lernstrategien genutzt, wie sieht
          die Zeitplanung für die Prüfungsvorbereitung aus, mit welchen Gedanken geht man in eine
          Prüfung, gibt es Angst vor der Lehrperson oder zu hohe Ansprüche an sich selbst?
        </p>
        <p className="font-medium text-petrol">
          Wir schauen, wo die Gründe liegen, und arbeiten gemeinsam daran, die Prüfungsangst
          abzubauen.
        </p>
      </ContentSection>

      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-sage-dark">
            Aus eigener Erfahrung
          </p>
          <QuoteBlock
            quote="Schon beim Ansagen eines Mathetests bekam ich Herzklopfen, und negative Gedanken schossen mir durch den Kopf. Selbst wenn die Prüfung besser ausfiel als erwartet, änderte dies nichts an meiner Prüfungsangst."
            cite="Seraina Engeli, über ihre eigene Prüfungsangst im Lehrerseminar"
          />
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            Ich kenne dieses Thema aus eigener Erfahrung: Im Lehrerseminar hatte ich Prüfungsangst
            in Mathematik. Beim Lernen kreisten meine Gedanken nur um die bevorstehende Prüfung –
            denkbar schlechte Voraussetzungen, um den Lernstoff aufzunehmen und zu begreifen.
            Genau aus solch belastenden Situationen möchte ich Ihrer Tochter oder Ihrem Sohn
            heraushelfen.
          </p>
        </div>
      </section>

      <TopicList
        eyebrow="Mögliche Themen"
        title="Woran wir gemeinsam arbeiten können"
        groups={[
          {
            title: "Für Kinder & Jugendliche",
            items: [
              "Wie die Angst entsteht",
              "Individuelle Arbeit an der Prüfungsangst",
              "Angstgedanken durch Mutgedanken ersetzen",
              "Mutgedanken Schritt für Schritt verankern",
              "Strategien, wenn zu starke Angst am Prüfungstag aufkommt",
              "Umgang mit Misserfolg",
            ],
          },
          {
            title: "Für die Eltern",
            items: ["Wie Prüfungsangst entsteht", "Umgang mit Misserfolg", "Tochter oder Sohn stärken"],
          },
        ]}
      />

      <CTASection
        title="Fragen Sie unverbindlich nach"
        description="Per E-Mail oder Telefon erreichen Sie mich gerne."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
