"use client";

import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "../app/useLang";

const DATENSCHUTZ_URL = "https://www.fh-dresden.eu/de/datenschutz/";

export function SiteFooter() {
  const { lang } = useLang();
  const t = texts[lang];

  return (
    <footer className="footer">
      <Link href="/legal-note">{t.footerImpressum}</Link>
      <span className="footer-sep" aria-hidden="true">
        ·
      </span>
      <a href={DATENSCHUTZ_URL} target="_blank" rel="noopener noreferrer">
        {t.footerDatenschutz}
      </a>
      <span className="footer-sep" aria-hidden="true">
        ·
      </span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
