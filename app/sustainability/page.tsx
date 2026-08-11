import { Sustainability } from "@/src/components/home/Sustainability";
import { PageHero } from "@/src/components/shared/PageHero";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Sustainability",
  description:
    "Explore responsible sourcing, waste reduction, by-product utilization, and community-focused sustainability themes.",
  path: "/sustainability",
});

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Responsibility across the supply chain."
        description="A modern sustainability narrative covering sourcing, operations, packaging, and community development."
        image={images.sustainability}
      />
      <Sustainability showIntro={false} />
    </>
  );
}
