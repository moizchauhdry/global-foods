import { ProductCard } from "@/src/components/products/ProductCard";
import type { Product } from "@/src/data/products";

type Props = {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
