import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { TopicList } from "@/components/TopicList";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hausaufgaben Jugendliche – Lerncoaching in Chur",
  description:
    "Aufschieben, fehlende Motivation, ständige Ablenkung: Lerncoaching hilft Jugendlichen, einen eigenen Weg im Umgang mit Hausaufgaben zu finden.",
  path: "/lerncoaching/hausaufgaben-jugendliche",
});

export default function HausaufgabenJugendlichePage() {
  return (
    <>
      <PageHero
        eyebrow="Lerncoaching"
        title="Hausaufgaben Jugendliche"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Lerncoaching", href: "/uebersicht-hausaufgaben" },
          { label: "Hausaufgaben Jugendliche" },
        ]}
      />

      <ContentSection
        image={{ src: "/images/hausaufgaben-jugendliche.webp", alt: "Jugendlicher beim Lernen" }}
      >
        <p>
          Kennst du das? Du musst die Hausaufgaben erledigen, doch deine Motivation weilt gerade
          in den Ferien. Dauernd verzögerst du den Start, chattest mit Freunden oder gamst eine
          Runde, hängst rum und kannst dich einfach nicht überwinden. Die gutgemeinten Ratschläge
          deiner Eltern nerven dich. Dein schlechtes Gewissen erinnert dich beharrlich an deine
          Hausaufgaben und lässt dir keine echte Freizeit.
        </p>
        <p className="font-medium text-petrol">
          Genug davon? Du kannst diese Situation verändern. Ich helfe dir als Lerncoach gerne
          dabei. Frag unverbindlich nach, wenn du mehr wissen möchtest.
        </p>
      </ContentSection>

      <TopicList
        eyebrow="Mögliche Themen"
        title="Womit wir uns beschäftigen können"
        groups={[
          {
            title: "Für dich",
            items: [
              "Geeigneter Arbeitsplatz und Ort",
              "Störfaktoren erkennen und ausschalten",
              "Hausaufgabenplanung statt Zeitchaos – das schafft dir Freizeit",
              "Wie du trotz Unlust lernen kannst",
              "Den «inneren Schweinehund» überwinden",
              "Wie dein Hirn funktioniert und wie du es clever nutzen kannst",
              "Strategien, die beim Lernen helfen – gezielt, mit angemessenem Aufwand",
              "Dich sinnvoll belohnen",
            ],
          },
          {
            title: "Für die Eltern",
            items: [
              "Hilfreich unterstützen beim Lernen",
              "Eigene Grenzen kennen und festlegen",
              "Notfallplan für schwierige Momente",
              "Abmachungen konsequent, doch friedvoll umsetzen",
            ],
          },
        ]}
        note="Wir finden zusammen einen Weg, der zu dir passt. Kinder dieser Altersstufe beim Lernen zu begleiten, ist für Eltern oft eine Herausforderung – ich unterstütze Sie gern dabei."
      />

      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-ink-soft">
            Wie das Coaching im Detail abläuft und was es kostet, lesen Sie unter{" "}
            <Link href="/lerncoaching/ablauf-kosten" className="font-semibold text-petrol underline">
              Ablauf & Kosten
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Finde heraus, wie Lernen besser zu dir passt."
        description="Schreib mir eine E-Mail oder ruf an – unverbindlich und ohne Verpflichtung."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
