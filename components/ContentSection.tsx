import Image from "next/image";
import type { ReactNode } from "react";

type ContentSectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  image?: { src: string; alt: string };
  imageSide?: "left" | "right";
  tone?: "canvas" | "alt";
};

export function ContentSection({
  eyebrow,
  title,
  children,
  image,
  imageSide = "right",
  tone = "canvas",
}: ContentSectionProps) {
  const bg = tone === "alt" ? "bg-canvas-alt" : "bg-canvas";

  return (
    <section className={bg}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className={`grid gap-10 lg:gap-16 ${image ? "lg:grid-cols-2 lg:items-center" : ""}`}
        >
          <div className={image && imageSide === "left" ? "lg:order-2" : ""}>
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-dark">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl sm:text-4xl">{title}</h2>}
            <div className="prose-content mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft">
              {children}
            </div>
          </div>
          {image && (
            <div
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
