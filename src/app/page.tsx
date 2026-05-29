"use client";

import Link from "next/link";
import texts from "../content/texts.json";
import { FLAGS, useLang, type Lang } from "./useLang";

const DATENSCHUTZ_URL = "https://www.fh-dresden.eu/de/datenschutz/";

export default function Home() {
  const { lang, setLang } = useLang();
  const t = texts[lang];

  const nextLang: Lang = lang === "de" ? "en" : "de";

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

        <button
          type="button"
          className="lang-flag"
          onClick={() => setLang(nextLang)}
          aria-label={`Switch language to ${FLAGS[nextLang].label}`}
          title={FLAGS[nextLang].label}
        >
          <span className="flag" aria-hidden="true">
            {FLAGS[lang].emoji}
          </span>
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

