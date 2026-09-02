import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export type SanityImage = {
  _type: "image";
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
};

export type Partner = {
  name: string;
  logo?: SanityImage;
  url?: string;
};

export type Event = {
  _id: string;
  title: string;
  slug: string;
  startDate: string;
  endDate?: string;
  weekday?: string;
  time?: string;
  duration?: string;
  location?: string;
  address?: string;
  summary?: string;
  body?: unknown[];
  registrationUrl?: string;
  flyer?: { asset?: { _ref: string }; title?: string };
  gallery?: SanityImage[];
  partners?: Partner[];
  funders?: Partner[];
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";

export const sanityEnabled = Boolean(projectId);

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.CI !== "true",
      perspective: "published",
    })
  : null;

const imageBuilder = client ? imageUrlBuilder(client) : null;

export function sanityImageUrl(source: SanityImage | undefined, width = 1200) {
  if (!imageBuilder || !source?.asset) return undefined;
  return imageBuilder.image(source).width(width).auto("format").url();
}

export function sanityFileUrl(file: { asset?: { _ref: string } } | undefined) {
  const ref = file?.asset?._ref;
  if (!projectId || !ref) return undefined;
  const [, assetId, extension] = ref.split("-");
  if (!assetId || !extension) return undefined;
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${assetId}.${extension}`;
}

const eventProjection = `{
  _id,
  title,
  "slug": slug.current,
  startDate,
  endDate,
  weekday,
  time,
  duration,
  location,
  address,
  summary,
  body,
  registrationUrl,
  flyer,
  gallery[]{..., asset},
  partners[]{name, url, logo},
  funders[]{name, url, logo}
}`;

const fallbackEvents: Event[] = [
  {
    _id: "fallback-erstes-treffen",
    title: "Erstes Treffen",
    slug: "erstes-treffen",
    startDate: "2026-08-29T14:15:00+02:00",
    weekday: "Samstag",
    time: "14:15–15:45",
    duration: "90 Minuten",
    location: "Forum Dialog",
    address: "Mohrenstraße 34, Berlin",
    summary: "Unser erstes Treffen von Raum. Stille. Stimme.",
  },
];

export async function getEvents(): Promise<Event[]> {
  if (!client) return fallbackEvents;
  return client.fetch<Event[]>(`*[_type == "event" && published == true] | order(startDate asc) ${eventProjection}`, {}, { next: { revalidate: 0 } });
}

export async function getEventBySlug(slug: string) {
  if (!client) return fallbackEvents.find((event) => event.slug === slug);
  return client.fetch<Event | null>(`*[_type == "event" && published == true && slug.current == $slug][0] ${eventProjection}`, { slug });
}

export function isPastEvent(event: Event, now = new Date()) {
  return new Date(event.endDate || event.startDate).getTime() < now.getTime();
}

export function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(date));
}
