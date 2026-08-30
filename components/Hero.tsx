import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: { src: string; alt: string };
};

export function Hero({ eyebrow, title, description, primaryCta, secondaryCta, image }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div className="animate-fade-up">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-sage-dark">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="rounded-full bg-petrol px-6 py-3.5 text-base font-semibold text-canvas shadow-soft transition-colors hover:bg-petrol-strong"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-line bg-canvas px-6 py-3.5 text-base font-semibold text-petrol transition-colors hover:bg-surface"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative aspect-[8/5] overflow-hidden rounded-card shadow-soft-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
