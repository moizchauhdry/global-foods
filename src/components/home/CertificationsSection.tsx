import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { certifications } from "@/src/data/certifications";

export function CertificationsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Certifications"
              title="Standards presented as configurable placeholders."
              description="Do not treat these as confirmed company certifications until official documents are provided."
            />
            <Button href="/certifications" variant="outline">
              View Certifications
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.03}>
              <div className="flex aspect-square flex-col items-center justify-center border border-line bg-paper p-4 text-center">
                <span className="font-display text-lg text-forest-deep">{cert.name}</span>
                <span className="mt-2 text-[10px] uppercase tracking-[0.14em] text-muted">
                  {cert.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
