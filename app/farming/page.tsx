import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Responsible Farming",
  description:
    "Learn about responsible livestock sourcing, farmer partnerships, animal welfare, and sustainable farming practices.",
  path: "/farming",
});

const topics = [
  "Responsible livestock sourcing",
  "Animal nutrition",
  "Healthy livestock",
  "Farmer partnerships",
  "Sustainable practices",
  "Animal welfare",
  "Quality feed",
  "Traceability",
];

export default function FarmingPage() {
  return (
    <>
      <PageHero
        eyebrow="Responsible Farming"
        title="Better Farming. Better Meat."
        description="Stronger meat programs begin with healthier livestock and more accountable farm partnerships."
        image={images.farm}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-forest-deep">
              Farming that supports consistency
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {topics.map((topic) => (
                <li key={topic} className="border-t border-line pt-3 text-sm text-muted">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.pasture.src}
              alt={images.pasture.alt}
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
