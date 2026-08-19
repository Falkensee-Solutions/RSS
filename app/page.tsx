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
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <article className="card-sand flex min-h-[320px] flex-col shadow-sm">
                <div>
                  <p className="eyebrow">Nächster Termin</p>
                  <h3 className="mt-2 text-2xl md:text-3xl">Erstes Treffen</h3>
                  <div className="mt-6 space-y-4 border-t border-rss-border/70 pt-5 text-sm">
                    <p className="flex items-start gap-3"><MapPin className="shrink-0" size={19} aria-hidden /> <span>Forum Dialog<br />Mohrenstraße 34, Berlin</span></p>
                    <p className="flex items-start gap-3"><CalendarDays className="shrink-0" size={19} aria-hidden /> <span><strong>29.08.2026</strong><br />Samstag</span></p>
                    <p className="flex items-start gap-3"><Clock3 className="shrink-0" size={19} aria-hidden /> <span><strong>14:15–15:45</strong><br />90 Minuten</span></p>
                  </div>
                </div>
                <Link href="/termine/erstes-treffen" className="btn-primary mt-auto pt-3 md:mt-10">Details ansehen</Link>
              </article>
            </div>
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
