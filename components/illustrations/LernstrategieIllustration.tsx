"use client";

import { useInView, draw } from "./useInView";
import { canvas, ink, line, plum, surface, terracotta, terracottaStrong, mauve, mauveDark } from "./tokens";

/** Nicht mehr lernen – cleverer lernen: a small flat-lay of organised study
 * tools (flashcards, a mind map, a book, a maths sketch) settling neatly
 * into place, each piece connected rather than scattered. */
export function LernstrategieIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  const settle = (delay: number) => ({
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0px, 0px)" : "translate(0px, 10px)",
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Verschiedene Lernmaterialien wie Karteikarten, Mindmap, Buch und Notizen, übersichtlich angeordnet."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="70" cy="60" r="90" fill={canvas} opacity="0.55" />
      <circle cx="330" cy="270" r="80" fill={canvas} opacity="0.5" />

      {/* book */}
      <g style={settle(0)}>
        <rect x="46" y="196" width="70" height="90" rx="6" fill={plum} />
        <rect x="46" y="196" width="70" height="90" rx="6" fill="none" stroke={ink} strokeOpacity="0.08" />
        <line x1="81" y1="200" x2="81" y2="282" stroke={canvas} strokeOpacity="0.35" strokeWidth="1.5" />
      </g>

      {/* mind map */}
      <g style={settle(150)}>
        {[
          [206, 130],
          [270, 100],
          [270, 172],
          [210, 190],
        ].map(([nx, ny], i) => (
          <path
            key={i}
            d={`M232 150 L${nx} ${ny}`}
            stroke={mauveDark}
            strokeWidth="1.8"
            strokeLinecap="round"
            style={draw(inView, 400 + i * 180)}
          />
        ))}
        <circle cx="232" cy="150" r="16" fill={terracottaStrong} />
        {[
          [206, 130, 7],
          [270, 100, 6],
          [270, 172, 6],
          [210, 190, 6],
        ].map(([nx, ny, r], i) => (
          <circle key={i} cx={nx} cy={ny} r={r} fill={mauve} />
        ))}
      </g>

      {/* flashcards, fanned */}
      <g style={settle(280)}>
        <rect x="150" y="216" width="66" height="44" rx="6" fill={canvas} stroke={line} strokeWidth="1.5" transform="rotate(-7 183 238)" />
        <rect x="160" y="222" width="66" height="44" rx="6" fill={canvas} stroke={terracotta} strokeWidth="1.5" transform="rotate(4 193 244)" />
        <g transform="translate(178 234)">
          <circle r="9" fill="none" stroke={terracottaStrong} strokeWidth="1.6" />
          <path d="M-3.5 0 C-3.5 -4 3.5 -4 3.5 0 C3.5 3 0 3 0 6" stroke={terracottaStrong} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>
      </g>

      {/* small maths sketch card */}
      <g style={settle(420)}>
        <rect x="288" y="176" width="70" height="70" rx="10" fill={canvas} stroke={line} strokeWidth="1.5" />
        <path d="M305 226 L305 196 L335 226 Z" fill="none" stroke={plum} strokeWidth="2" strokeLinejoin="round" />
        <path d="M312 226 A7 7 0 0 0 305 219" fill="none" stroke={terracotta} strokeWidth="1.6" />
      </g>

      {/* note lines */}
      <g style={settle(540)}>
        <rect x="130" y="70" width="120" height="16" rx="6" fill={canvas} stroke={line} strokeWidth="1.4" />
        <rect x="138" y="76" width="70" height="3.5" rx="1.75" fill={ink} opacity="0.2" />
        <rect x="130" y="94" width="90" height="16" rx="6" fill={canvas} stroke={line} strokeWidth="1.4" />
        <rect x="138" y="100" width="50" height="3.5" rx="1.75" fill={ink} opacity="0.2" />
      </g>
    </svg>
  );
}
