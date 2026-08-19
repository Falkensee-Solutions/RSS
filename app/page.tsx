import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { FormatSection } from "@/components/sections/FormatSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { RolesSection } from "@/components/sections/RolesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RequirementsSection } from "@/components/sections/RequirementsSection";
import { StanceSection } from "@/components/sections/StanceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { InquirySection } from "@/components/sections/InquirySection";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <section className="border-y border-rss-border bg-white py-8">
          <div className="container-rss flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">Folge uns</p>
              <p className="mt-1 font-serif text-2xl">Aktuelle Termine und Eindrücke auf Instagram.</p>
            </div>
            <Link href="https://www.instagram.com/raum.stille.stimme/" className="btn-primary" target="_blank" rel="noreferrer">
              <Instagram size={19} aria-hidden /> @raum.stille.stimme
            </Link>
          </div>
        </section>
        <section id="termine" className="section scroll-mt-24">
          <div className="container-rss">
            <p className="eyebrow">Kommende Treffen</p>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="mt-3">Aktuelle Termine</h2>
              <Link href="https://www.instagram.com/raum.stille.stimme/" className="text-sm font-semibold underline underline-offset-4" target="_blank" rel="noreferrer">
                Weitere Termine auf Instagram
              </Link>
            </div>
            <article className="card-sand mt-10 max-w-4xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Nächster Termin</p>
                  <h3 className="mt-2 text-3xl md:text-4xl">Erstes Treffen</h3>
                </div>
                <span className="rounded-full bg-rss-yellow px-4 py-2 text-sm font-semibold">29.08.26</span>
              </div>
              <div className="mt-7 grid gap-4 text-sm sm:grid-cols-3">
                <p className="flex items-start gap-3"><MapPin size={19} aria-hidden /> Forum Dialog, Mohrenstraße 34, Berlin</p>
                <p className="flex items-start gap-3"><CalendarDays size={19} aria-hidden /> 29.08.2026</p>
                <p className="flex items-start gap-3"><Clock3 size={19} aria-hidden /> 14:15–15:45 Uhr</p>
              </div>
              <Link href="/termine/erstes-treffen" className="btn-primary mt-8">Details ansehen</Link>
            </article>
          </div>
        </section>
        <FormatSection />
        <AudienceSection />
        <RolesSection />
        <BenefitsSection />
        <ProcessSection />
        <RequirementsSection />
        <StanceSection />
        <FaqSection />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
}
