"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the referenced element has scrolled into view (and stays true
 * afterwards — illustrations should settle, not replay). Starts already
 * "true" for users who prefer reduced motion, and false only briefly during
 * hydration otherwise, so there is no permanent invisible state without JS.
 */
export function useInView<T extends HTMLElement | SVGSVGElement>(
  options: IntersectionObserverInit = { threshold: 0.2 },
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // One-time sync with a browser API on mount (SSR can't know this),
      // not a reactive value — intentionally not deferred to a callback.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

/** Generously long so it always exceeds real path length — see draw(). */
export const LINE_LENGTH = 1500;

/** Inline style for a path that draws itself in once `inView` is true. */
export function draw(inView: boolean, delayMs = 0) {
  return {
    strokeDasharray: LINE_LENGTH,
    strokeDashoffset: inView ? 0 : LINE_LENGTH,
    transition: `stroke-dashoffset 1.4s ease ${delayMs}ms`,
  } as const;
}
