import { images } from "@/src/data/images";

export type ProductCategory = "beef" | "mutton" | "other";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  summary: string;
  description: string;
  image: { src: string; alt: string };
  availableCuts: string[];
  temperature: Array<"Chilled" | "Frozen">;
  packagingOptions: string[];
  weightOptions: string[];
  shelfLife: string;
  storage: string;
  certifications: string[];
  exportAvailability: string;
};

export const productCategories = [
  {
    id: "beef" as const,
    title: "Beef",
    description: "Boneless, bone-in, premium cuts, and beef offal for international buyers.",
    image: images.steak,
  },
  {
    id: "mutton" as const,
    title: "Mutton",
    description: "Mutton programs spanning boneless, bone-in, cuts, and offal.",
    image: images.meatCuts,
  },
  {
    id: "other" as const,
    title: "Other Products",
    description: "Camel meat, edible offal, by-products, and animal nutrition streams.",
    image: images.packaging,
  },
];

export const products: Product[] = [
  {
    slug: "boneless-beef",
    name: "Boneless Beef",
    category: "beef",
    categoryLabel: "Beef",
    summary: "Export-oriented boneless beef prepared for foodservice and further processing.",
    description:
      "Boneless beef selected and prepared for buyers that require consistent trim standards, disciplined packaging, and chilled or frozen export options. Product specifications can be aligned to destination market requirements.",
    image: images.steak,
    availableCuts: ["Chuck", "Brisket", "Round", "Sirloin", "Custom trim programs"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Vacuum packed", "Carton packed", "Buyer-specified packaging"],
    weightOptions: ["[Weight option A]", "[Weight option B]", "Custom carton weights"],
    shelfLife: "[Shelf life placeholder — confirm per product & temperature]",
    storage: "Maintain required chilled or frozen temperature throughout the cold chain.",
    certifications: ["Halal (placeholder)", "Food safety systems (placeholder)"],
    exportAvailability: "Available for international inquiry — subject to destination requirements.",
  },
  {
    slug: "bone-in-beef",
    name: "Bone-In Beef",
    category: "beef",
    categoryLabel: "Beef",
    summary: "Bone-in beef cuts prepared for markets that prefer traditional product formats.",
    description:
      "Bone-in beef offerings designed for buyers seeking recognizable cut profiles with consistent handling and packaging suitable for export logistics.",
    image: images.meatCuts,
    availableCuts: ["Bone-in quarters", "Bone-in retail cuts", "Custom bone-in programs"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Carton packed", "Vacuum options where suitable"],
    weightOptions: ["[Weight option A]", "Custom packing weights"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Store under approved chilled or frozen conditions.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Available upon inquiry for selected markets.",
  },
  {
    slug: "beef-cuts",
    name: "Beef Cuts",
    category: "beef",
    categoryLabel: "Beef",
    summary: "A range of beef cuts prepared for retail, foodservice, and industrial use.",
    description:
      "Beef cut programs that can be tailored around buyer specifications, packaging formats, and destination handling requirements.",
    image: images.steak,
    availableCuts: ["Steaks", "Stewing cuts", "Mince programs", "Custom cutting lists"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Vacuum packed", "Retail-ready cartons", "Bulk cartons"],
    weightOptions: ["Portion packs", "Bulk cartons", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Follow chilled/frozen storage guidelines provided with each shipment.",
    certifications: ["Halal (placeholder)", "HACCP (placeholder)"],
    exportAvailability: "Export programs available subject to documentation and logistics planning.",
  },
  {
    slug: "premium-beef",
    name: "Premium Beef",
    category: "beef",
    categoryLabel: "Beef",
    summary: "Higher-specification beef intended for premium foodservice and retail channels.",
    description:
      "Premium beef selections focused on presentation, trim consistency, and buyer-facing quality expectations for elevated culinary or retail applications.",
    image: images.steak,
    availableCuts: ["Premium steaks", "Selected primal cuts", "Custom premium programs"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Vacuum packed", "Presentation cartons"],
    weightOptions: ["Portion-controlled", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Strict temperature control required for premium chilled/frozen programs.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Available for selected international buyers.",
  },
  {
    slug: "beef-offal",
    name: "Beef Offal",
    category: "beef",
    categoryLabel: "Beef",
    summary: "Edible beef offal prepared for markets with established offal demand.",
    description:
      "Beef offal offerings packaged for buyers who require clear product identity, hygienic handling, and export-ready logistics.",
    image: images.packaging,
    availableCuts: ["Liver", "Heart", "Kidney", "Other edible offal on inquiry"],
    temperature: ["Frozen"],
    packagingOptions: ["Carton packed", "Buyer-specified formats"],
    weightOptions: ["Standard cartons", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Keep frozen under approved storage conditions.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Available subject to destination import rules.",
  },
  {
    slug: "boneless-mutton",
    name: "Boneless Mutton",
    category: "mutton",
    categoryLabel: "Mutton",
    summary: "Boneless mutton prepared for foodservice, retail, and further processing.",
    description:
      "Boneless mutton programs designed for buyers seeking convenient formats with consistent packaging and chilled or frozen supply options.",
    image: images.meatCuts,
    availableCuts: ["Boneless leg", "Boneless shoulder", "Custom boneless packs"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Vacuum packed", "Carton packed"],
    weightOptions: ["[Weight option A]", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Maintain required chilled or frozen temperature.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Available for international inquiry.",
  },
  {
    slug: "bone-in-mutton",
    name: "Bone-In Mutton",
    category: "mutton",
    categoryLabel: "Mutton",
    summary: "Traditional bone-in mutton formats for regional and international demand.",
    description:
      "Bone-in mutton prepared for customers who prefer familiar cut structures and dependable export packaging.",
    image: images.meatCuts,
    availableCuts: ["Carcass programs", "Bone-in cuts", "Custom specifications"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Carton packed", "Vacuum options where suitable"],
    weightOptions: ["Standard", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Store under approved temperature controls.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Available upon inquiry.",
  },
  {
    slug: "premium-mutton",
    name: "Premium Mutton",
    category: "mutton",
    categoryLabel: "Mutton",
    summary: "Higher-specification mutton for premium culinary and retail use.",
    description:
      "Premium mutton selections intended for buyers prioritizing presentation, consistency, and carefully managed cold-chain handling.",
    image: images.packaging,
    availableCuts: ["Selected premium cuts", "Custom programs"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Vacuum packed", "Presentation cartons"],
    weightOptions: ["Portion packs", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Strict chilled/frozen storage required.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Available for selected markets.",
  },
  {
    slug: "mutton-cuts",
    name: "Mutton Cuts",
    category: "mutton",
    categoryLabel: "Mutton",
    summary: "A practical range of mutton cuts for diverse buyer requirements.",
    description:
      "Mutton cut programs that can be adapted around portioning, packaging, and destination market expectations.",
    image: images.meatCuts,
    availableCuts: ["Chops", "Stewing cuts", "Custom lists"],
    temperature: ["Chilled", "Frozen"],
    packagingOptions: ["Vacuum packed", "Bulk cartons"],
    weightOptions: ["Standard", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Follow shipment-specific storage guidance.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Export available subject to logistics planning.",
  },
  {
    slug: "mutton-offal",
    name: "Mutton Offal",
    category: "mutton",
    categoryLabel: "Mutton",
    summary: "Edible mutton offal for markets with established culinary demand.",
    description:
      "Mutton offal prepared and packed for buyers requiring clear product identification and frozen export handling.",
    image: images.packaging,
    availableCuts: ["Liver", "Heart", "Kidney", "Other edible offal on inquiry"],
    temperature: ["Frozen"],
    packagingOptions: ["Carton packed"],
    weightOptions: ["Standard cartons", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Keep frozen under approved conditions.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Subject to destination regulations.",
  },
  {
    slug: "camel-meat",
    name: "Camel Meat",
    category: "other",
    categoryLabel: "Other Products",
    summary: "Camel meat offerings for buyers with specialized category demand.",
    description:
      "Camel meat available as an inquiry-led product line for markets and customers with established camel meat requirements.",
    image: images.meatCuts,
    availableCuts: ["Selected cuts on inquiry", "Custom programs"],
    temperature: ["Frozen"],
    packagingOptions: ["Carton packed", "Buyer-specified"],
    weightOptions: ["Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Frozen storage under approved controls.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Available on inquiry.",
  },
  {
    slug: "edible-offal",
    name: "Edible Offal",
    category: "other",
    categoryLabel: "Other Products",
    summary: "Cross-category edible offal programs for specialized buyers.",
    description:
      "Edible offal assortments prepared for customers seeking broader offal portfolios beyond single-species lists.",
    image: images.packaging,
    availableCuts: ["Assorted edible offal", "Species-specific lists on inquiry"],
    temperature: ["Frozen"],
    packagingOptions: ["Carton packed"],
    weightOptions: ["Standard", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Keep frozen.",
    certifications: ["Halal (placeholder)"],
    exportAvailability: "Destination-dependent.",
  },
  {
    slug: "animal-by-products",
    name: "Animal By-Products",
    category: "other",
    categoryLabel: "Other Products",
    summary: "By-product streams intended for industrial and specialized applications.",
    description:
      "Animal by-product offerings structured for buyers operating in industrial, rendering-adjacent, or specialized processing channels. Specifications provided on inquiry.",
    image: images.facility,
    availableCuts: ["By-product categories on inquiry"],
    temperature: ["Frozen"],
    packagingOptions: ["Industrial packaging formats"],
    weightOptions: ["Bulk", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Store according to product-specific guidance.",
    certifications: ["Process controls (placeholder)"],
    exportAvailability: "Available subject to compliance requirements.",
  },
  {
    slug: "pet-food-animal-nutrition",
    name: "Pet Food / Animal Nutrition Products",
    category: "other",
    categoryLabel: "Other Products",
    summary: "Ingredient streams for pet food and animal nutrition manufacturing.",
    description:
      "Selected materials and by-product streams intended for pet food and animal nutrition customers. Final specifications are confirmed per buyer requirement.",
    image: images.coldStorage,
    availableCuts: ["Nutrition ingredient streams on inquiry"],
    temperature: ["Frozen"],
    packagingOptions: ["Industrial cartons", "Buyer-specified"],
    weightOptions: ["Bulk", "Custom"],
    shelfLife: "[Shelf life placeholder]",
    storage: "Follow product-specific frozen storage guidance.",
    certifications: ["Process controls (placeholder)"],
    exportAvailability: "Inquiry-based availability.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}
