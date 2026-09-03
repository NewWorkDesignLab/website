import type { Project } from "../types";

export const zeissFactory: Project = {
  slug: "zeiss-factory",
  title: "Zeiss Factory",
  tagline: {
    de: "Mixed-Reality-Modellfabrik: Softwaredienstleistungen im Kundengespräch sichtbar machen.",
    en: "A mixed reality model factory: making software services visible in customer conversations.",
  },
  categories: ["vr"],
  status: "completed",
  year: "2023–2024",
  cover: "/projects/zeiss-factory/zeiss-smart-factory.webp",
  funding: [],
  details: [
    {
      label: { de: "Projektzeitraum", en: "Project period" },
      value: { de: "09/2023 – 04/2024", en: "09/2023 – 04/2024" },
    },
  ],
  team: ["Prof. Dr. Marius Brade", "Jonas Ludorf", "Nicos Lentzsch", "Christian Schülke", "Philip Ahlers", "Friedrich Malz", "Lenny Keil"],
  partners: [{ key: "zeiss", kind: "client" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Wie zeigt man im Kundengespräch etwas, das keine physische Gestalt hat? ZEISS Digital Innovation entwickelt maßgeschneiderte Software für industrielle Anwendungen – ein Angebot, für das sich schwerlich ein Exponat auf den Tisch stellen lässt. Genau an dieser Stelle setzt die Zusammenarbeit mit dem NewWorkDesignLab der Fachhochschule Dresden an.",
        en: "How do you show something that has no physical form in a customer meeting? ZEISS Digital Innovation develops customised software for industrial applications – an offering for which an exhibit can hardly be placed on the table. This is precisely where the collaboration with the NewWorkDesignLab at Fachhochschule Dresden comes in.",
      },
    },
    {
      type: "text",
      text: {
        de: "Entstanden ist eine interaktive Mixed-Reality-Anwendung: eine digitale Modellfabrik, die die Produktion von Zauberwürfeln simuliert. Die Fertigungsstraße erscheint als räumliches Modell im realen Raum, die dahinterliegenden Datenströme werden in Echtzeit sichtbar. Abstrakte Softwareleistungen – Prozessüberwachung, Datenerfassung, Qualitätssicherung – erhalten so einen anschaulichen Gegenstand, an dem sie erklärt werden können.",
        en: "The result is an interactive mixed reality application: a digital model factory simulating the production of Rubik's Cubes. The production line appears as a spatial model in the real room, and the underlying data streams become visible in real time. Abstract software services – process monitoring, data acquisition, quality assurance – are thereby given a tangible object through which they can be explained.",
      },
    },
    {
      type: "image",
      src: "/projects/zeiss-factory/zeiss-2.jpg",
      alt: {
        de: "Person mit VR-Brille in einem Showroom; der Monitor an der Wand zeigt die virtuelle ZEISS-Fabrikhalle mit Markierungspunkten.",
        en: "A person wearing a VR headset in a showroom; the wall-mounted monitor shows the virtual ZEISS factory hall with marker points.",
      },
      caption: {
        de: "Die Modellfabrik erscheint als räumliches Objekt; Markierungspunkte führen zu den einzelnen Prozessschritten.",
        en: "The model factory appears as a spatial object; marker points lead to the individual process steps.",
      },
    },
    {
      type: "heading",
      text: { de: "Passthrough statt Abschottung", en: "Passthrough instead of isolation" },
    },
    {
      type: "text",
      text: {
        de: "Eine gestalterische Grundentscheidung prägt die Anwendung: Sie setzt auf Passthrough-Technologie und blendet die Umgebung nicht aus. Im Vertriebsgespräch bleibt damit möglich, was eine vollständig geschlossene VR-Umgebung ausschließt – Blickkontakt, Gestik, gemeinsames Betrachten. Die Modellfabrik steht im Raum, nicht anstelle des Raums.",
        en: "One fundamental design decision shapes the application: it relies on passthrough technology and does not black out the surroundings. In a sales conversation, this preserves what a fully enclosed VR environment rules out – eye contact, gestures, looking at something together. The model factory stands in the room, not in place of the room.",
      },
    },
    {
      type: "text",
      text: {
        de: "Bedient wird die Anwendung ohne Controller. Ein robustes Handtracking-System erlaubt es, die virtuelle Fabrik mit natürlichen Gesten zu steuern. Für Nutzende, die zum ersten Mal eine Mixed-Reality-Brille tragen, entfällt damit eine Hürde: Es gibt kein Eingabegerät, dessen Bedienung zuerst erklärt werden müsste.",
        en: "The application is operated without controllers. A robust hand-tracking system makes it possible to control the virtual factory with natural gestures. For users wearing a mixed reality headset for the first time, this removes a hurdle: there is no input device whose operation would have to be explained first.",
      },
    },
    {
      type: "image",
      src: "/projects/zeiss-factory/zeiss-1.jpg",
      alt: {
        de: "Person mit VR-Brille in einer lichtdurchfluteten Halle; auf dem Bildschirm daneben ist die ZEISS-VR-Anwendung mit Prozessübersicht zu sehen.",
        en: "A person wearing a VR headset in a light-filled hall; the screen beside them shows the ZEISS VR application with a process overview.",
      },
      caption: {
        de: "Gesteuert wird ohne Controller – die Anwendung reagiert auf natürliche Handbewegungen.",
        en: "Operation requires no controllers – the application responds to natural hand movements.",
      },
    },
    {
      type: "heading",
      text: { de: "Interaktionsmuster für den Vertriebskontext", en: "Interaction patterns for the sales context" },
    },
    {
      type: "text",
      text: {
        de: "Der Einsatzort stellte eigene Anforderungen an die Gestaltung. Eine Anwendung, die im Kundentermin überzeugen soll, muss in Minuten verständlich sein und darf den Gesprächsfluss nicht unterbrechen. Das Team entwickelte dafür eigene Interaktionsmuster, die auf schnelle Erlernbarkeit ausgelegt sind, und gestaltete den digitalen Shopfloor entsprechend: reduziert, klar gegliedert und auf die Momente hin komponiert, in denen etwas erklärt werden soll.",
        en: "The place of use imposed its own design requirements. An application intended to convince in a customer appointment must be understandable within minutes and must not interrupt the flow of conversation. The team developed dedicated interaction patterns designed for quick learnability and shaped the digital shop floor accordingly: reduced, clearly structured and composed around the moments in which something is to be explained.",
      },
    },
    {
      type: "text",
      text: {
        de: "Die Anwendung entstand als Teamarbeit im NewWorkDesignLab; die Programmierung der Simulationslogik und der Benutzeroberflächen sowie die Gestaltung des digitalen Shopfloors verantwortete Jonas Ludorf als Kernentwickler. Für ZEISS Digital Innovation ist damit ein Werkzeug entstanden, das die eigene Arbeit dort sichtbar macht, wo sie sonst unsichtbar bleibt.",
        en: "The application was created as a team effort at the NewWorkDesignLab; Jonas Ludorf, as core developer, was responsible for programming the simulation logic and user interfaces as well as for designing the digital shop floor. For ZEISS Digital Innovation, the result is a tool that makes its own work visible where it otherwise remains invisible.",
      },
    },
  ],
};
