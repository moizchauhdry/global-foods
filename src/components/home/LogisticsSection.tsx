import { ArrowRight } from "lucide-react";
import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { logisticsSteps } from "@/src/data/company";

export function LogisticsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Export & Logistics"
            title="Cold chain. Documentation. Delivery."
            description="Export workflows covering chilled and frozen shipments, reefer logistics, port coordination, and international distribution planning."
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
          {logisticsSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.04} className="contents">
              <div className="border border-line bg-paper px-5 py-4 text-sm font-medium text-forest-deep">
                {step}
              </div>
              {index < logisticsSteps.length - 1 ? (
                <ArrowRight className="mx-1 hidden h-4 w-4 text-gold lg:block" />
              ) : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Export documentation support for international buyers",
            "Chilled and frozen shipment planning",
            "Reefer containers, port logistics, and distribution handoffs",
          ].map((item) => (
            <div key={item} className="border-t border-line pt-4 text-sm text-muted">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/logistics" variant="outline">
            Explore Export Logistics
          </Button>
        </div>
      </Container>
    </section>
  );
}
