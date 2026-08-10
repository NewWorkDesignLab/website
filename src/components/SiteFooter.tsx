"use client";

import Image from "next/image";
import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "../app/useLang";
import {
  DISCORD_URL,
  FHD_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  MAPS_URL,
} from "../content/site";

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
            <a
              className="footer-social"
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
            <a
              className="footer-social"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
