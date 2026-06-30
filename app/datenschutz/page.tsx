import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung – Raum. Stille. Stimme.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-rss mx-auto max-w-3xl">
          <p className="eyebrow">Rechtliches</p>
          <h1 className="mt-3">Datenschutz</h1>

          <div
            role="note"
            className="mt-8 rounded-card border-2 border-rss-yellow bg-rss-warm p-5 text-sm"
          >
            <strong>TODO:</strong> Datenschutzerklärung juristisch prüfen
            lassen und an die tatsächliche technische Umsetzung (Hosting,
            Formular-Backend, eingesetzte Dienste) anpassen.
          </div>

          <section className="legal-content mt-10 space-y-8">
            <div>
              <h2>1. Verantwortliche Stelle</h2>
              <p>
                Forum Dialog e.V., Ansprechpartner: Erkam Cebi,
                <br />
                E-Mail:{" "}
                <a className="underline" href="mailto:info@forumdialog.org">
                  info@forumdialog.org
                </a>
                , Telefon: 030 31519988.
                <br />
                <em>TODO: Vollständige Anschrift ergänzen.</em>
              </p>
            </div>

            <div>
              <h2>2. Server-Logs</h2>
              <p>
                Beim Aufruf dieser Website werden vom Hosting-Provider
                technisch notwendige Daten verarbeitet (z. B. IP-Adresse,
                Datum, abgerufene URL). Diese Daten dienen ausschließlich der
                technischen Bereitstellung und Sicherheit.
                <br />
                <em>
                  TODO: Hosting-Provider, Speicherdauer und Rechtsgrundlage
                  konkret benennen.
                </em>
              </p>
            </div>

            <div>
              <h2>3. Kontaktformular</h2>
              <p>
                Wenn Sie das Anfrageformular auf dieser Website verwenden,
                werden die von Ihnen eingegebenen Daten zur Bearbeitung Ihrer
                Anfrage verarbeitet. Eine Weitergabe an Dritte erfolgt nicht
                ohne Ihre Einwilligung.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                bzw. lit. b oder f DSGVO (Anbahnung/Durchführung einer
                möglichen Zusammenarbeit, berechtigtes Interesse). Die Daten
                werden gelöscht, sobald sie für den Zweck nicht mehr
                erforderlich sind, spätestens nach Ablauf der gesetzlichen
                Aufbewahrungsfristen.
              </p>
              <p>
                <em>
                  TODO: Konkrete Speicherdauer und tatsächlich eingesetztes
                  Versandverfahren (E-Mail-Dienst, ggf. API-Endpunkt) ergänzen.
                </em>
              </p>
            </div>

            <div>
              <h2>4. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies
                für den genannten Zweck erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </div>

            <div>
              <h2>5. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
                Widerspruch und Widerruf erteilter Einwilligungen. Wenden Sie
                sich dazu an{" "}
                <a className="underline" href="mailto:info@forumdialog.org">
                  info@forumdialog.org
                </a>
                . Es besteht zudem ein Beschwerderecht bei der zuständigen
                Datenschutzaufsichtsbehörde.
              </p>
            </div>

            <div>
              <h2>6. Externe Dienste</h2>
              <p>
                Diese Website verwendet aktuell keine Tracking-Cookies und
                keine eingebundenen Drittanbieter-Analytics.
                <br />
                <em>
                  TODO: Falls externe Dienste (z. B. Schriftarten-CDN,
                  Maps, Analytics, Formular-Backend) eingebunden werden,
                  hier ergänzen.
                </em>
              </p>
            </div>

            <div>
              <h2>7. Minderjährigenschutz</h2>
              <p>
                Über das Anfrageformular werden keine personenbezogenen Daten
                von Jugendlichen erhoben. Fotos oder Veröffentlichungen
                identifizierbarer Minderjähriger erfolgen ausschließlich mit
                ausdrücklicher Einwilligung.
              </p>
            </div>

            <div>
              <h2>8. Stand</h2>
              <p>
                Stand dieser Erklärung: <em>TODO: Datum eintragen.</em>
              </p>
            </div>
          </section>

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
