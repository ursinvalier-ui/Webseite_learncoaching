# Illustrations & Animationen – Dokumentation

Diese Website verwendet ein **selbst entwickeltes Illustrations-System** aus
handgezeichneten, animierten SVG-React-Komponenten statt Stockfotos oder
KI-generierter Bilder. Grund: Die Entwicklungsumgebung dieser Session hatte keinen
Zugriff auf einen Bildgenerator, und SVG passt ohnehin besser zu den Zielen der
Website (skalierbar, winzige Dateigrösse, direkt animierbar, garantiert
markenkonsistent, kein Text im Bild).

## Das System

```
components/illustrations/
  tokens.ts        Farb- und Stil-Konstanten (aus app/globals.css abgeleitet)
  Person.tsx        Wiederverwendbare, minimalistische Figuren (sitzend, stehend,
                     gehend, entspannt) mit variabler Haut-/Haarfarbe & -stil
  useInView.ts       Scroll-in-View-Hook + Linien-Zeichnen-Utility
  <Szene>.tsx        Eine Komponente pro Themenseite (siehe unten)

components/ScrollReveal.tsx   Allgemeiner „erscheint beim Scrollen“-Wrapper,
                               verwendet auf allen Textblöcken/Karten
```

**Stil:** organische Formen, weiche Linien, reduzierte Farbpalette (Aubergine/Pflaume,
Mauve, Terracotta, Cremeweiss – identisch mit der Markenpalette der Website),
gesichtslose, bewusst einfache Figuren in unterschiedlichen Haut- und Haartönen.
Kein Text in den Illustrationen.

**Animation:** Elemente erscheinen sanft beim Scrollen ins Bild (Fade + leichtes
Anheben), Verbindungslinien zeichnen sich selbst (`stroke-dashoffset`), einzelne
Elemente reagieren auf denselben Trigger versetzt (Stagger). Alles respektiert
`prefers-reduced-motion`: Ist reduzierte Bewegung aktiviert, erscheinen alle Elemente
sofort vollständig sichtbar, ohne Animation.

## Die acht Szenen

| Komponente | Verwendet auf | Zentrale Aussage |
|---|---|---|
| `HausaufgabenKinderIllustration` | Hausaufgaben Kinder | Struktur statt Chaos – Kind arbeitet konzentriert, Elternteil begleitet statt kontrolliert |
| `HausaufgabenJugendlicheIllustration` | Hausaufgaben Jugendliche | Weniger Ablenkung, mehr Fokus – Smartphone bewusst beiseitegelegt |
| `PruefungsangstIllustration` | Prüfungsangst | Von Unsicherheit zu mehr Sicherheit – zerstreute Gedanken lösen sich auf, ruhige Struktur entsteht (bewusst nicht dramatisch) |
| `LernstrategieIllustration` | Lernstrategien | Nicht mehr lernen, sondern cleverer lernen – Lernmaterialien geordnet statt verstreut |
| `WorkshopIllustration` | Workshop «Clever lernen» | Gemeinsam Neues ausprobieren, nicht im Wettbewerb |
| `VortragIllustration` | Vortrag «Mit Kindern lernen» | Eine kleine, aufmerksame Zuhörerschaft, kein grosses Podium |
| `PhilosophieIllustration` | Philosophie | Jeder Lernweg ist einzigartig wie ein Fingerabdruck – die Wirbel lösen sich zu einem individuellen Weg |
| `GrowthPathIllustration` | Startseite, „Was Lerncoaching bedeutet" | Fortschritt Schritt für Schritt, nicht an Noten gemessen |

`ProcessSteps` (Ablauf-Schritte) und `TopicList` (Themen-Checklisten) sind zusätzlich
direkt animiert: Verbindungslinien zeichnen sich, Kreise "poppen" ein, Häkchen
erscheinen versetzt.

## Zentraler Style-Prompt (Fallback für spätere KI-/Illustrator-Beauftragung)

Falls später doch echte KI-generierte oder von einer Illustratorin beauftragte Bilder
gewünscht sind, hier der Style-Prompt, der zum aktuellen System passt:

> Modern Swiss editorial illustration for a premium learning-coaching brand, warm
> minimal aesthetic, soft organic shapes, flat and simple (no gradients, no 3D, no
> photorealism), calm muted color palette of deep aubergine/plum (#4a1e45), dusty
> mauve (#9b7c9e), warm terracotta (#c97c4b) and cream (#faf6ee), subtle hand-drawn
> character, faceless or minimally-featured friendly figures, natural everyday
> situations around learning, lots of negative space, sophisticated but approachable,
> no text inside the image, no exaggerated cartoon style, no generic AI aesthetic, no
> stock-photo composition. Diverse skin tones and hairstyles across the set.

### Szenen-Prompts (denselben Style-Prompt voranstellen)

1. **Hausaufgaben Kinder:** "A child sitting calmly at an organised desk with a
   notebook, a small checklist card and a pencil, a parent standing a little apart in
   the background, supportive not hovering. Mood: structure instead of chaos."
2. **Hausaufgaben Jugendliche:** "A teenager focused on homework at a desk, a
   smartphone lying face-down and out of reach in the corner, a notebook and pen in
   focus. Mood: distraction set aside, not fought."
3. **Prüfungsangst:** "A calm seated figure; on one side a few small, soft, fading
   scribble shapes suggesting scattered thoughts; on the other side a steady gentle
   wave line and a small checkmark badge suggesting calm. Nothing dramatic or
   frightening — no storm imagery, no distressed face."
4. **Lernstrategien:** "A flat-lay arrangement of study tools — a closed book, a
   small mind-map of connected dots, two flashcards, a small geometry sketch card,
   two note cards — neatly organised, connected, not scattered."
5. **Workshop:** "A small diverse group of three children sitting together at a
   shared table with cards and notes, collaborative and relaxed, not competitive."
6. **Vortrag:** "A small attentive audience of four adults (parents/teachers) facing
   a simple speaker's stand, approachable scale, not a big stage."
7. **Philosophie:** "Concentric fingerprint-like ridge lines that gradually loosen
   into a single flowing path, with a small figure walking along the path at the
   end. Metaphor: every learning path is as unique as a fingerprint."
8. **Fortschritt / Startseite:** "A young plant growing from soil, stem drawn as a
   single continuous line, two pairs of simple leaves, a soft bloom at the top.
   Progress shown as growth, not as a grade or score."

## Weiterentwickeln

Neue Szene hinzufügen: Datei in `components/illustrations/` anlegen, `tokens.ts` für
Farben und ggf. `Person.tsx`-Figuren wiederverwenden, `useInView` + `draw()` für
Scroll-Animation nutzen, dann in der Zielseite über `<ContentSection illustration={…}>`
einbinden (ersetzt die `image`-Prop).
