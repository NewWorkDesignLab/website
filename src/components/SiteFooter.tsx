"use client";

import Image from "next/image";
import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "../app/useLang";
import { FHD_URL, LINKEDIN_URL, MAPS_URL } from "../content/site";

const DATENSCHUTZ_URL = "https://www.fh-dresden.eu/de/datenschutz/";

const NAV: { key: "home" | "projects" | "team" | "contact"; href: string }[] = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "team", href: "/team" },
  { key: "contact", href: "/contact" },
];

export function SiteFooter() {
  const { lang } = useLang();
  const t = texts[lang];
  const f = t.footer;
  const c = t.homeContact;

  // Address lines without the leading FHD-affiliation line (that is already
  // surfaced in the brand column, so we keep the contact column compact).
  const addressLines = c.orgLines.slice(1);
  const phone = c.phones[0];

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Desktop: the <main class="placeholder"> is the scroll container
    // (html/body have overflow:hidden). Mobile: .placeholder has
    // overflow:visible and the window scrolls instead. Scroll both so the
    // button works regardless of which one is actually scrollable.
    e.currentTarget
      .closest(".placeholder")
      ?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderBackToTop = (variant: string) => (
    <button
      type="button"
      className={`footer-top ${variant}`}
      onClick={scrollToTop}
      aria-label={f.backToTop}
      title={f.backToTop}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{f.backToTop}</span>
    </button>
  );

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col footer-brand">
          <Image
            src="/nwdl_logo.png"
            alt="NewWorkDesignLab"
            width={56}
            height={56}
            className="footer-logo"
          />
          <p className="footer-tagline">{f.tagline}</p>
          <a
            className="footer-fhd"
            href={FHD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={f.fhdLabel}
          >
            <Image
              src="/fhd_logo.webp"
              alt={f.fhdLabel}
              width={2531}
              height={953}
              className="footer-fhd-logo"
            />
          </a>
        </div>

        <nav className="footer-col" aria-label={f.navHeading}>
          <h2 className="footer-heading">{f.navHeading}</h2>
          <ul className="footer-nav">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link href={item.href}>{t.nav[item.key]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">{f.contactHeading}</h2>
          <address className="footer-contact">
            {addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              {f.mapsLabel}
            </a>
            <a href={`mailto:${c.email}`}>{c.email}</a>
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
          </address>
          <div className="footer-social-row">
            <a
              className="footer-social"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            {renderBackToTop("footer-top--social")}
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <span className="footer-copy">
          © {new Date().getFullYear()} {f.copyright}
        </span>
        <span className="footer-legal">
          <Link href="/legal-note">{t.footerImpressum}</Link>
          <span className="footer-sep" aria-hidden="true">
            ·
          </span>
          <a href={DATENSCHUTZ_URL} target="_blank" rel="noopener noreferrer">
            {t.footerDatenschutz}
          </a>
        </span>
        {renderBackToTop("footer-top--bar")}
      </div>
    </footer>
  );
}
