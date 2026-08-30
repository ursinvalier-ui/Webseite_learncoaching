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
      className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-petrol text-canvas">
        {icon}
      </div>
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-text">
        {ctaLabel}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    </Link>
  );
}
