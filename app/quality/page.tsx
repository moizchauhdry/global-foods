import { ArrowDown } from "lucide-react";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { qualityFlow } from "@/src/data/company";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Quality & Food Safety",
  description:
    "Discover quality systems covering inspection, hygiene, temperature monitoring, laboratory testing, and cold-chain controls.",
  path: "/quality",
});

const topics = [
  "Animal inspection",
  "Hygiene",
  "Halal compliance",
  "Processing controls",
  "Temperature monitoring",
  "Laboratory testing",
  "Traceability",
  "Packaging controls",
  "Cold-chain monitoring",
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Quality You Can Trace"
        description="A disciplined quality narrative for international buyers evaluating process control and food safety maturity."
        image={images.inspection}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-forest-deep">
              Controls across the value chain
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {topics.map((topic) => (
                <li key={topic} className="border-t border-line pt-3 text-sm text-muted">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-beige/40 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Interactive Flow
            </p>
            <ol className="mt-6">
              {qualityFlow.map((step, index) => (
                <li key={step}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center border border-forest/20 font-display text-sm text-forest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-forest-deep">{step}</span>
                  </div>
                  {index < qualityFlow.length - 1 ? (
                    <ArrowDown className="my-2 ml-3 h-4 w-4 text-gold" />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
