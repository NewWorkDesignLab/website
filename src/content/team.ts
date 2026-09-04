import type { Member } from "./types";

/**
 * Team members — current and former. Add a photo at /team/<name>.jpg
 * (place the file in public/team/). Order within each status group is the
 * order shown on the page.
 *
 * Placeholder entries below — replace names, roles and photos with real data.
 *
 * Optionale Zusatzfelder pro Person (alle weglassbar — leere Felder werden
 * nicht angezeigt). Vorlage siehe Prof. Brade unten:
 *   email:     "vorname.nachname@fh-dresden.eu"        // E-Mail-Icon
 *   specialty: { de: "…", en: "…" }                    // Zeile unter der Rolle
 *   tags:      ["UX", "Unity", "KI"]                    // Themen-Chips
 *   bio:       { de: "1–2 Sätze …", en: "1–2 sentences …" } // aufklappbar
 */
/** Look up a team member by their exact `name`, e.g. for project credits. */
export function getMember(name: string): Member | undefined {
  return team.find((m) => m.name === name);
}

// Current team members are listed.
export const team: Member[] = [
  {
    name: "Prof. Dr. Marius Brade",
    role: { de: "Leitung", en: "Head of Lab" },
    photo: "/team/marius-brade.jpg", // ← Datei liegt unter public/team/marius-brade.jpg
    status: "current",
    linkedin: "https://www.linkedin.com/in/marius-brade/",
    email: "m.brade@fh-dresden.eu",
    specialty: {
      de: "Interaktionsdesign & kognitive Ergonomie",
      en: "Interaction design & cognitive ergonomics",
    },
    tags: ["UX", "Research", "New Work"],
    bio: {
      de: "Als Leiter des New Work Design Lab und Professor für Medieninformatik an der FHD forscht er seit 2010 im Schnittfeld von Interaktionsdesign, Informatik und Kognitionspsychologie, heute mit Schwerpunkt auf User Experience Design und Game-Entwicklung. Seit 2014 treibt ihn das Thema New Work um: wie wir herausfinden, was wir im Leben wirklich wollen und brauchen – und wie sich das gestalten lässt.",
      en: "As head of the New Work Design Lab and professor of media informatics at FHD, he has been researching at the intersection of interaction design, computer science and cognitive psychology since 2010 – today with a focus on user experience design and game development. Since 2014 he has been driven by the topic of New Work: how we find out what we truly want and need in life – and how that can be shaped.",
    },
  },
  {
    name: "Jonas Ludorf",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/jonas-ludorf.webp", // ← Datei liegt unter public/team/jonas-ludorf.webp
    status: "current",
    linkedin: "https://www.linkedin.com/in/jonas-ludorf/",
    email: "j.ludorf@fh-dresden.eu",
    specialty: { de: "XR-Entwickler", en: "XR Developer" },
    tags: ["Unity", "XR", "UX", "Web", "Automation & AI"],
    bio: {
      de: "Er konzipiert und realisiert immersive XR-Erlebnisse für Industriekunden und Forschungsprojekte – von Schulungs- über Marketing- bis zu Recruiting-Anwendungen. Am Lab entwickelt er performante 3D-Anwendungen und räumliche Prototyping-Tools in Unity, mit Fokus auf intuitives Design und den Wissenstransfer durch Extended Reality.",
      en: "He designs and builds immersive XR experiences for industry clients and research projects – from training to marketing and recruiting applications. At the lab he develops performant 3D applications and spatial prototyping tools in Unity, focusing on intuitive design and knowledge transfer through extended reality.",
    },
  },
  {
    name: "Vincent Schiller",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/vincent-schiller.jpg", // ← Datei liegt unter public/team/vincent-schiller.jpg
    status: "current",
    linkedin: "https://www.linkedin.com/in/vincent-schiller/",
    email: "v.schiller@fh-dresden.eu",
    specialty: {
      de: "Unity/XR-Experte, Forscher & Digital Designer",
      en: "Unity/XR expert, researcher & digital designer",
    },
    tags: ["Unity", "XR", "UX", "3D", "Architecture"],
    bio: {
      de: "Master of Arts in Games- & XR-Management (2025) und Experte für Unity und XR. Am Lab gestaltet und entwickelt er interaktive Erlebnisse – mit Schwerpunkt auf User Experience und Mixed-Reality-Anwendungen, u. a. im Projekt Holospace XR. Für seine Bachelorarbeit erhielt er den Dresden Excellence Award; das daraus entstandene Programmierlernspiel wurde als bestes Serious Game mit dem Games Innovation Award Saxony 2021 ausgezeichnet.",
      en: "Master of Arts in Games & XR Management (2025) and an expert in Unity and XR. At the lab he designs and develops interactive experiences – with a focus on user experience and mixed-reality applications, including the Holospace XR project. For his bachelor's thesis he received the Dresden Excellence Award; the resulting programming learning game was named best serious game with the Games Innovation Award Saxony 2021.",
    },
  },
 {
    name: "Nicos Lentzsch",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/nicos-lentzsch.jpg", // ← Datei liegt unter public/team/nicos-lentzsch.jpg
    status: "current",
    linkedin: "https://www.linkedin.com/in/nicos-lentzsch-b99779248/",
    email: "n.lentzsch@fh-dresden.eu",
    specialty: {
      de: "VR-Experte mit Schwerpunkt UI/UX",
      en: "VR expert specialising in UI/UX",
    },
    tags: ["Unity", "XR", "UX", "UI"],
    bio: {
      de: "Nach seinem Abschluss in Medieninformatik & Mediendesign (FHD, 2022) gründete er mit Förderung durch Dresden EXIST das VR-Projekt DreamTime-VR, einen mobilen Meditationsraum. Heute ist er in Vollzeit am Projekt Holospace XR tätig und bringt umfangreiche Unity-Erfahrung ein.",
      en: "After graduating in media informatics & media design (FHD, 2022), he founded the VR project DreamTime-VR, a portable meditation room, with support from the Dresden EXIST programme. Today he works full-time on the Holospace XR project, contributing extensive Unity experience.",
    },
  },
  {
    name: "Christian Schülke",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/christian-schuelke.jpg", // ← Datei liegt unter public/team/christian-schuelke.jpg
    status: "current",
    linkedin: "https://www.linkedin.com/in/christian-sch%C3%BClke-877224339/",
    email: "c.schuelke@fh-dresden.eu",
    specialty: {
      de: "XR-Entwickler & Projektmanagement",
      en: "XR developer & project management",
    },
    tags: ["Unity", "XR", "UX", "Web", "Retro"],
    bio: {
      de: "Medieninformatiker (FHD, 2025) mit Hintergrund in Game- und Softwareentwicklung. Am Lab erforscht er, wie sich Wissenstransfer durch Extended Reality und KI erlebbar machen lässt – mit Fokus auf User Experience, u. a. in den Projekten Holospace XR und Lernen mit KI im Elektrohandwerk.",
      en: "Media informatics graduate (FHD, 2025) with a background in game and software development. At the lab he explores how knowledge transfer can be made tangible through extended reality and AI – with a focus on user experience, including the Holospace XR and AI-assisted learning in the electrical trade projects.",
    },
  },
   {
    name: "Philip Ahlers",
    role: { de: "Studentische Hilfskraft", en: "Student Assistant" },
    photo: "/team/philip-ahlers.jpg", // ← Datei liegt unter public/team/philip-ahlers.jpg
    status: "current",
    studentAssistant: true,
    linkedin: "https://www.linkedin.com/in/philip-ahlers-a915b0341/",
    email: "MID23.PAhlers@stud.fh-dresden.eu",
    specialty: { de: "XR-Entwickler, Web-Apps", en: "XR developer, web apps" },
    tags: ["Unity", "XR", "UX", "Web", "Databases", "Games"]
  },
   {
    name: "Philipp Wittig",
    role: { de: "Studentische Hilfskraft", en: "Student Assistant" },
    photo: "/team/philipp-wittig.jpg",
    status: "current",
    studentAssistant: true,
    email: "MID24.PWittig@stud.fh-dresden.eu",
    specialty: { de: "Unity/XR-Experte", en: "Unity/XR expert" },
    tags: ["Unity", "XR", "UX", "3D", "Games"],
  },
   {
    name: "Susanne Pieter",
    role: { de: "Studentische Hilfskraft", en: "Student Assistant" },
    photo: "/team/susanne-pieter.jpg",
    status: "current",
    studentAssistant: true,
    email: "GD24.SPieter@stud.fh-dresden.eu",
    specialty: { de: "Grafikdesignerin", en: "Graphic Designer" },
    tags: ["Visual Design", "Branding", "UI", "UX"],
  },

  // Placeholder for an alumni member — replace with real data or remove if not needed
  {
    name: "Natalie Lehnart",
    role: { de: "Ehemalige Wissenschaftliche Mitarbeiterin", en: "Former research associate" },
    photo: "/team/former-member/natalie-lehnart.jpg", // ← Datei liegt unter public/team/former-member/natalie-lehnart.jpg
    status: "alumni",
  },
    {
    name: "Otto Maurer",
    role: { de: "Ehemaliger Wissenschaftlicher Mitarbeiter", en: "Former research associate" },
    photo: "/team/former-member/otto-maurer.jpg", // ← Datei liegt unter public/team/former-member/otto-maurer.jpg
    status: "alumni",
  },
    {
    name: "Cora Marie Lenz",
    role: { de: "Ehemalige Studentische Hilfskraft", en: "Former student assistant" },
    photo: "/team/former-member/cora-marie-lenz.jpg", // ← Datei liegt unter public/team/former-member/cora-marie-lenz.jpg
    status: "alumni",
  },
  {
    name: "Friedrich Malz",
    role: { de: "Ehemalige Studentische Hilfskraft", en: "Former student assistant" },
    photo: "/team/former-member/friedrich-malz.jpg", // ← Datei liegt unter public/team/former-member/friedrich-malz.jpg
    status: "alumni",
  },
   {
    name: "Lenny Keil",
    role: { de: "Ehemalige Studentische Hilfskraft", en: "Former student assistant" },
    photo: "/team/former-member/lenny-keil.jpg", // ← Datei liegt unter public/team/former-member/lenny-keil.jpg
    status: "alumni",
  },
   {
    name: "Christian Kretschmer",
    role: { de: "Ehemalige Studentische Hilfskraft", en: "Former student assistant" },
    photo: "/team/former-member/christian-kretschmer.jpg", // ← Datei liegt unter public/team/former-member/christian-kretschmer.jpg
    status: "alumni",
  },
   {
    name: "Pia Lambracht",
    role: { de: "Ehemalige Wissenschaftliche Mitarbeiterin", en: "Former research associate" },
    photo: "/team/former-member/pia-lambracht.jpg", // ← Datei liegt unter public/team/former-member/pia-lambracht.jpg
    status: "alumni",
  },
   {
    name: "Lama Mtit",
    role: { de: "Ehemalige Studentische Hilfskraft", en: "Former student assistant" },
    photo: "/team/former-member/lama-mtit.jpg", // ← Datei liegt unter public/team/former-member/lama-mtit.jpg
    status: "alumni",
  },
   {
    name: "Maximilian Liebscher",
    role: { de: "Ehemaliger Wissenschaftlicher Mitarbeiter", en: "Former research associate" },
    photo: "/team/former-member/maximilian-liebscher.jpg", // ← Datei liegt unter public/team/former-member/maximilian-liebscher.jpg
    status: "alumni",
  },
   {
    name: "Tobias Bohn",
    role: { de: "Ehemaliger Wissenschaftlicher Mitarbeiter", en: "Former research associate" },
    photo: "/team/former-member/tobias-bohn.jpg", // ← Datei liegt unter public/team/former-member/tobias-bohn.jpg
    status: "alumni",
  },
];
