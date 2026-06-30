# Raum. Stille. Stimme. – Website

Landingpage für das Begegnungsformat **Raum. Stille. Stimme.** von
Forum Dialog e.V. Ziel ist es, Berliner Einrichtungen (Gemeinden,
Vereine, Schulen, Jugend- und Kulturorte) zu motivieren, das Format
in ihren Räumen anzubieten und unverbindlich anzufragen.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react für Icons
- Cormorant Garamond (Serif) + Inter (Sans) via `next/font`

## Voraussetzungen

- Node.js ≥ 18.18
- npm (oder pnpm/yarn)

## Installation & Start

```powershell
npm install
npm run dev
```

Dev-Server: http://localhost:3000

### Skripte

| Skript            | Zweck                          |
| ----------------- | ------------------------------ |
| `npm run dev`     | Entwicklungsserver             |
| `npm run build`   | Produktions-Build              |
| `npm run start`   | Build lokal ausliefern         |
| `npm run lint`    | ESLint                         |
| `npm run typecheck` | TypeScript-Prüfung           |

## Konfiguration

`.env.example` als `.env.local` kopieren:

```ini
NEXT_PUBLIC_FORM_ENDPOINT=
NEXT_PUBLIC_CONTACT_EMAIL=info@forumdialog.org
```

- **`NEXT_PUBLIC_FORM_ENDPOINT`** – Optionaler HTTP-Endpoint, der das
  Formular per JSON-POST empfängt. Ist die Variable leer, nutzt das
  Formular einen sauberen **Mailto-Fallback** an
  `NEXT_PUBLIC_CONTACT_EMAIL`.

## Projektstruktur

```
app/
  layout.tsx          # Globales Layout, Fonts, SEO/OG
  page.tsx            # Landingpage (alle Sektionen)
  globals.css         # Tailwind + Design-Tokens
  impressum/page.tsx  # Platzhalter-Impressum
  datenschutz/page.tsx# Platzhalter-Datenschutz
  icon.svg            # Favicon
  robots.ts, sitemap.ts
components/
  Header.tsx, Footer.tsx, Logo.tsx
  InquiryForm.tsx     # Formular mit Validierung & Mailto-Fallback
  sections/           # Landingpage-Abschnitte
docs/                 # Inhalts- und Designbriefings
public/og.svg         # Platzhalter Open-Graph-Bild
```

## Inhaltliche Leitplanken

- Kein Religionsunterricht, keine Missionierung, kein Podium.
- Keine identifizierbaren Fotos minderjähriger Teilnehmerinnen.
- Keine erfundenen Aussagen zu Förderungen oder Zertifikaten.

## Offene TODOs

- [ ] **Formular-Backend** anschließen (E-Mail-Service oder API)
      und Endpoint via `NEXT_PUBLIC_FORM_ENDPOINT` setzen.
- [ ] **Impressum** durch Forum Dialog e.V. final prüfen und
      vollständige Angaben (Anschrift, Vertretung, Register) ergänzen.
- [ ] **Datenschutzerklärung** juristisch prüfen lassen und an die
      tatsächlich eingesetzten Dienste (Hosting, Formular-Backend)
      anpassen.
- [ ] Finales **Logo**, **Illustrationen** und **OG-Bild**
      (`public/og.png` 1200×630) einsetzen.
- [ ] Optional: Spam-Schutz (z. B. Cloudflare Turnstile)
      datenschutzkonform einbinden.
