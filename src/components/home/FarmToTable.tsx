import Image from "next/image";
import { Reveal } from "@/src/components/animations/Reveal";
import { Stagger, StaggerItem } from "@/src/components/animations/Stagger";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { journeySteps } from "@/src/data/company";

export function FarmToTable() {
  return (
    <section className="section-sheen py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="Farm to table, engineered for export."
            description="A clear operational story from livestock sourcing through halal processing, packaging, cold chain, and global delivery."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5" stagger={0.05}>
          {journeySteps.map((step) => (
            <StaggerItem key={step.id}>
              <article className="lift-card group h-full border border-line bg-paper">
                <div className="media-frame relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="image-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                  <span className="absolute left-3 top-3 bg-white/95 px-2.5 py-1 font-display text-xs font-semibold tracking-[0.18em] text-forest-deep">
                    {step.id}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-forest-deep">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
