import type { Project } from "../types";

export const holospaceXr: Project = {
  slug: "holospace-xr",
  title: "HolospaceXR",
  tagline: {
    de: "Kollaborativer XR-Raum für gemeinsames Arbeiten und Lernen im virtuellen Raum.",
    en: "A collaborative XR space for working and learning together in virtual reality.",
  },
  categories: ["vr", "research"],
  status: "ongoing",
  year: "2023–2025",
  cover: "/projects/holospace-xr/holospacexr_cover.webp",
  funding: ["freistaat-sachsen", "efre", "eu"],
  sections: [
    {
      type: "text",
      text: {
        de: "HolospaceXR erforscht, wie Teams in einem gemeinsamen, immersiven Raum zusammenarbeiten können – unabhängig davon, wo sich die einzelnen Personen physisch befinden. Im Zentrum steht die Frage, wie räumliche Präsenz, natürliche Interaktion und geteilte Inhalte ein Gefühl von echtem Miteinander erzeugen.",
        en: "HolospaceXR explores how teams can collaborate in a shared, immersive space — regardless of where the individual people physically are. At its core is the question of how spatial presence, natural interaction and shared content create a sense of genuine togetherness.",
      },
    },
    {
      type: "heading",
      text: { de: "Die Idee", en: "The idea" },
    },
    {
      type: "text",
      text: {
        de: "Klassische Videokonferenzen reduzieren Zusammenarbeit auf Kacheln auf einem Bildschirm. HolospaceXR überträgt stattdessen die räumlichen Qualitäten eines echten Raums in die virtuelle Welt: Man steht gemeinsam vor einem Modell, zeigt mit der Hand darauf und bespricht es so, wie man es auch vor Ort tun würde.",
        en: "Classic video conferencing reduces collaboration to tiles on a screen. HolospaceXR instead brings the spatial qualities of a real room into the virtual world: people stand together in front of a model, point at it with their hands and discuss it just as they would on site.",
      },
    },
    {
      type: "image",
      src: "/projects/holospace-xr/scene.svg",
      alt: {
        de: "Visualisierung des virtuellen Kollaborationsraums",
        en: "Visualisation of the virtual collaboration space",
      },
      caption: {
        de: "Konzeptdarstellung des geteilten XR-Raums.",
        en: "Concept rendering of the shared XR space.",
      },
    },
    {
      type: "heading",
      text: { de: "Forschungsfragen", en: "Research questions" },
    },
    {
      type: "text",
      text: {
        de: "Wie viel Realismus braucht Präsenz? Welche Interaktionsmuster sind intuitiv? Und wie lässt sich kognitive Belastung gering halten, damit der Fokus auf der eigentlichen Aufgabe bleibt? Diese Fragen untersuchen wir gemeinsam mit Anwenderinnen und Anwendern in iterativen Tests.",
        en: "How much realism does presence need? Which interaction patterns are intuitive? And how can cognitive load be kept low so the focus stays on the actual task? We investigate these questions together with users in iterative tests.",
      },
    },
    {
      type: "video",
      youtube: "dQw4w9WgXcQ",
      title: { de: "HolospaceXR – Demo", en: "HolospaceXR – demo" },
    },
    {
      type: "quote",
      text: {
        de: "Zum ersten Mal hatte ich das Gefühl, wirklich mit den anderen im selben Raum zu sein.",
        en: "For the first time I felt like I was really in the same room as the others.",
      },
      author: "Testperson / Test participant",
    },
  ],
};
