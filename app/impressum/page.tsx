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

          <div className="mt-10 space-y-10 text-rss-ink/90">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3">
                Forum Dialog e. V.
                <br />
                Anton-Wilhelm-Amo-Straße 34
                <br />
                10117 Berlin
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Vertreten durch</h2>
              <p className="mt-3">
                1. Vorstandsvorsitzender: Osman Örs
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Kontakt</h2>
              <p className="mt-3">
                Telefon: +49 (0)30 31 51 99 88
                <br />
                E-Mail:{" "}
                <a className="underline" href="mailto:berlin@forumdialog.org">
                  berlin@forumdialog.org
                </a>
                <br />
                Datenschutz:{" "}
                <a className="underline" href="mailto:datenschutz@forumdialog.org">
                  datenschutz@forumdialog.org
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Registereintrag</h2>
              <p className="mt-3">
                Eintragung im Vereinsregister
                <br />
                Registergericht: Charlottenburg
                <br />
                Registernummer: VR 27716 B
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3">
                Burcunur Elmas
                <br />
                Anton-Wilhelm-Amo-Straße 34, 10117 Berlin
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Haftungsausschluss</h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Eine
                permanente Kontrolle verlinkter externer Seiten ist ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden entsprechende
                Inhalte oder Links umgehend entfernt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl">Urheberrecht</h2>
              <p className="mt-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                dieser Website unterliegen dem deutschen Urheberrecht. Eine
                Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der
                Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung
                der jeweiligen Rechteinhaber.
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
