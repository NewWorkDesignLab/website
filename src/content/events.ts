import type { EventItem } from "./types";

/**
 * Events & Messen, auf denen das Lab vor Ort war. Pro Eintrag ein Foto unter
 * public/events/<datei> ablegen und `image` darauf zeigen lassen. Reihenfolge
 * hier = Reihenfolge im Streifen auf der Startseite.
 *
 * Bis echte Fotos vorliegen, zeigen die Einträge auf das Platzhalterbild
 * (/events/placeholder.svg).
 */
export const events: EventItem[] = [
  {
    image: "/events/placeholder.svg", // ← echtes Foto: /events/futuresax.jpg
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
    image: "/events/placeholder.svg",
    title: {
      de: "Veranstaltung folgt",
      en: "Event coming soon",
    },
    blurb: {
      de: "Hier erzählen wir bald von einer weiteren Veranstaltung, bei der wir dabei waren.",
      en: "We'll soon share another event where we were on site.",
    },
  },
  {
    image: "/events/placeholder.svg",
    title: {
      de: "Veranstaltung folgt",
      en: "Event coming soon",
    },
    blurb: {
      de: "Hier erzählen wir bald von einer weiteren Veranstaltung, bei der wir dabei waren.",
      en: "We'll soon share another event where we were on site.",
    },
  },
];
