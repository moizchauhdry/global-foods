import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/src/data/products";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="lift-card group border border-line bg-paper">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="media-frame relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="image-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-sage">
            {product.categoryLabel}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-forest-deep">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>
          <p className="mt-4 text-sm font-medium text-forest transition-transform duration-300 group-hover:translate-x-1">
            View details →
          </p>
        </div>
      </Link>
    </article>
  );
}
