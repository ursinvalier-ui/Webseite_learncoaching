"use client";

import { PersonRelaxed } from "./Person";
import { useInView, draw } from "./useInView";
import { canvas, ink, skin, hair, outfit, surface, terracottaStrong, mauveDark } from "./tokens";

/**
 * Von Unsicherheit zu mehr Sicherheit — deliberately gentle: no faces, no
 * storm imagery, just scattered thought-marks softening away on one side
 * while a calm, steady rhythm settles in on the other, around one calm
 * seated figure. Nothing here is meant to look distressing.
 */
export function PruefungsangstIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Symbolbild: zerstreute Gedanken lösen sich langsam auf, während sich ruhige, geordnete Gedanken einstellen."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="200" cy="160" r="140" fill={canvas} opacity="0.55" />

      {/* scattered thoughts, softening away */}
      <g
        style={{
          transition: "opacity 1.1s ease, transform 1.1s ease",
          opacity: inView ? 0.18 : 0.75,
          transform: inView ? "translate(-6px, -4px) scale(0.92)" : "translate(0px, 0px) scale(1)",
          transformOrigin: "110px 110px",
        }}
      >
        <path d="M76 96 C68 90 70 78 82 78 C80 70 92 66 98 74 C108 70 116 80 108 88 C116 92 112 104 100 102 C100 110 88 112 84 104 C74 108 68 98 76 96 Z" fill={mauveDark} opacity="0.5" />
        <path d="M140 70 C134 66 136 58 144 58 C142 52 151 49 156 55 C163 52 169 60 163 66 C169 69 166 78 157 76 C157 82 148 83 145 77 C138 80 134 73 140 70 Z" fill={mauveDark} opacity="0.35" />
        <path
          d="M100 128 C100 122 106 120 106 126 C106 130 100 130 101 135"
          stroke={ink}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <circle cx="101" cy="140" r="1.6" fill={ink} opacity="0.4" />
      </g>

      {/* calm, structured rhythm, settling in */}
      <g
        style={{
          transition: "opacity 1s ease 0.3s",
          opacity: inView ? 1 : 0,
        }}
      >
        <circle cx="300" cy="90" r="34" fill="none" stroke={terracottaStrong} strokeWidth="2" opacity="0.35" />
        <path
          d="M272 92 C280 82 288 82 294 92 C300 102 308 102 316 92"
          stroke={terracottaStrong}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          style={draw(inView, 500)}
        />
        <g transform="translate(296 84)">
          <circle r="11" fill={canvas} stroke={terracottaStrong} strokeWidth="1.5" />
          <path d="M-4 0 L-1 3.4 L5 -3.4" stroke={terracottaStrong} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" style={draw(inView, 900)} />
        </g>
      </g>

      <PersonRelaxed x={200} y={230} scale={2.1} skinColor={skin.mid} hairColor={hair.blonde} hairStyle="wavy" outfitColor={outfit.mauve} />
    </svg>
  );
}
