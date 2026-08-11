import { images } from "@/src/data/images";

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

export const trustBadges = [
  { label: "Halal Certified", note: "Placeholder" },
  { label: "HACCP", note: "Placeholder" },
  { label: "ISO", note: "Placeholder" },
  { label: "Food Safety", note: "Placeholder" },
  { label: "Traceability", note: "Placeholder" },
  { label: "International Standards", note: "Placeholder" },
] as const;

/** Editable homepage / company statistics — not verified facts */
export const statistics = [
  {
    id: "experience",
    value: 20,
    suffix: "+",
    label: "Years of Experience",
    editableNote: "Placeholder statistic",
  },
  {
    id: "countries",
    value: 50,
    suffix: "+",
    label: "Countries Served",
    editableNote: "Placeholder statistic",
  },
  {
    id: "daily-processing",
    value: 500,
    suffix: "+",
    label: "Animals Processed Daily",
    editableNote: "Placeholder statistic",
  },
  {
    id: "markets",
    value: 30,
    suffix: "+",
    label: "International Markets",
    editableNote: "Placeholder statistic",
  },
  {
    id: "halal",
    value: 100,
    suffix: "%",
    label: "Halal Compliance",
    editableNote: "Placeholder statistic",
  },
] as const;

export const facilityStats = [
  { label: "Cattle / Day", value: "500+", note: "Placeholder capacity" },
  { label: "Sheep & Goats / Day", value: "1,000+", note: "Placeholder capacity" },
  { label: "Chilling Rooms", value: "13", note: "Placeholder facility detail" },
  { label: "Blast Freezers", value: "3", note: "Placeholder facility detail" },
] as const;

export const facilityAreas = [
  {
    title: "Slaughtering Facility",
    description: "Purpose-built lines designed for hygienic, disciplined throughput.",
    image: images.facility,
  },
  {
    title: "Processing Areas",
    description: "Controlled environments for cutting, trimming, and product preparation.",
    image: images.workers,
  },
  {
    title: "Chillers & Blast Freezers",
    description: "Temperature-controlled rooms supporting chilled and frozen programs.",
    image: images.coldStorage,
  },
  {
    title: "Cold Storage",
    description: "Storage capacity designed to protect product integrity before dispatch.",
    image: images.coldStorage,
  },
  {
    title: "Packaging Facilities",
    description: "Vacuum and export packaging prepared for international buyers.",
    image: images.packaging,
  },
  {
    title: "Quality Laboratories",
    description: "Testing and monitoring support for food safety and product consistency.",
    image: images.inspection,
  },
  {
    title: "Loading & Export Areas",
    description: "Dispatch zones aligned with cold-chain and container loading workflows.",
    image: images.logistics,
  },
] as const;

export const journeySteps = [
  {
    id: "01",
    title: "Livestock Sourcing",
    description: "Selecting suitable livestock through trusted sourcing networks.",
    image: images.livestock,
  },
  {
    id: "02",
    title: "Responsible Farming",
    description: "Supporting healthier animals through responsible farm partnerships.",
    image: images.farmingPractice,
  },
  {
    id: "03",
    title: "Animal Health & Inspection",
    description: "Health checks and inspection readiness before processing.",
    image: images.animalHealth,
  },
  {
    id: "04",
    title: "Halal Slaughter",
    description: "Processing guided by Islamic slaughtering principles and hygiene.",
    image: images.facility,
  },
  {
    id: "05",
    title: "Processing",
    description: "Cutting and preparation under controlled facility conditions.",
    image: images.workers,
  },
  {
    id: "06",
    title: "Quality Inspection",
    description: "Product checks to support consistency and food safety expectations.",
    image: images.inspection,
  },
  {
    id: "07",
    title: "Chilling & Freezing",
    description: "Temperature management for chilled and frozen product programs.",
    image: images.coldStorage,
  },
  {
    id: "08",
    title: "Vacuum Packaging",
    description: "Export-ready packaging prepared for shelf-life and handling needs.",
    image: images.packaging,
  },
  {
    id: "09",
    title: "Cold Chain",
    description: "Maintaining product condition through storage and logistics handoffs.",
    image: images.logistics,
  },
  {
    id: "10",
    title: "Global Delivery",
    description: "Coordinated dispatch toward international customer destinations.",
    image: images.port,
  },
] as const;

export const qualityFlow = [
  "Farm",
  "Inspection",
  "Processing",
  "Quality Control",
  "Packaging",
  "Cold Storage",
  "Export",
] as const;

export const whyChooseUs = [
  {
    title: "Premium Livestock",
    description: "Sourcing focused on animal condition, suitability, and consistency.",
  },
  {
    title: "Halal Certified",
    description: "Processes designed around halal compliance and respectful handling.",
  },
  {
    title: "International Standards",
    description: "Operations structured for buyers who expect disciplined food safety systems.",
  },
  {
    title: "End-to-End Traceability",
    description: "Documentation and controls intended to support product traceability.",
  },
  {
    title: "Modern Processing",
    description: "Facilities planned for hygiene, scale, and export-ready preparation.",
  },
  {
    title: "Reliable Global Logistics",
    description: "Cold-chain and documentation workflows aligned with export delivery.",
  },
] as const;

export const sustainabilityTopics = [
  {
    title: "Responsible Livestock Sourcing",
    description: "Working with partners who support healthier and more accountable supply.",
    image: images.livestock,
  },
  {
    title: "Waste Reduction",
    description: "Operational discipline aimed at reducing avoidable process waste.",
    image: images.facility,
  },
  {
    title: "By-Product Utilization",
    description: "Exploring responsible use of by-products and animal nutrition streams.",
    image: images.packaging,
  },
  {
    title: "Energy & Water Stewardship",
    description: "Facility practices intended to improve resource efficiency over time.",
    image: images.sustainability,
  },
  {
    title: "Sustainable Packaging",
    description: "Packaging choices balanced against product protection and export needs.",
    image: images.coldStorage,
  },
  {
    title: "Community Development",
    description: "Supporting people connected to farming, processing, and local livelihoods.",
    image: images.community,
  },
] as const;

export const socialResponsibility = [
  {
    title: "Employees",
    description: "Training, workplace standards, and opportunities for facility teams.",
  },
  {
    title: "Farmers",
    description: "Partnerships intended to support more reliable livestock supply systems.",
  },
  {
    title: "Local Communities",
    description: "Programs and engagement around the communities connected to our work.",
  },
  {
    title: "Training",
    description: "Skills development across quality, hygiene, and operational discipline.",
  },
  {
    title: "Healthcare & Education",
    description: "Placeholder initiatives for community healthcare and education support.",
  },
  {
    title: "Community Development",
    description: "Longer-term contributions designed around local economic participation.",
  },
] as const;

export const logisticsSteps = [
  "Processing Facility",
  "Cold Storage",
  "Container Loading",
  "Port",
  "International Shipment",
  "Customer",
] as const;

export const navLinks = [
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Facility", href: "/facility" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Our Facility",
    href: "/facility",
  },
  {
    label: "Quality",
    href: "/quality",
    children: [
      { label: "Quality & Food Safety", href: "/quality" },
      { label: "Halal Assurance", href: "/halal" },
      { label: "Certifications", href: "/certifications" },
      { label: "Responsible Farming", href: "/farming" },
    ],
  },
  {
    label: "Global Presence",
    href: "/global-presence",
    children: [
      { label: "Markets", href: "/global-presence" },
      { label: "Export & Logistics", href: "/logistics" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "Social Responsibility", href: "/social-responsibility" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Facility", href: "/facility" },
    { label: "Farming", href: "/farming" },
    { label: "Careers", href: "/careers" },
  ],
  products: [
    { label: "All Products", href: "/products" },
    { label: "Beef", href: "/products#beef" },
    { label: "Mutton", href: "/products#mutton" },
    { label: "Other Products", href: "/products#other" },
  ],
  quality: [
    { label: "Quality & Food Safety", href: "/quality" },
    { label: "Halal Assurance", href: "/halal" },
    { label: "Certifications", href: "/certifications" },
  ],
  global: [
    { label: "Global Presence", href: "/global-presence" },
    { label: "Logistics", href: "/logistics" },
    { label: "Request a Quote", href: "/request-a-quote" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
