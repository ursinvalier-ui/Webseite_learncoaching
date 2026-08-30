import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt – Lerncoaching Engeli, Chur",
  description:
    "Nehmen Sie unverbindlich Kontakt auf: Lerncoaching Engeli, Brandisstrasse 12, 7000 Chur. Telefon +41 79 465 22 16, E-Mail seraina@lerncoaching-engeli.ch.",
  path: "/ueber-uns/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Unverbindlich Kontakt aufnehmen"
        description="Ich freue mich auf Ihre Nachricht, Ihren Anruf oder Ihre E-Mail."
        crumbs={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">{siteConfig.name}</h2>
              <p className="mt-1 text-base text-ink-soft">{siteConfig.owner}</p>
            </div>

            <ul className="space-y-4 text-base text-ink-soft">
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-strong" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-5 w-5 shrink-0 text-terracotta-strong" />
                <a href={siteConfig.phoneHref} className="font-medium text-petrol hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-5 w-5 shrink-0 text-terracotta-strong" />
                <a href={siteConfig.emailHref} className="font-medium text-petrol hover:underline">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div>
              <h3 className="text-lg text-petrol">Standort</h3>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-text"
              >
                Auf Google Maps öffnen
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M4 10 10 4M5 4h5v5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-2xl">Nachricht schreiben</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Alle Felder mit * sind erforderlich – der Rest ist optional.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
