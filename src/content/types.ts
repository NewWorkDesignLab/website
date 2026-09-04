export type Localized = { de: string; en: string };

export type ProjectCategory = "vr" | "ar" | "research" | "ai";
export type ProjectStatus = "ongoing" | "completed";
export type FundingKey = "freistaat-sachsen" | "efre" | "esf" | "eu" | "esf-eu";

export type GalleryImage = {
  src: string;
  alt?: Localized;
  caption?: Localized;
};

export type Block =
  | { type: "heading"; text: Localized }
  | { type: "text"; text: Localized }
  | { type: "image"; src: string; alt?: Localized; caption?: Localized }
  | { type: "list"; items: Localized[] }
  | { type: "gallery"; images: GalleryImage[] }
  | { type: "video"; youtube: string; title?: Localized }
  | { type: "quote"; text: Localized; author?: string };

/** External collaborator not listed in team.ts (e.g. a partner's developer). */
export type Contributor = {
  name: string;
  role?: Localized;
  /** image path, e.g. /team/<name>.jpg */
  photo: string;
};

export type PartnerKind = "partner" | "client";

/** Reference into the partners registry (src/content/partners.ts). */
export type PartnerRef = {
  /** key in the partners registry */
  key: string;
  /** relationship in this project — defaults to "partner" */
  kind?: PartnerKind;
};

export interface Project {
  /** URL segment, also the folder name under public/projects/ */
  slug: string;
  /** Project name — usually a brand, not translated */
  title: string;
  /** One-liner for the card and the detail hero */
  tagline: Localized;
  categories: ProjectCategory[];
  status: ProjectStatus;
  /** e.g. "2022–2024" */
  year?: string;
  /** /projects/<slug>/cover.jpg */
  cover: string;
  funding: FundingKey[];
  /** optional external link (e.g. partner site) */
  externalUrl?: string;
  /** author name(s) of the article — shown in the byline */
  authors?: string[];
  /** ISO date the article was created, e.g. "2024-03-15" */
  createdAt?: string;
  /** ISO date the article was last updated, e.g. "2025-06-20" */
  updatedAt?: string;
  /** distinctions shown as a strip in the hero, e.g. "Sächsischer Digitalpreis 2022" */
  awards?: Localized[];
  /** key facts (funding, client, duration, …) shown as a labelled block above
   *  the project team */
  details?: { label: Localized; value: Localized }[];
  /** names referencing entries in team.ts whose photo/name are reused */
  team?: string[];
  /** external collaborators not in the team list */
  contributors?: Contributor[];
  /** project partners / clients */
  partners?: PartnerRef[];
  sections: Block[];
}

export interface EventItem {
  /** /events/<slug>.jpg (Datei in public/events/) */
  image: string;
  /** Datum bzw. Zeitraum, oben rechts auf der Karte (z. B. "17.06.2026"
   *  oder "22.–23.10.2026") */
  date: string;
  /** Infozeile, immer sichtbar */
  title: Localized;
  /** kurzer Zusatztext, beim Hover sichtbar */
  blurb: Localized;
}

export interface Member {
  name: string;
  role: Localized;
  /** /team/<name>.jpg */
  photo: string;
  status: "current" | "alumni";
  /** Studentische Hilfskraft — auf /team regulär gelistet, aber nicht im
   *  Team-Teaser der Startseite (dort nur die Mitarbeitenden). */
  studentAssistant?: boolean;
  linkedin?: string;
  /** mailto-Adresse, z. B. "j.ludorf@fh-dresden.eu" */
  email?: string;
  /** eine Zeile unter der Rolle, z. B. "Interaktionsdesign & Eye-Tracking" */
  specialty?: Localized;
  /** Themen-Chips, z. B. ["UX", "Unity", "KI"] */
  tags?: string[];
  /** 1–2 Sätze, auf der Karte aufklappbar */
  bio?: Localized;
}
