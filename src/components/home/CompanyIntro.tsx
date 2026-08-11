import { Reveal } from "@/src/components/animations/Reveal";
import { ParallaxImage } from "@/src/components/animations/ParallaxImage";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { images } from "@/src/data/images";

export function CompanyIntro() {
  return (
    <section className="texture-soft py-20 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal blur>
          <ParallaxImage
            src={images.livestock.src}
            alt={images.livestock.alt}
            className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            intensity={12}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Who We Are"
            title="From Farm to Global Table"
            description="Umme Yusra Global Foods is structured as a Pakistani halal meat processing and export partner for buyers who require disciplined quality systems and reliable international delivery."
          />
          <ul className="mt-8 space-y-3 text-muted">
            {[
              "Pakistani origin with an international buyer mindset",
              "Premium livestock sourcing and responsible farm partnerships",
              "Halal processing supported by hygiene and food safety controls",
              "Modern facilities designed for scale and export readiness",
              "End-to-end quality control from intake to cold-chain dispatch",
              "Global distribution pathways through chilled and frozen logistics",
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/about" variant="primary">
              Learn About Our Company
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
