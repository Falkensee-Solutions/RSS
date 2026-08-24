"use client";

import Link from "next/link";
import { useRef } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Clock3, MapPin } from "lucide-react";

const meetings = [
  {
    label: "Nächster Termin",
    title: "Erstes Treffen",
    location: "Forum Dialog",
    address: "Mohrenstraße 34, Berlin",
    date: "29.08.2026",
    weekday: "Samstag",
    time: "14:15–15:45",
    duration: "90 Minuten",
    href: "/termine/erstes-treffen",
  },
];

export function UpcomingMeetings() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const hasMultipleMeetings = meetings.length > 1;

  function scrollMeetings(direction: "previous" | "next") {
    viewportRef.current?.scrollBy({
      left: direction === "next" ? viewportRef.current.clientWidth : -viewportRef.current.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <div className="termin-carousel mt-10">
      <div
        ref={viewportRef}
        className="termin-viewport"
        aria-label="Kommende Treffen"
      >
        <div
          className="termin-grid"
          data-count={meetings.length}
          data-overflow={meetings.length > 4}
        >
          {meetings.map((meeting, index) => (
            <article className="card-sand termin-card flex min-h-[320px] flex-col shadow-sm" key={meeting.href}>
              <div>
                <p className="eyebrow">{meeting.label}</p>
                <h3 className="mt-2 text-2xl md:text-3xl">{meeting.title}</h3>
                <div className="mt-6 space-y-4 border-t border-rss-border/70 pt-5 text-sm">
                  <p className="flex items-start gap-3">
                    <MapPin className="shrink-0" size={19} aria-hidden />
                    <span>{meeting.location}<br />{meeting.address}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CalendarDays className="shrink-0" size={19} aria-hidden />
                    <span><strong>{meeting.date}</strong><br />{meeting.weekday}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock3 className="shrink-0" size={19} aria-hidden />
                    <span><strong>{meeting.time}</strong><br />{meeting.duration}</span>
                  </p>
                </div>
              </div>
              <Link href={meeting.href} className="btn-primary mt-auto pt-3 md:mt-10">
                Details ansehen
              </Link>
            </article>
          ))}
        </div>
      </div>

      {hasMultipleMeetings && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-sm text-rss-muted">Weitere Treffen ansehen</p>
          <div className="flex gap-2">
            <button
              type="button"
              className="termin-control"
              onClick={() => scrollMeetings("previous")}
              aria-label="Vorherige Treffen"
            >
              <ChevronLeft size={20} aria-hidden />
            </button>
            <button
              type="button"
              className="termin-control"
              onClick={() => scrollMeetings("next")}
              aria-label="Nächste Treffen"
            >
              <ChevronRight size={20} aria-hidden />
            </button>
          </div>
        </div>
      )}

      {meetings.length > 1 && (
        <p className="sr-only" aria-live="polite">
          {meetings.length} kommende Treffen
        </p>
      )}
    </div>
  );
}
