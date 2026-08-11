import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/src/data/products";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="group border border-line bg-paper">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-sage">
            {product.categoryLabel}
          </p>
          <h3 className="mt-2 font-display text-2xl text-forest-deep">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>
          <p className="mt-4 text-sm font-medium text-forest">View details →</p>
        </div>
      </Link>
    </article>
  );
}
