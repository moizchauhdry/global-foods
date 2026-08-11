import { ProductGrid } from "@/src/components/products/ProductGrid";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { images } from "@/src/data/images";
import { getProductsByCategory, productCategories } from "@/src/data/products";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Halal Meat Products",
  description:
    "Explore beef, mutton, and specialized product lines from Umme Yusra Global Foods for chilled and frozen export programs.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Export-ready halal meat product ranges."
        description="Browse beef, mutton, and other product categories prepared for international buyers."
        image={images.steak}
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-20">
          {productCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <SectionHeading
                eyebrow={category.title}
                title={category.title}
                description={category.description}
              />
              <div className="mt-10">
                <ProductGrid products={getProductsByCategory(category.id)} />
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
