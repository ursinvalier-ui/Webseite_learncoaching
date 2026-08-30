// Generates on-brand placeholder illustrations for every image slot that
// currently has no licensed real photo available (see MEDIA.md). These are
// original, generated SVGs — not stock photography — and are clearly
// labelled in the corner so nobody mistakes them for final assets.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

const palette = {
  canvas: "#faf6ee",
  sand: "#f1e9da",
  line: "#e4dac8",
  petrol: "#4a1e45",
  petrolStrong: "#341530",
  sage: "#9b7c9e",
  sageDark: "#6b4770",
  terracotta: "#c97c4b",
  ink: "#2b2a26",
};

const ICONS = {
  backpack: `<path d="M-30,10 q0,-35 30,-35 q30,0 30,35 v30 q0,8 -8,8 h-44 q-8,0 -8,-8 z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M-14,-25 v-8 q14,-10 28,0 v8" fill="none" stroke="currentColor" stroke-width="3"/><path d="M-30,0 h60" stroke="currentColor" stroke-width="2.5"/><rect x="-10" y="10" width="20" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>`,
  compass: `<circle cx="0" cy="0" r="34" fill="none" stroke="currentColor" stroke-width="3"/><path d="M-14,14 L6,-4 L14,-14 L-6,4 Z" fill="currentColor" opacity="0.85"/><circle cx="0" cy="0" r="3" fill="currentColor"/>`,
  heart: `<path d="M0,26 C-26,6 -30,-16 -12,-24 C-2,-28 4,-22 0,-14 C-4,-22 2,-28 12,-24 C30,-16 26,6 0,26 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>`,
  bulb: `<circle cx="0" cy="-6" r="20" fill="none" stroke="currentColor" stroke-width="3"/><path d="M-8,14 h16 M-6,20 h12 M-9,-6 q9,10 18,0" fill="none" stroke="currentColor" stroke-width="2.5"/>`,
  path: `<path d="M-30,24 Q-10,-24 0,0 Q10,24 30,-24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="-30" cy="24" r="4" fill="currentColor"/><circle cx="30" cy="-24" r="4" fill="currentColor"/>`,
  book: `<path d="M-28,-18 q14,-8 28,0 v36 q-14,-8 -28,0 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M28,-18 q-14,-8 -28,0 v36 q14,-8 28,0 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>`,
  group: `<circle cx="-14" cy="-8" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="14" cy="-8" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M-28,22 q0,-16 14,-16 q14,0 14,16" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M0,22 q0,-16 14,-16 q14,0 14,16" fill="none" stroke="currentColor" stroke-width="2.5"/>`,
  podium: `<rect x="-6" y="-24" width="12" height="48" fill="none" stroke="currentColor" stroke-width="3"/><path d="M-24,24 h48" stroke="currentColor" stroke-width="3"/><circle cx="0" cy="-32" r="5" fill="currentColor"/>`,
  portrait: `<circle cx="0" cy="-14" r="16" fill="none" stroke="currentColor" stroke-width="3"/><path d="M-26,30 q0,-24 26,-24 q26,0 26,24" fill="none" stroke="currentColor" stroke-width="3"/>`,
  quote: `<path d="M-24,-8 q0,-14 14,-14 v8 q-6,0 -6,6 h6 v14 h-14 Z" fill="currentColor"/><path d="M6,-8 q0,-14 14,-14 v8 q-6,0 -6,6 h6 v14 h-14 Z" fill="currentColor"/>`,
};

function svg({ id, w, h, icon, seedA, seedB, label }) {
  const gradId = `g-${id}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${seedA}"/>
      <stop offset="100%" stop-color="${seedB}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${gradId})"/>
  <circle cx="${w * 0.82}" cy="${h * 0.18}" r="${Math.min(w, h) * 0.32}" fill="${palette.canvas}" opacity="0.18"/>
  <circle cx="${w * 0.12}" cy="${h * 0.88}" r="${Math.min(w, h) * 0.22}" fill="${palette.petrol}" opacity="0.08"/>
  <g transform="translate(${w / 2}, ${h / 2})" color="${palette.canvas}" opacity="0.85">
    <g transform="scale(${Math.min(w, h) / 130})">${icon}</g>
  </g>
  <g transform="translate(24, ${h - 24})">
    <rect x="0" y="-28" width="${label.length * 6.6 + 24}" height="28" rx="14" fill="${palette.petrolStrong}" opacity="0.82"/>
    <text x="12" y="-9" font-family="Inter, sans-serif" font-size="12" fill="${palette.canvas}" letter-spacing="0.02em">${label}</text>
  </g>
</svg>`;
}

// Only the hero still needs a generated placeholder — the portrait is a
// real photo now (public/images/portrait-seraina.webp, see MEDIA.md), and
// every thematic content page (Hausaufgaben, Prüfungsangst, Lernstrategie,
// Workshop, Vortrag, Philosophie …) uses a custom illustration from
// components/illustrations/ instead of a photo.
const items = [
  { file: "hero-home", w: 1600, h: 1000, icon: ICONS.path, a: palette.petrol, b: palette.sageDark, label: "Platzhalter · Titelbild ergänzen" },
  { file: "og-default", w: 1200, h: 630, icon: ICONS.path, a: palette.petrol, b: palette.sageDark, label: "Lerncoaching Engeli" },
];

for (const item of items) {
  const markup = svg({ id: item.file, w: item.w, h: item.h, icon: item.icon, seedA: item.a, seedB: item.b, label: item.label });
  writeFileSync(join(outDir, `${item.file}.svg`), markup, "utf8");
  console.log(`generated ${item.file}.svg`);
}
