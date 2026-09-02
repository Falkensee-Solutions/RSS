import fs from "node:fs/promises";
import path from "node:path";
import type { Event } from "@/lib/event-types";
export type { Event } from "@/lib/event-types";

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

