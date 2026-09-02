"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useInView } from "@/components/illustrations/useInView";

// The site's one true signature moment: a pen hand-writing the family name
// from the real logo's wordmark, on ruled paper. Mirrors the feather/quill
// mark in Logo.tsx and the "handwritten margin note" motif used elsewhere.
// Reduced motion (and anything before the element is in view) shows the
// finished word immediately — no forced motion, unlike a pure demo.

const WRITE_MS = 2600;
const HOLD_MS = 1600;
const FADE_OUT_MS = 450;
const FADE_IN_MS = 450;
const CYCLE_MS = WRITE_MS + HOLD_MS + FADE_OUT_MS + FADE_IN_MS;
const CLIP_WIDTH = 290;
const PEN_START = { x: 50, y: 195 };
const PEN_END = { x: 330, y: 175 };

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // One-time sync with a browser API on mount (SSR can't know this), not
    // a reactive value — intentionally not deferred to a callback.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function PenSignature({ className = "" }: { className?: string }) {
  const clipId = useId();
  const prefersReduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const clipRectRef = useRef<SVGRectElement>(null);
  const revealRef = useRef<SVGGElement>(null);
  const penRef = useRef<SVGGElement>(null);

  const animate = inView && !prefersReduced;

  useEffect(() => {
    if (!animate) return;
    let raf = 0;
    let start: number | null = null;

    function paint(elapsed: number) {
      let clipWidth: number;
      let opacity: number;
      let pen: { x: number; y: number };

      if (elapsed < WRITE_MS) {
        const t = easeInOutCubic(elapsed / WRITE_MS);
        clipWidth = t * CLIP_WIDTH;
        opacity = 1;
        pen = { x: lerp(PEN_START.x, PEN_END.x, t), y: lerp(PEN_START.y, PEN_END.y, t) };
      } else if (elapsed < WRITE_MS + HOLD_MS) {
        clipWidth = CLIP_WIDTH;
        opacity = 1;
        pen = PEN_END;
      } else if (elapsed < WRITE_MS + HOLD_MS + FADE_OUT_MS) {
        const t = (elapsed - WRITE_MS - HOLD_MS) / FADE_OUT_MS;
        clipWidth = CLIP_WIDTH;
        opacity = 1 - t;
        pen = PEN_END;
      } else {
        const t = (elapsed - WRITE_MS - HOLD_MS - FADE_OUT_MS) / FADE_IN_MS;
        clipWidth = 0;
        opacity = t;
        pen = PEN_START;
      }

      clipRectRef.current?.setAttribute("width", String(clipWidth));
      if (revealRef.current) revealRef.current.style.opacity = String(opacity);
      if (penRef.current) {
        penRef.current.style.opacity = String(opacity);
        penRef.current.setAttribute("transform", `translate(${pen.x} ${pen.y}) rotate(-32)`);
      }
    }

    function tick(timestamp: number) {
      if (start === null) start = timestamp;
      paint((timestamp - start) % CYCLE_MS);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label="Handgeschriebene Notiz: Engeli, auf liniertem Papier"
      >
        <rect x="30" y="60" width="300" height="190" rx="10" fill="var(--color-canvas)" opacity="0.97" />
        <g stroke="var(--color-line)" strokeWidth="1.5">
          <line x1="50" y1="100" x2="310" y2="100" />
          <line x1="50" y1="130" x2="310" y2="130" />
          <line x1="50" y1="160" x2="310" y2="160" />
          <line x1="50" y1="190" x2="310" y2="190" />
          <line x1="50" y1="220" x2="310" y2="220" />
        </g>
        <clipPath id={clipId}>
          <rect ref={clipRectRef} x="40" y="0" width={animate ? 0 : CLIP_WIDTH} height="300" />
        </clipPath>
        <g ref={revealRef} style={{ opacity: animate ? 0 : 1 }}>
          <text
            className="font-hand"
            x="60"
            y="200"
            fontSize="92"
            fontWeight="700"
            fill="var(--color-terracotta-strong)"
            clipPath={`url(#${clipId})`}
          >
            Engeli
          </text>
        </g>
        {animate && (
          <g
            ref={penRef}
            style={{ opacity: 0 }}
            transform={`translate(${PEN_START.x} ${PEN_START.y}) rotate(-32)`}
          >
            <rect x="-5" y="-34" width="7" height="34" rx="3" fill="var(--color-petrol)" />
            <rect x="-5" y="-34" width="7" height="10" rx="3" fill="var(--color-terracotta)" />
            <path d="M-6 0 L1 0 L-2.5 9 Z" fill="var(--color-ink)" />
          </g>
        )}
      </svg>
    </div>
  );
}
