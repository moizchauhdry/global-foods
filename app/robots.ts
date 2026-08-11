import type { MetadataRoute } from "next";
import { company } from "@/src/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${company.website}/sitemap.xml`,
  };
}
