import Link from "next/link";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import type { Event } from "@/lib/event-types";
import { formatEventDateLong, formatEventTimeRange } from "@/lib/event-types";

export function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  const time = formatEventTimeRange(event);

  return (
    <article className="card-sand termin-card flex min-h-[300px] flex-col shadow-sm">
      <div>
        <p className="eyebrow">{past ? "Vergangener Termin" : "Nächster Termin"}</p>
        <h3 className="mt-2 text-xl md:text-2xl">{event.title}</h3>
        <div className="mt-6 space-y-4 border-t border-rss-border/70 pt-5 text-sm">
          {(event.location || event.address) && <p className="flex items-start gap-3"><MapPin className="shrink-0" size={19} aria-hidden /><span>{event.location}<br />{event.address}</span></p>}
          <p className="flex items-start gap-3"><CalendarDays className="shrink-0" size={19} aria-hidden /><span><strong>{formatEventDateLong(event.startDate)}</strong></span></p>
          {time && <p className="flex items-start gap-3"><Clock3 className="shrink-0" size={19} aria-hidden /><span><strong>{time}</strong>{event.duration ? <><br />{event.duration}</> : null}</span></p>}
        </div>
      </div>
      <Link href={`/termine/${event.slug}`} className="btn-primary mt-auto pt-3">Details ansehen</Link>
    </article>
  );
}
