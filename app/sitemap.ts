import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const paths = [
  "/",
  "/uebersicht-hausaufgaben",
  "/lerncoaching/hausaufgaben-kinder",
  "/lerncoaching/hausaufgaben-jugendliche",
  "/lerncoaching/pruefungsangst",
  "/lerncoaching/lernstrategie",
  "/lerncoaching/ablauf-kosten",
  "/workshops-vortraege",
  "/workshops-vortraege/workshop",
  "/workshops-vortraege/vortrag",
  "/ueber-mich/werdegang",
  "/ueber-mich/philosophie",
  "/ueber-uns/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
