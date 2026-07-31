export const supportedCitySlugs = [
  // India
  "mumbai",
  "delhi",
  "bangalore",
  "hyderabad",
  "chennai",
  "kolkata",
  "pune",
  "ahmedabad",
  "jaipur",
  // USA & Americas
  "new-york",
  "los-angeles",
  "chicago",
  "houston",
  "miami",
  "san-francisco",
  "toronto",
  // Europe, Middle East & Asia Pacific
  "london",
  "dubai",
  "sydney",
  "singapore",
  "tokyo"
] as const;

export function citySlugToName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
