/**
 * Editable market / region data.
 * Do not claim these as confirmed export destinations until verified.
 */
export type MarketRegion = {
  id: string;
  name: string;
  description: string;
  /** Approximate marker position on the stylized world map (percentages) */
  marker: { x: number; y: number };
  exampleMarkets: string[];
};

export const marketRegions: MarketRegion[] = [
  {
    id: "middle-east",
    name: "Middle East",
    description: "Priority inquiry region for chilled and frozen halal meat programs.",
    marker: { x: 58, y: 48 },
    exampleMarkets: ["[Market A]", "[Market B]", "[Market C]"],
  },
  {
    id: "gcc",
    name: "GCC",
    description: "Gulf markets commonly associated with premium halal meat demand.",
    marker: { x: 62, y: 50 },
    exampleMarkets: ["[GCC Market A]", "[GCC Market B]"],
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    description: "Growing destination cluster for frozen and specialized product lines.",
    marker: { x: 78, y: 58 },
    exampleMarkets: ["[SEA Market A]", "[SEA Market B]"],
  },
  {
    id: "central-asia",
    name: "Central Asia",
    description: "Regional opportunities for selected beef and mutton programs.",
    marker: { x: 66, y: 38 },
    exampleMarkets: ["[Central Asia Market A]"],
  },
  {
    id: "africa",
    name: "Africa",
    description: "Selected African markets for frozen and industrial meat products.",
    marker: { x: 52, y: 58 },
    exampleMarkets: ["[Africa Market A]", "[Africa Market B]"],
  },
  {
    id: "other",
    name: "Other International Markets",
    description: "Additional destinations can be supported subject to compliance and logistics.",
    marker: { x: 30, y: 42 },
    exampleMarkets: ["[Other Market A]", "[Other Market B]"],
  },
];
