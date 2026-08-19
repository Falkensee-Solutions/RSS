import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import britzLogo from "@/images/Partnerlogos/britz evangelisch logo.png";
import houseOfOneLogo from "@/images/Partnerlogos/hoo logo.png";
import senatLogo from "@/images/Partnerlogos/senat logo.png";
import stJohannesLogo from "@/images/Partnerlogos/st johannes logo.png";

export const metadata = {
  title: "Erstes Treffen",
  description: "Details zum ersten Treffen von Raum. Stille. Stimme. am 29.08.2026 in Berlin.",
};

export default function ErstesTreffenPage() {
  return (
    <>
      <Header />
      <main id="main">
        <article className="section">
          <div className="container-rss max-w-4xl">
            <Link href="/termine" className="text-sm font-semibold underline underline-offset-4">
              ← Alle Termine
            </Link>
            <p className="eyebrow mt-10">Aktueller Termin</p>
            <h1 className="mt-3">Erstes Treffen</h1>

            <div className="card-sand mt-8 grid gap-5 sm:grid-cols-3">
              <p className="flex items-start gap-3 text-sm"><MapPin size={20} aria-hidden /> <span><strong>Ort</strong><br />Forum Dialog, Mohrenstraße 34, 10117 Berlin</span></p>
              <p className="flex items-start gap-3 text-sm"><CalendarDays size={20} aria-hidden /> <span><strong>Datum</strong><br />29.08.26</span></p>
              <p className="flex items-start gap-3 text-sm"><Clock3 size={20} aria-hidden /> <span><strong>Zeitraum</strong><br />14:15–15:45 Uhr</span></p>
            </div>

            <a
              href="https://forms.gle/1pCUXmCfv5BVJJmt8"
              className="btn-primary mt-8"
              target="_blank"
              rel="noreferrer"
            >
              Jetzt anmelden
            </a>

            <div className="legal-content mt-12 max-w-3xl">
              <h2>Unser erstes Treffen: Was entsteht, wenn viele Einzelne zusammenkommen?</h2>
              <p>Wir beginnen mit einer kleinen kreativen Überraschung. Jede Teilnehmerin gestaltet etwas Eigenes – auf ihre Weise, mit ihren eigenen Entscheidungen und Ideen.</p>
              <p>Was daraus am Ende entsteht, verraten wir noch nicht.</p>
              <p>Danach wird es für einen Moment ruhig. Wir betrachten, was entstanden ist, nehmen wahr und lassen unsere Gedanken wirken. Ohne sofort erklären oder antworten zu müssen.</p>
              <p>Zum Schluss kommen unsere Stimmen dazu. Was haben wir wahrgenommen? Was verändert sich, wenn Einzelnes Teil von etwas Gemeinsamen wird?</p>
              <h2>Was genau an diesem Nachmittag entsteht?</h2>
              <p>Das erfährst du erst vor Ort.</p>
              <h2>Unsere Partner</h2>
              <div className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-4">
                <div className="flex h-28 items-center justify-center rounded-xl border border-rss-border bg-white p-4">
                  <Image src={britzLogo} alt="Evangelische Kirchengemeinde Berlin-Britz" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex h-28 items-center justify-center rounded-xl border border-rss-border bg-white p-4">
                  <Image src={houseOfOneLogo} alt="House of One" className="max-h-20 w-auto object-contain" />
                </div>
                <div className="flex h-28 items-center justify-center rounded-xl border border-rss-border bg-white p-4">
                  <Image src={stJohannesLogo} alt="St. Johannes" className="max-h-16 w-auto object-contain" />
                </div>
              </div>
              <div className="mt-10 border-t border-rss-border pt-8">
                <p className="text-sm font-semibold text-rss-ink">Ein Projekt gefördert durch:</p>
                <div className="mt-4 flex min-h-28 items-center rounded-xl border border-rss-border bg-white p-5 sm:max-w-sm">
                  <Image src={senatLogo} alt="Senat von Berlin" className="max-h-16 w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
