import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentSection } from "@/components/ContentSection";
import { QuoteBlock } from "@/components/QuoteBlock";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Philosophie – Lerncoaching Engeli",
  description:
    "Jeder Mensch lernt anders – so einzigartig wie ein Fingerabdruck. Die Lerncoaching-Philosophie von Seraina Engeli in Chur.",
  path: "/ueber-mich/philosophie",
});

export default function PhilosophiePage() {
  return (
    <>
      <PageHero
        eyebrow="Über mich"
        title="Philosophie"
        description="Es gibt Gründe, warum es zu Lernschwierigkeiten kommt. Entscheidend ist, nicht beim Problem zu verharren, sondern den Weg hinauszufinden."
        crumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über mich", href: "/ueber-mich/werdegang" },
          { label: "Philosophie" },
        ]}
      />

      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <QuoteBlock quote="Auch der weiteste Weg beginnt mit einem ersten Schritt." cite="Konfuzius" />
        </div>
      </section>

      <ContentSection
        eyebrow="Worum es beim Lernen geht"
        title="So einzigartig wie ein Fingerabdruck"
        image={{ src: "/images/philosophie.webp", alt: "Symbolbild: individueller Lernweg" }}
        imageSide="left"
      >
        <p>
          Was hat der Lernweg mit unserem Fingerabdruck zu tun? Er ist genauso einzigartig – denn
          jeder Mensch lernt auf seine Weise. Persönlichkeit, Lernerfahrungen,
          Konzentrationsfähigkeit, Motivation und Lernstrategien beeinflussen und prägen unser
          Lernen.
        </p>
        <p>
          Lernen heisst Neues entdecken, erfahren, ausprobieren und mit bekanntem Wissen
          verknüpfen. Manchmal gelingt uns das spielend, manchmal stehen uns Hindernisse im Weg,
          und wir landen in einer Sackgasse. Dann schlägt die Lernlust in Lernfrust um.
          Erfolgserlebnisse bleiben aus, und Lernschwierigkeiten zeichnen sich ab: Das
          Selbstvertrauen und die Motivation sinken, Prüfungsängste und Hausaufgabenkonflikte
          können folgen. Statt Lernplanung herrscht Zeitchaos, und ungeeignete Lernstrategien
          führen nicht zum erwünschten Ergebnis.
        </p>
      </ContentSection>

      <section className="bg-canvas-alt">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl">Was mir wichtig ist</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Genau in diesen Bereichen möchte ich Ihren Sohn oder Ihre Tochter als Lerncoach
            begleiten und unterstützen. Welches Hindernis blockiert den Lernweg? Was braucht es,
            um die Situation zu verbessern? Welche Ressourcen sind vorhanden? Wie kommen wir dem
            Ziel Schritt für Schritt näher?
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Es ist mir wichtig, auch Sie als Eltern in Ihren Anliegen zu begleiten, damit Sie sich
            mit Ihrem Kind über Lernfortschritte freuen können und Hausaufgaben weniger zur
            Zerreissprobe werden. Wir schauen gemeinsam, wie Sie gezielt unterstützen und im
            Selbstwert stärken können.
          </p>
        </div>
      </section>

      <CTASection
        title="Gemeinsam den ersten Schritt gehen"
        description="Nehmen Sie unverbindlich Kontakt auf."
        primaryCta={{ label: "Unverbindlich Kontakt aufnehmen", href: "/ueber-uns/kontakt" }}
      />
    </>
  );
}
