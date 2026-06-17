"use client";

import Image from "next/image";
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

      <div className="page-brand">
        <span className="page-brand-logo" aria-label="New Work Design Lab">
          <Image
            src="/nwdl_logo.png"
            alt="New Work Design Lab"
            width={244}
            height={244}
            priority
          /> 
        </span>
      </div>

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

      <section className="pillars">
        <div className="pillars-intro">
          <h2 className="pillars-heading">{t.pillarsHeading}</h2>
          <p className="pillars-lead">{t.pillarsIntro}</p>
        </div>
        <div className="pillars-grid">
          {(["blue", "purple", "orange"] as const).map((color, i) => {
            const p = t.pillars[i];
            return (
              <article key={p.title} className={`pillar-card pillar-card--${color}`}>
                <span className="pillar-num" aria-hidden="true">{p.num}</span>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-body">{p.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
