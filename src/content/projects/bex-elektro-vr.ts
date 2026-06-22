import type { Project } from "../types";

export const bexElektroVr: Project = {
  slug: "bex-elektro-vr",
  title: "Bex Elektro VR",
  tagline: {
    de: "Platzhalter – kurze Beschreibung des Projekts (DE).",
    en: "Placeholder – short project description (EN).",
  },
  categories: ["vr"],
  status: "ongoing",
  cover: "/projects/bex-elektro-vr/cover.svg",
  funding: ["freistaat-sachsen", "esf"],
  partners: [{ key: "bex", kind: "partner" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Projektbeschreibung folgt.",
        en: "Project description coming soon.",
      },
    },
  ],
};
