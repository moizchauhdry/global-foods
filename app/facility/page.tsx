import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { facilityAreas, facilityStats } from "@/src/data/company";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Processing Facility",
  description:
    "Explore a modern halal meat processing facility designed for quality, scale, cold storage, and export logistics.",
  path: "/facility",
});

export default function FacilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Facility"
        title="Built for Quality. Designed for Scale."
        description="A highly visual overview of slaughtering, processing, chilling, freezing, packaging, laboratories, and export loading areas."
        image={images.facility}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilityStats.map((stat) => (
              <div key={stat.label} className="border border-line bg-paper p-5">
                <p className="font-display text-3xl text-forest-deep">{stat.value}</p>
                <p className="mt-2 text-sm text-charcoal">{stat.label}</p>
                <p className="mt-2 text-xs text-muted">{stat.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {facilityAreas.map((area) => (
              <article key={area.title} className="overflow-hidden border border-line">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={area.image.src}
                    alt={area.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-2xl text-forest-deep">{area.title}</h2>
                  <p className="mt-2 text-sm text-muted">{area.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/request-a-quote" variant="primary">
              Discuss Supply Programs
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
