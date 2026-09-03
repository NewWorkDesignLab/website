import type { EventItem } from "./types";

/**
 * Events & Messen, auf denen das Lab vor Ort war. Pro Eintrag ein Foto unter
 * public/events/<datei> ablegen und `image` darauf zeigen lassen. Reihenfolge
 * hier = Reihenfolge im Streifen auf der Startseite.
 */
export const events: EventItem[] = [
  {
    image: "/events/ki-in-der-softwareentwicklung.jpg",
    date: "19.08.2026",
    title: {
      de: "NWDL bei 'Spotlight on: KI in der Softwareentwicklung'",
      en: "NWDL at 'Spotlight on: AI in Software Development'",
    },
    blurb: {
      de: "Prof. Dr.-Ing. Marius Brade und Jonas Ludorf haben sich in Workshops zu den Themen Mensch, Organisation und Technik im Zusammenhang mit der Implementierung von KI in die Welt der Softwareentwicklung ausgetauscht.",
      en: "Prof. Dr.-Ing. Marius Brade and Jonas Ludorf participated in workshops on the topics of people, organization, and technology in relation to the implementation of AI in the world of software development.",
    },
  },
  {
    image: "/events/innovationskonferzenz-17-06-2026_.webp",
    date: "17.06.2026",
    title: {
      de: "NWDL bei der Sächsischen Innovationskonferenz von futureSAX",
      en: "NWDL at the Saxon Innovation Conference by futureSAX",
    },
    blurb: {
      de: "Mit Prof. Dr.-Ing. Marius Brade, Jonas Ludorf und Nicos Lentzsch sind wir vor Ort und betreiben den Stand rund um das Validierungsprojekt HolospaceXR.",
      en: "Together with Prof. Dr.-Ing. Marius Brade, Jonas Ludorf and Nicos Lentzsch we are on site, running the booth around the validation project HolospaceXR.",
    },
  },
  {
    image: "/events/decompiled-12-03-2026_.webp",
    date: "12.03.2026",
    title: {
      de: "NWDL bei der Decompiled in Dresden",
      en: "NWDL at Decompiled in Dresden",
    },
    blurb: {
      de: "Mitten in der Dresdner Tech- und Kreativszene zeigen wir eine interaktive „Draw in 3D“-Demo und machen immersive 3D-Interaktion direkt zum Anfassen erlebbar.",
      en: "In the middle of the Dresden tech and creative scene we present an interactive “Draw in 3D” demo, making immersive 3D interaction tangible and hands-on.",
    },
  },
  {
    image: "/events/moxy-24-02-2026_.webp",
    date: "24.02.2026",
    title: {
      de: "NWDL beim Silicon Saxony x Moxy Dresden Afterwork",
      en: "NWDL at the Silicon Saxony x Moxy Dresden Afterwork",
    },
    blurb: {
      de: "Beim Netzwerktreffen von Silicon Saxony sind wir mit dabei und lassen die Gäste HolospaceXR direkt per VR-Brille erleben.",
      en: "At the Silicon Saxony networking meet-up we are on site and let guests experience HolospaceXR hands-on via VR headset.",
    },
  },
  {
    image: "/events/brainsonsilicon-22-to-23-10-2026_.webp",
    date: "22.–23.10.2025",
    title: {
      de: "NWDL bei der Brains on Silicon in Dresden",
      en: "NWDL at Brains on Silicon in Dresden",
    },
    blurb: {
      de: "Auf der Silicon-Saxony-Konferenz Brains on Silicon vernetzen wir uns mit der Mikroelektronik- und Digitalbranche und bringen unsere Sicht auf immersive Anwendungen und kognitive Ergonomie ein.",
      en: "At Silicon Saxony's Brains on Silicon conference we connect with the microelectronics and digital industry and contribute our perspective on immersive applications and cognitive ergonomics.",
    },
  },
];
