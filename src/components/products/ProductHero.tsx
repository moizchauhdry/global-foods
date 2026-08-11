import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import type { Product } from "@/src/data/products";

type Props = {
  product: Product;
};

export function ProductHero({ product }: Props) {
  return (
    <section className="bg-beige pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
            {product.categoryLabel}
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-forest-deep sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {product.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/request-a-quote" variant="accent" size="lg">
              Request Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Export Team
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
