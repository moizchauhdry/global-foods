import Image from "next/image";
import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { images } from "@/src/data/images";

const topics = [
  "Responsible livestock sourcing",
  "Animal nutrition awareness",
  "Healthy livestock programs",
  "Farmer partnerships",
  "Sustainable practices",
  "Animal welfare",
  "Quality feed considerations",
  "Origin traceability",
];

export function FarmingSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Responsible Farming"
            title="Better Farming. Better Meat."
            description="Stronger meat programs begin with healthier livestock, clearer farm relationships, and sourcing discipline that supports consistency over time."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <li key={topic} className="border-t border-line pt-3 text-sm text-muted">
                {topic}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/farming" variant="outline">
              Explore Farming Approach
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.farm.src}
              alt={images.farm.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
