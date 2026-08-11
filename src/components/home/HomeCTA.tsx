import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#209020] to-forest-deep" />
      <Container className="relative">
        <Reveal>
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-beige">
              International Buyers
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Ready to request a quotation?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Share your product requirements, temperature preference, and target
              market. Our export team will respond with next steps for your inquiry.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/request-a-quote" variant="accent" size="lg">
                Request a Quote
              </Button>
              <Button href={`mailto:${company.exportEmail}`} variant="secondary" size="lg">
                Email Export Team
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
