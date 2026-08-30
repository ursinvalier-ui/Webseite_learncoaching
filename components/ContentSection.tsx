import Image from "next/image";
import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

type ContentSectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  image?: { src: string; alt: string };
  /** A custom illustration component, used instead of a photo. */
  illustration?: ReactNode;
  imageSide?: "left" | "right";
  tone?: "canvas" | "alt";
};

export function ContentSection({
  eyebrow,
  title,
  children,
  image,
  illustration,
  imageSide = "right",
  tone = "canvas",
}: ContentSectionProps) {
  const bg = tone === "alt" ? "bg-canvas-alt" : "bg-canvas";
  const hasVisual = !!image || !!illustration;

  return (
    <section className={bg}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className={`grid gap-10 lg:gap-16 ${hasVisual ? "lg:grid-cols-2 lg:items-center" : ""}`}
        >
          <ScrollReveal className={hasVisual && imageSide === "left" ? "lg:order-2" : ""}>
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl sm:text-4xl">{title}</h2>}
            <div className="prose-content mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft">
              {children}
            </div>
          </ScrollReveal>
          {illustration && (
            <ScrollReveal
              direction="none"
              className={`relative aspect-[4/3] overflow-hidden rounded-card ${
                imageSide === "left" ? "lg:order-1" : ""
              }`}
            >
              {illustration}
            </ScrollReveal>
          )}
          {!illustration && image && (
            <ScrollReveal
              direction="none"
              className={`relative aspect-[4/3] overflow-hidden rounded-card shadow-soft ${
                imageSide === "left" ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 46vw, 90vw"
                className="object-cover"
              />
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
