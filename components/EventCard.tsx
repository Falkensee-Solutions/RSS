import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import logoImage from "@/images/Logo.png";
import type { Event } from "@/lib/event-types";
import { formatEventDateLong, formatEventTimeRange } from "@/lib/event-types";

export function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  const time = formatEventTimeRange(event);
  const image = event.eventImage || event.flyerImage;

  return (
    <article className="card-sand termin-card flex min-h-[300px] flex-col shadow-sm">
      <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
              <Image
                src={image || logoImage}
                alt={image ? `Bild zum Termin „${event.title}“` : "Raum. Stille. Stimme. Logo"}
                fill
                sizes="(min-width: 768px) 336px, 78vw"
                className={image ? "object-contain" : "object-contain p-10"}
              />
            </div>
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
