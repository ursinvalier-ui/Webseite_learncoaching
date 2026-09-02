import { FEATHER_PATH, FEATHER_SPINE } from "@/components/Logo";

// The very first thing a visitor sees: the name centered on the page's own
// flowing background (see the gradient wrapper in app/page.tsx), which is
// darkest right here and lightens as the page is scrolled. No separate
// background or fade of its own — it's simply the top of that one flow, so
// it scrolls away like any other section instead of needing its own effect.
export function IntroCurtain() {
  return (
    <section className="relative flex h-dvh items-center justify-center overflow-hidden">
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
