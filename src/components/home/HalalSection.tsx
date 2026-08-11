import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const points = [
  {
    title: "Islamic Slaughtering Principles",
    description: "Process design guided by respectful, disciplined halal slaughter practices.",
  },
  {
    title: "Halal-Certified Processes",
    description: "Configurable certification placeholders ready for verified certificate details.",
  },
  {
    title: "Animal Welfare Awareness",
    description: "Handling expectations that respect animal welfare and process integrity.",
  },
  {
    title: "Hygiene & Separation",
    description: "Facility hygiene and handling controls supporting product integrity.",
  },
];

export function HalalSection() {
  return (
    <section className="halal-motif geometric-pattern py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Halal Assurance"
            title="Halal at Every Step"
            description="A modern corporate approach to halal integrity — clear, disciplined, and ready for international buyer scrutiny."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <article className="border border-line bg-paper/80 p-6 backdrop-blur-sm">
                <h3 className="font-display text-2xl text-forest-deep">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {point.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/halal" variant="primary">
            Learn About Halal Assurance
          </Button>
        </div>
      </Container>
    </section>
  );
}
