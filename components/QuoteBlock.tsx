export function QuoteBlock({ quote, cite }: { quote: string; cite?: string }) {
  return (
    <blockquote className="relative border-l-2 border-terracotta-strong py-2 pl-8">
      <svg
        width="32"
        height="25"
        viewBox="0 0 36 28"
        aria-hidden="true"
        className="mb-3 text-terracotta"
      >
        <path
          d="M0 28V16.6C0 7.6 5.4 1.7 14.6 0l1.7 4.9C10 6.6 7.4 10 7.4 14.4h7.2V28H0Zm19.8 0V16.6c0-9 5.4-14.9 14.6-16.6l1.6 4.9c-6.2 1.7-8.8 5.1-8.8 9.5h7.2V28H19.8Z"
          fill="currentColor"
        />
      </svg>
      <p className="font-display text-2xl leading-snug text-petrol italic sm:text-3xl">{quote}</p>
      {cite && (
        <footer className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}
