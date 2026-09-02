export type ImageAsset = string;

export type Partner = {
  name: string;
  logo?: ImageAsset;
  url?: string;
};

/** Altes Blockformat – bleibt lesbar, damit bestehende Termine nicht brechen. */
export type LegacyBodyBlock = { type: "paragraph" | "heading"; text: string };

export type Event = {
  _id: string;
  title: string;
  slug: string;
  startDate: string;
  endDate?: string;
  weekday?: string;
  time?: string;
  duration?: string;
  location?: string;
  address?: string;
  /** Optionaler Link zu Google Maps o. Ä. für die Adresse. */
  mapUrl?: string;
  /** Plus Code für die Position auf der internen Testkarte. */
  plusCode?: string;
  summary?: string;
  published?: boolean;
  /** Markdown-Text aus dem CMS. */
  body?: string | LegacyBodyBlock[];
  registrationUrl?: string;
  /** Beschriftung des Anmelde-Buttons, z. B. „Jetzt anmelden“. */
  registrationLabel?: string;
  /** Hinweis unter dem Anmelde-Button, z. B. „Begrenzte Plätze“. */
  registrationNote?: string;
  /** Flyer als Bild – wird auf der Detailseite rechts angezeigt. */
  flyerImage?: ImageAsset | null;
  /** Veranstaltungsbild – wird oberhalb der Beschreibung angezeigt. */
  eventImage?: ImageAsset | null;
  /** Flyer als Datei (PDF) zum Download. */
  flyer?: string | null;
  gallery?: { image: string; alt?: string; caption?: string }[];
  partners?: Partner[];
  funders?: Partner[];
};

/**
 * Normalisiert das Body-Feld: Sowohl das alte Blockformat als auch reiner
 * Markdown-Text ergeben am Ende einen Markdown-String.
 */
export function eventBodyToMarkdown(body: Event["body"]): string {
  if (!body) return "";
  if (typeof body === "string") return body;

  return body
    .map((block) => (block.type === "heading" ? `## ${block.text}` : block.text))
    .join("\n\n");
}

export function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(date));
}

/** Ausgeschriebenes Datum, z. B. „Samstag, 29. August 2026“. */
export function formatEventDateLong(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(date));
}

/** Uhrzeit aus startDate/endDate, falls im CMS kein Freitext gepflegt wurde. */
export function formatEventTimeRange(event: Pick<Event, "startDate" | "endDate" | "time">) {
  if (event.time) return event.time;
  if (!event.startDate) return "";

  const time = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  });

  const start = time.format(new Date(event.startDate));
  if (!event.endDate) return `ab ${start} Uhr`;
  return `${start}–${time.format(new Date(event.endDate))} Uhr`;
}
