export function LegalNotice() {
  return (
    <div
      role="note"
      className="rounded-card border border-terracotta-strong/40 bg-terracotta/10 p-6 text-sm leading-relaxed text-ink"
    >
      <p className="font-semibold text-petrol">Hinweis für die Betreiberin</p>
      <p className="mt-2">
        Dieser Rechtstext basiert grösstenteils auf dem bisherigen Auftritt und enthält teilweise
        deutsche Rechtsbezüge, die für ein Schweizer Unternehmen nicht ohne Weiteres gelten. Er
        dient hier nur als vorläufiger Platzhalter.
      </p>
      <p className="mt-2 font-medium text-petrol">
        Rechtstext vor Veröffentlichung fachlich/rechtlich überprüfen (z.B. durch eine
        Fachperson für Schweizer Recht / Datenschutz).
      </p>
    </div>
  );
}
