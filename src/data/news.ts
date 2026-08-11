import { images } from "@/src/data/images";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  image: { src: string; alt: string };
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "building-export-ready-halal-programs",
    title: "Building Export-Ready Halal Meat Programs",
    excerpt:
      "How disciplined processing, documentation, and cold-chain planning support international buyers.",
    category: "Industry Insights",
    date: "2026-03-12",
    image: images.facility,
    content: [
      "International meat buyers evaluate more than product quality. They look for process discipline, documentation readiness, and cold-chain reliability from the first inquiry through final delivery.",
      "For Pakistani exporters, export-ready halal programs require clear product specifications, packaging standards, and temperature controls that can be communicated confidently to procurement teams.",
      "This article is a placeholder insight piece and can be replaced with company announcements, trade updates, or verified operational news.",
    ],
  },
  {
    slug: "cold-chain-discipline-for-global-buyers",
    title: "Cold-Chain Discipline for Global Buyers",
    excerpt:
      "Why temperature integrity from chillers to reefer containers remains central to export trust.",
    category: "Export Updates",
    date: "2026-02-20",
    image: images.coldStorage,
    content: [
      "Cold-chain integrity protects product condition and buyer confidence. From chilling rooms and blast freezers through container loading, each handoff matters.",
      "Export teams increasingly request visibility into temperature monitoring, packaging protection, and port logistics coordination.",
      "Replace this placeholder with verified logistics updates or case studies when available.",
    ],
  },
  {
    slug: "responsible-livestock-sourcing-matters",
    title: "Why Responsible Livestock Sourcing Matters",
    excerpt:
      "Stronger farm partnerships help create more consistent, accountable meat supply programs.",
    category: "Company News",
    date: "2026-01-18",
    image: images.livestock,
    content: [
      "Responsible livestock sourcing is foundational to product consistency and long-term supply reliability.",
      "Buyer expectations increasingly include animal welfare awareness, farmer relationships, and clearer origin storytelling.",
      "This is placeholder editorial content for the news system and can be updated from a CMS later.",
    ],
  },
  {
    slug: "preparing-for-international-trade-events",
    title: "Preparing for International Trade Events",
    excerpt:
      "A practical look at how processors prepare product stories, samples, and buyer conversations.",
    category: "Events",
    date: "2025-12-05",
    image: images.team,
    content: [
      "Trade shows remain an important channel for introducing product ranges and meeting international procurement teams.",
      "Preparation typically includes product sheets, certification summaries, packaging samples, and clear inquiry pathways.",
      "Update this article with actual event participation details when confirmed.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
