import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Halal Assurance",
  description:
    "Understand how Umme Yusra Global Foods approaches halal integrity, animal welfare, hygiene, and process discipline.",
  path: "/halal",
});

const points = [
  {
    title: "Islamic Slaughtering Principles",
    body: "Process design guided by respectful halal slaughter practices and disciplined handling.",
  },
  {
    title: "Halal-Certified Processes",
    body: "Certification details remain configurable placeholders until verified certificates are provided.",
  },
  {
    title: "Animal Welfare",
    body: "Welfare-aware handling expectations integrated into sourcing and process conversations.",
  },
  {
    title: "Hygiene, Separation & Traceability",
    body: "Facility hygiene, handling controls, and documentation pathways that support buyer confidence.",
  },
];

export default function HalalPage() {
  return (
    <>
      <PageHero
        eyebrow="Halal Assurance"
        title="Halal at Every Step"
        description="A modern corporate presentation of halal integrity — clear, restrained, and internationally credible."
        image={images.facility}
      />
      <section className="halal-motif geometric-pattern py-16 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {points.map((point) => (
            <article key={point.title} className="border border-line bg-paper/90 p-6">
              <h2 className="font-display text-2xl text-forest-deep">{point.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{point.body}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
