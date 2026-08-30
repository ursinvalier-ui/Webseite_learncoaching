"use client";

import { PersonAtDesk } from "./Person";
import { useInView, draw } from "./useInView";
import { canvas, ink, line, skin, hair, outfit, surface, terracottaStrong } from "./tokens";

/** Gemeinsam Neues ausprobieren: a small, diverse group of children working
 * around a shared table — collaborative, not competitive. */
export function WorkshopIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Eine kleine Gruppe von Kindern arbeitet gemeinsam am Tisch, mit Karten und Notizen."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="200" cy="80" r="120" fill={canvas} opacity="0.55" />

      {/* shared table */}
      <rect x="60" y="222" width="280" height="10" rx="4" fill={ink} opacity="0.14" />
      <rect x="80" y="232" width="8" height="50" fill={ink} opacity="0.1" />
      <rect x="312" y="232" width="8" height="50" fill={ink} opacity="0.1" />

      {/* shared cards on the table */}
      <g
        style={{
          transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(6px)",
        }}
      >
        <rect x="164" y="200" width="34" height="24" rx="5" fill={canvas} stroke={line} strokeWidth="1.4" transform="rotate(-6 181 212)" />
        <rect x="196" y="204" width="34" height="24" rx="5" fill={canvas} stroke={terracottaStrong} strokeWidth="1.4" transform="rotate(5 213 216)" />
        <path
          d="M182 210 C185 206 191 206 194 210"
          stroke={terracottaStrong}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          style={draw(inView, 700)}
        />
      </g>

      <PersonAtDesk x={130} y={222} scale={1.3} skinColor={skin.light} hairColor={hair.auburn} hairStyle="curly" outfitColor={outfit.terracotta} />
      <g transform="scale(-1,1) translate(-400 0)">
        <PersonAtDesk x={130} y={222} scale={1.3} skinColor={skin.deep} hairColor={hair.dark} hairStyle="short" outfitColor={outfit.plum} />
      </g>
      <PersonAtDesk x={200} y={190} scale={1.1} skinColor={skin.mid} hairColor={hair.blonde} hairStyle="bun" outfitColor={outfit.mauve} />
    </svg>
  );
}
