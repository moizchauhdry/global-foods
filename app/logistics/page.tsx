import { ArrowRight } from "lucide-react";
import { PageHero } from "@/src/components/shared/PageHero";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { logisticsSteps } from "@/src/data/company";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Export & Logistics",
  description:
    "Learn about cold-chain management, chilled and frozen shipments, reefer containers, and international distribution planning.",
  path: "/logistics",
});

export default function LogisticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Export & Logistics"
        title="Cold chain from facility to customer."
        description="Documentation, temperature control, container loading, port coordination, and international shipment planning."
        image={images.logistics}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
            {logisticsSteps.map((step, index) => (
              <div key={step} className="contents">
                <div className="border border-line bg-paper px-5 py-4 text-sm font-medium text-forest-deep">
                  {step}
                </div>
                {index < logisticsSteps.length - 1 ? (
                  <ArrowRight className="mx-1 hidden h-4 w-4 text-gold lg:block" />
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Export documentation support",
              "Chilled and frozen shipment planning",
              "Reefer containers and port logistics",
            ].map((item) => (
              <div key={item} className="border-t border-line pt-4 text-sm text-muted">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/request-a-quote" variant="accent">
              Request Export Quotation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
