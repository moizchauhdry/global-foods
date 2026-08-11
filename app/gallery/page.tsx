import { GalleryGrid } from "@/src/components/gallery/GalleryGrid";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Browse livestock, farms, facility, products, packaging, team, logistics, and export imagery.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual journey through the supply chain."
        description="Filterable masonry gallery with lightbox viewing. Replace placeholders with company photography when available."
        image={images.workers}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
