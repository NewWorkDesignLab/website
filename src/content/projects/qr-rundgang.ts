import type { Project } from "../types";

export const qrRundgang: Project = {
  slug: "qr-rundgang",
  title: "QR-Rundgang",
  tagline: {
    de: "Eine virtuelle Ausstellung, die Projekte per AR im Browser räumlich erlebbar macht.",
    en: "A virtual exhibition that brings projects into the room spatially via AR in the browser.",
  },
  categories: ["ar"],
  status: "ongoing",
  year: "2026",
  cover: "/projects/qr-rundgang/cover.svg",
  funding: [],
  sections: [
    {
      type: "text",
      text: {
        de: "Der QR-Rundgang ist eine virtuelle Ausstellung von Projekten. Dafür wurde ein Webinterface für das Marketing-Team der FHD sowie eine Webanwendung entwickelt, die mittels AR direkt im Browser auf dem Smartphone ausgeführt wird.",
        en: "The QR-Rundgang is a virtual exhibition of projects. For this, a web interface for the FHD marketing team was developed, along with a web application that runs via AR directly in the smartphone browser.",
      },
    },
    {
      type: "text",
      text: {
        de: "Die QR-Codes an der Wand werden getrackt, die zugehörigen 3D-Modelle geladen und im Raum angezeigt. So lassen sich Eindrücke der Projekte räumlich erleben, und studentische Projekte können zukünftig auf diese Weise ausgestellt werden.",
        en: "The QR codes on the wall are tracked, the corresponding 3D models are loaded and displayed in the room. This makes it possible to experience impressions of the projects spatially, and student projects can be exhibited this way in the future.",
      },
    },
  ],
};
