"use client";

import { PersonWalking } from "./Person";
import { useInView, draw } from "./useInView";
import { canvas, ink, plum, surface, skin, hair, outfit, terracottaStrong } from "./tokens";

/**
 * Jeder Lernweg ist einzigartig wie ein Fingerabdruck: concentric ridge
 * lines gradually loosen into a single flowing path that a small figure
 * walks — the individual pattern becoming a personal way forward.
 */
export function PhilosophieIllustration() {
  const { ref, inView } = useInView<SVGSVGElement>();

  const rings = [18, 30, 42, 54, 66, 78];

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 320"
      className="h-full w-full"
      role="img"
      aria-label="Ein Fingerabdruck-Muster, das sich zu einem einzelnen, individuellen Lernweg entfaltet."
    >
      <rect width="400" height="320" fill={surface} />
      <circle cx="140" cy="180" r="150" fill={canvas} opacity="0.5" />

      {/* fingerprint ridges */}
      <g style={{ transition: "opacity 0.8s ease", opacity: inView ? 0.9 : 0.55 }}>
        {rings.map((r, i) => (
          <circle
            key={r}
            cx="120"
            cy="180"
            r={r}
            fill="none"
            stroke={i % 2 === 0 ? plum : terracottaStrong}
            strokeWidth={2}
            strokeDasharray={`${r * 5.6} ${8 + i * 1.5}`}
            opacity={0.55 - i * 0.06}
          />
        ))}
      </g>

      {/* the ridge that unfurls into a path */}
      <path
        d="M186 152 C230 130 260 150 270 110 C280 72 320 66 344 90"
        stroke={terracottaStrong}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={draw(inView, 300)}
      />
      {[
        [230, 132],
        [278, 96],
      ].map(([mx, my], i) => (
        <circle
          key={i}
          cx={mx}
          cy={my}
          r="4"
          fill={terracottaStrong}
          style={{
            transition: `opacity 0.5s ease ${900 + i * 250}ms, transform 0.5s ease ${900 + i * 250}ms`,
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.4)",
            transformOrigin: `${mx}px ${my}px`,
          }}
        />
      ))}

      <g
        style={{
          transition: "opacity 0.6s ease 1400ms, transform 0.6s ease 1400ms",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(6px)",
        }}
      >
        <PersonWalking x={344} y={62} scale={1.05} skinColor={skin.mid} hairColor={hair.auburn} hairStyle="wavy" outfitColor={outfit.plum} />
      </g>

      <circle cx="120" cy="180" r="3.5" fill={ink} opacity="0.5" />
    </svg>
  );
}
