import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getEvents } from "@/lib/events";
import { MAP_SIZE, pixelToPercent, plusCodeToPixel } from "@/lib/plus-code-map";

export const metadata: Metadata = {
  title: "Testkarte",
  description: "Interne Testansicht für Veranstaltungsorte.",
  robots: { index: false, follow: false },
};

export default async function MapTestPage() {
  const events = (await getEvents())
    .map((event) => ({ event, point: event.plusCode ? plusCodeToPixel(event.plusCode) : null }))
    .filter((item): item is typeof item & { point: NonNullable<typeof item.point> } => Boolean(item.point));

  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-rss">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
            <ArrowLeft size={16} aria-hidden /> Zur Startseite
          </Link>
          <p className="eyebrow mt-10">Interne Testansicht</p>
          <h1 className="mt-3 max-w-3xl">Veranstaltungsorte auf der Karte</h1>
          <p className="mt-5 max-w-2xl text-lg text-rss-ink/75">
            Diese Seite dient ausschließlich zum Testen der Plus-Code-Positionen. Die Karte wird noch nicht auf der Startseite verwendet.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
            <div className="overflow-hidden rounded-card border border-rss-border bg-white p-3 shadow-sm md:p-5">
              <div className="relative mx-auto w-full max-w-[938px]" style={{ aspectRatio: `${MAP_SIZE.width} / ${MAP_SIZE.height}` }}>
                <Image
                  src="/karte/haritawebseite.png"
                  alt="Karte der Region Berlin mit markierten Veranstaltungsorten"
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-contain"
                  priority
                />
                {events.map(({ event, point }) => {
                  const position = pixelToPercent(point);
                  return (
                    <Link
                      key={event._id}
                      href={`/termine/${event.slug}`}
                      className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-1"
                      style={{ left: `${position.left}%`, top: `${position.top}%` }}
                      aria-label={`${event.title} – ${event.location ?? "Veranstaltungsort"}`}
                    >
                      <span className="block h-5 w-5 rounded-full border-[3px] border-white bg-rss-ink shadow-[0_1px_5px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-125 group-focus-visible:scale-125 md:h-6 md:w-6" />
                      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-rss-ink px-3 py-1.5 text-xs font-semibold text-rss-warm shadow-lg group-hover:block group-focus-visible:block">
                        {event.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <aside className="card-sand" aria-label="Veranstaltungsorte">
              <div className="flex items-center gap-2">
                <MapPin size={18} aria-hidden />
                <h2 className="text-2xl">Standorte</h2>
              </div>
              {events.length > 0 ? (
                <ul className="mt-5 space-y-4">
                  {events.map(({ event, point }) => (
                    <li key={event._id}>
                      <Link href={`/termine/${event.slug}`} className="block rounded-lg p-2 -mx-2 hover:bg-white/70">
                        <strong className="block">{event.title}</strong>
                        <span className="mt-1 block text-sm text-rss-ink/75">{event.location}</span>
                        <span className="mt-1 block font-mono text-xs text-rss-muted">{event.plusCode}</span>
                        <span className="mt-1 block text-xs text-rss-muted">Pixel: {Math.round(point.x)}, {Math.round(point.y)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm">Noch keine Veranstaltung besitzt einen gültigen Plus Code.</p>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}