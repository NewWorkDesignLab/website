import type { Project } from "../types";

export const lernMitKi: Project = {
  slug: "lern-mit-ki",
  title: "Lern mit KI",
  tagline: {
    de: "Lernen im Elektrohandwerk mit Künstlicher Intelligenz.",
    en: "AI-assisted learning in the electrical trade.",
  },
  categories: ["ai", "research"],
  status: "ongoing",
  year: "2025–2028",
  cover: "/projects/lern-mit-ki/cover.svg",
  funding: ["eu", "esf", "freistaat-sachsen"],
  team: ["Prof. Dr. Marius Brade", "Christian Schülke"],
  // Celina Kunze ist (noch) nicht im Team gelistet – daher inline nur mit Namen
  // und Platzhalter-Silhouette. Bei Bedarf später nach team.ts verschieben.
  contributors: [{ name: "Celina Kunze", photo: "/team/placeholder.svg" }],
  details: [
    {
      label: { de: "Förderung", en: "Funding" },
      value: {
        de: "ESF+ Berufliche Bildung 2021–2027 / Freistaat Sachsen",
        en: "ESF+ Vocational Training 2021–2027 / Free State of Saxony",
      },
    },
    {
      label: { de: "Fördersumme", en: "Funding volume" },
      value: { de: "273.347 Euro", en: "273,347 euros" },
    },
    {
      label: { de: "Laufzeit", en: "Duration" },
      value: { de: "09.05.2025 – 31.10.2028", en: "9 May 2025 – 31 October 2028" },
    },
  ],
  partners: [
    { key: "ebz", kind: "partner" },
    { key: "bz-lt", kind: "partner" },
    { key: "fraunhofer-iis", kind: "partner" },
    { key: "softed-systems", kind: "partner" },
    { key: "fhd", kind: "partner" },
  ],
  sections: [
    {
      type: "text",
      text: {
        de: "Das Projekt entwickelt adaptive, kreative Lehr-Lern-Lösungen für die Aus- und Weiterbildung im Elektrohandwerk. Inhaltliche Schwerpunkte sind die Etablierung und Erprobung eines modernen, assistierten digitalen Lernprozessbegleiters mit KI-Instrumenten, der sich besser in den betrieblichen Arbeitsablauf integrieren lässt und Möglichkeiten für arbeitsprozessbegleitendes Lernen durch verstärkte orts- und zeitunabhängige Lernphasen eröffnet.",
        en: "The project develops adaptive, creative teaching and learning solutions for initial and continuing training in the electrical trade. The content focus is on establishing and trialling a modern, AI-assisted digital learning companion that integrates better into operational workflows and opens up opportunities for work-process-integrated learning through extended time- and location-independent learning phases.",
      },
    },
    {
      type: "image",
      src: "/projects/lern-mit-ki/lmki-treff-2.JPG",
      alt: {
        de: "Gruppenfoto der Projektbeteiligten: rund fünfzehn Personen stehen nebeneinander vor einer hellen Wand in einem Seminarraum.",
        en: "Group photo of the project participants: around fifteen people standing side by side in front of a light-coloured wall in a seminar room.",
      },
      caption: {
        de: "Halbtagsworkshop an der FHD im Februar 2026: Die Beteiligten aller Projektpartner kamen zum gemeinsamen Austausch zusammen.",
        en: "Half-day workshop at FHD in February 2026: everyone involved from all project partners came together to exchange ideas.",
      },
    },
    {
      type: "heading",
      text: { de: "Projektziele", en: "Project objectives" },
    },
    {
      type: "text",
      text: {
        de: "Ausgehend von den Bedarfen der Unternehmen stehen im Zentrum des Projektes folgende Teilzielsetzungen:",
        en: "Based on the needs of companies, the following sub-objectives are at the centre of the project:",
      },
    },
    {
      type: "list",
      items: [
        {
          de: "Aufbau und Realisierung eines KI-gestützten LMS, das flexible, adaptive Lernlösungen entwickelt, um Personen mit unterschiedlichen Leistungsvoraussetzungen individuell zu fördern und leistungsmotivierende Angebote zu schaffen.",
          en: "Building and implementing an AI-supported LMS that develops flexible, adaptive learning solutions to support individuals with different performance prerequisites individually and create performance-motivating offerings.",
        },
        {
          de: "Entwicklung zielgruppen- und betriebsbezogener Lerninstrumente auf Basis Co-Pilot-gesteuerter Lernpfade zur Flexibilisierung der Lernphasen.",
          en: "Developing target-group- and company-specific learning tools based on Co-Pilot-guided learning paths to make learning phases more flexible.",
        },
        {
          de: "Entwicklung von unterstützenden Demo-Applikationen auf Basis von Extended-Reality-(XR-)Technologien zur Vertiefung und Systematisierung.",
          en: "Developing supporting demo applications based on Extended Reality (XR) technologies for knowledge deepening and systematic consolidation.",
        },
        {
          de: "Hohe digitale Flexibilität, Gamifizierung und Interaktion des Lernerlebnisses zur Verbesserung der Qualität und Attraktivität der beruflichen Bildung.",
          en: "High digital flexibility, gamification and interaction of the learning experience to improve the quality and attractiveness of vocational training.",
        },
        {
          de: "Integrative Befähigung des Ausbildungspersonals auf Basis integrierter Implementierungsszenarien zum Transfer in die Praxis.",
          en: "Integrative capacity-building of training staff on the basis of integrated implementation scenarios for transfer into practice.",
        },
      ],
    },
    {
      type: "image",
      src: "/projects/lern-mit-ki/lmki-strom-prototype.png",
      alt: {
        de: "Screenshot des Lernprototyps „Stromkreis“: Im Level „Parallel = ODER“ ist ein Stromkreis mit zwei parallel geschalteten Schaltern aufgebaut, darunter die Rückmeldung „Geschafft!“ und die Werkzeuge Leitung, Schalten, Löschen und Zurücksetzen.",
        en: "Screenshot of the “Stromkreis” learning prototype: in the “Parallel = ODER” level, a circuit with two switches wired in parallel has been built, below it the feedback “Geschafft!” and the tools for wiring, switching, deleting and resetting.",
      },
      caption: {
        de: "Prototyp eines interaktiven Lernspiels im Web: Stromkreise werden selbst aufgebaut, geschaltet und direkt im Browser getestet.",
        en: "Prototype of an interactive web-based learning game: circuits are built and switched by the learners themselves and tested directly in the browser.",
      },
    },
  ],
};
