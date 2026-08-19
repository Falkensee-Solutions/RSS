import Link from "next/link";
import { CalendarDays, Clock3, MapPin, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TerminePage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="section">
          <div className="container-rss">
            <p className="eyebrow">Raum. Stille. Stimme.</p>
            <h1 className="mt-3 max-w-3xl">Aktuelle Termine</h1>
            <p className="mt-6 max-w-2xl text-lg text-rss-ink/80">
              Komm zu unserem nächsten Treffen und entdecke, was entsteht, wenn viele Einzelne zusammenkommen.
            </p>

            <article className="card-sand mt-12 max-w-4xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Nächster Termin</p>
                  <h2 className="mt-2 text-3xl md:text-4xl">Erstes Treffen</h2>
                </div>
                <span className="rounded-full bg-rss-yellow px-4 py-2 text-sm font-semibold">29.08.26</span>
              </div>
              <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
                <p className="flex items-start gap-3"><MapPin size={20} aria-hidden /> Forum Dialog, Mohrenstraße 34, 10117 Berlin</p>
                <p className="flex items-start gap-3"><CalendarDays size={20} aria-hidden /> Samstag, 29.08.2026</p>
                <p className="flex items-start gap-3"><Clock3 size={20} aria-hidden /> 14:15–15:45 Uhr</p>
                <p className="flex items-start gap-3"><Users size={20} aria-hidden /> Für Mädchen und junge Frauen</p>
              </div>
              <Link href="/termine/erstes-treffen" className="btn-primary mt-8">
                Details ansehen
              </Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
