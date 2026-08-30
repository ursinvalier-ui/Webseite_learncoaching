"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  /** "up" fades in while rising slightly; "none" only fades opacity. */
  direction?: "up" | "none";
};

/**
 * Reveals children with a calm, one-time fade when they scroll into view.
 * Renders fully visible immediately if the user prefers reduced motion, and
 * never re-hides content once shown (no distracting repeat animation).
 */
export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // One-time sync with a browser API on mount (SSR can't know this),
      // not a reactive value — intentionally not deferred to a callback.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        revealed
          ? "opacity-100 translate-y-0"
          : `opacity-0 ${direction === "up" ? "translate-y-5" : ""}`
      } ${className}`}
      style={{ transitionDelay: revealed ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
