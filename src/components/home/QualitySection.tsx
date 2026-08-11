import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { qualityFlow } from "@/src/data/company";
import { ArrowDown } from "lucide-react";

const qualityPoints = [
  "Animal inspection readiness before processing",
  "Hygiene discipline across processing areas",
  "Halal compliance at critical process stages",
  "Temperature monitoring through chilling and freezing",
  "Laboratory support for food safety confidence",
  "Traceability-minded documentation and handling",
  "Packaging controls for export preparation",
  "Cold-chain monitoring through dispatch",
];

export function QualitySection() {
  return (
    <section className="bg-forest text-white py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Quality & Food Safety"
            title="Quality You Can Trace"
            description="A structured approach to hygiene, process control, and product integrity from farm intake through export readiness."
            tone="dark"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {qualityPoints.map((point) => (
              <li key={point} className="border-t border-white/15 pt-3 text-sm text-white/75">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/quality" variant="accent">
              Explore Quality Systems
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-white/15 bg-white/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige">
              Traceability Flow
            </p>
            <ol className="mt-6 space-y-0">
              {qualityFlow.map((step, index) => (
                <li key={step} className="flex flex-col items-start">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center border border-gold/50 font-display text-sm text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-white">{step}</span>
                  </div>
                  {index < qualityFlow.length - 1 ? (
                    <ArrowDown className="my-2 ml-3 h-4 w-4 text-white/35" />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
