import { notFound } from "next/navigation";
import { ProductHero } from "@/src/components/products/ProductHero";
import { BreadcrumbJsonLd } from "@/src/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { getProductBySlug, products } from "@/src/data/products";
import { buildMetadata } from "@/src/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    title: `${product.name} | Halal Meat Export`,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.categoryLabel,
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    image: product.image.src,
  };

  const details = [
    { label: "Available Cuts", value: product.availableCuts.join(", ") },
    { label: "Temperature", value: product.temperature.join(" / ") },
    { label: "Packaging Options", value: product.packagingOptions.join(", ") },
    { label: "Weight Options", value: product.weightOptions.join(", ") },
    { label: "Shelf Life", value: product.shelfLife },
    { label: "Storage", value: product.storage },
    { label: "Certifications", value: product.certifications.join(", ") },
    { label: "Export Availability", value: product.exportAvailability },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
      />
      <ProductHero product={product} />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl text-forest-deep">Product Overview</h2>
            <p className="mt-5 leading-relaxed text-muted">{product.description}</p>
          </div>
          <aside className="border border-line bg-beige/40 p-6">
            <h3 className="font-display text-2xl text-forest-deep">Specifications</h3>
            <dl className="mt-6 space-y-4">
              {details.map((detail) => (
                <div key={detail.label} className="border-t border-line pt-4">
                  <dt className="text-xs uppercase tracking-[0.16em] text-sage">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-charcoal">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Button href="/request-a-quote" variant="accent" className="mt-8 w-full">
              Request Quote
            </Button>
          </aside>
        </Container>
      </section>
    </>
  );
}
