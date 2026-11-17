import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Event } from "@/lib/event-types";
import { MAP_SIZE, pixelToPercent, plusCodeToPixel } from "@/lib/plus-code-map";
import mapImage from "@/karte/haritawebseite.png";

export function VisitedPlacesMap({ events }: { events: Event[] }) {
  const locations = events.flatMap((event) => {
    if (!event.plusCode) return [];
    const point = plusCodeToPixel(event.plusCode);
    if (!point || point.x < 0 || point.x > MAP_SIZE.width || point.y < 0 || point.y > MAP_SIZE.height) return [];
    return [{ event, point }];
  });

  if (locations.length === 0) return null;

  return (
    <section className="mt-14 border-t border-rss-border/70 pt-10 md:mt-20 md:pt-14" aria-labelledby="visited-places-heading">
      <p className="eyebrow">Orte der Begegnung</p>
      <h2 id="visited-places-heading" className="mt-3">Wo wir uns getroffen haben</h2>
      <p className="mt-4 max-w-2xl text-rss-ink/80">Vergangene Treffen in Berlin – wähle einen Ort für weitere Informationen.</p>

      <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
        <div className="overflow-hidden rounded-card border border-rss-border bg-white p-3 shadow-sm md:p-5">
          <div className="relative mx-auto w-full max-w-[938px]" style={{ aspectRatio: `${MAP_SIZE.width} / ${MAP_SIZE.height}` }}>
            <Image
              src={mapImage}
              alt="Karte von Berlin mit den Orten vergangener Treffen"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-contain"
            />
            {locations.map(({ event, point }, index) => {
              const position = pixelToPercent(point);
              return (
                <Link
                  key={event._id}
                  href={`/termine/${event.slug}`}
                  className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-rss-yellow text-sm font-bold text-rss-ink shadow-md transition-transform hover:scale-110 focus-visible:scale-110"
                  style={{ left: `${position.left}%`, top: `${position.top}%` }}
                  aria-label={`${index + 1}: ${event.title} – ${event.location ?? "Veranstaltungsort"}`}
                >
                  {index + 1}
                </Link>
              );
            })}
          </div>
        </div>

        <aside className="card-sand" aria-label="Vergangene Treffen nach Ort">
          <div className="flex items-center gap-2">
            <MapPin size={18} aria-hidden />
            <h3>Unsere Treffpunkte</h3>
          </div>
          <ol className="mt-5 space-y-3">
            {locations.map(({ event }, index) => (
              <li key={event._id}>
                <Link href={`/termine/${event.slug}`} className="flex items-start gap-3 rounded-lg p-2 -mx-2 hover:bg-white/70">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rss-yellow text-sm font-bold">{index + 1}</span>
                  <span>
                    <strong className="block">{event.title}</strong>
                    <span className="mt-1 block text-sm text-rss-ink/75">{event.location}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
