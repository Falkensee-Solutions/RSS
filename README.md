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

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

- **`NEXT_PUBLIC_FORM_ENDPOINT`** – Optionaler HTTP-Endpoint, der das
  Formular per JSON-POST empfängt. Ist die Variable leer, nutzt das
  Formular einen sauberen **Mailto-Fallback** an
  `NEXT_PUBLIC_CONTACT_EMAIL`.
- **`NEXT_PUBLIC_SANITY_PROJECT_ID`** – öffentliche Projekt-ID des Sanity-Projekts.
- **`NEXT_PUBLIC_SANITY_DATASET`** – normalerweise `production`.
- **`NEXT_PUBLIC_SANITY_API_VERSION`** – verwendete Sanity-API-Version.

### Redaktion und automatische Veröffentlichung

Das Frontend bleibt eine statische Next.js-Seite auf GitHub Pages. Termine,
Flyer, Partnerlogos und Galeriebilder werden in Sanity gepflegt und beim
GitHub-Actions-Build geladen. Das Studio liegt separat unter `studio/`, weil
aktuelle Sanity-Studio-Versionen React 19 benötigen, während das Frontend
React 18 verwendet.

```text
cd studio
npm run dev
```

Für den Betrieb:

1. Sanity-Projekt und Dataset anlegen.
2. `SANITY_STUDIO_PROJECT_ID` und `SANITY_STUDIO_DATASET` im Studio setzen.
3. `npm run deploy` im Ordner `studio` ausführen.
4. Redaktionelle Personen einzeln in Sanity einladen und Rollen vergeben.
5. Im GitHub-Repository die Actions-Variable `SANITY_PROJECT_ID` setzen.
6. Optional `SANITY_DATASET` setzen; Standard ist `production`.
7. Einen Sanity-Webhook auf GitHub `repository_dispatch` mit dem Eventtyp
      `sanity-publish` einrichten. Der Webhook benötigt eine separat geschützte,
      minimal berechtigte GitHub-App oder ein Fine-grained-Token mit ausschließlich
      `Repository dispatch`-Berechtigung. Dieses Token gehört nicht in das Repository.

Ohne `SANITY_PROJECT_ID` nutzt die lokale Entwicklung weiterhin den eingebauten
Beispieltermin. Der GitHub-Workflow bricht ohne diese Variable bewusst vor dem
Build ab, damit nicht versehentlich veraltete Fallback-Inhalte veröffentlicht
werden.

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

- [ ] Sanity einmalig nach `docs/SANITY_SETUP.md` einrichten und
      `SANITY_PROJECT_ID` als GitHub-Actions-Variable setzen.

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
