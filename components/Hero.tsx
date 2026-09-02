import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { PenSignature } from "@/components/PenSignature";

type HeroProps = {
  eyebrow?: string;
  title: string;
  underlineWord?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

// Splits the title on the first occurrence of `underlineWord` so it can be
// wrapped with a hand-drawn ink stroke — the same pen that "signs" the
// visual on the right, tying the two together.
function TitleWithStroke({
  title,
  underlineWord,
}: {
  title: string;
  underlineWord?: string;
}) {
  if (!underlineWord) return <>{title}</>;
  const index = title.indexOf(underlineWord);
  if (index === -1) return <>{title}</>;
  const before = title.slice(0, index);
  const after = title.slice(index + underlineWord.length);
  return (
    <>
      {before}
      <span className="relative inline-block whitespace-nowrap">
        {underlineWord}
        <svg
          viewBox="0 0 200 18"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-[0.28em] w-full text-terracotta-strong sm:-bottom-2"
        >
          <path
            d="M2 11c34-7 130-9 196 1"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {after}
    </>
  );
}

export function Hero({
  eyebrow,
  title,
  underlineWord,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24 lg:px-8">
        <div className="animate-fade-up">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="text-4xl leading-[1.15] sm:text-5xl lg:text-[3.6rem]">
            <TitleWithStroke title={title} underlineWord={underlineWord} />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href={primaryCta.href}
              className="rounded-button bg-petrol px-6 py-3.5 text-base font-semibold text-canvas transition-colors hover:bg-petrol-strong"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="font-hand text-xl text-petrol underline decoration-terracotta-strong decoration-2 underline-offset-4 transition-colors hover:text-petrol-strong"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -rotate-2 rounded-2xl bg-linear-to-br from-petrol to-sage-dark" />
          <PenSignature className="relative -rotate-1 p-6 sm:p-8" />
        </div>
      </div>
    </section>
  );
}
