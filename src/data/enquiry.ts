export const enquiryCountries = [
  {
    value: "UAE",
    label: "United Arab Emirates",
    cities: ["Dubai", "Abu Dhabi", "Sharjah"],
  },
  {
    value: "Bahrain",
    label: "Bahrain",
    cities: [],
  },
  {
    value: "Kuwait",
    label: "Kuwait",
    cities: [],
  },
  {
    value: "Qatar",
    label: "Qatar",
    cities: ["Doha"],
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia",
    cities: ["Jeddah", "Madinah", "Riyadh", "Dammam"],
  },
] as const;

export const productTypes = [
  { label: "Beef", value: "Beef" },
  { label: "Mutton", value: "Mutton" },
] as const;

export type EnquiryCountry = (typeof enquiryCountries)[number];

export function getEnquiryCountry(value: string) {
  return enquiryCountries.find((country) => country.value === value);
}
