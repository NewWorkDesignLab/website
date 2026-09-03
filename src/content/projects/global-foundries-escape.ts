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
  details: [
    {
      label: { de: "Projektzeitraum", en: "Project period" },
      value: { de: "10/2024 – 09/2025", en: "10/2024 – 09/2025" },
    },
  ],
  team: ["Prof. Dr. Marius Brade", "Jonas Ludorf"],
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
      type: "text",
      text: {
        de: "Der Anlass ist derselbe wie beim virtuellen Betriebsrundgang: Der physische Zugang zu Reinräumen ist streng reglementiert, eine Besichtigung der Fertigung kommt für Bewerbende nicht in Frage. Die mobile VR-Simulation schließt diese Lücke und ist heute fester Bestandteil des Recruitings auf Messen sowie des Onboardings neuer Mitarbeitender.",
        en: "The starting point is the same as for the virtual factory tour: physical access to cleanrooms is strictly regulated, and a visit to production is out of the question for applicants. The mobile VR simulation closes this gap and is now an integral part of recruiting at trade fairs as well as of onboarding new employees.",
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
      type: "heading",
      text: { de: "Industrieprozesse als Spielmechanik", en: "Industrial processes as game mechanics" },
    },
    {
      type: "text",
      text: {
        de: "Die Anwendung ist als Escape-Game aufgebaut: Die Teilnehmenden lösen an den Stationen Aufgaben, die den realen Fertigungsschritten nachempfunden sind. Am Diffusionsofen etwa müssen Temperatur und Brenndauer korrekt eingestellt werden, bevor der Wafer weiterwandert. In enger Abstimmung mit den Fachexpert*innen von GlobalFoundries wurden die komplexen Industrieprozesse dafür in einfache, verständliche Spielmechaniken übersetzt.",
        en: "The application is structured as an escape game: at each station, participants solve tasks modelled on the real manufacturing steps. At the diffusion furnace, for example, temperature and firing time have to be set correctly before the wafer moves on. In close consultation with the subject matter experts at GlobalFoundries, the complex industrial processes were translated into simple, comprehensible game mechanics.",
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
    {
      type: "heading",
      text: { de: "Entwicklung im NewWorkDesignLab", en: "Development at the NewWorkDesignLab" },
    },
    {
      type: "text",
      text: {
        de: "Die Anwendung entstand im NewWorkDesignLab der Fachhochschule Dresden. Die technische und visuelle Umsetzung lag bei Jonas Ludorf, der das Projekt von der ersten Idee bis zur Veröffentlichung begleitete: von der Konzeption – erste Ideen wurden mit dem hauseigenen Prototyping-Werkzeug Mind-Objects XR validiert – über die Modellierung des vollständigen digitalen Reinraums in Blender bis zur Programmierung der Anwendungslogik. Auf Seiten von GlobalFoundries prägte Steve Federow aus dem Bereich Workforce Development die inhaltliche Ausrichtung und Zielsetzung.",
        en: "The application was developed at the NewWorkDesignLab of Fachhochschule Dresden. Technical and visual implementation was carried out by Jonas Ludorf, who accompanied the project from the initial idea to release: from the concept phase – first ideas were validated with the lab's own prototyping tool Mind-Objects XR – through modelling the complete digital cleanroom in Blender to programming the application logic. On the GlobalFoundries side, Steve Federow from Workforce Development shaped the content focus and objectives.",
      },
    },
    {
      type: "image",
      src: "/projects/global-foundries-escape/gf-2.webp",
      alt: {
        de: "VR-Szene im digitalen Reinraum: Die Nutzerhände halten einen Wafer, im Hintergrund eine mit „CleanTech“ beschriftete Anlage mit Teleportmarkierung am Boden.",
        en: "VR scene in the digital cleanroom: the user's hands hold a wafer, with a machine labelled “CleanTech” and a teleport marker on the floor in the background.",
      },
      caption: {
        de: "Der gesamte Reinraum wurde als 3D-Umgebung modelliert und für mobile VR-Hardware optimiert.",
        en: "The entire cleanroom was modelled as a 3D environment and optimised for mobile VR hardware.",
      },
    },
    {
      type: "text",
      text: {
        de: "Ein Schwerpunkt der Entwicklung lag auf der Bedienbarkeit: Weil viele Nutzende zum ersten Mal eine VR-Brille aufsetzen, wurde die Steuerung bewusst einfach gehalten. Gezielte Performance-Optimierungen sorgen zudem dafür, dass die Anwendung auf mobiler Hardware flüssig läuft – Voraussetzung dafür, dass sie ohne aufwendigen Aufbau auf Messen und in Schulen eingesetzt werden kann.",
        en: "One focus of development was usability: because many users put on a VR headset for the first time, the controls were deliberately kept simple. Targeted performance optimisation also ensures that the application runs smoothly on mobile hardware – a prerequisite for using it at trade fairs and in schools without elaborate setup.",
      },
    },
    {
      type: "text",
      text: {
        de: "Das Projekt steht damit beispielhaft dafür, wie an der Fachhochschule Dresden Lösungen für konkrete unternehmerische Herausforderungen entstehen: Eine hochkomplexe, für Außenstehende unzugängliche Fertigung wird in eine Erlebniswelt übersetzt, die Interesse weckt, ohne fachlich zu vereinfachen.",
        en: "The project thus exemplifies how solutions to concrete business challenges are developed at Fachhochschule Dresden: a highly complex production process, inaccessible to outsiders, is translated into an experience that sparks interest without oversimplifying the subject matter.",
      },
    },
  ],
};
