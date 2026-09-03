import type { Project } from "../types";

export const domicileVr: Project = {
  slug: "domicile-vr",
  title: "DOmIcILE-VR",
  tagline: {
    de: "Digitale Bildungsangebote in der Immobilienwirtschaft mittels Virtual Reality.",
    en: "Digital training offerings in the real estate industry through virtual reality.",
  },
  categories: ["vr"],
  status: "completed",
  year: "2019–2022",
  cover: "/projects/domicile-vr/domicile-1.webp",
  externalUrl: "https://www.domicile-vr.de",
  funding: ["esf-eu", "freistaat-sachsen"],
  team: ["Prof. Dr. Marius Brade", "Tobias Bohn"],
  authors: ["Tobias Bohn (ehem.)"],
  createdAt: "2022-05-06",
  updatedAt: "2026-06-23",
  details: [
    {
      label: { de: "Fördergeber", en: "Funded by" },
      value: {
        de: "Sächsisches Staatsministerium für Wirtschaft, Arbeit und Verkehr",
        en: "Saxon State Ministry for Economic Affairs, Labour and Transport",
      },
    },
    {
      label: { de: "Förderzeitraum", en: "Funding period" },
      value: { de: "01.05.2019 – 30.04.2022", en: "1 May 2019 – 30 April 2022" },
    },
    {
      label: { de: "Programm", en: "Programme" },
      value: {
        de: "ESF Berufliche Bildung 2014–2020",
        en: "ESF vocational training 2014–2020",
      },
    },
  ],
  partners: [{ key: "afbb" }, { key: "tu-dresden" }, { key: "fhd" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Das vom Sächsischen Staatsministerium für Wirtschaft, Arbeit und Verkehr geförderte Projekt DOmIcILE-VR möchte Kleinst-, kleine und mittelständische Betriebe in der Weiterbildung der Mitarbeiter*innen unterstützen, indem eine digitale Lernumgebung entwickelt wird, mit deren Herzstück, einem VR-Szenario, Wohnungsübergaben gezielt trainiert werden können.",
        en: "The DOmIcILE-VR project, funded by the Saxon State Ministry for Economic Affairs, Labour and Transport, aims to support micro, small and medium-sized enterprises in the further training of their employees by developing a digital learning environment whose centrepiece — a VR scenario — allows apartment handovers to be trained in a targeted way.",
      },
    },
    {
      type: "text",
      text: {
        de: "Über einen Zeitraum von drei Jahren werden die konkreten Weiterbildungsbedarfe ermittelt, Prototypen der Lernumgebung und des VR-Szenarios entwickelt und mit verschiedenen Testpersonen evaluiert und schließlich Handreichungen zu deren Nutzung erstellt.",
        en: "Over a period of three years, the concrete further-training needs are identified, prototypes of the learning environment and the VR scenario are developed and evaluated with various test persons, and finally guidance materials for their use are created.",
      },
    },
    {
      type: "image",
      src: "/projects/domicile-vr/domicile-2.webp",
      alt: {
        de: "Nahaufnahme eines Smartphones in einer VR-Halterung: Auf dem geteilten Stereo-Bildschirm ist der virtuelle Innenraum einer Wohnung als 3D-Modell zu sehen.",
        en: "Close-up of a smartphone in a VR holder: the split stereo screen shows the virtual interior of a flat as a 3D model.",
      },
      caption: {
        de: "Das VR-Szenario läuft auf einem Smartphone in einer Cardboard-Halterung – Lernende bewegen sich durch die virtuell nachgebildete Wohnung.",
        en: "The VR scenario runs on a smartphone in a Cardboard holder – learners move through the virtually reconstructed flat.",
      },
    },
    {
      type: "text",
      text: {
        de: "Es erfolgte die Szenario- und Umgebungsentwicklung (Gebäude, Wohnungen, Mängel) mit Hilfe eines 3D-Modelling-Werkzeuges (bspw. Blender). Die Inhalte für diese Szenarien wurden mit den entsprechenden Stakeholdern frühzeitig abgestimmt und getestet, ob Detailgrad und Komplexität ausreichen. Insofern bilden die 3D-Modelle den Kern des ersten testbaren Prototyps im Meilenstein M2. Auch das Interface wurde in einer prototypischen Version realisiert. Die Interface-Entwicklung für die 3D-Umgebung wurde in Adobe XD umgesetzt. Dabei stellt die Fertigstellung eines ersten testbaren Prototyps den zweiten Meilenstein M2 des Projekts dar. Schließlich erfolgte die Einbettung (Interface und virtuelle Räume) in eine 3D-Entwicklungsumgebung. Hierzu wurde die Entwicklungsumgebung Unity3D verwendet. Die Fertigstellung des VR-Lernszenarios – somit die praktische Einsatzfähigkeit – stellt den dritten Meilenstein M3 des Projekts dar.",
        en: "The scenarios and environments (building, flats, defects) were developed with the help of a 3D modelling tool (e.g. Blender). The content for these scenarios was coordinated early on with the relevant stakeholders and tested to see whether the level of detail and complexity were sufficient. In this respect, the 3D models form the core of the first testable prototype in milestone M2. The interface was also realised in a prototype version. The interface development for the 3D environment was implemented in Adobe XD. The completion of a first testable prototype constitutes the second milestone, M2, of the project. Finally, the interface and virtual rooms were embedded into a 3D development environment. The Unity3D development environment was used for this. The completion of the VR learning scenario — and thus its practical usability — constitutes the third milestone, M3, of the project.",
      },
    },
    {
      type: "image",
      src: "/projects/domicile-vr/domicile-3.webp",
      alt: {
        de: "Blick über die Schulter auf einen Laptop: Im Browser wird die virtuelle Wohnung mit interaktiven Markierungspunkten dargestellt.",
        en: "Over-the-shoulder view of a laptop: the browser shows the virtual flat with interactive marker points.",
      },
      caption: {
        de: "Die Lernumgebung lässt sich auch am Rechner nutzen – mit interaktiven Hotspots in den virtuell nachgebildeten Räumen.",
        en: "The learning environment can also be used on a computer – with interactive hotspots in the virtually reconstructed rooms.",
      },
    },
  ],
};
