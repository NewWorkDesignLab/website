import type { Member } from "./types";

/**
 * Team members — current and former. Add a photo at /team/<name>.jpg
 * (place the file in public/team/). Order within each status group is the
 * order shown on the page.
 *
 * Placeholder entries below — replace names, roles and photos with real data.
 */
export const team: Member[] = [
  {
    name: "Prof. Dr. Marius Brade",
    role: { de: "Leitung New Work Design Lab", en: "Head of New Work Design Lab" },
    photo: "/team/placeholder.svg",
    status: "current",
    linkedin: "https://www.linkedin.com/company/new-work-design-lab-fhd",
  },
  {
    name: "Vorname Nachname",
    role: { de: "Wissenschaftliche*r Mitarbeiter*in", en: "Research Associate" },
    photo: "/team/placeholder.svg",
    status: "current",
  },
  {
    name: "Vorname Nachname",
    role: { de: "Ehemalige*r Mitarbeiter*in", en: "Former team member" },
    photo: "/team/placeholder.svg",
    status: "alumni",
  },
];
