import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Lerncoaching in Chur`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Individuelles Lerncoaching für Kinder, Jugendliche und Eltern in Chur: Hausaufgaben, Prüfungsangst, Lernstrategien und Motivation – persönlich und wertschätzend begleitet von Seraina Engeli.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner }],
  keywords: [
    "Lerncoaching Chur",
    "Lerncoach Chur",
    "Lernberatung Chur",
    "Prüfungsangst Kinder Chur",
    "Lernstrategien Kinder",
    "Hausaufgaben Hilfe Chur",
    "Lernmotivation Kinder",
    "Lerncoaching Jugendliche",
    "Elternberatung Lernen",
    "Lerncoaching Graubünden",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        image: `${siteConfig.url}/images/og-default.jpg`,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          postalCode: siteConfig.address.zip,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country,
        },
        areaServed: {
          "@type": "City",
          name: "Chur",
        },
        priceRange: "CHF",
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#seraina-engeli`,
        name: siteConfig.owner,
        jobTitle: "Lerncoach, Primarlehrerin",
        worksFor: { "@id": `${siteConfig.url}/#business` },
        url: `${siteConfig.url}/ueber-mich/werdegang`,
      },
    ],
  };

  return (
    <html lang="de-CH">
      <body
        className={`${fraunces.variable} ${inter.variable} font-body text-ink antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
