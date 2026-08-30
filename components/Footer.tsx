import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-petrol text-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm text-canvas/75">{siteConfig.tagline}.</p>
        </div>

        <div className="space-y-2 text-sm text-canvas/85">
          <p className="font-display text-base text-canvas">{siteConfig.name}</p>
          <p>{siteConfig.owner}</p>
          <p>
            {siteConfig.address.street}
            <br />
            {siteConfig.address.zip} {siteConfig.address.city}
          </p>
          <p>
            <a href={siteConfig.phoneHref} className="hover:text-terracotta">
              {siteConfig.phone}
            </a>
          </p>
          <p>
            <a href={siteConfig.emailHref} className="hover:text-terracotta">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <nav aria-label="Footer-Navigation" className="text-sm">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-canvas/85">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-terracotta">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-canvas/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-canvas/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.owner}
        </div>
      </div>
    </footer>
  );
}
