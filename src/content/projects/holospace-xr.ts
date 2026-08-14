import type { Project } from "../types";

export const holospaceXr: Project = {
  slug: "holospace-xr",
  title: "HolospaceXR",
  tagline: {
    de: "Kollaborativer XR-Raum für gemeinsames Arbeiten und Lernen im virtuellen Raum.",
    en: "A collaborative XR space for working and learning together in virtual reality.",
  },
  categories: ["vr", "research"],
  status: "ongoing",
  year: "2025–2026",
  cover: "/projects/holospace-xr/hsxr-1.webp",
  funding: ["eu", "freistaat-sachsen"],
  authors: ["Jonas Ludorf"],
  createdAt: "2026-06-18",
  updatedAt: "2026-06-22",
  details: [
    {
      label: { de: "Förderung", en: "Funding" },
      value: {
        de: "EFRE Validierungsförderung 2021–2027",
        en: "ERDF validation funding 2021–2027",
      },
    },
    {
      label: { de: "Laufzeit", en: "Duration" },
      value: { de: "18 Monate", en: "18 months" },
    },
  ],
  team: ["Prof. Dr. Marius Brade", "Jonas Ludorf", "Nicos Lentzsch", "Christian Schülke", "Natalie Lehnart", "Vincent Schiller", "Cora Marie Lenz"],
  // Otto Maurer ist (noch) nicht im Team gelistet – daher inline nur mit Namen
  // und Platzhalter-Silhouette. Bei Bedarf später nach team.ts verschieben.
  contributors: [{ name: "Otto Maurer", photo: "/team/placeholder-male.svg" }],
  sections: [
    {
      type: "heading",
      text: { de: "Über das Projekt", en: "About the project" },
    },
    {
      type: "text",
      text: {
        de: "Das Validierungsprojekt HoloSpaceXR hat das Ziel, hybride Meetings durch den konsequenten Einsatz von Extended-Reality-Technologien (XR) grundlegend neu zu gestalten. Geplant ist die Entwicklung und Validierung einer immersiven, gleichwertigen Meeting-Erfahrung unabhängig vom Standort der Teilnehmenden. Künftig sollen mittels Virtual- und Augmented-Reality remote Teilnehmende als interaktive Avatare in den physischen Raum projiziert werden, beispielsweise in Form von Hologrammen mit realitätsnaher räumlicher Tonverortung („Spatial Audio“).",
        en: "The validation project HoloSpaceXR aims to fundamentally rethink hybrid meetings through the consistent use of extended reality (XR) technologies. The plan is to develop and validate an immersive, equal meeting experience regardless of where participants are located. In future, remote participants will be projected into the physical space as interactive avatars using virtual and augmented reality — for example as holograms with realistic spatial audio positioning (“spatial audio”).",
      },
    },
    {
      type: "image",
      src: "/projects/holospace-xr/hsxr-ingame-2.webp",
      alt: {
        de: "Realer Meetingraum und derselbe Raum mit holografischen Remote-Teilnehmenden",
        en: "Real meeting room and the same room with holographic remote participants",
      },
    },
    {
      type: "text",
      text: {
        de: "Vor dem Hintergrund, dass hybride Meetings in der Arbeitswelt zum Standard werden und remote Teilnehmende oftmals benachteiligt sind (z. B. durch fehlende Einbindung, reduzierte Interaktion, erschwerte nonverbale Kommunikation), sieht der Projektplan vor, diese Nachteile mit innovativen XR-Lösungen gezielt anzugehen. HoloSpaceXR soll durch die Verknüpfung von immersiven XR-Elementen, realitätsgetreuer Raumdarstellung und neuartigem Interaktionsdesign den Grundstein für „Meetings auf Augenhöhe“ legen, bei denen digitale räumliche Präsenz ermöglicht wird.",
        en: "Against the backdrop of hybrid meetings becoming the standard in the working world — where remote participants are often at a disadvantage (e.g. through lack of involvement, reduced interaction and impaired non-verbal communication) — the project plan sets out to address these disadvantages with innovative XR solutions. By combining immersive XR elements, true-to-life spatial representation and novel interaction design, HoloSpaceXR aims to lay the foundation for “meetings on equal footing” that enable digital spatial presence.",
      },
    },
    {
      type: "heading",
      text: { de: "Technologischer Ausgangspunkt", en: "Technological starting point" },
    },
    {
      type: "text",
      text: {
        de: "Das NewWorkDesignLab hat in einem Vorprojekt „VR-Minilab“ bereits gezeigt, wie reale Räume und virtuelle Avatare synchronisiert dargestellt werden können. Aufbauend auf diesen Erkenntnissen ist im Rahmen von HoloSpaceXR vorgesehen, eigene Anwendungen für VR-Brillen und Multiuser-Lösungen weiterzuentwickeln und einen validierten Prototyp zu schaffen.",
        en: "In a preliminary project, “VR-Minilab”, the NewWorkDesignLab has already shown how real rooms and virtual avatars can be displayed in sync. Building on these findings, HoloSpaceXR plans to further develop its own applications for VR headsets and multi-user solutions and to create a validated prototype.",
      },
    },
    {
      type: "image",
      src: "/projects/holospace-xr/minilab.png",
      alt: {
        de: "Vorprojekt VR-Minilab: physischer und virtueller Raum überlagert",
        en: "Preliminary project VR-Minilab: physical and virtual room overlaid",
      },
      caption: {
        de: "Vorprojekt „VR-Minilab“: Physischer Raum (links) überlagert dargestellt mit deckungsgleicher Geometrie, aber anderem Aussehen im virtuellen Raum (Sicht eines Nutzers mit VR-Brille).",
        en: "Preliminary project “VR-Minilab”: the physical room (left) overlaid with congruent geometry but a different appearance in the virtual room (view of a user wearing a VR headset).",
      },
    },
    {
      type: "heading",
      text: { de: "Validierungsziele", en: "Validation goals" },
    },
    {
      type: "list",
      items: [
        {
          de: "Marktvalidierung durch Unternehmensstudien (NPS-Score-Ziel: 7–10)",
          en: "Market validation through company studies (target NPS score: 7–10)",
        },
        {
          de: "Technische Validierung der HoloSpaceXR-Prototypen",
          en: "Technical validation of the HoloSpaceXR prototypes",
        },
        {
          de: "Entwicklung und Prüfung eines Geschäftsmodells inklusive Finanzplanung",
          en: "Development and assessment of a business model including financial planning",
        },
        {
          de: "Evaluierung des technischen Reifegrads",
          en: "Evaluation of the technical maturity level",
        },
      ],
    },
    {
      type: "heading",
      text: { de: "Innovation & Wirkung", en: "Innovation & impact" },
    },
    {
      type: "text",
      text: {
        de: "Im Unterschied zu bestehenden XR- oder Videokonferenz-Lösungen plant HoloSpaceXR, physische und virtuelle Realitäten in Echtzeit zu verbinden, einschließlich realer Raumabbildung, positionstreuer Avatare und immersiver Klangwelten. Durch diese Weiterentwicklung entsteht ein Innovationspotenzial, das klassische Videokonferenzen übersteigt – sowohl technologisch als auch sozial.",
        en: "Unlike existing XR or video conferencing solutions, HoloSpaceXR plans to connect physical and virtual realities in real time — including real spatial mapping, position-accurate avatars and immersive soundscapes. This advancement creates innovation potential that surpasses classic video conferencing, both technologically and socially.",
      },
    },
    {
      type: "image",
      src: "/projects/holospace-xr/hsxr-ingame-1.webp",
      alt: {
        de: "Zwei Avatare im virtuellen Meetingraum mit visualisierter räumlicher Tonverortung",
        en: "Two avatars in the virtual meeting room with visualised spatial audio positioning",
      },
      caption: {
        de: "Immersive Klangwelt: Die Stimmen der Teilnehmenden werden positionstreu im Raum verortet („Spatial Audio“), sodass Gespräche mit natürlicher Richtung und Distanz wahrgenommen werden.",
        en: "Immersive soundscape: participants’ voices are positioned true to their location in the room (“spatial audio”), so conversations are perceived with natural direction and distance.",
      },
    },
    {
      type: "text",
      text: {
        de: "Im Rahmen des Projektes wird zudem angestrebt, durch die Reduktion von Dienstreisen aktiv zur CO₂-Einsparung und zum Klimaschutz beizutragen. Das weltweite Wachstumspotenzial für XR-Technologie, virtuelle Meetings und E-Learning untermauert die Relevanz des Projekts.",
        en: "The project also aims to actively contribute to CO₂ savings and climate protection by reducing business travel. The worldwide growth potential for XR technology, virtual meetings and e-learning underlines the relevance of the project.",
      },
    },
    {
      type: "text",
      text: {
        de: "HoloSpaceXR verfolgt den Plan, sich auf die Bereiche Corporate Collaboration, Bildung, Training und Eventkommunikation zu konzentrieren und neue Märkte zu erschließen. Die innovative Brückenfunktion zwischen realem Raum und virtueller Präsenz soll Unternehmen künftig einen klaren Wettbewerbsvorteil in einer zunehmend hybriden Arbeitswelt bieten.",
        en: "HoloSpaceXR intends to focus on corporate collaboration, education, training and event communication and to open up new markets. Its innovative bridging function between real space and virtual presence is designed to give companies a clear competitive advantage in an increasingly hybrid working world.",
      },
    },
  ],
};
