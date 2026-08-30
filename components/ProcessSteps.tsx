"use client";

import { useInView } from "@/components/illustrations/useInView";

type Step = { title: string; description?: string };

const STEP_DELAY = 160;

export function ProcessSteps({ steps }: { steps: Step[] }) {
  const { ref, inView } = useInView<HTMLOListElement>({ threshold: 0.25 });

  return (
    <ol ref={ref} className="grid gap-6 lg:grid-cols-5 lg:gap-4">
      {steps.map((step, index) => {
        const delay = index * STEP_DELAY;
        return (
          <li key={step.title} className="relative flex gap-4 lg:flex-col lg:gap-3">
            <div className="flex flex-col items-center">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-petrol font-display text-sm font-semibold text-canvas"
                style={{
                  transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms, opacity 0.4s ease ${delay}ms`,
                  transform: inView ? "scale(1)" : "scale(0.4)",
                  opacity: inView ? 1 : 0,
                }}
              >
                {index + 1}
              </span>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`mt-2 w-px flex-1 origin-top bg-line transition-transform duration-500 ease-out lg:mt-3 lg:h-px lg:w-full lg:flex-none lg:origin-left ${
                    inView ? "scale-y-100 lg:scale-x-100" : "scale-y-0 lg:scale-x-0"
                  }`}
                  style={{ transitionDelay: `${delay + 120}ms` }}
                />
              )}
            </div>
            <div
              className="pb-6 lg:pb-0"
              style={{
                transition: `opacity 0.5s ease ${delay + 80}ms, transform 0.5s ease ${delay + 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(6px)",
              }}
            >
              <p className="font-display text-base font-semibold text-petrol">{step.title}</p>
              {step.description && (
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
