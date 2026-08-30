import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LegalNotice } from "@/components/LegalNotice";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

// Rechtstext vor Veröffentlichung fachlich/rechtlich überprüfen.
// Diese neue Website bindet standardmässig KEIN Google Analytics und KEINE
// nicht notwendigen Cookies ein — der entsprechende Abschnitt der alten
// Website wurde deshalb bewusst NICHT übernommen (siehe MASTER-PROMPT §36).
// Sollte künftig Analytics/Tracking hinzugefügt werden, muss dieser Text und
// ggf. ein Cookie-Consent-Banner ergänzt werden.

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von Lerncoaching Engeli, Chur.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        crumbs={[{ label: "Startseite", href: "/" }, { label: "Datenschutz" }]}
      />

      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <LegalNotice />

          <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-soft">
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <div>
              <h2 className="text-xl text-petrol">Kein Tracking, keine unnötigen Cookies</h2>
              <p className="mt-3">
                Diese Website verwendet standardmässig <strong>kein Google Analytics</strong> und
                keine weiteren nicht notwendigen Tracking- oder Marketing-Cookies. Es werden nur
                technisch notwendige Daten verarbeitet (siehe unten). Da keine nicht notwendigen
                Cookies gesetzt werden, verzichten wir auf einen Cookie-Banner.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Nutzung der Website</h2>
              <p className="mt-3">
                Die Nutzung dieser Website ist ohne Angabe personenbezogener Daten möglich. Soweit
                auf dieser Website personenbezogene Daten (z.B. Name, E-Mail-Adresse) erhoben
                werden, erfolgt dies stets auf freiwilliger Basis, etwa über das Kontaktformular.
                Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Kontaktformular</h2>
              <p className="mt-3">
                Angaben aus dem Kontaktformular (Name, E-Mail-Adresse, optional Telefonnummer,
                Nachricht) werden ausschliesslich zur Bearbeitung Ihrer Anfrage per E-Mail an{" "}
                <a href={siteConfig.emailHref} className="text-petrol underline">
                  {siteConfig.email}
                </a>{" "}
                verwendet und nicht ohne Ihre Einwilligung weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Hosting & Server-Logfiles</h2>
              <p className="mt-3">
                Beim Aufruf dieser Website können durch den Hosting-Anbieter technisch bedingt
                Server-Logfiles erhoben werden (z.B. Browsertyp, Betriebssystem, Zeitpunkt der
                Anfrage), ohne dass eine direkte Zuordnung zu einer bestimmten Person erfolgt.
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">SSL-Verschlüsselung</h2>
              <p className="mt-3">Diese Website nutzt eine SSL-/TLS-Verschlüsselung für die Datenübertragung.</p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Ihre Rechte</h2>
              <p className="mt-3">
                Sie haben das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung
                dieser Daten. Kontaktieren Sie uns dazu gerne unter{" "}
                <a href={siteConfig.emailHref} className="text-petrol underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl text-petrol">Widerspruch Werbe-Mails</h2>
              <p className="mt-3">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
                Übersendung nicht ausdrücklich angeforderter Werbung wird hiermit widersprochen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
