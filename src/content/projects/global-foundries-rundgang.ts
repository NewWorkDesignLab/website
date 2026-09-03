import type { Project } from "../types";

export const globalFoundriesRundgang: Project = {
  slug: "global-foundries-360-grad-rundgang",
  title: "Global Foundries 360 Grad Rundgang",
  tagline: {
    de: "Ein virtueller Betriebsrundgang durch die Chipfabrik – dort, wo reale Führungen nicht möglich sind.",
    en: "A virtual factory tour through the chip plant – where real guided tours are not possible.",
  },
  categories: ["vr"],
  status: "completed",
  year: "2023–2025",
  cover: "/projects/global-foundries-rundgang/gf.webp",
  funding: [],
   details: [
    {
      label: { de: "Projektzeitraum", en: "Project period" },
      value: { de: "11/2023 – 04/2026", en: "10/2024 – 09/2025" },
    },
  ],
  awards: [
    {
      de: "Nominiert für den Deutschen Fachkräftepreis 2025",
      en: "Nominated for the German Skilled Labour Award 2025",
    },
  ],
  team: ["Prof. Dr. Marius Brade", "Nicos Lentzsch", "Jonas Ludorf"],
  partners: [{ key: "global-foundries", kind: "client" }],
  sections: [
    {
      type: "text",
      text: {
        de: "Eine Chipfabrik lässt sich nicht einfach besichtigen. Die Fertigung von Halbleitern findet in Reinräumen statt, deren Zugang streng reglementiert ist – und selbst wer hineindürfte, sähe vor allem geschlossene Maschinengehäuse. Für das Personalmarketing von GlobalFoundries in Dresden bedeutete das ein grundlegendes Problem: Wie vermittelt man jungen Menschen einen Eindruck von einem Arbeitsplatz, den sie nicht betreten können?",
        en: "A chip factory cannot simply be visited. Semiconductor manufacturing takes place in cleanrooms with strictly regulated access – and even those allowed inside would mostly see closed machine housings. For the employer branding team at GlobalFoundries in Dresden, this posed a fundamental problem: how do you give young people an impression of a workplace they cannot enter?",
      },
    },
    {
      type: "quote",
      text: {
        de: "Dass wir in Reinräumen produzieren und da nicht so einfach Führungen anbieten können, war sicher der wichtigste Grund.",
        en: "The fact that we produce in cleanrooms and cannot simply offer guided tours there was certainly the most important reason.",
      },
      author: "Steve Federow, Personalmarketing GlobalFoundries",
    },
    {
      type: "text",
      text: {
        de: "Gemeinsam mit dem NewWorkDesignLab der Fachhochschule Dresden entstand daraus ein virtueller Betriebsrundgang. Die Anwendung bildet den Weg in die Produktion so nach, wie ihn auch Mitarbeitende gehen: Zunächst durchlaufen die Nutzenden eine virtuelle Umkleide und legen die Reinraumkleidung an, erst danach öffnet sich der Zugang zu den Fertigungsbereichen. An den Rundgang schließt sich ein verdichtetes Video der realen Produktion an.",
        en: "Together with the NewWorkDesignLab at Fachhochschule Dresden, this gave rise to a virtual factory tour. The application recreates the path into production the way employees take it: users first pass through a virtual changing room and put on cleanroom clothing, only then does access to the manufacturing areas open up. The tour is followed by a condensed video of the real production.",
      },
    },
    {
      type: "heading",
      text: { de: "Ortsunabhängig statt ortsgebunden", en: "Location-independent instead of site-bound" },
    },
    {
      type: "text",
      text: {
        de: "Der entscheidende Vorteil der VR-Lösung liegt in ihrer Mobilität. Die Brillen kommen auf Berufsmessen, bei auswärtigen Terminen und im Fabmobil der Oberlausitz zum Einsatz – der Rundgang kommt also zu den Interessierten, statt sie an den Standort zu binden. Gefahrlos, ortsunabhängig und ohne den laufenden Betrieb zu stören.",
        en: "The decisive advantage of the VR solution lies in its mobility. The headsets are used at career fairs, at external appointments and in the Fabmobil of Upper Lusatia – the tour comes to those interested rather than tying them to the site. Safely, independently of location and without disrupting ongoing operations.",
      },
    },
    {
      type: "text",
      text: {
        de: "Ergänzt wird der Rundgang um spielerische Stationen, an denen die Besuchenden Schritte des Halbleiterprozesses selbst ausführen: Am Diffusionsofen stellen sie Temperatur und Brenndauer ein, an einer weiteren Station belichten sie einen Wafer. Was zuvor abstrakt blieb, wird dadurch nachvollziehbar – und bleibt nach Einschätzung des Unternehmens deutlich besser im Gedächtnis als eine erklärte Führung.",
        en: "The tour is complemented by playful stations at which visitors carry out steps of the semiconductor process themselves: at the diffusion furnace they set temperature and firing time, at another station they expose a wafer. What previously remained abstract becomes comprehensible – and, in the company's assessment, sticks in the memory far better than an explained guided tour.",
      },
    },
    {
      type: "heading",
      text: { de: "Resonanz und Weiterentwicklung", en: "Response and further development" },
    },
    {
      type: "text",
      text: {
        de: "Das Projekt wurde für den Deutschen Fachkräftepreis 2025 nominiert. Aktuell wird das Sprachangebot der Anwendung ausgebaut, um sie auch in der internationalen Personalgewinnung einsetzen zu können. Über den virtuellen Betriebsrundgang berichtete unter anderem das Arbeitgebermagazin „faktor A“ der Bundesagentur für Arbeit.",
        en: "The project was nominated for the German Skilled Labour Award 2025. The range of languages in the application is currently being expanded so that it can also be used in international recruiting. The virtual factory tour was covered, among others, by “faktor A”, the employer magazine of the German Federal Employment Agency.",
      },
    },
    {
      type: "text",
      text: {
        de: "Für die Fachhochschule Dresden zeigt das Vorhaben, wie aus einer konkreten betrieblichen Einschränkung ein wirksames Instrument der Berufsorientierung werden kann. Der Rundgang bildet zugleich die Grundlage für den vertiefenden VR-Escape-Room, der gemeinsam mit GlobalFoundries im Anschluss entstand.",
        en: "For Fachhochschule Dresden, the project shows how a concrete operational constraint can become an effective instrument of career orientation. At the same time, the tour forms the basis for the in-depth VR escape room subsequently developed together with GlobalFoundries.",
      },
    },
  ],
};
