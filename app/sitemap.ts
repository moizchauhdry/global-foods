import type { MetadataRoute } from "next";
import { company } from "@/src/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: company.website,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
