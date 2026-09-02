import type { Event } from "@/lib/events";
import { EventCarousel } from "@/components/EventCarousel";

export function UpcomingMeetings({ events }: { events: Event[] }) {
  return <EventCarousel events={events} />;
}
