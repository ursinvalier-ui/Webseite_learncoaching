# Bilder – Status und offene Aufgaben

Diese Website mischt bewusst **echte Fotos** (für Vertrauen: Hero, Porträt Seraina
Engeli) und **selbst entwickelte SVG-Illustrationen** (für die Themenseiten:
Hausaufgaben, Prüfungsangst, Lernstrategien, Workshop, Vortrag, Philosophie) — siehe
[`ILLUSTRATIONS.md`](./ILLUSTRATIONS.md) für das Illustrations-System.

## Vor Veröffentlichung: noch offen

| Datei | Verwendet auf | Status |
|---|---|---|
| `hero-home.webp` | Startseite, Hero | ⏳ **generierte Platzhalter-Grafik** — ursprüngliche Quelle war `181112-cw-headerbild-adobestock_137250354-1920x1080-q82.jpg`; ⚠️ Dateiname enthält "adobestock" — **Lizenz vor Verwendung prüfen**, falls dieses Originalbild doch verwendet werden soll |
| `portrait-seraina.webp` | Startseite ("Über mich") & Seite "Werdegang" | ✅ **echtes Foto eingesetzt** (von dir per GitHub-Upload bereitgestellt, optimiert als WebP) |
| `og-default.jpg` | Social-Media-Vorschaubild (OpenGraph) | generierte Grafik, optional gegen ein echtes Foto/Logo-Motiv austauschbar |

Neu generieren (nur noch für `hero-home` / `og-default` relevant):
`npm run generate:placeholders` (schreibt die `.svg`-Quellen; die im Code verwendeten
`.webp`-Dateien danach z.B. mit `sharp` neu rendern).

Alle thematischen Seiten (Hausaufgaben Kinder/Jugendliche, Prüfungsangst,
Lernstrategien, Workshop, Vortrag, Philosophie) verwenden **Illustrationen statt
Fotos** — kein Platzhalter-Foto mehr nötig, siehe `ILLUSTRATIONS.md`.

## Logo

Das echte Logo (Feder-Symbol in Aubergine/Pflaume + "Lerncoaching" / "Engeli") wurde
als Bild bereitgestellt und in `components/Logo.tsx` als SVG **nachgezeichnet** (keine
Bilddatei, da nur ein Screenshot/PNG vorlag, kein Vektor-Original). Die Nachzeichnung
kommt dem Original sehr nahe, ist aber keine exakte 1:1-Kopie. **Sobald das
Original-Logo als Vektordatei (SVG/AI/EPS) verfügbar ist, `components/Logo.tsx`
entsprechend ersetzen** (Pfaddaten `FEATHER_PATH` / `FEATHER_SPINE` bzw. direkt durch
ein `<Image>`-Element mit der echten Datei austauschen).

Die gesamte Farbpalette der Website (`app/globals.css`, Token `--color-petrol` etc.)
wurde von diesem Logo abgeleitet: Aubergine/Pflaume (#4a1e45) als Primärfarbe statt
des ursprünglichen Platzhalter-Grüns. Alle Kontrastwerte wurden erneut gegen WCAG AA
geprüft (0 axe-core-Verstösse).

## Bilder mit Adobe-Stock-Verdacht

Dateinamen mit `adobestock` im Namen sind Adobe-Stock-Bildnummern. Diese **nicht
ungeprüft übernehmen** — nur verwenden, wenn eine gültige, übertragbare Lizenz für den
neuen Auftritt vorliegt. Andernfalls durch neue, lizenzfreie oder eigene Fotos ersetzen.
