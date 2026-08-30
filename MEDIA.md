# Bilder – Status und offene Aufgaben

Diese Website mischt bewusst **echte Fotos** (für Vertrauen: Hero, Porträt Seraina
Engeli) und **selbst entwickelte SVG-Illustrationen** (für die Themenseiten:
Hausaufgaben, Prüfungsangst, Lernstrategien, Workshop, Vortrag, Philosophie) — siehe
[`ILLUSTRATIONS.md`](./ILLUSTRATIONS.md) für das Illustrations-System.

Die beiden echten Foto-Slots verwenden aktuell **generierte Platzhalter-Grafiken**
(Quelle als `public/images/*.svg`, im Code eingebunden als `public/images/*.webp`)
anstelle der echten Fotos der alten Website. Grund: Die Entwicklungsumgebung hatte
keinen Netzwerkzugriff auf `lerncoaching-engeli.ch`, die Original-Bilder konnten daher
nicht automatisch heruntergeladen werden. Die Platzhalter sind bewusst als solche
gekennzeichnet (Beschriftung "Platzhalter · Foto ergänzen") und keine Stockfotos.

Neu generieren: `npm run generate:placeholders` (schreibt die `.svg`-Quellen; die im
Code verwendeten `.webp`-Dateien danach z.B. mit `sharp` neu rendern).

## Vor Veröffentlichung: echte Fotos einsetzen

Nur noch zwei Foto-Slots offen — Datei unter demselben Namen in `public/images/`
ablegen (`.webp` oder `.jpg`, Pfad im jeweiligen `page.tsx` anpassen falls nötig):

| Platzhalter-Datei | Verwendet auf | Ursprüngliche Quelle (alte Website) | Lizenzhinweis |
|---|---|---|---|
| `hero-home.webp` | Startseite, Hero | `181112-cw-headerbild-adobestock_137250354-1920x1080-q82.jpg` | ⚠️ Dateiname enthält "adobestock" — **Lizenz vor Verwendung prüfen** |
| `portrait-seraina.webp` | Startseite ("Über mich") & Seite "Werdegang" | `csm_dsc_8955-480x721-q82_...webp` | Porträt, vermutlich eigenes Foto — **das von dir zugeschickte Foto ist bereit, sobald es hochgeladen ist (siehe unten)** |
| `og-default.jpg` | Social-Media-Vorschaubild (OpenGraph) | — | neu, kein Ersatz für ein echtes Foto/Logo-Motiv nötig, aber optional austauschbar |

Alle übrigen thematischen Seiten (Hausaufgaben Kinder/Jugendliche, Prüfungsangst,
Lernstrategien, Workshop, Vortrag, Philosophie) verwenden jetzt **Illustrationen statt
Fotos** — kein Platzhalter-Foto mehr nötig, siehe `ILLUSTRATIONS.md`.

### Porträtfoto von Seraina Engeli

Du hast bereits ein Porträtfoto geschickt. Es konnte in dieser Sandbox nicht direkt
gespeichert werden (kein Datei-Zugriff auf im Chat eingefügte Bilder). Bitte lade es
selbst in den Ordner `public/images/` des Branches hoch (z.B. als
`portrait-seraina-real.jpg` über die GitHub-Weboberfläche) und passe die beiden
`<Image src="...">`-Verweise in `app/page.tsx` und
`app/ueber-mich/werdegang/page.tsx` entsprechend an.

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
