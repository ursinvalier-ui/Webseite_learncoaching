"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { primaryNav } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);

  // Close any open menu on navigation — derived during render rather than in
  // an effect, so it can't trigger a cascading extra render.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label={"Lerncoaching Engeli – Startseite"}>
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const hasChildren = !!item.children?.length;
            const active = isActive(item.href);
            return (
              <div key={item.label} className="relative">
                {hasChildren ? (
                  <button
                    type="button"
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-surface ${
                      active ? "text-petrol" : "text-ink-soft"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                    onClick={() =>
                      setOpenMenu((current) => (current === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-surface ${
                      active ? "text-petrol" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {hasChildren && openMenu === item.label && (
                  <div className="absolute left-0 top-full z-10 mt-2 w-72 rounded-2xl border border-line bg-canvas p-2 shadow-soft-lg">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-petrol"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/ueber-uns/kontakt"
            className="rounded-button bg-petrol px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-petrol-strong"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-line p-2.5 text-petrol lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Hauptnavigation"
          className="border-t border-line bg-canvas px-4 pb-6 pt-2 lg:hidden"
        >
          {primaryNav.map((item) => (
            <div key={item.label} className="border-b border-line py-3 last:border-none">
              <Link
                href={item.href}
                className="block py-1 text-base font-semibold text-petrol"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-2 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-2 py-2 text-sm text-ink-soft hover:bg-surface hover:text-petrol"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link
            href="/ueber-uns/kontakt"
            className="mt-4 block rounded-button bg-petrol px-5 py-3 text-center text-sm font-semibold text-canvas"
          >
            Kontakt aufnehmen
          </Link>
        </nav>
      )}
    </header>
  );
}
