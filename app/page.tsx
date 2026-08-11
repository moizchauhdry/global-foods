import { CertificationsSection } from "@/src/components/home/CertificationsSection";
import { CompanyIntro } from "@/src/components/home/CompanyIntro";
import { FacilitySection } from "@/src/components/home/FacilitySection";
import { FarmingSection } from "@/src/components/home/FarmingSection";
import { FarmToTable } from "@/src/components/home/FarmToTable";
import { GlobalPresence } from "@/src/components/home/GlobalPresence";
import { HalalSection } from "@/src/components/home/HalalSection";
import { Hero } from "@/src/components/home/Hero";
import { HomeCTA } from "@/src/components/home/HomeCTA";
import { LogisticsSection } from "@/src/components/home/LogisticsSection";
import { ProductShowcase } from "@/src/components/home/ProductShowcase";
import { QualitySection } from "@/src/components/home/QualitySection";
import { SocialResponsibility } from "@/src/components/home/SocialResponsibility";
import { Stats } from "@/src/components/home/Stats";
import { Sustainability } from "@/src/components/home/Sustainability";
import { TrustStrip } from "@/src/components/home/TrustStrip";
import { WhyChooseUs } from "@/src/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CompanyIntro />
      <Stats />
      <FarmToTable />
      <ProductShowcase />
      <FacilitySection />
      <QualitySection />
      <HalalSection />
      <FarmingSection />
      <GlobalPresence />
      <LogisticsSection />
      <Sustainability />
      <SocialResponsibility />
      <CertificationsSection />
      <WhyChooseUs />
      <HomeCTA />
    </>
  );
}
