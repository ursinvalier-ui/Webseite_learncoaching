import type { ReactNode } from "react";

type PricingCardProps = {
  title: string;
  price: string;
  unit?: string;
  details: string[];
  footnote?: ReactNode;
};

export function PricingCard({ title, price, unit, details, footnote }: PricingCardProps) {
  return (
    <div className="rounded-card border-2 border-petrol bg-surface p-8">
      <h3 className="text-xl">{title}</h3>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-5xl text-petrol">{price}</span>
        {unit && <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">{unit}</span>}
      </p>
      <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm leading-relaxed text-ink-soft">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      {footnote && <div className="mt-6 text-xs leading-relaxed text-ink-soft">{footnote}</div>}
    </div>
  );
}
