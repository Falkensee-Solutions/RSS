export type ImageAsset = string;

export type Partner = {
  name: string;
  logo?: ImageAsset;
  url?: string;
};

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
  summary?: string;
  published?: boolean;
  body?: { type: "paragraph" | "heading"; text: string }[];
  registrationUrl?: string;
  flyer?: string | null;
  gallery?: { image: string; alt?: string; caption?: string }[];
  partners?: Partner[];
  funders?: Partner[];
};

export function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(date));
}
