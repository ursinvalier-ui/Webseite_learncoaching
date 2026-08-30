"use client";

import { PersonAtDesk } from "./Person";
import { useInView, draw } from "./useInView";
import { canvas, ink, line, skin, hair, outfit, surface, terracotta } from "./tokens";

/** Weniger Ablenkung, mehr Fokus: the phone sits face-down and out of reach
 * while a teen works — distraction visibly set aside, not fought. */
export function HausaufgabenJugendlicheIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Ein Jugendlicher lernt fokussiert, das Smartphone liegt beiseite ausser Reichweite."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="60" cy="50" r="80" fill={canvas} opacity="0.55" />
      <circle cx="340" cy="270" r="90" fill={canvas} opacity="0.5" />

      {/* desk */}
      <rect x="70" y="215" width="230" height="10" rx="4" fill={ink} opacity="0.15" />
      <rect x="90" y="225" width="8" height="55" fill={ink} opacity="0.12" />
      <rect x="262" y="225" width="8" height="55" fill={ink} opacity="0.12" />

      {/* phone, moved aside + dimmed */}
      <g
        style={{
          transition: "transform 1s ease, opacity 1s ease",
          transform: inView ? "translate(0px, 0px)" : "translate(-38px, -6px)",
          opacity: inView ? 0.45 : 1,
        }}
      >
        <rect x="280" y="196" width="22" height="34" rx="5" fill={ink} />
        <rect x="284" y="201" width="14" height="21" rx="1.5" fill={surface} />
      </g>

      {/* notebook + pen, in focus */}
      <g
        style={{
          transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <rect x="150" y="188" width="70" height="30" rx="4" fill={canvas} stroke={line} strokeWidth="1.5" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="158" y={196 + i * 5} width={i === 3 ? 34 : 54} height="2.4" rx="1.2" fill={ink} opacity="0.18" />
        ))}
        <rect x="226" y="200" width="30" height="5.5" rx="2.75" fill={terracotta} transform="rotate(-14 226 200)" />
      </g>

      {/* small focus glow above the teen's head */}
      <circle
        cx="150"
        cy="118"
        r="14"
        fill="none"
        stroke={terracotta}
        strokeWidth="2"
        style={{
          transition: "opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s",
          opacity: inView ? 0.5 : 0,
          transform: inView ? "scale(1)" : "scale(0.6)",
          transformOrigin: "150px 118px",
        }}
      />

      <PersonAtDesk x={150} y={210} scale={1.65} skinColor={skin.deep} hairColor={hair.dark} hairStyle="swoop" outfitColor={outfit.terracotta} />
    </svg>
  );
}
