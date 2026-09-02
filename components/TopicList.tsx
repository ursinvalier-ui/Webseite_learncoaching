"use client";

import { Eyebrow } from "@/components/Eyebrow";
import { IconCheck } from "@/components/icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useInView } from "@/components/illustrations/useInView";

type TopicGroup = {
  title: string;
  items: string[];
};

export function TopicList({
  eyebrow,
  title,
  groups,
  note,
}: {
  eyebrow?: string;
  title?: string;
  groups: TopicGroup[];
  note?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <ScrollReveal className="mb-10 max-w-2xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2 className="text-3xl sm:text-4xl">{title}</h2>}
          </ScrollReveal>
        )}
        <div ref={ref} className={`grid gap-6 ${groups.length > 1 ? "md:grid-cols-2" : ""}`}>
          {groups.map((group) => (
            <div key={group.title} className="rounded-card border border-line bg-surface p-7">
              <h3 className="text-xl">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                    <IconCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-strong"
                      style={{
                        transition: `transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 55}ms, opacity 0.35s ease ${i * 55}ms`,
                        transform: inView ? "scale(1)" : "scale(0.3)",
                        opacity: inView ? 1 : 0,
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {note && <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">{note}</p>}
      </div>
    </section>
  );
}
