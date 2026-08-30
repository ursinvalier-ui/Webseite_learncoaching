// Text-based wordmark — no licensed logo file is available yet.
// Replace with the real logo (see MEDIA.md) once supplied.
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const primary = inverted ? "text-canvas" : "text-petrol";
  const accent = inverted ? "text-terracotta" : "text-terracotta-strong";

  return (
    <span className="inline-flex items-center gap-2 font-display text-lg font-semibold leading-none">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className={accent}
      >
        <path
          d="M4 22 Q9 8 14 14 Q19 20 24 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="4" cy="22" r="2.2" fill="currentColor" />
        <circle cx="24" cy="6" r="2.2" fill="currentColor" />
      </svg>
      <span className={primary}>
        Lerncoaching <span className="font-normal opacity-90">Engeli</span>
      </span>
    </span>
  );
}
