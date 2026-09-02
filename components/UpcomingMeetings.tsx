import { EventCard } from "@/components/EventCard";
import type { Event } from "@/lib/events";

export function UpcomingMeetings({ events }: { events: Event[] }) {

  return (
    <div className="termin-carousel mt-10">
      {events.length > 0 ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{events.map((event) => <EventCard event={event} key={event._id} />)}</div> : <p className="card-sand text-rss-muted">Aktuell sind keine weiteren Termine veröffentlicht.</p>}
    </div>
  );
}
