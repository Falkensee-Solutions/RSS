import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://rss.forumdialog.org";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
