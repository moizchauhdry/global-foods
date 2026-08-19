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
    alt: "Hygienic halal processing floor with stainless production lines",
  },
  packagingLine: {
    src: "/images/slaughter-house-2.jpeg",
    alt: "Vacuum packaging line sealing premium beef steaks",
  },
  beefProcessing: {
    src: "/images/beef-1.jpeg",
    alt: "Premium beef cuts prepared on a stainless processing table",
  },
  beefCuts: {
    src: "/images/beef-2.jpeg",
    alt: "Export-ready premium beef steaks, roast, and medallions",
  },
  muttonProcessing: {
    src: "/images/mutton-1.jpeg",
    alt: "Mutton racks, steaks, and a leg roast prepared for packing",
  },
  muttonFacility: {
    src: "/images/mutton-2.jpeg",
    alt: "Mutton and beef cuts staged in a hygienic processing hall",
  },
  muttonCuts: {
    src: "/images/mutton-3.jpeg",
    alt: "Premium mutton chops, leg, roast, and rack of lamb",
  },
  muttonSelection: {
    src: "/images/mutton-4.jpeg",
    alt: "Gourmet mutton chops, racks, and roast on a slate platter",
  },
  inspection: {
    src: "/images/meat-inspection.jpeg",
    alt: "Quality technician checking meat temperature in the inspection room",
  },
  coldStorage: {
    src: "/images/cold-storage.jpeg",
    alt: "Temperature-controlled cold storage warehouse with pallet racking",
  },
  export: {
    src: "/images/export-container.jpeg",
    alt: "Refrigerated export container being loaded at port at sunset",
  },
} as const;

export const productGallery = [
  {
    ...images.beefCuts,
    title: "Premium Beef",
    caption: "Ribeye, tenderloin, and export steaks cut for international buyers.",
  },
  {
    ...images.muttonProcessing,
    title: "Mutton Programs",
    caption: "Racks, legs, and primal cuts prepared under hygienic controls.",
  },
  {
    ...images.muttonCuts,
    title: "Signature Mutton",
    caption: "Chops, roast, and rack selections for premium market programs.",
  },
  {
    ...images.muttonSelection,
    title: "Gourmet Selection",
    caption: "Presentation-ready cuts for foodservice and retail partners.",
  },
] as const;

export const facilityStory = [
  {
    ...images.packagingLine,
    kicker: "01 — Processing",
    title: "Hygienic lines. Export-ready packs.",
    body: "Stainless processing and vacuum packaging keep product integrity from the line to the carton.",
  },
  {
    ...images.inspection,
    kicker: "02 — Inspection",
    title: "Quality checked at every handoff.",
    body: "Temperature, trim, and documentation checks support the food-safety discipline international buyers expect.",
  },
  {
    ...images.coldStorage,
    kicker: "03 — Cold chain",
    title: "Held at temperature until dispatch.",
    body: "Chilled storage and organised dispatch protect condition from the facility through to the container.",
  },
] as const;
