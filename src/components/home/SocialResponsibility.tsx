import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { socialResponsibility } from "@/src/data/company";

export function SocialResponsibility() {
  return (
    <section className="bg-beige py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Social Responsibility"
              title="Responsibility to people around the supply chain."
              description="Employees, farmers, training, and community development framed as genuine corporate commitments — ready for verified program details."
            />
            <Button href="/social-responsibility" variant="outline">
              Learn More
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialResponsibility.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full border border-line bg-paper p-5">
                <h3 className="font-display text-xl text-forest-deep">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
