"use client";

import { useState } from "react";
import texts from "../content/texts.json";

type Lang = keyof typeof texts;


const FLAGS: Record<Lang, { emoji: string; label: string }> = {
  de: { emoji: "🇩🇪", label: "Deutsch" },
  en: { emoji: "🇬🇧", label: "English" },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
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
    </main>
  );
}

