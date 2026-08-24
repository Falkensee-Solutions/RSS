import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UpcomingMeetings } from "@/components/UpcomingMeetings";

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

            <UpcomingMeetings />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
