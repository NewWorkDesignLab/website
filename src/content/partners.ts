export type Partner = {
  /** Display name */
  name: string;
  /** /partners/<key>.svg */
  logo: string;
  /** Optional link to the partner / client website */
  url?: string;
};

/**
 * Central registry of project partners and clients. Drop the logo files into
 * public/partners/ and reference them here. Projects list the relevant keys via
 * `partners: [{ key, kind }]`; <ProjectCredits> renders the matching cards and
 * decides per project whether a key is shown as "Projektpartner" or
 * "Auftraggeber" (kind: "partner" | "client").
 *
 * Note: company logos usually come with brand / usage guidelines — replace the
 * placeholder files with the approved artwork.
 */
export const partners: Record<string, Partner> = {
  zeiss: {
    name: "ZEISS",
    logo: "/partners/zeiss.svg",
    url: "https://www.zeiss.de/",
  },
  "global-foundries": {
    name: "GlobalFoundries",
    logo: "/partners/global-foundries.svg",
    url: "https://gf.com/",
  },
  dina: {
    name: "DInA-Elektro",
    logo: "/partners/dina.svg",
  },
  ebz: {
    name: "EBZ Dresden",
    logo: "/partners/ebz_logo.png",
  },
  bex: {
    name: "BeX Elektro",
    logo: "/partners/bex.svg",
  },
  afbb: {
    name: "AFBB",
    logo: "/partners/afbb.jpeg",
    url: "https://www.afbb.de/",
  },
  "tu-dresden": {
    name: "TU Dresden",
    logo: "/partners/tu-dresden.jpeg",
    url: "https://tu-dresden.de/",
  },
  fhd: {
    name: "Fachhochschule Dresden (FHD)",
    logo: "/fhd_logo.webp",
    url: "https://www.fh-dresden.eu/",
  },
};

export function getPartner(key: string): Partner | undefined {
  return partners[key];
}
