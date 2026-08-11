import { images } from "@/src/data/images";

export type GalleryCategory =
  | "Livestock"
  | "Farms"
  | "Processing Facility"
  | "Products"
  | "Packaging"
  | "Team"
  | "Logistics"
  | "Export";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: { src: string; alt: string };
};

export const galleryCategories: Array<"All" | GalleryCategory> = [
  "All",
  "Livestock",
  "Farms",
  "Processing Facility",
  "Products",
  "Packaging",
  "Team",
  "Logistics",
  "Export",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Pasture Livestock",
    category: "Livestock",
    image: images.livestock,
  },
  {
    id: "g2",
    title: "Cattle Close Study",
    category: "Livestock",
    image: images.cattleClose,
  },
  {
    id: "g3",
    title: "Open Farmland",
    category: "Farms",
    image: images.farm,
  },
  {
    id: "g4",
    title: "Responsible Farming",
    category: "Farms",
    image: images.farmingPractice,
  },
  {
    id: "g5",
    title: "Processing Facility",
    category: "Processing Facility",
    image: images.facility,
  },
  {
    id: "g6",
    title: "Operations Floor",
    category: "Processing Facility",
    image: images.workers,
  },
  {
    id: "g7",
    title: "Premium Cuts",
    category: "Products",
    image: images.steak,
  },
  {
    id: "g8",
    title: "Prepared Meat",
    category: "Products",
    image: images.meatCuts,
  },
  {
    id: "g9",
    title: "Packaging Presentation",
    category: "Packaging",
    image: images.packaging,
  },
  {
    id: "g10",
    title: "Cold Storage",
    category: "Packaging",
    image: images.coldStorage,
  },
  {
    id: "g11",
    title: "Professional Team",
    category: "Team",
    image: images.team,
  },
  {
    id: "g12",
    title: "Quality Conversation",
    category: "Team",
    image: images.inspection,
  },
  {
    id: "g13",
    title: "Container Logistics",
    category: "Logistics",
    image: images.logistics,
  },
  {
    id: "g14",
    title: "Warehouse Movement",
    category: "Logistics",
    image: images.coldStorage,
  },
  {
    id: "g15",
    title: "Port Operations",
    category: "Export",
    image: images.port,
  },
  {
    id: "g16",
    title: "International Shipping",
    category: "Export",
    image: images.logistics,
  },
];
