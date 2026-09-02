import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UpcomingMeetings } from "@/components/UpcomingMeetings";
import { EventCard } from "@/components/EventCard";
import { getEvents, isPastEvent } from "@/lib/events";

export default async function TerminePage() {
  const events = await getEvents();
  const upcoming = events.filter((event) => !isPastEvent(event));
  const past = events.filter((event) => isPastEvent(event)).reverse();

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

            <UpcomingMeetings events={upcoming} />

            <div className="mt-20">
              <p className="eyebrow">Archiv</p>
              <h2 className="mt-3">Vergangene Termine</h2>
              <p className="mt-4 max-w-2xl text-rss-ink/80">Hier findest du Eindrücke und Informationen zu vergangenen Veranstaltungen.</p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {past.length > 0 ? past.map((event) => <EventCard event={event} past key={event._id} />) : <p className="card-sand text-rss-muted">Noch keine vergangenen Termine.</p>}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
