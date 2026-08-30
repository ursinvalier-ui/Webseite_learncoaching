"use client";

import { PersonStanding } from "./Person";
import { useInView } from "./useInView";
import { canvas, ink, skin, hair, outfit, surface, terracottaStrong } from "./tokens";

/** A small, attentive audience of parents and teachers, facing a simple
 * speaker's stand — approachable, not a big stage. */
export function VortragIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  const people = [
    { x: 90, skin: skin.light, hair: hair.brown, style: "wavy" as const, outfit: outfit.mauve },
    { x: 150, skin: skin.deep, hair: hair.dark, style: "bun" as const, outfit: outfit.plum },
    { x: 250, skin: skin.mid, hair: hair.grayBrown, style: "short" as const, outfit: outfit.terracotta },
    { x: 310, skin: skin.light, hair: hair.blonde, style: "curly" as const, outfit: outfit.mauveDark },
  ];

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Eine kleine aufmerksame Zuhörerschaft aus Eltern und Lehrpersonen vor einem einfachen Rednerpult."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="200" cy="70" r="130" fill={canvas} opacity="0.55" />

      {/* speaker's stand + gentle focus arcs */}
      <g
        style={{
          transition: "opacity 0.7s ease",
          opacity: inView ? 1 : 0,
        }}
      >
        <rect x="192" y="150" width="16" height="60" rx="3" fill={ink} opacity="0.18" />
        <path d="M200 150 L200 132" stroke={terracottaStrong} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="200" cy="126" r="4.5" fill={terracottaStrong} />
        <path d="M170 118 A34 34 0 0 1 230 118" stroke={terracottaStrong} strokeWidth="1.6" fill="none" opacity="0.35" />
      </g>

      {people.map((p, i) => (
        <g
          key={p.x}
          style={{
            transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <PersonStanding x={p.x} y={250} scale={1.15} skinColor={p.skin} hairColor={p.hair} hairStyle={p.style} outfitColor={p.outfit} />
        </g>
      ))}
    </svg>
  );
}
