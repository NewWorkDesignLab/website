"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import texts from "../content/texts.json";
import { FLAGS, getLangSwitchLabel, useLang, type Lang } from "../app/useLang";

const LINKEDIN_URL = "https://www.linkedin.com/company/new-work-design-lab-fhd";

type NavKey = "home" | "projects" | "team" | "contact";

const NAV: { key: NavKey; href: string; icon: ReactNode }[] = [
  {
    key: "home",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10v9.5h13V10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "projects",
    href: "/projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
      </svg>
    ),
  },
  {
    key: "team",
    href: "/team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" strokeLinecap="round" />
        <path d="M16 5.5a3 3 0 0 1 0 6M17 14.5c2.4.4 4 2.3 4 4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "contact",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="2.2" />
        <path d="m4.5 7 7.5 5.5L19.5 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function isActive(pathname: string, href: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const t = texts[lang];

  const nextLang: Lang = lang === "de" ? "en" : "de";
  const switchLabel = getLangSwitchLabel(lang, nextLang);

  return (
    <nav className="sidebar" aria-label={lang === "de" ? "Hauptnavigation" : "Main navigation"}>
      <ul className="sidebar-list">
        {NAV.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className={`sidebar-item${isActive(pathname, item.href) ? " is-active" : ""}`}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{t.nav[item.key]}</span>
            </Link>
          </li>
        ))}
      </ul>

      <span className="sidebar-divider" aria-hidden="true" />

      <div className="sidebar-extra">
        <button
          type="button"
          className="sidebar-item"
          onClick={() => setLang(nextLang)}
          aria-label={switchLabel}
          title={switchLabel}
        >
          <span className="sidebar-icon sidebar-icon--flag">
            <Image src={FLAGS[nextLang].src} alt="" width={28} height={28} />
          </span>
          <span className="sidebar-label">{FLAGS[nextLang].label}</span>
        </button>

        <a
          className="sidebar-item"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span className="sidebar-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </span>
          <span className="sidebar-label">LinkedIn</span>
        </a>
      </div>
    </nav>
  );
}
