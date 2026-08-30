"use client";

import { PersonAtDesk, PersonStanding } from "./Person";
import { useInView, draw } from "./useInView";
import { canvas, ink, line, plum, skin, hair, outfit, surface } from "./tokens";

/** Struktur statt Chaos: a child works calmly at an organised desk while a
 * parent stays nearby, supportive rather than looming over the task. */
export function HausaufgabenKinderIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Ein Kind arbeitet konzentriert an einem aufgeräumten Schreibtisch, ein Elternteil steht unterstützend im Hintergrund."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="330" cy="60" r="90" fill={canvas} opacity="0.6" />
      <circle cx="40" cy="280" r="70" fill={canvas} opacity="0.5" />

      {/* supportive parent, a little apart */}
      <g
        style={{
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          opacity: inView ? 0.9 : 0,
          transform: inView ? "translateY(0)" : "translateY(6px)",
        }}
      >
        <PersonStanding x={330} y={150} scale={1.05} skinColor={skin.mid} hairColor={hair.grayBrown} hairStyle="bun" outfitColor={outfit.mauveDark} />
      </g>

      {/* desk */}
      <rect x="70" y="215" width="230" height="10" rx="4" fill={ink} opacity="0.15" />
      <rect x="90" y="225" width="8" height="55" fill={ink} opacity="0.12" />
      <rect x="262" y="225" width="8" height="55" fill={ink} opacity="0.12" />

      {/* organised desk items */}
      <g
        style={{
          transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {/* open book */}
        <path d="M108 212 C108 195 122 190 138 192 L138 214 C122 212 108 216 108 212 Z" fill={plum} />
        <path d="M168 212 C168 195 154 190 138 192 L138 214 C154 212 168 216 168 212 Z" fill={outfit.terracotta} />
        {/* small checklist card */}
        <rect x="190" y="184" width="52" height="34" rx="6" fill={canvas} stroke={line} strokeWidth="1.5" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(198 ${196 + i * 10})`}>
            <rect width="8" height="8" rx="2.5" fill="none" stroke={ink} strokeOpacity="0.35" strokeWidth="1.4" />
            <path
              d="M1.5 4 L3.3 6 L6.5 2"
              stroke={outfit.terracotta}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              style={draw(inView, 700 + i * 220)}
            />
            <rect x="12" y="1.5" width="26" height="5" rx="2.5" fill={ink} opacity="0.15" />
          </g>
        ))}
        {/* pencil */}
        <rect x="252" y="196" width="34" height="6" rx="3" fill={outfit.terracotta} transform="rotate(-18 252 196)" />
      </g>

      {/* child at desk */}
      <PersonAtDesk x={150} y={210} scale={1.6} skinColor={skin.light} hairColor={hair.brown} hairStyle="curly" outfitColor={outfit.plum} />
    </svg>
  );
}
