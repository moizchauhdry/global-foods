import Image from "next/image";
import { Reveal } from "@/src/components/animations/Reveal";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { journeySteps } from "@/src/data/company";

export function FarmToTable() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="Farm to table, engineered for export."
            description="A clear operational story from livestock sourcing through halal processing, packaging, cold chain, and global delivery."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {journeySteps.map((step, index) => (
            <Reveal key={step.id} delay={Math.min(index * 0.04, 0.24)}>
              <article className="group h-full border border-line bg-paper">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold">
                    {step.id}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-forest-deep">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
