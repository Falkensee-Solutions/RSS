import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, Download, ExternalLink, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getEventBySlug, getEvents } from "@/lib/events";
import { eventBodyToMarkdown, formatEventDateLong, formatEventTimeRange } from "@/lib/event-types";
import type { Partner } from "@/lib/event-types";
import { Markdown } from "@/lib/markdown";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = await getEventBySlug(params.slug);
  if (!event) return { title: "Termin nicht gefunden" };

  const description = event.summary || `${formatEventDateLong(event.startDate)} – ${event.location ?? "Raum. Stille. Stimme."}`;

  return {
    title: event.title,
    description,
    alternates: { canonical: `/termine/${event.slug}` },
    openGraph: {
      title: `${event.title} | Raum. Stille. Stimme.`,
      description,
      type: "article",
      url: `/termine/${event.slug}`,
      ...(event.flyerImage ? { images: [{ url: event.flyerImage, alt: `Flyer: ${event.title}` }] } : {}),
    },
  };
}

/** Logo-Kachel für Partner und Förderer – verlinkt, wenn eine URL gepflegt ist. */
function PartnerTile({ partner, compact = false }: { partner: Partner; compact?: boolean }) {
  const content = partner.logo ? (
    <Image
      src={partner.logo}
      width={480}
      height={240}
      alt={partner.url ? "" : partner.name}
      className={`w-auto object-contain ${compact ? "max-h-12" : "max-h-14"}`}
    />
  ) : (
    <span className="text-center text-sm font-medium text-rss-ink">{partner.name}</span>
  );

  const shell = `group flex min-h-[104px] items-center justify-center rounded-2xl border border-rss-border bg-white p-5 transition-colors`;

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noreferrer"
        title={`${partner.name} – Website öffnen`}
        className={`${shell} hover:border-rss-ink focus-visible:border-rss-ink`}
      >
        <span className="sr-only">{partner.name} – Website öffnen</span>
        {content}
      </a>
    );
  }

  return <div className={shell}>{content}</div>;
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug);
  if (!event) notFound();

  const media = event.gallery || [];
  const body = eventBodyToMarkdown(event.body);
  const time = formatEventTimeRange(event);

  return (
    <>
      <Header />
      <main id="main">
        <article className="pb-20 pt-10 md:pb-28 md:pt-14">
          <div className="container-rss">
            <Link href="/#termine" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-rss-border underline-offset-4 hover:decoration-rss-ink">
              <ArrowLeft size={17} aria-hidden /> Zu den Terminen
            </Link>

            <header className="mt-10 max-w-4xl">
              <p className="eyebrow">Veranstaltung</p>
              <h1 className="mt-3">{event.title}</h1>
              {event.summary && <p className="mt-5 max-w-2xl text-lg text-rss-ink/75 md:text-xl">{event.summary}</p>}
            </header>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,390px)] lg:gap-14">
              <div className="min-w-0">
                <section aria-label="Termindetails" className="grid grid-cols-2 overflow-hidden rounded-card border border-rss-border bg-rss-sand">
                  <div className="flex gap-3 border-b border-rss-border p-5 sm:p-6">
                    <CalendarDays className="mt-0.5 shrink-0" size={21} aria-hidden />
                    <p className="text-sm"><strong className="block text-rss-ink">Datum</strong><span className="mt-1 block">{formatEventDateLong(event.startDate)}</span></p>
                  </div>
                  <div className="flex gap-3 border-b border-rss-border p-5 sm:p-6">
                    <Clock3 className="mt-0.5 shrink-0" size={21} aria-hidden />
                    <p className="text-sm"><strong className="block text-rss-ink">Uhrzeit</strong><span className="mt-1 block">{time}</span></p>
                  </div>
                  <div className="row-span-2 flex gap-3 border-l border-rss-border p-5 sm:p-6">
                    <MapPin className="mt-0.5 shrink-0" size={21} aria-hidden />
                    <p className="text-sm"><strong className="block text-rss-ink">Ort</strong><span className="mt-1 block">{event.location}{event.address ? <><br />{event.address}</> : null}</span>{event.mapUrl && <a href={event.mapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 font-semibold underline underline-offset-2">Karte öffnen <ExternalLink size={13} aria-hidden /></a>}</p>
                  </div>
                </section>

                {body && <div className="event-content mt-12"><Markdown>{body}</Markdown></div>}

                {event.partners && event.partners.length > 0 && (
                  <section className="mt-14 border-t border-rss-border pt-10">
                    <p className="eyebrow">Gemeinsam gestaltet</p>
                    <h2 className="mt-2 text-3xl md:text-4xl">Unsere Partner</h2>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {event.partners.map((partner, index) => <PartnerTile partner={partner} key={`${partner.name}-${index}`} />)}
                    </div>
                  </section>
                )}

                {event.funders && event.funders.length > 0 && (
                  <section className="mt-10">
                    <p className="text-sm font-semibold text-rss-muted">Ein Projekt gefördert durch:</p>
                    <div className="mt-4 grid max-w-lg grid-cols-2 gap-3">
                      {event.funders.map((partner, index) => <PartnerTile partner={partner} compact key={`${partner.name}-${index}`} />)}
                    </div>
                  </section>
                )}
              </div>

              <aside className="space-y-5 lg:sticky lg:top-24">
                {event.flyerImage && (
                  <figure className="overflow-hidden rounded-card border border-rss-border bg-white shadow-sm">
                    <Image src={event.flyerImage} width={1000} height={1414} alt={`Flyer zur Veranstaltung „${event.title}“`} className="h-auto w-full" priority />
                  </figure>
                )}

                {(event.registrationUrl || event.flyer) && (
                  <div className="rounded-card border border-rss-border bg-white p-6 shadow-sm">
                    {event.registrationUrl && (
                      <>
                        <h2 className="text-2xl">Dabei sein</h2>
                        <p className="mt-2 text-sm text-rss-ink/70">{event.registrationNote || "Melde dich über unser Online-Formular für dieses Treffen an."}</p>
                        <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full">
                          {event.registrationLabel || "Jetzt anmelden"} <ExternalLink size={17} aria-hidden />
                        </a>
                      </>
                    )}
                    {event.flyer && (
                      <a href={event.flyer} target="_blank" rel="noreferrer" className={`btn-secondary w-full ${event.registrationUrl ? "mt-3" : ""}`}>
                        <Download size={17} aria-hidden /> Flyer herunterladen
                      </a>
                    )}
                  </div>
                )}
              </aside>
            </div>

            {media.length > 0 && (
              <section className="mt-20 border-t border-rss-border pt-12">
                <p className="eyebrow">Rückblick</p>
                <h2 className="mt-2">Impressionen</h2>
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {media.map((image, index) => <figure key={`${image.image}-${index}`}><Image src={image.image} width={1200} height={800} alt={image.alt || `Impression von ${event.title}`} className="aspect-[4/3] w-full rounded-2xl object-cover" /><figcaption className="mt-2 text-sm text-rss-muted">{image.caption}</figcaption></figure>)}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
