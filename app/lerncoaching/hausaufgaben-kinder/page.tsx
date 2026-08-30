import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { TopicList } from "@/components/TopicList";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hausaufgaben Kinder – Lerncoaching in Chur",
  description:
    "Hausaufgabenkonflikte belasten viele Familien. Lerncoaching hilft Kindern und Eltern, einen entspannteren Umgang mit Hausaufgaben zu finden.",
  path: "/lerncoaching/hausaufgaben-kinder",
});

export default function HausaufgabenKinderPage() {
  return (
    <>
      <PageHero
        eyebrow="Lerncoaching"
        title="Hausaufgaben Kinder"
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Lerncoaching", href: "/uebersicht-hausaufgaben" },
          { label: "Hausaufgaben Kinder" },
        ]}
      />

      <ContentSection
        image={{ src: "/images/hausaufgaben-kinder.webp", alt: "Kind bei den Hausaufgaben am eigenen Arbeitsplatz" }}
      >
        <p>
          Hausaufgaben empfinden viele Kinder als lästige Zusatzbeschäftigung. Sie haben so viele
          Ideen, was sie stattdessen tun könnten. Sie trödeln herum, sitzen gefrustet vor den
          Lehrbüchern, jammern und schimpfen über zu schwierige oder zu viele Aufgaben.
          Endlosdiskussionen beginnen. Da helfen auch gutgemeinte Ratschläge kaum weiter. Viel
          Zeit verstreicht, die Nerven leiden, und die Hausaufgaben werden letztendlich nicht oder
          nur unter mühsamen Bedingungen erledigt.
        </p>
        <p>
          Diese wiederkehrende Problematik kann auf Dauer zu belastenden Hausaufgabenkonflikten
          führen. Die Beziehung zwischen Ihnen und Ihrer Tochter oder Ihrem Sohn leidet darunter.
        </p>
        <p className="font-medium text-petrol">
          Gerne helfe ich Ihnen und Ihrem Kind, einen Weg zu finden, der das Lernklima daheim
          verbessert – damit Sie Ihre Beziehung wieder friedvoller gestalten können.
        </p>
      </ContentSection>

      <TopicList
        eyebrow="Mögliche Themen"
        title="Woran wir gemeinsam arbeiten können"
        groups={[
          {
            title: "Für das Kind",
            items: [
              "Geeigneter Arbeitsplatz und Ort – da darf experimentiert werden",
              "Weg mit allem, was ablenkt",
              "Hausaufgabenplanung, die echte Freizeit schafft",
              "Tricks, um trotz Unlust zu beginnen",
              "Strategien, die beim Lernen helfen",
              "Selbständiger arbeiten",
            ],
          },
          {
            title: "Für die Eltern",
            items: [
              "Durch gezieltes Lob das Kind stärken",
              "Lernfortschritte sichtbar machen",
              "Widerstände des Kindes abbauen",
              "Einen Notfallplan für schwierige Momente kennen",
              "Misserfolge erfolgreich auffangen",
              "Gezielt helfen",
            ],
          },
        ]}
        note="Sie wünschen sich eine Veränderung im Umgang mit Hausaufgabenkonflikten? Gerne berate ich auch Sie als Eltern im Coaching."
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
        title="Fragen? Nehmen Sie unverbindlich Kontakt auf."
        description="Per E-Mail oder Telefon melde ich mich gerne bei Ihnen zurück."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
