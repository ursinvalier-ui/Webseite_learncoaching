import Link from "next/link";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="bg-petrol">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-canvas text-3xl sm:text-4xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-canvas/80">{description}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Link
            href={primaryCta.href}
            className="rounded-button bg-terracotta-strong px-6 py-3.5 text-base font-semibold text-canvas transition-colors hover:bg-terracotta"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="font-hand text-xl text-canvas underline decoration-terracotta-light decoration-2 underline-offset-4 transition-colors hover:text-terracotta-light"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
