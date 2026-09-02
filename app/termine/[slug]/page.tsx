import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { formatEventDate, getEventBySlug, getEvents } from "@/lib/events";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug);
  if (!event) return <><Header /><main id="main" className="section"><div className="container-rss"><h1>Termin nicht gefunden</h1><Link href="/termine" className="mt-6 inline-block underline">← Alle Termine</Link></div></main><Footer /></>;

  const flyerUrl = event.flyer;
  const media = event.gallery || [];
  const logos = [...(event.partners || []), ...(event.funders || [])];

  return <><Header /><main id="main"><article className="section"><div className="container-rss max-w-4xl">
    <Link href="/termine" className="text-sm font-semibold underline underline-offset-4">← Alle Termine</Link>
    <p className="eyebrow mt-10">Veranstaltung</p><h1 className="mt-3">{event.title}</h1>
    <div className="card-sand mt-8 grid gap-5 sm:grid-cols-3">
      {(event.location || event.address) && <p className="flex items-start gap-3 text-sm"><MapPin size={20} aria-hidden /><span><strong>Ort</strong><br />{event.location}<br />{event.address}</span></p>}
      <p className="flex items-start gap-3 text-sm"><CalendarDays size={20} aria-hidden /><span><strong>Datum</strong><br />{formatEventDate(event.startDate)}</span></p>
      {(event.time || event.duration) && <p className="flex items-start gap-3 text-sm"><Clock3 size={20} aria-hidden /><span><strong>Zeitraum</strong><br />{event.time}<br />{event.duration}</span></p>}
    </div>
    {event.registrationUrl && <a href={event.registrationUrl} className="btn-primary mt-8" target="_blank" rel="noreferrer">Jetzt anmelden</a>}
    {event.body && <div className="legal-content mt-12 max-w-3xl">{event.body.map((block, index) => <p key={index}>{block.text}</p>)}</div>}
    {flyerUrl && <a href={flyerUrl} className="mt-10 inline-block underline" target="_blank" rel="noreferrer">Flyer herunterladen</a>}
    {logos.length > 0 && <section className="mt-12"><h2>Partner und Förderer</h2><div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">{logos.map((partner, index) => { const logo = partner.logo ? <Image src={partner.logo} width={500} height={250} alt={partner.name} className="max-h-20 w-auto object-contain" /> : <span>{partner.name}</span>; return <div key={`${partner.name}-${index}`} className="flex min-h-28 items-center justify-center rounded-xl border border-rss-border bg-white p-4">{partner.url ? <a href={partner.url} target="_blank" rel="noreferrer">{logo}</a> : logo}</div>; })}</div></section>}
    {media.length > 0 && <section className="mt-12"><h2>Impressionen</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{media.map((image, index) => <figure key={`${image.image}-${index}`}><Image src={image.image} width={1200} height={800} alt={image.alt || `Impression von ${event.title}`} className="h-auto w-full rounded-xl" /><figcaption className="mt-2 text-sm text-rss-muted">{image.caption}</figcaption></figure>)}</div></section>}
  </div></article></main><Footer /></>;
}
