import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://digital-empire-blog.vercel.app";
  return [
    { url: `${base}/`,            changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/calculators`, changeFrequency: "weekly",  priority: 0.9 },

    { url: `${base}/calculators/basic`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/calculators/advanced`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/calculators/percentage`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/calculators/percent-change`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/calculators/gst`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/calculators/emi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/calculators/age`, changeFrequency: "monthly", priority: 0.8 },

    { url: `${base}/blog`,        changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/about`,       changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/contact`,     changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/privacy`,     changeFrequency: "yearly",  priority: 0.2 },
    { url: `${base}/terms`,       changeFrequency: "yearly",  priority: 0.2 },
  ];
}
