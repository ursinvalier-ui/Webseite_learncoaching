import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LegalNotice } from "@/components/LegalNotice";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

// Rechtstext vor Veröffentlichung fachlich/rechtlich überprüfen.
// Der untenstehende Text stammt weitgehend von der bisherigen Website und
// enthält deutsche Rechtsbezüge (§ 7 TMG, deutsches Urheberrecht, EU-OS-
// Plattform), die für ein Schweizer Unternehmen nicht ohne Weiteres gelten.
// Er wird hier nur als vorläufiger Platzhalter übernommen — siehe Hinweisbox.

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von Lerncoaching Engeli, Seraina Engeli, Chur.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" crumbs={[{ label: "Startseite", href: "/" }, { label: "Impressum" }]} />

      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <LegalNotice />

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-soft">
            <div>
              <h2 className="text-xl text-petrol">Angaben gemäss Anbieterkennzeichnung</h2>
              <p className="mt-3">
                {siteConfig.name}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </p>
              <p className="mt-3">Vertreten durch Seraina Engeli, Inhaberin</p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Kontakt</h2>
              <p className="mt-3">
                Telefon:{" "}
                <a href={siteConfig.phoneHref} className="font-medium text-petrol hover:underline">
                  {siteConfig.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a href={siteConfig.emailHref} className="font-medium text-petrol hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Streitschlichtung</h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-petrol underline">ec.europa.eu/consumers/odr</a>.
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
                verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Haftung für Inhalte</h2>
              <p className="mt-3">
                Als Diensteanbieterin sind wir für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Haftung für Links</h2>
              <p className="mt-3">
                Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
                auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Urheberrecht</h2>
              <p className="mt-3">
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
                jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin. Downloads und
                Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                gestattet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
