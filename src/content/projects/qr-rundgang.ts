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
  cover: "/projects/qr-rundgang/qr-rundgang-cover.webp",
  funding: [],
  team: ["Philip Ahlers"],
  partners: [{ key: "fhd", kind: "client" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Der QR-Rundgang ist eine virtuelle Ausstellung von Projekten. Dafür wurde ein Webinterface für das Marketing-Team der FHD sowie eine Webanwendung entwickelt, die mittels AR direkt im Browser auf dem Smartphone ausgeführt wird.",
        en: "The QR-Rundgang is a virtual exhibition of projects. For this, a web interface for the FHD marketing team was developed, along with a web application that runs via AR directly in the smartphone browser.",
      },
    },
    {
      type: "image",
      src: "/projects/qr-rundgang/qr-rundgang-3.webp",
      alt: {
        de: "Eine Person hält ein Smartphone vor einen gerahmten QR-Code an einer Wand; auf dem Display erscheint ein blau leuchtendes 3D-Modell über dem Code.",
        en: "A person holds a smartphone in front of a framed QR code on a wall; the display shows a glowing blue 3D model above the code.",
      },
      caption: {
        de: "Die QR-Codes hängen als gerahmte Exponate im Haus – gescannt wird mit dem eigenen Smartphone, eine zusätzliche App ist nicht nötig.",
        en: "The QR codes hang as framed exhibits throughout the building – visitors scan them with their own smartphone; no additional app is required.",
      },
    },
    {
      type: "heading",
      text: { de: "Vom QR-Code zum Exponat", en: "From QR code to exhibit" },
    },
    {
      type: "text",
      text: {
        de: "Die QR-Codes an der Wand werden getrackt, die zugehörigen 3D-Modelle geladen und im Raum angezeigt. So lassen sich Eindrücke der Projekte räumlich erleben, und studentische Projekte können zukünftig auf diese Weise ausgestellt werden.",
        en: "The QR codes on the wall are tracked, the corresponding 3D models are loaded and displayed in the room. This makes it possible to experience impressions of the projects spatially, and student projects can be exhibited this way in the future.",
      },
    },
    {
      type: "text",
      text: {
        de: "Während des Scans zeigt die Anwendung durchgehend an, ob der Marker erkannt wird. Bleibt er im Bild, verankert sich das Modell stabil vor der Wand und lässt sich durch Bewegung des Smartphones aus verschiedenen Blickwinkeln betrachten. Zusätzlich erkennt die Anwendung die Hand vor der Kamera, sodass sich das Exponat bedienen lässt, ohne das Display zu berühren.",
        en: "While scanning, the application continuously indicates whether the marker is being recognised. As long as it stays in view, the model anchors stably in front of the wall and can be examined from different angles simply by moving the smartphone. The application also detects the hand in front of the camera, so the exhibit can be operated without touching the display.",
      },
    },
    {
      type: "image",
      src: "/projects/qr-rundgang/qr-rundgang-1.webp",
      alt: {
        de: "Smartphone-Ansicht der AR-Anwendung: Über einem realen Raum schwebt ein holografisches Hausmodell auf einem dunklen Sockel, darunter wird eine per Handtracking erkannte Hand mit blauen Gelenkpunkten dargestellt. Oben die Statusanzeige „Marker: sichtbar (Tracking)“.",
        en: "Smartphone view of the AR application: a holographic house model floats on a dark base above a real room, with a hand recognised by hand tracking shown below as blue joint points. At the top, the status display reads “Marker: sichtbar (Tracking)”.",
      },
      caption: {
        de: "Ist der QR-Code erkannt, erscheint das zugehörige 3D-Modell im Raum und lässt sich per Handtracking direkt mit den Fingern bedienen.",
        en: "Once the QR code is recognised, the corresponding 3D model appears in the room and can be operated directly with the fingers via hand tracking.",
      },
    },
    {
      type: "text",
      text: {
        de: "Zu jedem Exponat gehören neben dem 3D-Modell auch redaktionelle Inhalte: Titel, eine kurze Projektbeschreibung sowie weiterführende Links. Über die Navigation gelangen Besucherinnen und Besucher direkt zum nächsten QR-Code oder zurück zur Startseite – der Rundgang lässt sich dadurch in beliebiger Reihenfolge und in beliebigem Umfang erkunden.",
        en: "Alongside the 3D model, every exhibit carries editorial content: a title, a short project description and further links. The navigation takes visitors straight to the next QR code or back to the start page – so the tour can be explored in any order and to any extent.",
      },
    },
    {
      type: "image",
      src: "/projects/qr-rundgang/qr-rundgang-2.webp",
      alt: {
        de: "Smartphone-Ansicht der AR-Anwendung mit eingeblendeter Infokarte zum Projekt „Bex Electro“: Beschreibungstext, ein Button „Test Link“ sowie die Angaben Projekt, Content-ID und Typ „model-3d“.",
        en: "Smartphone view of the AR application with an overlaid info card for the “Bex Electro” project: descriptive text, a “Test Link” button and the fields project, content ID and type “model-3d”.",
      },
      caption: {
        de: "Zu jedem Exponat liefert das Webportal die passenden Projektinformationen und weiterführende Links direkt neben dem 3D-Modell.",
        en: "For every exhibit, the web portal delivers the matching project information and further links right next to the 3D model.",
      },
    },
    {
      type: "heading",
      text: {
        de: "Pflege durch das Marketing-Team",
        en: "Maintained by the marketing team",
      },
    },
    {
      type: "text",
      text: {
        de: "Damit die Ausstellung nicht bei jedem neuen Exponat technisch angepasst werden muss, verwaltet das Marketing-Team der FHD die Inhalte selbst über ein eigenes Webinterface. Dort werden 3D-Modelle, Texte und Links hinterlegt und einem QR-Code zugeordnet; die Anwendung lädt die Inhalte anhand dieser Zuordnung, ohne dass die Anwendung selbst verändert werden muss.",
        en: "So that the exhibition does not have to be adapted technically for every new exhibit, the FHD marketing team manages the content itself through a dedicated web interface. 3D models, texts and links are stored there and assigned to a QR code; the application loads the content based on that assignment, without the application itself having to be changed.",
      },
    },
    {
      type: "text",
      text: {
        de: "Der QR-Rundgang ist damit als dauerhaft erweiterbare Ausstellungsfläche angelegt: Neue Exponate lassen sich ergänzen, bestehende austauschen. Perspektivisch sollen so auch studentische Projekte im Haus sichtbar werden, die sonst nur zu einzelnen Präsentationsterminen zu sehen wären.",
        en: "The QR-Rundgang is therefore designed as a permanently extensible exhibition space: new exhibits can be added and existing ones swapped out. In the longer term this is also intended to make student projects visible within the building that would otherwise only be on show at individual presentation dates.",
      },
    },
  ],
};
