/**
 * Editable company profile.
 * Replace placeholder values with verified company information before launch.
 */
export const company = {
  name: "Umme Yusra",
  shortName: "UY",
  legalName: "Umme Yusra Global Foods (Pvt) Limited",
  tagline: "From Pakistan's Finest Farms to the World",
  description:
    "Umme Yusra Global Foods (Pvt) Limited is a Pakistani halal meat processing, manufacturing, and export company built for international buyers who require consistent quality, food safety discipline, and reliable cold-chain delivery.",
  establishedYear: "[Established Year]",
  headquarters: "[City], Pakistan",
  address: "[Facility / Head Office Address], Pakistan",
  phone: "[+92 XXX XXXXXXX]",
  email: "info@ummeyusra.example",
  exportEmail: "exports@ummeyusra.example",
  salesEmail: "sales@ummeyusra.example",
  website: "https://ummeyusra.example",
  logo: "/images/logo.png",
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
} as const;

export const statistics = [
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "100%", label: "Halal Compliance" },
  { value: "24/7", label: "Cold-Chain Control" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Facility", href: "#facility" },
  { label: "Export", href: "#export" },
  { label: "Contact", href: "#contact" },
] as const;
