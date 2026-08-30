# Bilder – Status und offene Aufgaben

Diese Website verwendet aktuell **generierte Platzhalter-Grafiken** (Quelle als
`public/images/*.svg`, im Code eingebunden als `public/images/*.webp`) anstelle der
echten Fotos der alten Website. Grund: Die Entwicklungsumgebung hatte keinen
Netzwerkzugriff auf `lerncoaching-engeli.ch`, die Original-Bilder konnten daher nicht
automatisch heruntergeladen werden. Die Platzhalter sind bewusst als solche
gekennzeichnet (Beschriftung "Platzhalter · Foto ergänzen") und keine Stockfotos.

Neu generieren: `npm run generate:placeholders` (schreibt die `.svg`-Quellen; die im
Code verwendeten `.webp`-Dateien danach z.B. mit `sharp` neu rendern).

## Vor Veröffentlichung: echte Bilder einsetzen

Für jeden Platzhalter unten die echte Datei unter demselben Dateinamen (`.webp` oder
`.jpg`, Pfad im jeweiligen `page.tsx` anpassen falls nötig) in `public/images/` ablegen.

| Platzhalter-Datei | Verwendet auf | Ursprüngliche Quelle (alte Website) | Lizenzhinweis |
|---|---|---|---|
| `hero-home.webp` | Startseite, Hero | `181112-cw-headerbild-adobestock_137250354-1920x1080-q82.jpg` | ⚠️ Dateiname enthält "adobestock" — **Lizenz vor Verwendung prüfen** |
| `teaser-hausaufgaben.webp` | (bereitgestellt, aktuell nicht verlinkt) Startseite-Teaser "Hausaufgaben" | `csm_191122-vn-postit-hausaufgaben-angebot-img_8727-...webp` | vermutlich eigenes Foto |
| `teaser-pruefungsangst.webp` | (bereitgestellt, aktuell nicht verlinkt) Startseite-Teaser "Prüfungsangst" | `csm_191125-ah-postit-pruefungsangst-angebot-...webp` | vermutlich eigenes Foto |
| `teaser-lernstrategie.webp` | Startseite, Abschnitt "Was Lerncoaching bedeutet" | dasselbe Bild wie Hausaufgaben-Teaser (laut Quelle) | vermutlich eigenes Foto |
| `hausaufgaben-kinder.webp` | Seite "Hausaufgaben Kinder" | `csm_dsc_8796-320x213-q82_...webp` | Dateiname "dsc_" → vermutlich eigenes Foto von Seraina Engeli |
| `hausaufgaben-jugendliche.webp` | Seite "Hausaufgaben Jugendliche" | `csm_dsc_8759-320x213-q82_...webp` | vermutlich eigenes Foto |
| `pruefungsangst.webp` | Seite "Prüfungsangst" | `csm_dsc_8772-320x213-q82_...webp` | vermutlich eigenes Foto |
| `lernstrategie.webp` | Seite "Lernstrategien" | `csm_adobestock_206371462-320x213-q82_...webp` | ⚠️ "adobestock" — **Lizenz vor Verwendung prüfen** |
| `ablauf-kosten.webp` | (bereitgestellt, aktuell nicht verlinkt) Seite "Ablauf & Kosten" | `csm_181112-cw-postit-ablauf-img_8699-320x180-q82_...webp` | vermutlich eigenes Foto |
| `workshop.webp` | Seite "Workshop «Clever lernen»" | `csm_maedchen_lernt-320x194-q82_...webp` | Herkunft unklar — prüfen |
| `vortrag.webp` | Seite "Vortrag «Mit Kindern lernen»" | `csm_vortrag-kindernlernen-screenshot-...webp` (Screenshot einer alten Ankündigung) | veralteter Screenshot — eher **nicht** weiterverwenden, neues Bild empfohlen |
| `philosophie.webp` | Seite "Philosophie" | `csm_181205-cw-adobestock-190144504-bea-320x213-q82_...webp` | ⚠️ "adobestock" — **Lizenz vor Verwendung prüfen** |
| `portrait-seraina.webp` | Seiten "Startseite" & "Werdegang" | `csm_dsc_8955-480x721-q82_...webp` | Porträt, vermutlich eigenes Foto |
| `og-default.jpg` | Social-Media-Vorschaubild (OpenGraph) | — | neu, kein Ersatz für ein echtes Foto/Logo-Motiv nötig, aber optional austauschbar |

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
