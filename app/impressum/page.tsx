import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Forum Dialog e.V. – Raum. Stille. Stimme.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-rss mx-auto max-w-3xl">
          <p className="eyebrow">Rechtliches</p>
          <h1 className="mt-3">Impressum</h1>

          <div
            role="note"
            className="mt-8 rounded-card border-2 border-rss-yellow bg-rss-warm p-5 text-sm"
          >
            <strong>TODO:</strong> Impressum final durch Forum Dialog e.V.
            prüfen und freigeben lassen. Die folgenden Angaben sind ein
            Platzhalter mit öffentlich bekannten Kontaktdaten und ersetzen
            keine vollständige Anbieterkennzeichnung gemäß § 5 DDG.
          </div>

          <div className="mt-10 space-y-10 text-rss-ink/90">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3">
                Forum Dialog e.V.
                <br />
                <em>TODO: Vollständige Postanschrift ergänzen.</em>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Vertreten durch</h2>
              <p className="mt-3">
                <em>TODO: Vertretungsberechtigte Person/en ergänzen.</em>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Kontakt</h2>
              <p className="mt-3">
                Ansprechpartner: Erkam Cebi
                <br />
                Telefon: 030 31519988
                <br />
                E-Mail:{" "}
                <a className="underline" href="mailto:info@forumdialog.org">
                  info@forumdialog.org
                </a>
                <br />
                Web:{" "}
                <a
                  className="underline"
                  href="https://www.forumdialog.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.forumdialog.org
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Registereintrag</h2>
              <p className="mt-3">
                <em>TODO: Registergericht und Vereinsregisternummer ergänzen.</em>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3">
                <em>TODO: Verantwortliche Person mit Anschrift ergänzen.</em>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Haftungsausschluss</h2>
              <p className="mt-3">
                Inhalte dieser Website werden mit größtmöglicher Sorgfalt
                erstellt. Für Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte kann jedoch keine Gewähr übernommen werden. Für
                externe Links sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </section>
          </div>

          <p className="mt-10">
            <Link href="/" className="btn-secondary">
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
