import type { Member } from "./types";

/**
 * Team members — current and former. Add a photo at /team/<name>.jpg
 * (place the file in public/team/). Order within each status group is the
 * order shown on the page.
 *
 * Placeholder entries below — replace names, roles and photos with real data.
 */
// Current team members are listed.
export const team: Member[] = [
  {
    name: "Prof. Dr. Marius Brade",
    role: { de: "Leitung New Work Design Lab", en: "Head of New Work Design Lab" },
    photo: "/team/marius-brade.jpg", // ← Datei liegt unter public/team/marius-brade.jpg
    status: "current",
    linkedin: "https://www.linkedin.com/in/marius-brade/",
  },
  {
    name: "Jonas Ludorf",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/jonas-ludorf.jpg", // ← Datei liegt unter public/team/jonas-ludorf.jpg
    status: "current",
  },
  {
    name: "Vincent Schiller",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/vincent-schiller.jpg", // ← Datei liegt unter public/team/vincent-schiller.jpg
    status: "current",
  },
 {
    name: "Nicos Lentzsch",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/nicos-lentzsch.jpg", // ← Datei liegt unter public/team/nicos-lentzsch.jpg
    status: "current",
  },
  {
    name: "Christian Schülke",
    role: { de: "Wissenschaftlicher Mitarbeiter", en: "Research Associate" },
    photo: "/team/christian-schuelke.jpg", // ← Datei liegt unter public/team/christian-schuelke.jpg
    status: "current",
  },
   {
    name: "Philip Ahlers",
    role: { de: "Studentische Hilfskraft", en: "Student Assistant" },
    photo: "/team/philip-ahlers.png", // ← Datei liegt unter public/team/philip-ahlers.jpg
    status: "current",
  },
   {
    name: "Philipp Wittig",
    role: { de: "Studentische Hilfskraft", en: "Student Assistant" },
    photo: "/team/philipp-wittig.png", // ← Datei liegt unter public/team/philipp-wittig.jpg
    status: "current",
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
    role: { de: "Ehemalige Wissenschaftliche Mitarbeiterin", en: "Former research associate" },
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
    role: { de: "EhemaligeStudentische Hilfskraft", en: "Former student assistant" },
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
    role: { de: "Ehemaliger Studentische Hilfskraft / Praktikant", en: "Former student assistant" },
    photo: "/team/former-member/friedrich-malz.jpg", // ← Datei liegt unter public/team/former-member/friedrich-malz.jpg
    status: "alumni",
  },
   {
    name: "Lenny Keil",
    role: { de: "Ehemaliger Studentische Hilfskraft / Praktikant", en: "Former student assistant" },
    photo: "/team/former-member/lenny-keil.jpg", // ← Datei liegt unter public/team/former-member/lenny-keil.jpg
    status: "alumni",
  },
   {
    name: "Tobis Bohn",
    role: { de: "Ehemaliger Mitarbeiter", en: "Former team member" },
    photo: "/team/former-member/tobis-bohn.jpg", // ← Datei liegt unter public/team/former-member/tobis-bohn.jpg
    status: "alumni",
  },
];
