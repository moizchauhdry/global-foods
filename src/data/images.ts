import { company } from "@/src/data/company";

/**
 * Local photography from /public/images.
 * Halal-safe only: cattle, sheep/goat, beef/mutton product imagery.
 */
export const images = {
  logo: {
    src: "/images/logo.png",
    alt: "Umme Yusra Global Foods (Pvt) Ltd",
  },
  slaughterHouse: {
    src: "/images/slaughter-house.jpeg",
    alt: "Halal slaughter and handling area",
  },
  packagingLine: {
    src: "/images/slaughter-house-2.jpeg",
    alt: "Meat packed for export",
  },
  beefProcessing: {
    src: "/images/beef-1.jpeg",
    alt: "Fresh chilled beef",
  },
  beefCuts: {
    src: "/images/beef-2.jpeg",
    alt: "Fresh chilled beef prepared for export",
  },
  muttonProcessing: {
    src: "/images/mutton-1.jpeg",
    alt: "Fresh chilled mutton",
  },
  muttonFacility: {
    src: "/images/mutton-2.jpeg",
    alt: "Fresh chilled mutton prepared for export",
  },
  muttonCuts: {
    src: "/images/mutton-3.jpeg",
    alt: "Fresh chilled mutton cuts",
  },
  muttonSelection: {
    src: "/images/mutton-4.jpeg",
    alt: "Fresh chilled mutton selection",
  },
  inspection: {
    src: "/images/meat-inspection.jpeg",
    alt: "Veterinary inspection and quality checks",
  },
  coldStorage: {
    src: "/images/cold-storage.jpeg",
    alt: "Controlled cold-chain storage",
  },
  export: {
    src: "/images/export-container.jpeg",
    alt: "Export shipment prepared for air-freight dispatch",
  },
} as const;

export const productGallery = [
  {
    ...images.beefCuts,
    title: "Fresh Chilled Beef",
    caption:
      "Export-quality Halal beef, supplied fresh chilled for international buyers.",
  },
  {
    ...images.muttonCuts,
    title: "Fresh Chilled Mutton",
    caption:
      "Export-quality Halal mutton, supplied fresh chilled for international buyers.",
  },
] as const;

export const qualityStory = [
  {
    ...images.inspection,
    kicker: "01 — Quality",
    title: "Quality from Source to Shipment",
    paragraphs: [company.quality, company.veterinary],
  },
  {
    ...images.slaughterHouse,
    kicker: "02 — Halal",
    title: "Halal Integrity",
    paragraphs: [company.halal],
  },
  {
    ...images.coldStorage,
    kicker: "03 — Cold chain",
    title: "Controlled Cold-Chain Handling",
    paragraphs: [company.coldChain, company.coldChainFocus],
  },
  {
    ...images.packagingLine,
    kicker: "04 — Packaging",
    title: "Secure Export Packaging",
    paragraphs: [company.packaging],
  },
] as const;
