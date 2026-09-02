export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-terracotta-text">
      <span aria-hidden="true" className="h-px w-5 bg-terracotta-strong" />
      {children}
    </p>
  );
}
