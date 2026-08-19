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
            <article className="card-sand mt-10 max-w-3xl shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Nächster Termin</p>
                  <h3 className="mt-2 text-3xl md:text-4xl">Erstes Treffen</h3>
                </div>
                <span className="rounded-full bg-rss-yellow px-4 py-2 text-sm font-semibold">29.08.26</span>
              </div>
              <div className="mt-7 grid gap-3 border-t border-rss-border/70 pt-6 text-sm sm:grid-cols-3">
                <p className="flex items-start gap-3"><MapPin className="shrink-0" size={19} aria-hidden /> <span>Forum Dialog<br />Mohrenstraße 34, Berlin</span></p>
                <p className="flex items-start gap-3"><CalendarDays className="shrink-0" size={19} aria-hidden /> <span><strong>29.08.2026</strong><br />Samstag</span></p>
                <p className="flex items-start gap-3"><Clock3 className="shrink-0" size={19} aria-hidden /> <span><strong>14:15–15:45</strong><br />90 Minuten</span></p>
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
