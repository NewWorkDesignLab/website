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
  cover: "/projects/mathematik-escape-room/MEVR_7.webp",
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
      type: "image",
      src: "/projects/mathematik-escape-room/MEVR_7.webp",
      alt: {
        de: "Blick in die virtuelle Raumschiffbrücke: ein weiter, heller Raum mit Konsolen an den Wänden, in der Mitte ein Holotisch, über dem zwei Planeten in Rot und Blau schweben.",
        en: "View of the virtual spaceship bridge: a wide, bright room with consoles along the walls and a holo table in the centre, above which two planets in red and blue are floating.",
      },
      caption: {
        de: "Zentraler Schauplatz ist die Brücke des Raumschiffs: Am Holotisch in der Raummitte laufen die Aufgaben der Gruppe zusammen.",
        en: "The ship's bridge is the central setting: the group's tasks come together at the holo table in the middle of the room.",
      },
    },
    {
      type: "text",
      text: {
        de: "Die Schülerinnen und Schüler arbeiten in Gruppen: Einige agieren am Tablet, während immer eine Person in der VR-Umgebung ist. Ein Raumschiff muss vor dem Asteroidenstrom repariert, gesteuert und navigiert werden, damit die Gruppe entkommen und weiterfliegen kann. Dabei sind gemeinsam mathematische Rätsel zu lösen.",
        en: "The pupils work in groups: some operate a tablet while one person is always inside the VR environment. A spaceship has to be repaired, controlled and navigated in the face of an asteroid field so the group can escape and fly on. Along the way, they solve mathematical puzzles together.",
      },
    },
    {
      type: "image",
      src: "/projects/mathematik-escape-room/MEVR_1.webp",
      alt: {
        de: "VR-Perspektive mit Controller in der Hand: Vor einer Werkbank mit Bauteilen schwebt eine halbtransparente Anleitung, auf der ein Gerät und seine Einzelteile abgebildet sind.",
        en: "VR perspective with a controller in hand: a semi-transparent instruction sheet showing a device and its individual parts floats in front of a workbench holding components.",
      },
      caption: {
        de: "Reparaturaufgaben in VR: Anhand der eingeblendeten Anleitung werden die passenden Bauteile an der Werkbank zusammengesucht.",
        en: "Repair tasks in VR: using the overlaid instructions, the matching components are gathered from the workbench.",
      },
    },
    {
      type: "image",
      src: "/projects/mathematik-escape-room/MEVR_4.webp",
      alt: {
        de: "Cockpit-Ansicht: Ein grün leuchtender Bildschirm mit der Aufschrift „BORDCOMPUTER“, den Eingabefeldern „M = _“ und „N = _“ sowie dem Hinweis „NOCH KEINE ROUTENDATEN.“; darunter ein Ziffernfeld mit den Tasten „zurück“ und „Eingabe“.",
        en: "Cockpit view: a glowing green screen headed “BORDCOMPUTER” with the input fields “M = _” and “N = _” and the notice “NOCH KEINE ROUTENDATEN.”; below it a numeric keypad with “zurück” and “Eingabe” keys.",
      },
      caption: {
        de: "Am Bordcomputer wird die berechnete Route eingegeben – erst mit den Werten für m und n liegen die Routendaten vor und das Raumschiff kann weiterfliegen.",
        en: "The calculated route is entered at the on-board computer – only once the values for m and n are in place does the route data exist and the ship can fly on.",
      },
    },
  ],
};
