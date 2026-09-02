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
import { UpcomingMeetings } from "@/components/UpcomingMeetings";
import { getEvents, isPastEvent } from "@/lib/events";

export default async function HomePage() {
  const events = (await getEvents()).filter((event) => !isPastEvent(event));
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <section id="termine" className="section bg-white">
          <div className="container-rss">
            <p className="eyebrow">Kommende Treffen</p>
            <h2 className="mt-3">Aktuelle Termine</h2>
            <UpcomingMeetings events={events} />
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
