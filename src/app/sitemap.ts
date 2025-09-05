import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0 },
    // TODO: later we’ll add blog posts dynamically
  ];
}
