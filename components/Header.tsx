"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { LogoMark } from "./Logo";
import logoImage from "@/images/Logo.png";

const NAV_LINKS = [
  { href: "/#termine", label: "Termine" },
  { href: "/#format", label: "Format" },
  { href: "/#einrichtungen", label: "Für Einrichtungen" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rss-border bg-rss-warm/90 backdrop-blur">
      <div className="container-rss flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 rounded-md py-1"
          aria-label="Raum. Stille. Stimme. – Startseite"
        >
          <LogoMark className="truncate text-base md:text-xl" />
          <Image
            src={logoImage}
            alt=""
            className="h-11 w-12 shrink-0 object-contain md:h-14 md:w-16"
            priority
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-rss-ink">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-md px-1 py-1 hover:text-rss-ink/70"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="https://www.instagram.com/raum.stille.stimme/" className="btn-secondary text-sm" target="_blank" rel="noreferrer">
            <Instagram size={17} aria-hidden />
            Raum. Stille. Stimme.
          </Link>
          <Link href="/#anfrage" className="btn-primary text-sm">
            Anfrage stellen
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="https://www.instagram.com/raum.stille.stimme/"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rss-border bg-white"
            target="_blank"
            rel="noreferrer"
            aria-label="Raum. Stille. Stimme. auf Instagram öffnen"
          >
            <Instagram size={20} aria-hidden />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rss-border bg-white"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-rss-border bg-rss-warm lg:hidden">
          <nav aria-label="Mobile Navigation" className="container-rss py-4">
            <ul className="flex flex-col gap-1 text-base">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-md px-2 py-3 hover:bg-rss-sand"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://www.instagram.com/raum.stille.stimme/"
                  className="block rounded-md px-2 py-3 hover:bg-rss-sand"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Raum. Stille. Stimme.
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/#anfrage"
                  className="btn-primary w-full"
                  onClick={() => setOpen(false)}
                >
                  Anfrage stellen
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
