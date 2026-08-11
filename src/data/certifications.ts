/**
 * Configurable certification placeholders.
 * Do not present these as verified company certifications until confirmed.
 */
export type Certification = {
  id: string;
  name: string;
  description: string;
  status: "placeholder" | "confirmed";
  logo?: string;
};

export const certifications: Certification[] = [
  {
    id: "halal",
    name: "HALAL",
    description: "Halal certified processing — placeholder pending certificate details.",
    status: "placeholder",
  },
  {
    id: "haccp",
    name: "HACCP",
    description: "Hazard analysis and critical control point system — placeholder.",
    status: "placeholder",
  },
  {
    id: "iso-22000",
    name: "ISO 22000",
    description: "Food safety management system certification — placeholder.",
    status: "placeholder",
  },
  {
    id: "iso-9001",
    name: "ISO 9001",
    description: "Quality management system certification — placeholder.",
    status: "placeholder",
  },
  {
    id: "brcgs",
    name: "BRCGS",
    description: "Brand reputation compliance global standards — placeholder.",
    status: "placeholder",
  },
  {
    id: "other",
    name: "Other Relevant Certifications",
    description: "Additional market or buyer-required certifications can be listed here.",
    status: "placeholder",
  },
];
