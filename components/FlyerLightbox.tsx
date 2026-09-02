"use client";

import Image from "next/image";
import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

export function FlyerLightbox({ image, flyer, title }: { image: string; flyer?: string | null; title: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in text-left"
        aria-label={`Flyer von ${title} vergrößern`}
      >
        <Image
          src={image}
          width={1000}
          height={1414}
          alt={`Flyer zur Veranstaltung „${title}“`}
          className="h-auto w-full"
          priority
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Flyer von ${title}`}
          onClick={() => setOpen(false)}
        >
          <div className="relative flex h-full w-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <Image
              src={image}
              width={1600}
              height={2262}
              alt={`Flyer zur Veranstaltung „${title}“`}
              className="max-h-full w-auto max-w-full object-contain"
            />
            <div className="absolute right-0 top-0 flex gap-2">
              {flyer && (
                <a
                  href={flyer}
                  download
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-rss-ink shadow-lg transition-colors hover:bg-rss-yellow"
                  aria-label="Flyer herunterladen"
                >
                  <Download size={20} aria-hidden />
                </a>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-rss-ink shadow-lg transition-colors hover:bg-rss-yellow"
                aria-label="Flyer schließen"
              >
                <X size={22} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
