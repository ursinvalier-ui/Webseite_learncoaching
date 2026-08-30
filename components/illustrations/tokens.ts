// Shared visual language for all hand-drawn illustrations, so every scene
// reads as one consistent system rather than unrelated one-off graphics.
// Colors reference the same CSS custom properties as the rest of the site
// (app/globals.css) so illustrations stay in sync if the palette changes.

export const ink = "var(--color-ink)";
export const plum = "var(--color-petrol)";
export const plumStrong = "var(--color-petrol-strong)";
export const mauve = "var(--color-sage)";
export const mauveDark = "var(--color-sage-dark)";
export const terracotta = "var(--color-terracotta)";
export const terracottaStrong = "var(--color-terracotta-strong)";
export const canvas = "var(--color-canvas)";
export const surface = "var(--color-surface)";
export const line = "var(--color-line)";

// A small, deliberately varied set of skin and hair tones used across the
// illustration set so that, taken together, the site depicts a range of
// children/teens/parents rather than one repeated character.
export const skin = {
  light: "#f0c9a6",
  mid: "#c98f5e",
  deep: "#8a5a3b",
} as const;

export const hair = {
  dark: "#2b2420",
  brown: "#6b4a34",
  auburn: terracottaStrong,
  blonde: "#d9b978",
  grayBrown: "#7a6d63",
} as const;

// Sweater/outfit tones drawn from the brand palette (a small nod to the
// real portrait photo's lavender sweater).
export const outfit = {
  plum,
  mauve,
  terracotta,
  mauveDark,
} as const;

export const strokeWidth = 2.5;
export const strokeThin = 1.5;
