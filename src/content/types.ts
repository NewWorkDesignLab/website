export type Localized = { de: string; en: string };

export type ProjectCategory = "vr" | "ar" | "research" | "ai";
export type ProjectStatus = "ongoing" | "completed";
export type FundingKey = "freistaat-sachsen" | "efre" | "esf" | "eu";

export type GalleryImage = {
  src: string;
  alt?: Localized;
  caption?: Localized;
};

export type Block =
  | { type: "heading"; text: Localized }
  | { type: "text"; text: Localized }
  | { type: "image"; src: string; alt?: Localized; caption?: Localized }
  | { type: "gallery"; images: GalleryImage[] }
  | { type: "video"; youtube: string; title?: Localized }
  | { type: "quote"; text: Localized; author?: string };

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
  sections: Block[];
}

export interface EventItem {
  /** /events/<slug>.jpg (Datei in public/events/) */
  image: string;
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
  linkedin?: string;
}
