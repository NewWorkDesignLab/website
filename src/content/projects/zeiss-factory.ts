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
  cover: "/projects/zeiss-factory/zeiss-smart-factory.webp",
  funding: [],
  partners: [{ key: "zeiss", kind: "client" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Projektbeschreibung folgt.",
        en: "Project description coming soon.",
      },
    },
    {
      type: "image",
      src: "/projects/zeiss-factory/zeiss-1.jpg",
      alt: {
        de: "Person mit VR-Brille in einer lichtdurchfluteten Halle; auf dem Bildschirm daneben ist die ZEISS-VR-Anwendung mit Prozessübersicht zu sehen.",
        en: "A person wearing a VR headset in a light-filled hall; the screen beside them shows the ZEISS VR application with a process overview.",
      },
    },
    {
      type: "image",
      src: "/projects/zeiss-factory/zeiss-2.jpg",
      alt: {
        de: "Person mit VR-Brille in einem Showroom; der Monitor an der Wand zeigt die virtuelle ZEISS-Fabrikhalle mit Markierungspunkten.",
        en: "A person wearing a VR headset in a showroom; the wall-mounted monitor shows the virtual ZEISS factory hall with marker points.",
      },
    },
  ],
};
