"use client";

import Link from "next/link";
import texts from "../../content/texts.json";
import { FLAGS, useLang, type Lang } from "../useLang";

export default function ImpressumPage() {
  const { lang, setLang } = useLang();
  const t = texts[lang];
  const im = t.impressum;

  const nextLang: Lang = lang === "de" ? "en" : "de";

  return (
    <main className="placeholder placeholder--page">
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
          <img
            className="flag"
            src={FLAGS[nextLang].src}
            alt={FLAGS[nextLang].label}
            width={44}
            height={44}
          />
        </button>
      </header>

      <section className="content content--legal">
        <h1>{im.title}</h1>

        <div className="legal-block">
          <p>{im.intro}</p>
          <p>
            <a
              href="https://www.fh-dresden.eu/de/impressum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.fh-dresden.eu/de/impressum/
            </a>
            <br />
            {im.company}
            <br />
            {im.street}
            <br />
            {im.city}
          </p>
          <p>
            {im.register}
            <br />
            {im.court}
            <br />
            {im.vat}
          </p>
        </div>

        <div className="legal-block">
          <h2>{im.representedByTitle}</h2>
          <p>{im.representedBy}</p>
        </div>

        <div className="legal-block">
          <h2>{im.contactTitle}</h2>
          <p>
            {im.phone}
            <br />
            {im.fax}
            <br />
            {im.email}
          </p>
        </div>

        <div className="legal-block">
          <h2>{im.editorTitle}</h2>
          <p>{im.editor}</p>
        </div>

        <Link className="back-link" href="/">
          ← {im.back}
        </Link>
      </section>
    </main>
  );
}

