import Image from "next/image";
import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { sustainabilityTopics } from "@/src/data/company";

type Props = {
  showIntro?: boolean;
};

export function Sustainability({ showIntro = true }: Props) {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        {showIntro ? (
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Sustainability"
                title="Responsibility built into the supply chain."
                description="From sourcing and resource stewardship to by-product utilization and community impact."
              />
              <Button href="/sustainability" variant="outline">
                View Sustainability
              </Button>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sustainabilityTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.04}>
              <article className="group overflow-hidden border border-line">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={topic.image.src}
                    alt={topic.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-forest-deep">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
