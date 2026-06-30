import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-rss-border bg-white">
      <div className="container-rss py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <LogoMark className="text-xl" />
            <p className="mt-4 max-w-sm text-sm text-rss-muted">
              Ein Begegnungsformat von Forum Dialog e.V. für geschützte Räume,
              echte Begegnung und respektvollen Austausch.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-rss-muted">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="font-medium">Forum Dialog e.V.</li>
              <li className="text-rss-muted">Ansprechpartner: Erkam Cebi</li>
              <li>
                <a
                  href="tel:+493031519988"
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <Phone size={16} aria-hidden /> 030 31519988
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@forumdialog.org"
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <Mail size={16} aria-hidden /> info@forumdialog.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.forumdialog.org/"
                  className="inline-flex items-center gap-2 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe size={16} aria-hidden /> www.forumdialog.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-rss-muted">
              Rechtliches
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/impressum" className="hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:underline">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/#anfrage" className="hover:underline">
                  Anfrage stellen
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-rss-border pt-6 text-sm text-rss-muted">
          © {new Date().getFullYear()} Forum Dialog e.V. – Raum. Stille. Stimme.
        </p>
      </div>
    </footer>
  );
}
