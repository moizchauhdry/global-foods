import type { Metadata } from "next";
import { company } from "@/src/data/company";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "",
}: BuildMetadataInput): Metadata {
  const url = `${company.website}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.legalName,
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
