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
import { CalendarDays, Clock3, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <section id="termine" className="section scroll-mt-24 bg-white">
          <div className="container-rss">
            <p className="eyebrow">Kommende Treffen</p>
            <h2 className="mt-3">Aktuelle Termine</h2>
            <article className="card-sand mt-10 max-w-5xl shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-card bg-white/70 p-5">
                  <p className="eyebrow">Nächster Termin</p>
                  <h3 className="mt-2 text-2xl md:text-3xl">Erstes Treffen</h3>
                </div>
                <div className="rounded-card bg-white/70 p-5">
                  <p className="eyebrow">Ort</p>
                  <p className="mt-3 flex items-start gap-3 text-sm"><MapPin className="shrink-0" size={19} aria-hidden /> <span>Forum Dialog<br />Mohrenstraße 34, Berlin</span></p>
                </div>
                <div className="rounded-card bg-white/70 p-5">
                  <p className="eyebrow">Datum</p>
                  <p className="mt-3 flex items-start gap-3 text-sm"><CalendarDays className="shrink-0" size={19} aria-hidden /> <span><strong>29.08.2026</strong><br />Samstag</span></p>
                </div>
                <div className="rounded-card bg-white/70 p-5">
                  <p className="eyebrow">Zeitraum</p>
                  <p className="mt-3 flex items-start gap-3 text-sm"><Clock3 className="shrink-0" size={19} aria-hidden /> <span><strong>14:15–15:45</strong><br />90 Minuten</span></p>
                </div>
              </div>
              <Link href="/termine/erstes-treffen" className="btn-primary mt-6">Details ansehen</Link>
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
