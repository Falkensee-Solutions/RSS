"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Event } from "@/lib/event-types";
import { EventCard } from "@/components/EventCard";

export function EventCarousel({ events, past = false }: { events: Event[]; past?: boolean }) {
  const label = past ? "Vergangene Termine" : "Aktuelle Termine";

  if (events.length === 0) {
    return <p className="card-sand mt-8 text-rss-muted">{past ? "Noch keine vergangenen Termine." : "Aktuell sind keine weiteren Termine veröffentlicht."}</p>;
  }

  function scroll(direction: "previous" | "next") {
    const viewport = document.querySelector<HTMLElement>(`[data-carousel="${past ? "past" : "upcoming"}"]`);
    viewport?.scrollBy({ left: direction === "next" ? viewport.clientWidth * 0.8 : -viewport.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div className="mt-8">
      <div className="termin-carousel-shell">
        <div className="termin-viewport" data-carousel={past ? "past" : "upcoming"} aria-label={label}>
          <div className="termin-grid">
            {events.map((event) => <EventCard event={event} past={past} key={event._id} />)}
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="flex gap-2">
          <button type="button" className="termin-control" onClick={() => scroll("previous")} aria-label={`${label}: vorherige`}><ChevronLeft size={20} aria-hidden /></button>
          <button type="button" className="termin-control" onClick={() => scroll("next")} aria-label={`${label}: nächste`}><ChevronRight size={20} aria-hidden /></button>
        </div>
      </div>
    </div>
  );
}
