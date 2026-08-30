type Column = {
  title: string;
  focus: string;
  points: string[];
};

export function ComparisonTable({ columns }: { columns: [Column, Column] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {columns.map((col, index) => (
        <div
          key={col.title}
          className={`rounded-card border p-7 ${
            index === 1
              ? "border-petrol bg-petrol text-canvas shadow-soft-lg"
              : "border-line bg-surface"
          }`}
        >
          <h3 className={`text-xl ${index === 1 ? "text-canvas" : ""}`}>{col.title}</h3>
          <p
            className={`mt-2 text-sm font-semibold ${
              index === 1 ? "text-terracotta-light" : "text-terracotta-text"
            }`}
          >
            Fokus: {col.focus}
          </p>
          <ul className={`mt-5 space-y-2.5 text-sm leading-relaxed ${index === 1 ? "text-canvas/85" : "text-ink-soft"}`}>
            {col.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
