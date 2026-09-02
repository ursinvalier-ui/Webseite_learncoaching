import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

export default function NotFound() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Eyebrow>Fehler 404</Eyebrow>
        </div>
        <h1 className="mt-3 text-4xl">Diese Seite gibt es nicht (mehr)</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Die gesuchte Seite konnte nicht gefunden werden. Vielleicht hilft Ihnen einer dieser
          Links weiter:
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-button bg-petrol px-6 py-3 text-sm font-semibold text-canvas hover:bg-petrol-strong"
          >
            Zur Startseite
          </Link>
          <Link
            href="/ueber-uns/kontakt"
            className="rounded-button border border-line px-6 py-3 text-sm font-semibold text-petrol hover:bg-surface"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
