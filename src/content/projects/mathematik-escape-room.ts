import type { Project } from "../types";

export const mathematikEscapeRoom: Project = {
  slug: "mathematik-escape-room",
  title: "Mathematik Escape Room",
  tagline: {
    de: "Ein mathematisches VR-Erlebnis für 8. Klassen: gemeinsam ein Raumschiff durch den Asteroidenstrom steuern.",
    en: "A mathematical VR experience for eighth graders: steer a spaceship through the asteroid field together.",
  },
  categories: ["vr"],
  status: "ongoing",
  year: "2026",
  cover: "/projects/mathematik-escape-room/cover.svg",
  funding: [],
  sections: [
    {
      type: "text",
      text: {
        de: "Der Mathematik Escape Room ist die Wiederbelebung und komplette Neuplanung eines Projektes, das 2019 in einem Studiengang konzeptuell in VR entwickelt wurde. Heute wird es vollständig neu umgesetzt, um ein cooles mathematisches Erlebnis für die Zielgruppe der 8. Klassen zu schaffen.",
        en: "The Mathematik Escape Room is the revival and complete re-planning of a project that was conceived in VR as a study-programme concept in 2019. Today it is being rebuilt from scratch to create a cool mathematical experience aimed at eighth-grade students.",
      },
    },
    {
      type: "text",
      text: {
        de: "Die Schülerinnen und Schüler arbeiten in Gruppen: Einige agieren am Tablet, während immer eine Person in der VR-Umgebung ist. Ein Raumschiff muss vor dem Asteroidenstrom repariert, gesteuert und navigiert werden, damit die Gruppe entkommen und weiterfliegen kann. Dabei sind gemeinsam mathematische Rätsel zu lösen.",
        en: "The pupils work in groups: some operate a tablet while one person is always inside the VR environment. A spaceship has to be repaired, controlled and navigated in the face of an asteroid field so the group can escape and fly on. Along the way, they solve mathematical puzzles together.",
      },
    },
  ],
};
