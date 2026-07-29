import type { MetadataRoute } from "next";
import { nav, servicePages, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...new Set([...nav.map((n) => n.href), ...servicePages.map((s) => s.href)]),
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
