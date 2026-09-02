import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({
  href,
  children,
  tone = "default",
  className = "",
}: {
  href: string;
  children: ReactNode;
  /** "onDark" for use on a solid-plum background. */
  tone?: "default" | "onDark";
  className?: string;
}) {
  const toneClass = tone === "onDark" ? "text-terracotta-light" : "text-terracotta-text";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-hand text-xl leading-none ${toneClass} ${className}`}
    >
      {children}
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        aria-hidden="true"
        className="mt-0.5 transition-transform group-hover:translate-x-1.5"
      >
        <path
          d="M1 7h16M11 1c3 2.4 6 4.6 8 6-2 1.4-5 3.6-8 6"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
