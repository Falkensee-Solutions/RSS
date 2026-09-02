import Link from "next/link";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import type { Event } from "@/lib/events";
import { formatEventDate } from "@/lib/events";

export function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  return (
    <article className="card-sand flex min-h-[320px] flex-col shadow-sm">
      <div>
        <p className="eyebrow">{past ? "Vergangener Termin" : "Nächster Termin"}</p>
        <h3 className="mt-2 text-2xl md:text-3xl">{event.title}</h3>
        <div className="mt-6 space-y-4 border-t border-rss-border/70 pt-5 text-sm">
          {(event.location || event.address) && <p className="flex items-start gap-3"><MapPin className="shrink-0" size={19} aria-hidden /><span>{event.location}<br />{event.address}</span></p>}
          <p className="flex items-start gap-3"><CalendarDays className="shrink-0" size={19} aria-hidden /><span><strong>{formatEventDate(event.startDate)}</strong><br />{event.weekday}</span></p>
          {(event.time || event.duration) && <p className="flex items-start gap-3"><Clock3 className="shrink-0" size={19} aria-hidden /><span><strong>{event.time}</strong><br />{event.duration}</span></p>}
        </div>
      </div>
      <Link href={`/termine/${event.slug}`} className="btn-primary mt-auto pt-3 md:mt-10">Details ansehen</Link>
    </article>
  );
}
