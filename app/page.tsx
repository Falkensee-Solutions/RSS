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
