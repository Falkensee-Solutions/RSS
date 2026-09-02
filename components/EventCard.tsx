import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import type { Event } from "@/lib/event-types";
import { formatEventDateLong, formatEventTimeRange } from "@/lib/event-types";

export function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  const time = formatEventTimeRange(event);
  const image = event.eventImage || event.flyerImage;

  return (
    <article className="card-sand termin-card flex min-h-[300px] flex-col shadow-sm">
      <div>
        {image && (
          <Image
            src={image}
            width={800}
            height={500}
            alt={`Bild zum Termin „${event.title}“`}
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
        )}
        <div className="mt-6 space-y-4 border-t border-rss-border/70 pt-5 text-sm">
          {(event.location || event.address) && <p className="flex items-start gap-3"><MapPin className="shrink-0" size={19} aria-hidden /><span>{event.location}<br />{event.address}</span></p>}
          <p className="flex items-start gap-3"><CalendarDays className="shrink-0" size={19} aria-hidden /><span><strong>{formatEventDateLong(event.startDate)}</strong></span></p>
          {time && <p className="flex items-start gap-3"><Clock3 className="shrink-0" size={19} aria-hidden /><span><strong>{time}</strong></span></p>}
        </div>
      </div>
      <Link href={`/termine/${event.slug}`} className="btn-primary mt-6 pt-3">Details ansehen</Link>
    </article>
  );
}
