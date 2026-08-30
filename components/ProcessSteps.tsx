type Step = { title: string; description?: string };

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-6 lg:grid-cols-5 lg:gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex gap-4 lg:flex-col lg:gap-3">
          <div className="flex flex-col items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-petrol font-display text-sm font-semibold text-canvas">
              {index + 1}
            </span>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="mt-2 w-px flex-1 bg-line lg:mt-3 lg:h-px lg:w-full lg:flex-none"
              />
            )}
          </div>
          <div className="pb-6 lg:pb-0">
            <p className="font-display text-base font-semibold text-petrol">{step.title}</p>
            {step.description && (
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
