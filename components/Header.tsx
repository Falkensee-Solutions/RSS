"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./Logo";
import logoImage from "@/images/Logo.png";

const NAV_LINKS = [
  { href: "/#format", label: "Format" },
  { href: "/#einrichtungen", label: "Für Einrichtungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#voraussetzungen", label: "Voraussetzungen" },
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
          className="flex items-center gap-2 rounded-md py-1"
          aria-label="Raum. Stille. Stimme. – Startseite"
        >
          <Image
            src={logoImage}
            alt=""
            className="h-11 w-12 shrink-0 object-contain md:h-14 md:w-16"
            priority
          />
          <LogoMark className="text-lg md:text-xl" />
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

        <div className="hidden lg:block">
          <Link href="/#anfrage" className="btn-primary text-sm">
            Anfrage stellen
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rss-border bg-white lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
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
