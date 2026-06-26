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
    name: "Elektrobildungs- und Technologiezentrum e.V.",
    logo: "/partners/ebz_logo.png",
    url: "https://www.ebz-dresden.de/",
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
  "fraunhofer-ivv": {
    name: "Fraunhofer IVV",
    logo: "/partners/fraunhofer-ivv.webp",
    url: "https://www.ivv.fraunhofer.de/",
  },
  "fraunhofer-iis": {
    name: "Fraunhofer IIS / EAS",
    logo: "/partners/logo-fraunhofer-iis.webp",
    url: "https://www.eas.iis.fraunhofer.de/",
  },
  "bz-lt": {
    name: "Bildungszentrum Lernen+Technik gGmbH",
    logo: "/partners/bz-l+t.webp",
    url: "https://lernen-technik.de/",
  },
  "softed-systems": {
    name: "SoftEd Systems GmbH",
    logo: "/partners/logo-softed-systems.svg",
    url: "https://www.softed.de/",
  },
};

export function getPartner(key: string): Partner | undefined {
  return partners[key];
}
