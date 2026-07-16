import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://rss.forumdialog.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raum. Stille. Stimme. | Begegnungsformat für Mädchen in Berlin",
    template: "%s | Raum. Stille. Stimme.",
  },
  description:
    "Ein geschütztes Begegnungsformat für Mädchen und junge Frauen von 14–18 Jahren. Forum Dialog e.V. bringt Konzept, Teamerinnen und Material zu Einrichtungen in Berlin.",
  keywords: [
    "Begegnungsformat Berlin",
    "interreligiöser Dialog Jugendliche",
    "Mädchenarbeit Berlin",
    "Jugendarbeit Gemeinden",
    "geschützter Mädchenraum",
    "Forum Dialog e.V.",
    "Raum Stille Stimme",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Raum. Stille. Stimme.",
    description:
      "Begegnungsformat für Mädchen und junge Frauen in Berlin. Forum Dialog e.V. bringt Konzept, Teamerinnen und Material zu Ihnen vor Ort.",
    url: siteUrl,
    siteName: "Raum. Stille. Stimme.",
    locale: "de_DE",
    type: "website",
    // TODO: Finales OG-Bild (1200x630) im Flyer-Stil unter /public/og.png einsetzen.
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Raum. Stille. Stimme. – Begegnungsformat für Mädchen in Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raum. Stille. Stimme.",
    description:
      "Begegnungsformat für Mädchen und junge Frauen in Berlin.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-rss-ink focus:px-4 focus:py-2 focus:text-rss-warm"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
