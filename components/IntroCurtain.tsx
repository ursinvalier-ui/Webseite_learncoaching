"use client";

import { useEffect, useState } from "react";
import { FEATHER_PATH, FEATHER_SPINE } from "@/components/Logo";

// The very first thing a visitor sees: the name on a solid plum field,
// echoing the header's tiny feather mark at full size. Fades out in step
// with the scroll — by the time it has scrolled out of the viewport it has
// already faded to nothing, so the reveal reads as one continuous motion
// rather than a section boundary. Skips the fade for prefers-reduced-motion
// (it stays fully visible and simply scrolls away like any other section).
export function IntroCurtain() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const fadeDistance = window.innerHeight * 0.8;
        const progress = Math.min(1, Math.max(0, window.scrollY / fadeDistance));
        setOpacity(1 - progress);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative flex h-dvh items-center justify-center overflow-hidden bg-petrol"
      style={{ opacity }}
    >
      <div className="flex flex-col items-center px-6 text-center">
        <svg
          width="44"
          height="53"
          viewBox="0 0 100 120"
          fill="none"
          aria-hidden="true"
          className="mb-6 text-canvas sm:mb-8"
        >
          <path d={FEATHER_PATH} fill="currentColor" />
          <path
            d={FEATHER_SPINE}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-terracotta-light"
            opacity={0.7}
          />
        </svg>
        <p className="font-body leading-[0.95] text-canvas">
          <span className="block text-[clamp(2.2rem,8vw,4.5rem)] font-light tracking-tight">
            Lerncoaching
          </span>
          <span className="block text-[clamp(2.2rem,8vw,4.5rem)] font-bold tracking-tight">
            Engeli
          </span>
        </p>
      </div>
    </section>
  );
}
