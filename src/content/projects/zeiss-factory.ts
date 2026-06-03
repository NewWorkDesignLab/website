import type { Project } from "../types";

export const zeissFactory: Project = {
  slug: "zeiss-factory",
  title: "Zeiss Factory",
  tagline: {
    de: "Platzhalter – kurze Beschreibung des Projekts (DE).",
    en: "Placeholder – short project description (EN).",
  },
  categories: ["vr"],
  status: "completed",
  cover: "/projects/zeiss-factory/cover.svg",
  funding: ["freistaat-sachsen", "efre"],
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
