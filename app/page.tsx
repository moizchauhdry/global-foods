import { ContactSection } from "@/src/components/home/ContactSection";
import { ExportSection } from "@/src/components/home/ExportSection";
import { FacilityStory } from "@/src/components/home/FacilityStory";
import { Hero } from "@/src/components/home/Hero";
import { Intro } from "@/src/components/home/Intro";
import { ProductScroll } from "@/src/components/home/ProductScroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ProductScroll />
      <FacilityStory />
      <ExportSection />
      <ContactSection />
    </>
  );
}
