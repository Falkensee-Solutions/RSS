import fs from "node:fs/promises";
import path from "node:path";

export type ImageAsset = string;

export type Partner = {
  name: string;
  logo?: ImageAsset;
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
  published?: boolean;
  body?: { type: "paragraph" | "heading"; text: string }[];
  registrationUrl?: string;
  flyer?: string | null;
  gallery?: { image: string; alt?: string; caption?: string }[];
  partners?: Partner[];
  funders?: Partner[];
};

const eventsDirectory = path.join(process.cwd(), "content/events");

async function readEventFile(filename: string): Promise<Event | null> {
  try {
    const content = await fs.readFile(path.join(eventsDirectory, filename), "utf8");
    const event = JSON.parse(content) as Event;
    return { ...event, _id: filename.replace(/\.json$/, "") };
  } catch {
    return null;
  }
}

export async function getEvents(): Promise<Event[]> {
  const filenames = await fs.readdir(eventsDirectory).catch(() => []);
  const events = await Promise.all(filenames.filter((file) => file.endsWith(".json")).map(readEventFile));
  return events.filter((event): event is Event => Boolean(event?.published)).sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export async function getEventBySlug(slug: string) {
  const events = await getEvents();
  return events.find((event) => event.slug === slug);
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
