import type { Project } from "../types";

export const globalFoundriesEscape: Project = {
  slug: "global-foundries-escape",
  title: "Global Foundries Escape Room",
  tagline: {
    de: "VR-Escape-Room: einen Silizium-Wafer durch den Reinraum bis zum fertigen Mikrochip begleiten.",
    en: "A VR escape room: accompanying a silicon wafer through the cleanroom to the finished microchip.",
  },
  categories: ["vr"],
  status: "completed",
  year: "2024–2025",
  cover: "/projects/global-foundries-escape/gf.webp",
  funding: [],
  partners: [{ key: "global-foundries", kind: "client" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Welche Prozesse laufen eigentlich im Reinraum einer Chipfabrik ab? Zur Beantwortung dieser Frage wurde gemeinsam mit GlobalFoundries eine Anwendung gestaltet, in der Schüler*innen an verschiedenen Maschinen einen virtuellen Silizium-Wafer auf seinem Weg zum Mikrochip begleiten können. Dabei wählen sie zum Beispiel Belichtungsmasken aus oder bearbeiten den Wafer mit verschiedenen Chemikalien.",
        en: "What processes actually take place in the cleanroom of a chip factory? To answer this question, an application was created together with GlobalFoundries in which pupils can accompany a virtual silicon wafer on its way to becoming a microchip across various machines. In doing so, they select exposure masks, for example, or treat the wafer with different chemicals.",
      },
    },
    {
      type: "image",
      src: "/projects/global-foundries-escape/gf-1.webp",
      alt: {
        de: "VR-Szene an einer Belichtungsmaschine: Ein Bildschirm zur „Maskenauswahl“ zeigt die Optionen 22 nm, 40 nm und 55 nm, daneben eine Wafer-Kassette.",
        en: "VR scene at a lithography machine: a “mask selection” screen shows the options 22 nm, 40 nm and 55 nm, next to a wafer cassette.",
      },
      caption: {
        de: "An den Maschinen treffen die Teilnehmenden eigene Entscheidungen – etwa bei der Wahl der passenden Belichtungsmaske.",
        en: "At the machines, participants make their own decisions – for example when choosing the right exposure mask.",
      },
    },
    {
      type: "image",
      src: "/projects/global-foundries-escape/gf-diffusion.webp",
      alt: {
        de: "VR-Szene: Blick in einen glühenden Diffusionsofen einer Chipfabrik, in dem der Wafer thermisch bearbeitet wird.",
        en: "VR scene: a view into the glowing diffusion furnace of a chip factory, where the wafer is thermally processed.",
      },
      caption: {
        de: "Schritt für Schritt durchläuft der Wafer die Prozesse des Reinraums – hier die thermische Bearbeitung im Diffusionsofen.",
        en: "Step by step, the wafer passes through the cleanroom processes – here the thermal treatment in the diffusion furnace.",
      },
    },
  ],
};
