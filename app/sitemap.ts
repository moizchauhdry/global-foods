import type { MetadataRoute } from "next";
import { company } from "@/src/data/company";
import { newsArticles } from "@/src/data/news";
import { products } from "@/src/data/products";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/facility",
  "/quality",
  "/halal",
  "/farming",
  "/global-presence",
  "/logistics",
  "/sustainability",
  "/social-responsibility",
  "/certifications",
  "/gallery",
  "/news",
  "/careers",
  "/contact",
  "/request-a-quote",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${company.website}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${company.website}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...newsArticles.map((article) => ({
      url: `${company.website}/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
