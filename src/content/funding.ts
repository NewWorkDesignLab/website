import type { FundingKey } from "./types";

export type FundingLogo = {
  src: string;
  /** Accessible label / alt text for the logo */
  label: string;
  /** Optional link to the funding programme */
  url?: string;
};

/**
 * Central registry of funding logos. Drop the official logo files into
 * public/funding/ and reference them here. Each project lists the relevant
 * FundingKeys; <FundingBar> renders the matching logos.
 *
 * Note: the official logos (Freistaat Sachsen, EFRE, ESF, EU) come with usage
 * guidelines — replace the placeholder files with the approved artwork.
 */
export const funding: Record<FundingKey, FundingLogo> = {
  "freistaat-sachsen": {
    src: "/funding/freistaat-sachsen.webp",
    label: "Freistaat Sachsen",
    url: "https://www.sachsen.de/",
  },
  efre: {
    src: "/funding/efre.svg",
    label: "Europäischer Fonds für regionale Entwicklung (EFRE)",
    url: "https://www.efre.sachsen.de/",
  },
  esf: {
    src: "/funding/esf.svg",
    label: "Europäischer Sozialfonds (ESF)",
    url: "https://www.esf.sachsen.de/",
  },
  eu: {
    src: "/funding/EU-Logo.webp",
    label: "Europäische Union",
    url: "https://european-union.europa.eu/",
  },
  "esf-eu": {
    src: "/funding/esf-eu.webp",
    label: "Europäischer Sozialfonds / Europäische Union (ESF)",
    url: "https://www.esf.sachsen.de/",
  },
};
