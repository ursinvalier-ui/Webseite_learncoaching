import type { CSSProperties } from "react";

type IconProps = { className?: string; style?: CSSProperties };

const base = "h-6 w-6";

export function IconBackpack({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M6 11c0-3.9 2.7-6 6-6s6 2.1 6 6v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 5V4a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="13" width="4" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconHeart({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M12 20s-7-4.4-9.3-9C1.2 7.7 3 4.6 6.3 4.2c2-.2 3.5.9 5.7 3 2.2-2.1 3.7-3.2 5.7-3 3.3.4 5.1 3.5 3.6 6.8C19 15.6 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBulb({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2.2h5.2c0-1 .4-1.7 1-2.2A6 6 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconCompass({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="m15 9-2 5-4 1 2-5 4-1Z" fill="currentColor" />
    </svg>
  );
}

export function IconGroup({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 20c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPodium({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M12 3v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="5.5" r="1.4" fill="currentColor" />
      <path d="M4 21h16M9 21c0-4 1-7 3-7s3 3 3 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMapPin({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconPhone({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M6.5 3.5 9 8l-2 2c.9 2 2.6 3.7 4.6 4.6l2-2 4.5 2.5c.3 1.6-.7 3.2-2.3 3.5-6.5 1.2-13.5-5.8-12.3-12.3.3-1.6 1.9-2.6 3.5-2.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className = base, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 6.5 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
