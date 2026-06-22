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
// Current team members are listed.
export const team: Member[] = [
  {
    name: "Prof. Dr. Marius Brade",
    role: { de: "Leitung NewWorkDesignLab", en: "Head of NewWorkDesignLab" },
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
      de: "Leitet das NewWorkDesignLab und forscht im Schnittgebiet von Interaktionsdesign, Informatik und Kognitionspsychologie.",
      en: "Heads the NewWorkDesignLab and researches at the intersection of interaction design, computer science and cognitive psychology.",
    },
  },
  {
    name: "Jonas Ludorf",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/jonas-ludorf.jpg", // ← Datei liegt unter public/team/jonas-ludorf.jpg
    status: "current",
    linkedin: "https://www.linkedin.com/in/jonas-ludorf/",
    email: "j.ludorf@fh-dresden.eu",
    specialty: { de: "XR-Entwickler", en: "XR Developer" },
    tags: ["Unity", "XR", "UX", "Web", "Automation"],
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
    photo: "/team/placeholder.svg", // ← Datei liegt unter public/team/philip-ahlers.jpg
    status: "current",
    email: "MID23.PAhlers@stud.fh-dresden.eu",
    specialty: { de: "XR-Entwickler, Web-Apps", en: "XR developer, web apps" },
    tags: ["Unity", "XR", "UX", "Web", "Databases"],
  },
   {
    name: "Philipp Wittig",
    role: { de: "Studentische Hilfskraft", en: "Student Assistant" },
    photo: "/team/placeholder.svg", // ← Datei liegt unter public/team/philipp-wittig.jpg
    status: "current",
    email: "MID24.PWittig@stud.fh-dresden.eu",
    specialty: { de: "Unity/XR-Experte", en: "Unity/XR expert" },
    tags: ["Unity", "XR", "UX", "3D", "Games"],
  },

  // Placeholder for an alumni member — replace with real data or remove if not needed
  {
    name: "Natalie Lehnart",
    role: { de: "Ehemalige Wissenschaftliche Mitarbeiterin", en: "Former research associate" },
    photo: "/team/former-member/natalie-lehnart.jpg", // ← Datei liegt unter public/team/former-member/natalie-lehnart.jpg
    status: "alumni",
  },
    {
    name: "Cora Marie Lenz",
    role: { de: "Ehemalige Studentische Hilfskraft", en: "Former student assistant" },
    photo: "/team/former-member/cora-marie-lenz.jpg", // ← Datei liegt unter public/team/former-member/cora-marie-lenz.jpg
    status: "alumni",
  },
   {
    name: "Pia Lambracht",
    role: { de: "Ehemalige Wissenschaftliche Mitarbeiterin", en: "Former team member" },
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
    name: "Christian Kretschmer",
    role: { de: "Ehemalige Studentische Hilfskraft / Praktikant", en: "Former student assistant" },
    photo: "/team/former-member/christian-kretschmer.jpg", // ← Datei liegt unter public/team/former-member/christian-kretschmer.jpg
    status: "alumni",
  },
   {
    name: "Maximilian Liebscher",
    role: { de: "Ehemaliger Wissenschaftlicher Mitarbeiter", en: "Former research associate" },
    photo: "/team/former-member/maximilian-liebscher.jpg", // ← Datei liegt unter public/team/former-member/maximilian-liebscher.jpg
    status: "alumni",
  },
   {
    name: "Friedrich Malz",
    role: { de: "Ehemalige Studentische Hilfskraft / Praktikant", en: "Former student assistant" },
    photo: "/team/former-member/friedrich-malz.jpg", // ← Datei liegt unter public/team/former-member/friedrich-malz.jpg
    status: "alumni",
  },
   {
    name: "Lenny Keil",
    role: { de: "Ehemalige Studentische Hilfskraft / Praktikant", en: "Former student assistant" },
    photo: "/team/former-member/lenny-keil.jpg", // ← Datei liegt unter public/team/former-member/lenny-keil.jpg
    status: "alumni",
  },
   {
    name: "Tobias Bohn",
    role: { de: "Ehemaliger Mitarbeiter", en: "Former team member" },
    photo: "/team/former-member/tobias-bohn.jpg", // ← Datei liegt unter public/team/former-member/tobis-bohn.jpg
    status: "alumni",
  },
];
