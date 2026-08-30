"use client";

import { useInView, draw } from "./useInView";
import { canvas, mauveDark, plum, surface, terracotta, terracottaStrong } from "./tokens";

/** Fortschritt entsteht Schritt für Schritt: a plant growing, rather than a
 * grade or score, as the visual measure of progress. */
export function GrowthPathIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  const leaf = (transform: string, delay: number, color: string) => (
    <path
      d="M0 0 C14 -4 22 -14 20 -26 C6 -24 -2 -12 0 0 Z"
      fill={color}
      transform={transform}
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: inView ? 1 : 0,
      }}
    />
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Eine wachsende Pflanze als Sinnbild für Fortschritt Schritt für Schritt."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="260" cy="120" r="140" fill={canvas} opacity="0.55" />

      <line x1="70" y1="270" x2="330" y2="270" stroke={mauveDark} strokeWidth="2" opacity="0.25" />

      <path
        d="M200 270 C200 220 196 170 200 100"
        stroke={plum}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        style={draw(inView, 0)}
      />

      {leaf("translate(200 220) rotate(-20)", 700, terracotta)}
      {leaf("translate(200 220) scale(-1,1) rotate(-20)", 850, mauveDark)}
      {leaf("translate(200 160) rotate(-16)", 1000, mauveDark)}
      {leaf("translate(200 160) scale(-1,1) rotate(-16)", 1150, terracotta)}

      <g
        style={{
          transition: "opacity 0.7s ease 1400ms, transform 0.7s ease 1400ms",
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1)" : "scale(0.5)",
          transformOrigin: "200px 98px",
        }}
      >
        <circle cx="200" cy="98" r="14" fill={terracottaStrong} opacity="0.9" />
        <circle cx="200" cy="98" r="22" fill={terracottaStrong} opacity="0.18" />
      </g>
    </svg>
  );
}
