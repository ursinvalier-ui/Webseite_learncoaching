import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { IconBackpack, IconBulb, IconCompass, IconHeart } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lerncoaching Übersicht – Hausaufgaben, Prüfungsangst & Lernstrategien",
  description:
    "Übersicht über das Lerncoaching-Angebot in Chur: Hausaufgaben für Kinder und Jugendliche, Prüfungsangst, Lernstrategien sowie Ablauf und Kosten.",
  path: "/uebersicht-hausaufgaben",
});

const items = [
  {
    icon: <IconBackpack className="h-6 w-6" />,
    title: "Hausaufgaben Kinder",
    description:
      "Hausaufgaben befinden sich selten auf der Favoritenliste der Kinder. Sie sorgen oft für Zündstoff – umso wichtiger ist ein sinnvoller Umgang mit der Thematik.",
    href: "/lerncoaching/hausaufgaben-kinder",
  },
  {
    icon: <IconBackpack className="h-6 w-6" />,
    title: "Hausaufgaben Jugendliche",
    description:
      "«Hausaufgaben» ist für dich ein Reizwort? Aufschieben bis zur letzten Minute eine beliebte Taktik? Das muss nicht sein.",
    href: "/lerncoaching/hausaufgaben-jugendliche",
  },
  {
    icon: <IconHeart className="h-6 w-6" />,
    title: "Prüfungsangst",
    description:
      "Nervosität vor Prüfungen ist normal – doch manchmal wird daraus eine belastende Angst. Wir schauen gemeinsam, wo die Gründe liegen.",
    href: "/lerncoaching/pruefungsangst",
  },
  {
    icon: <IconBulb className="h-6 w-6" />,
    title: "Lernstrategien",
    description:
      "Manchmal wird stundenlang gelernt, doch der Prüfungserfolg bleibt aus. Neue Lernstrategien kennenzulernen lohnt sich.",
    href: "/lerncoaching/lernstrategie",
  },
  {
    icon: <IconCompass className="h-6 w-6" />,
    title: "Ablauf & Kosten",
    description:
      "Wie das Lerncoaching abläuft, was es kostet und worin sich Lerncoaching von klassischer Nachhilfe unterscheidet.",
    href: "/lerncoaching/ablauf-kosten",
  },
];

export default function UebersichtHausaufgabenPage() {
  return (
    <>
      <PageHero
        eyebrow="Lerncoaching"
        title="Individuelles Lerncoaching für jede Situation"
        description="Ob Hausaufgabenkonflikte, Prüfungsangst oder ungünstige Lernstrategien – hier finden Sie den passenden Einstieg."
        crumbs={[{ label: "Startseite", href: "/" }, { label: "Lerncoaching" }]}
      />
      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ServiceCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Nicht sicher, was am besten passt?"
        description="Nehmen Sie unverbindlich Kontakt auf – gemeinsam finden wir den passenden Weg."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
