import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
        {crumbs.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            )}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-petrol">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-petrol">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
