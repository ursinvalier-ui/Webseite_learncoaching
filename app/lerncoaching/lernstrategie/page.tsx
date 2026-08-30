import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { TopicList } from "@/components/TopicList";
import { CTASection } from "@/components/CTASection";
import { LernstrategieIllustration } from "@/components/illustrations/LernstrategieIllustration";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lernstrategien für Kinder & Jugendliche – Lerncoaching Chur",
  description:
    "Mehr lernen bedeutet nicht automatisch besser lernen. Neue Lernstrategien für Prüfungsvorbereitung, Textverständnis, Mathematik und Fremdsprachen.",
  path: "/lerncoaching/lernstrategie",
});

export default function LernstrategiePage() {
  return (
    <>
      <PageHero
        eyebrow="Lerncoaching"
        title="Lernstrategien"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Lerncoaching", href: "/uebersicht-hausaufgaben" },
          { label: "Lernstrategien" },
        ]}
      />

      <ContentSection illustration={<LernstrategieIllustration />}>
        <p>
          Manchmal lernen Kinder und Jugendliche stundenlang, doch der Prüfungserfolg bleibt aus.
          Woran kann das liegen? Möglich ist, dass sie das Falsche lernen, sich in Details
          verlieren, den Fokus nicht auf die entscheidenden Themen legen oder den Lernstoff zu
          wenig abspeichern. Vielleicht ist bei der Zeitplanung schon etwas schiefgelaufen – ich
          denke an alle, die zu kurzfristig beginnen.
        </p>
        <p>
          Oft wissen Lernende nicht, welche Strategie ihnen hilft, bestimmte Fächer und
          Themenbereiche gezielt zu lernen. Sie verharren in alten Lerntechniken, weil es der
          bequemere Weg ist. Neue Lernstrategien kennenzulernen und umzusetzen ist Arbeit – ein
          Wundermittel, das sofort wirkt, gibt es nicht. Doch wenn erste Erfolgserlebnisse
          eintreten, wird klar, dass sich der Aufwand gelohnt hat.
        </p>
        <p className="font-medium text-petrol">
          Durch gezieltes Ausprobieren und Anwenden kommt die Lernroutine – und mit ihr mehr
          Lernerfolg.
        </p>
      </ContentSection>

      <TopicList
        eyebrow="Mögliche Themen"
        title="Womit wir uns beschäftigen können"
        groups={[
          {
            title: "Für Kinder & Jugendliche",
            items: [
              "Vorträge vorbereiten und angstfrei halten",
              "Texte lesen, verstehen, zusammenfassen, speichern",
              "Wie lerne ich für Mathe- und Geometrieprüfungen?",
              "Fremdsprachen lernen: Was wirklich für bessere Noten zählt",
              "Spannendes zum Ausprobieren beim Sprachenlernen",
              "Prüfungen gezielt vorbereiten",
              "Lernlücken aufarbeiten (z.B. Mathe oder Deutsch, Primarschule)",
            ],
          },
          {
            title: "Für die Eltern",
            items: [
              "Richtig mit der Lernkartei arbeiten",
              "Hilfreich unterstützen",
              "Individuellen Fortschritt anerkennen und sichtbar machen",
            ],
          },
        ]}
        note="Hast du Lust, etwas Neues auszuprobieren und unnützen Ballast über Bord zu werfen? Vielleicht haben Sie Lust, gleich mit Ihrem Sohn oder Ihrer Tochter Neues auszuprobieren."
      />

      <CTASection
        title="Neugierig auf neue Lernstrategien?"
        description="Rufen Sie mich unverbindlich an oder schreiben Sie mir eine E-Mail."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
