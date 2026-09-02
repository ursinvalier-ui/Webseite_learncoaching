import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { siteConfig } from "@/lib/site-config";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
};

export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${siteConfig.url}${crumb.href}` } : {}),
    })),
  };

  return (
    <section className="border-b border-line bg-canvas-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Breadcrumbs crumbs={crumbs} />
        <div className={eyebrow ? "mt-6" : ""}>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}</div>
        <h1 className={`text-4xl sm:text-5xl ${eyebrow ? "" : "mt-6"}`}>{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</p>
        )}
      </div>
    </section>
  );
}
