import { JsonLd } from "@/src/components/seo/JsonLd";
import { company } from "@/src/data/company";

type Crumb = {
  name: string;
  path: string;
};

type Props = {
  items: Crumb[];
};

export function BreadcrumbJsonLd({ items }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.website}${item.path}`,
    })),
  };

  return <JsonLd data={data} />;
}
