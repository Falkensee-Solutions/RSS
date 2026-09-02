import type { MetadataRoute } from "next";
import { getEvents } from "@/lib/events";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://rss.forumdialog.org";
  const lastModified = new Date();
  const events = await getEvents();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    ...events.map((event) => ({ url: `${base}/termine/${event.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
