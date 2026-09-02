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

          <section className="legal-content mt-10 space-y-8">
            <div>
              <h2>1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich im Sinne der Datenschutz-Grundverordnung
                (DSGVO) ist:
                <br /><br />
                Forum Dialog e. V.
                <br />
                Anton-Wilhelm-Amo-Straße 34, 10117 Berlin
                <br />
                Telefon: +49 (0)30 31 51 99 88
                <br />
                E-Mail: info@forumdialog.org
              </p>
              <p>
                Datenschutzbeauftragter und Ansprechpartner für
                Datenschutzfragen: Erkam Cebi, E-Mail:{" "}
                <a className="underline" href="mailto:datenschutz@forumdialog.org">
                  datenschutz@forumdialog.org
                </a>
              </p>
            </div>

            <div>
              <h2>2. Ihre Betroffenenrechte</h2>
              <p>
                Sie haben nach Maßgabe der gesetzlichen Vorschriften das Recht
                auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten. Eine erteilte
                Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
                widerrufen.
              </p>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben
                genannte Kontaktadresse. Außerdem besteht ein Beschwerderecht
                bei der zuständigen Datenschutzaufsichtsbehörde.
              </p>
            </div>

            <div>
              <h2>3. Besuch der Website</h2>
              <p>
                Beim Besuch dieser Website können technisch erforderliche
                Server-Logdaten verarbeitet werden, insbesondere IP-Adresse,
                Datum und Uhrzeit des Abrufs, angeforderte URL, Browsertyp und
                Betriebssystem. Die Verarbeitung dient der sicheren und
                funktionsfähigen Bereitstellung der Website und erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Die Logdaten werden gelöscht, sobald sie für die genannten
                Zwecke nicht mehr erforderlich sind, sofern keine gesetzliche
                Aufbewahrungspflicht entgegensteht.
              </p>
            </div>

            <div>
              <h2>4. Kontaktaufnahme und Anfrageformular</h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren oder das Anfrageformular
                ausfüllen, werden die von Ihnen freiwillig übermittelten Daten
                zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen
                verarbeitet. Das Formular übermittelt die Angaben nicht an ein
                eigenes Backend, sondern erstellt eine E-Mail in Ihrem
                Mailprogramm. Die Daten werden erst mit dem Versand an den von
                Ihnen ausgewählten E-Mail-Dienst übermittelt.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b oder f DSGVO; soweit
                eine Einwilligung erforderlich ist, Art. 6 Abs. 1 lit. a DSGVO.
                Nach Erledigung der Anfrage werden die Daten gelöscht, sofern
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>

            <div>
              <h2>5. Weitergabe an Dritte</h2>
              <p>
                Eine Übermittlung Ihrer personenbezogenen Daten an Dritte
                erfolgt nur, wenn dies zur Bearbeitung Ihrer Anfrage notwendig
                ist, Sie eingewilligt haben, eine gesetzliche Verpflichtung
                besteht oder ein berechtigtes Interesse nach Art. 6 Abs. 1 lit.
                f DSGVO vorliegt. Eine Weitergabe zu anderen Zwecken findet
                nicht statt.
              </p>
            </div>

            <div>
              <h2>6. Cookies und externe Dienste</h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies, keine
                Google-Analytics-Einbindung und keine eingebundenen
                Drittanbieter-Analytics. Für die Darstellung werden keine
                externen Schriftarten geladen. Technisch notwendige Cookies
                können durch den Hosting- oder Browserbetrieb entstehen. Sofern
                künftig weitere Dienste eingesetzt werden, wird diese
                Datenschutzerklärung entsprechend aktualisiert.
              </p>
            </div>

            <div>
              <h2>7. SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
              </p>
            </div>

            <div>
              <h2>8. Löschung und Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für
                den jeweiligen Zweck erforderlich ist oder gesetzliche
                Aufbewahrungsfristen bestehen. Einen Antrag auf Löschung können
                Sie an{" "}
                <a href="mailto:datenschutz@forumdialog.org">
                  datenschutz@forumdialog.org
                </a>{" "}
                senden.
              </p>
            </div>

            <div>
              <h2>9. Minderjährigenschutz</h2>
              <p>
                Fotos oder Veröffentlichungen, auf denen Minderjährige
                identifizierbar sind, erfolgen nur mit den erforderlichen
                Einwilligungen. Über das Anfrageformular werden keine Daten von
                Jugendlichen erhoben.
              </p>
            </div>

            <div>
              <h2>10. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                wenn sich die technische Umsetzung, die Rechtslage oder unsere
                Leistungen ändern. Es gilt jeweils die auf dieser Website
                veröffentlichte Fassung.
                <br />
                Stand: 2. September 2026.
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
