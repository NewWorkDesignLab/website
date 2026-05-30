"use client";

import Image from "next/image";
import Link from "next/link";
import texts from "../content/texts.json";
import { FLAGS, getLangSwitchLabel, useLang, type Lang } from "./useLang";

const DATENSCHUTZ_URL = "https://www.fh-dresden.eu/de/datenschutz/";
const LINKEDIN_URL = "https://www.linkedin.com/company/new-work-design-lab-fhd";

export default function Home() {
  const { lang, setLang } = useLang();
  const t = texts[lang];

  const nextLang: Lang = lang === "de" ? "en" : "de";
  const switchLabel = getLangSwitchLabel(lang, nextLang);

  return (
    <main className="placeholder">
      <div className="bg-visual" aria-hidden="true">
        <span className="ring" />
        <span className="blob purple" />
        <span className="blob blue" />
        <span className="blob orange" />
        <span className="blob green" />
      </div>

      <header className="topbar">
        <a
          className="linkedin"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>

        <button
          type="button"
          className="lang-flag"
          onClick={() => setLang(nextLang)}
          aria-label={switchLabel}
          title={switchLabel}
        >
          <Image
            className="flag"
            src={FLAGS[nextLang].src}
            alt=""
            width={44}
            height={44}
          />
        </button>
      </header>

      <section className="content">
        <h1>
          {t.titleLead} <span className="accent">{t.titleAccent}</span>{" "}
          {t.titleTail}
        </h1>
        <p className="lead">
          {t.descBefore}
          <strong>{t.descBrand}</strong>
          {t.descLine1}
          <br />
          <strong>{t.descLine2}</strong>
        </p>
      </section>

      <footer className="footer">
        <Link href="/legal-note">{t.footerImpressum}</Link>
        <span className="footer-sep" aria-hidden="true">
          ·
        </span>
        <a href={DATENSCHUTZ_URL} target="_blank" rel="noopener noreferrer">
          {t.footerDatenschutz}
        </a>
      </footer>
    </main>
  );
}
