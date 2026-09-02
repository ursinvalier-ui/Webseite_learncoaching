import Link from "next/link";
import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export function ServiceCard({ icon, title, description, href, ctaLabel = "Mehr erfahren" }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors hover:border-petrol hover:bg-canvas"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-button bg-petrol text-canvas">
        {icon}
      </div>
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-hand text-lg leading-none text-terracotta-text">
        {ctaLabel}
        <svg
          width="18"
          height="13"
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
      </span>
    </Link>
  );
}
