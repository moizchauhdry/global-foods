import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/src/components/animations/Reveal";
import { Stagger, StaggerItem } from "@/src/components/animations/Stagger";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { productCategories, getProductsByCategory } from "@/src/data/products";

export function ProductShowcase() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Products"
              title="A portfolio built for international meat buyers."
              description="Beef, mutton, and specialized product lines prepared for chilled and frozen export programs."
            />
            <Button href="/products" variant="outline">
              View All Products
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {productCategories.map((category) => {
            const items = getProductsByCategory(category.id).slice(0, 5);
            return (
              <StaggerItem key={category.id}>
                <article className="lift-card group flex h-full flex-col border border-line bg-cream/40">
                  <Link
                    href={`/products#${category.id}`}
                    className="media-frame relative block aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="image-zoom object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/25 to-transparent transition-opacity duration-500 group-hover:from-forest-deep/90" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <div className="flex items-end justify-between gap-3">
                        <h3 className="font-display text-3xl font-semibold">
                          {category.title}
                        </h3>
                        <ArrowUpRight className="mb-1 h-5 w-5 opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </div>
                      <p className="mt-2 text-sm text-white/80">{category.description}</p>
                    </div>
                  </Link>
                  <ul className="flex flex-1 flex-col gap-1 p-4">
                    {items.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex items-center justify-between gap-3 rounded-sm px-2 py-2.5 text-sm text-charcoal transition-colors hover:bg-beige hover:text-forest"
                        >
                          <span>{product.name}</span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 opacity-40" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
