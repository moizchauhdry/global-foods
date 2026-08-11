export type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  summary: string;
};

export const careerBenefits = [
  "Opportunity to contribute to an export-focused food business",
  "Exposure to quality, compliance, and international trade workflows",
  "Collaborative teams across operations, quality, and commercial functions",
  "Training pathways aligned to facility and food safety disciplines",
  "A workplace culture centered on responsibility and continuous improvement",
] as const;

export const jobOpenings: JobOpening[] = [
  {
    id: "export-coordinator",
    title: "Export Coordinator",
    department: "Commercial / Exports",
    location: "[City], Pakistan",
    type: "Full-time",
    summary:
      "Support international inquiries, documentation coordination, and buyer communication for export programs.",
  },
  {
    id: "quality-assurance-officer",
    title: "Quality Assurance Officer",
    department: "Quality & Food Safety",
    location: "[Facility Location], Pakistan",
    type: "Full-time",
    summary:
      "Assist with monitoring process controls, documentation, and hygiene standards across production areas.",
  },
  {
    id: "cold-chain-supervisor",
    title: "Cold Chain Supervisor",
    department: "Operations / Logistics",
    location: "[Facility Location], Pakistan",
    type: "Full-time",
    summary:
      "Help oversee chilled and frozen handling workflows from storage through dispatch readiness.",
  },
  {
    id: "production-trainee",
    title: "Production Trainee",
    department: "Processing",
    location: "[Facility Location], Pakistan",
    type: "Internship",
    summary:
      "Learn processing discipline, hygiene expectations, and facility workflows in a structured training environment.",
  },
];
