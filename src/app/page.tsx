"use client";

import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "./useLang";
import { Background } from "../components/Background";
import { Sidebar } from "../components/Sidebar";
import { SiteFooter } from "../components/SiteFooter";

export default function Home() {
  const { lang } = useLang();
  const t = texts[lang];

  return (
    <main className="placeholder">
      <Background />
      <Sidebar />

      <section className="content">
        <h1>
          {t.titleLead} <span className="accent">{t.titleAccent}</span>{" "}
          {t.titleTail}
        </h1>
        <div className="content-group">
          <p className="lead">
            {t.descBefore}
            <strong>{t.descBrand}</strong>
            {t.descLine1}
            <br />
            {t.descLine2}
          </p>
          <Link href="/projects" className="cta">
            {t.cta.projects}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
