import type { Metadata } from "next";
import texts from "./texts.json";
import { FHD_URL, LINKEDIN_URL } from "./site";

export const SITE_URL = "https://newworkdesignlab.org";
export const SITE_NAME = "NewWorkDesignLab";

/**
 * Site-wide social card: public/nwdl_og.png letterboxed onto the 1200×630
 * canvas the platforms expect (the square original is kept alongside it).
 */
export const OG_IMAGE = "/og.png";
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

/**
 * The language toggle is client-side only (localStorage, see app/useLang.ts) —
 * there is exactly one URL per page and the prerendered HTML is always German.
 * Crawlers therefore only ever see the `de` strings; the `en` copies live in
 * texts.json so both locales stay in one place and an URL-based i18n setup can
 * pick them up later without rewriting the metadata.
 */
export const seo = texts.de.seo;

/**
 * next.config.js sets `trailingSlash: true`, so /projects redirects to
 * /projects/. Canonicals must point at the URL that is actually served —
 * a canonical that 308s is a canonical Google has to resolve, or ignore.
 */
export function canonicalUrl(path: string): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

/** SVG is not rendered by social crawlers — fall back to the site card. */
export function socialImage(path?: string): string {
  if (!path || path.endsWith(".svg")) return OG_IMAGE;
  return path;
}

type PageMetaInput = {
  /** Page title without the brand suffix. Omit on the homepage. */
  title?: string;
  description: string;
  /** Route path, e.g. "/projects" or "/" */
  path: string;
  /** Absolute-from-root image path; defaults to the site card. */
  image?: string;
  noindex?: boolean;
};

/**
 * Builds a complete Metadata object for one route. Everything is set
 * explicitly rather than relying on inheritance from the root layout —
 * Next merges `alternates`/`openGraph` per top-level key, so a child that
 * only sets `title` silently keeps the root's canonical and og:title.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  noindex = false,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);
  const fullTitle = title ? `${title} · ${SITE_NAME}` : seo.homeTitle;
  const imageUrl = absoluteUrl(socialImage(image));

  return {
    // `absolute` so the resolved title is identical to the og:title we build
    // below; `template` is only a safety net for future segments that set a
    // bare string title. A parent that sets a plain string title otherwise
    // swallows the template and leaves children unbranded.
    title: { absolute: fullTitle, template: `%s · ${SITE_NAME}` },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url,
      locale: "de_DE",
      alternateLocale: ["en_US"],
      images: [
        {
          url: imageUrl,
          width: OG_WIDTH,
          height: OG_HEIGHT,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Organization + WebSite graph for the homepage only. This is what lets Google
 * tie the brand query "newworkdesignlab" to this domain as an entity, so keep
 * every value real — `sameAs` must only list profiles the lab actually owns.
 */
export function organizationJsonLd() {
  const c = texts.de.homeContact;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ResearchOrganization"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: [
          "New Work Design Lab",
          "New Work Design Lab FHD",
          "NWDL",
        ],
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: absoluteUrl("/nwdl_logo.png"),
          width: 1024,
          height: 1024,
          caption: SITE_NAME,
        },
        image: { "@id": `${SITE_URL}/#logo` },
        description: seo.homeDescription,
        email: c.email,
        telephone: c.phones[0],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Güntzstr. 1",
          postalCode: "01069",
          addressLocality: "Dresden",
          addressRegion: "Sachsen",
          addressCountry: "DE",
        },
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "Fachhochschule Dresden (FHD)",
          url: FHD_URL,
        },
        employee: {
          "@type": "Person",
          name: texts.de.contactPage.person,
          jobTitle: "Professor für Medieninformatik",
          description: texts.de.contactPage.role,
        },
        knowsAbout: [
          "User Experience Design",
          "Gamification",
          "Kognitive Ergonomie",
          "Virtual Reality",
          "Augmented Reality",
          "Künstliche Intelligenz",
          "Digital Business",
          "New Work",
        ],
        sameAs: [LINKEDIN_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        alternateName: "New Work Design Lab",
        description: seo.homeDescription,
        inLanguage: ["de-DE", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
