import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { company } from "@/src/data/company";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "About Our Company",
  description:
    "Learn how Umme Yusra Global Foods connects Pakistani livestock, halal processing, and international export standards.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A Pakistani processor built for global buyers."
        description="Umme Yusra Global Foods is positioned as a modern halal meat processing, manufacturing, and export partner focused on quality systems, cold-chain discipline, and international trade readiness."
        image={images.facility}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From Pakistan's farms to international tables."
              description="Replace placeholder company history with verified milestones, leadership details, and facility facts before launch."
            />
            <div className="mt-8 space-y-4 text-muted leading-relaxed">
              <p>
                {company.legalName} is a Pakistani halal meat processing and
                export business designed around premium livestock, disciplined
                processing, and reliable international logistics.
              </p>
              <p>
                Established: {company.establishedYear}. Headquarters:{" "}
                {company.headquarters}. Legal entity: {company.legalName}.
              </p>
              <p>
                The website architecture is ready for real company photography,
                certifications, capacity figures, and destination markets.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/facility" variant="primary">
                Explore Facility
              </Button>
              <Button href="/request-a-quote" variant="outline">
                Request a Quote
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.livestock.src}
              alt={images.livestock.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
