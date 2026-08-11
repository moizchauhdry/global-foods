import Image from "next/image";
import { Reveal } from "@/src/components/animations/Reveal";
import { Stagger, StaggerItem } from "@/src/components/animations/Stagger";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { facilityAreas, facilityStats } from "@/src/data/company";

export function FacilitySection() {
  return (
    <section className="texture-soft py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our Facility"
              title="Built for Quality. Designed for Scale."
              description="A processing environment planned around hygiene, temperature control, packaging discipline, and export logistics."
            />
            <Button href="/facility" variant="outline">
              Explore Our Facility
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {facilityStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="lift-card h-full border border-line bg-paper/80 p-5 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold text-forest-deep">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-charcoal">{stat.label}</p>
                <p className="mt-2 text-xs text-muted">{stat.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {facilityAreas.slice(0, 4).map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05}>
              <article className="media-frame group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={area.image.src}
                  alt={area.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="image-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 text-white transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-display text-2xl font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{area.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
