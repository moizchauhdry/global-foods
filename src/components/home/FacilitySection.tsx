import Image from "next/image";
import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { facilityAreas, facilityStats } from "@/src/data/company";

export function FacilitySection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilityStats.map((stat) => (
            <div key={stat.label} className="border border-line bg-beige/50 p-5">
              <p className="font-display text-3xl text-forest-deep">{stat.value}</p>
              <p className="mt-2 text-sm text-charcoal">{stat.label}</p>
              <p className="mt-2 text-xs text-muted">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {facilityAreas.slice(0, 4).map((area, index) => (
            <Reveal key={area.title} delay={index * 0.05}>
              <article className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={area.image.src}
                  alt={area.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-2xl">{area.title}</h3>
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
