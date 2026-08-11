import Image from "next/image";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { socialResponsibility } from "@/src/data/company";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Social Responsibility",
  description:
    "Learn how Umme Yusra Global Foods frames responsibility toward employees, farmers, training, and local communities.",
  path: "/social-responsibility",
});

export default function SocialResponsibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Responsibility"
        title="People connected to the supply chain."
        description="A genuine corporate framing of employees, farmers, training, and community development — ready for verified program details."
        image={images.community}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.team.src}
              alt={images.team.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {socialResponsibility.map((item) => (
              <article key={item.title} className="border border-line bg-paper p-5">
                <h2 className="font-display text-2xl text-forest-deep">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
