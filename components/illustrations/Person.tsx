type HairStyle = "short" | "wavy" | "bun" | "curly" | "swoop";

type PersonProps = {
  x?: number;
  y?: number;
  scale?: number;
  skinColor: string;
  hairColor: string;
  hairStyle?: HairStyle;
  outfitColor: string;
};

const HEAD_CX = 0;
const HEAD_CY = -15;
const HEAD_R = 12;

/** Hair as a cap layered under the head circle, so alignment is automatic
 * regardless of pose — only the head/neck below it ever needs positioning. */
function Hair({ style, color }: { style: HairStyle; color: string }) {
  const cx = HEAD_CX;
  const cy = HEAD_CY;
  switch (style) {
    case "wavy":
      return (
        <>
          <circle cx={cx} cy={cy - 3} r={HEAD_R + 2.5} fill={color} />
          <path d={`M${cx - 13} ${cy + 2} C${cx - 16} ${cy + 10} ${cx - 12} ${cy + 16} ${cx - 9} ${cy + 12} C${cx - 11} ${cy + 7} ${cx - 12} ${cy + 3} ${cx - 13} ${cy + 2} Z`} fill={color} />
          <path d={`M${cx + 13} ${cy + 2} C${cx + 16} ${cy + 10} ${cx + 12} ${cy + 16} ${cx + 9} ${cy + 12} C${cx + 11} ${cy + 7} ${cx + 12} ${cy + 3} ${cx + 13} ${cy + 2} Z`} fill={color} />
        </>
      );
    case "bun":
      return (
        <>
          <circle cx={cx} cy={cy - 2} r={HEAD_R + 1.5} fill={color} />
          <circle cx={cx} cy={cy - HEAD_R - 4} r={4.6} fill={color} />
        </>
      );
    case "curly":
      return (
        <>
          <circle cx={cx} cy={cy - 2} r={HEAD_R + 2} fill={color} />
          <circle cx={cx - 11} cy={cy - 4} r={5} fill={color} />
          <circle cx={cx + 11} cy={cy - 4} r={5} fill={color} />
          <circle cx={cx - 6} cy={cy - 11} r={5} fill={color} />
          <circle cx={cx + 6} cy={cy - 11} r={5} fill={color} />
          <circle cx={cx} cy={cy - 13} r={5} fill={color} />
        </>
      );
    case "swoop":
      return (
        <>
          <circle cx={cx - 1} cy={cy - 3} r={HEAD_R + 2} fill={color} />
          <path d={`M${cx + 8} ${cy - HEAD_R} C${cx + 16} ${cy - HEAD_R + 2} ${cx + 15} ${cy - 1} ${cx + 7} ${cy - 3} Z`} fill={color} />
        </>
      );
    case "short":
    default:
      return <circle cx={cx} cy={cy - 3} r={HEAD_R + 1.5} fill={color} />;
  }
}

function Head({ skinColor, hairColor, hairStyle }: Pick<PersonProps, "skinColor" | "hairColor" | "hairStyle">) {
  return (
    <>
      <Hair style={hairStyle ?? "short"} color={hairColor} />
      <rect x={HEAD_CX - 4.5} y={HEAD_CY + HEAD_R - 4} width="9" height="10" rx="4" fill={skinColor} />
      <circle cx={HEAD_CX} cy={HEAD_CY} r={HEAD_R} fill={skinColor} />
    </>
  );
}

/** A person sitting at a desk, forearm resting forward. */
export function PersonAtDesk({ x = 0, y = 0, scale = 1, skinColor, hairColor, hairStyle, outfitColor }: PersonProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-16 30 C-18 8 -10 -4 0 -4 C10 -4 18 8 16 30 Z" fill={outfitColor} />
      <path d="M9 12 C18 15 24 15 30 12" stroke={outfitColor} strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="31" cy="12" r="4.2" fill={skinColor} />
      <Head skinColor={skinColor} hairColor={hairColor} hairStyle={hairStyle} />
    </g>
  );
}

/** A standing person, arms relaxed — for group/audience scenes. */
export function PersonStanding({ x = 0, y = 0, scale = 1, skinColor, hairColor, hairStyle, outfitColor }: PersonProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-14 44 C-17 14 -12 -4 0 -4 C12 -4 17 14 14 44 Z" fill={outfitColor} />
      <Head skinColor={skinColor} hairColor={hairColor} hairStyle={hairStyle} />
    </g>
  );
}

/** A figure in motion along a path/journey — a simple upright silhouette
 * (deliberately not a literal mid-stride pose, which reads poorly at small
 * sizes) plus a couple of soft trailing motion lines to suggest movement.
 * Rotate the whole group at the call site to follow the path's tangent. */
export function PersonWalking({ x = 0, y = 0, scale = 1, skinColor, hairColor, hairStyle, outfitColor }: PersonProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-16 30 C-19 25 -19 15 -14 10"
        stroke={outfitColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M-21 33 C-24 27 -24 19 -20 15"
        stroke={outfitColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />
      <path d="M-13 40 C-16 16 -10 -4 0 -4 C10 -4 16 16 13 40 Z" fill={outfitColor} />
      <Head skinColor={skinColor} hairColor={hairColor} hairStyle={hairStyle} />
    </g>
  );
}

/** Relaxed, cross-legged sitting figure — calm / resolved states. */
export function PersonRelaxed({ x = 0, y = 0, scale = 1, skinColor, hairColor, hairStyle = "wavy", outfitColor }: PersonProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-19 24 C-19 30 -10 33 0 33 C10 33 19 30 19 24 C19 19 10 15 0 15 C-10 15 -19 19 -19 24 Z" fill={outfitColor} />
      <path d="M-13 17 C-15 3 -9 -4 0 -4 C9 -4 15 3 13 17 Z" fill={outfitColor} />
      <Head skinColor={skinColor} hairColor={hairColor} hairStyle={hairStyle} />
    </g>
  );
}
