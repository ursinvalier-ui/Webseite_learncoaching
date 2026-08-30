// Feather mark + wordmark, redrawn as SVG from the supplied logo image
// (deep aubergine/plum feather, "Lerncoaching" light + "Engeli" bold).
const FEATHER_PATH =
  "M18 108C14 90 16 68 28 50C38 35 55 22 78 14C74 24 66 30 58 35C68 32 76 28 82 20C80 32 70 40 60 46C70 44 77 39 82 32C78 44 68 52 57 57C66 55 73 51 77 45C72 56 62 64 50 68C58 66 64 62 68 57C62 68 51 76 39 79C46 77 51 74 55 70C48 79 38 86 27 88C33 86 37 83 40 79C33 88 23 95 18 108Z";
const FEATHER_SPINE = "M18 108C30 78 48 50 78 14";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  const textColor = inverted ? "text-canvas" : "text-ink";
  const iconColor = inverted ? "text-canvas" : "text-petrol";
  const spineColor = inverted ? "text-petrol" : "text-canvas";

  return (
    <span className="inline-flex items-center gap-2.5 font-body leading-none">
      <svg
        width="22"
        height="26"
        viewBox="0 0 100 120"
        fill="none"
        aria-hidden="true"
        className={`shrink-0 ${iconColor}`}
      >
        <path d={FEATHER_PATH} fill="currentColor" />
        <path
          d={FEATHER_SPINE}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={spineColor}
          opacity={0.55}
        />
      </svg>
      <span className={`flex flex-col ${textColor}`}>
        <span className="text-[0.95rem] font-light tracking-tight">Lerncoaching</span>
        <span className="-mt-1 text-[0.95rem] font-bold tracking-tight">Engeli</span>
      </span>
    </span>
  );
}
