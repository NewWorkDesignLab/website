"use client";

import Image from "next/image";
import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "./useLang";
import { Background } from "../components/Background";
import { Sidebar } from "../components/Sidebar";
import { SiteFooter } from "../components/SiteFooter";
import { EventStrip } from "../components/EventStrip";
import { getProject } from "../content/projects";
import type { Project } from "../content/types";

const FEATURED_SLUGS = ["holospace-xr", "lern-mit-ki", "zeiss-factory"];

export default function Home() {
  const { lang } = useLang();
  const t = texts[lang];

  const featured = FEATURED_SLUGS
    .map(getProject)
    .filter((p): p is Project => Boolean(p));

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
          <Link href="/contact" className="cta">
            {t.cta.contact}
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

      <section className="home-projects">
        <div className="pillars-intro">
          <h2 className="pillars-heading">{t.featured.heading}</h2>
          <p className="pillars-lead">{t.featured.intro}</p>
        </div>
        <div className="home-projects-body">
          <div className="home-projects-grid">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="home-project-tile"
              >
                <Image
                  className="home-project-tile-img"
                  src={p.cover}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 860px) 100vw, 22rem"
                />
                <span className="home-project-tile-content">
                  <span className="home-project-tile-title">{p.title}</span>
                </span>
              </Link>
            ))}
          </div>
          <Link href="/projects" className="home-projects-more">
            {t.featured.more}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="home-events">
        <div className="pillars-intro">
          <h2 className="pillars-heading">{t.events.heading}</h2>
          <p className="pillars-lead">{t.events.intro}</p>
        </div>
        <EventStrip />
      </section>

      <SiteFooter />
    </main>
  );
}
