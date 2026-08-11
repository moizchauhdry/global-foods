import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-[#1f6f1f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,176,65,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(125,188,36,0.16),transparent_40%)]" />
      <div className="film-grain absolute inset-0" />

      <Container className="relative z-[2]">
        <Reveal blur>
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-beige">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              International Buyers
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to request a quotation?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Share your product requirements, temperature preference, and target
              market. Our export team will respond with next steps for your inquiry.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
