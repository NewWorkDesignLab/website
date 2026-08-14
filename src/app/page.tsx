"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "./useLang";
import { Background } from "../components/Background";
import { JsonLd } from "../components/JsonLd";
import { organizationJsonLd } from "../content/seo";
import { Sidebar } from "../components/Sidebar";
import { SiteFooter } from "../components/SiteFooter";
import { EventStrip } from "../components/EventStrip";
import { TeamTeaser } from "../components/TeamTeaser";
import { ContactBlock } from "../components/ContactBlock";
import { getProject } from "../content/projects";
import type { Project } from "../content/types";

const FEATURED_SLUGS = ["holospace-xr", "lern-mit-ki", "zeiss-factory"];

/**
 * Soft decorative background shape per pillar (replaces the old 01/02/03
 * watermark). Filled flat with currentColor; the pillar colour and the overall
 * subtlety (opacity) are set in the stylesheet.
 */
const PILLAR_SHAPES: Record<"blue" | "purple" | "orange", ReactNode> = {
  // Forschung — soft sphere with an orbiting ring (inquiry, focus, depth)
  blue: (
    <svg viewBox="0 0 100 100">
      <circle cx="52" cy="52" r="30" fill="currentColor" />
      <circle
        cx="52"
        cy="52"
        r="44"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeOpacity="0.5"
      />
    </svg>
  ),
  // Transfer — forward-pointing solid triangles (movement, hand-off)
  purple: (
    <svg viewBox="0 0 100 100">
      <path d="M22 26 L52 52 L22 78 Z" fill="currentColor" />
      <path d="M50 26 L80 52 L50 78 Z" fill="currentColor" fillOpacity="0.7" />
    </svg>
  ),
  // Beratung — cluster of soft spheres (people, dialogue, network)
  orange: (
    <svg viewBox="0 0 100 100">
      <circle cx="34" cy="36" r="17" fill="currentColor" />
      <circle cx="68" cy="42" r="12" fill="currentColor" />
      <circle cx="46" cy="70" r="14" fill="currentColor" />
    </svg>
  ),
};

export default function Home() {
  const { lang } = useLang();
  const t = texts[lang];

  const featured = FEATURED_SLUGS
    .map(getProject)
    .filter((p): p is Project => Boolean(p));

  return (
    <main className="placeholder">
      {/* Organization + WebSite entity — homepage only. */}
      <JsonLd data={organizationJsonLd()} />
      <Background />
      <Sidebar />

      <div className="page-brand">
        <span className="page-brand-logo" aria-label="NewWorkDesignLab">
          <Image
            src="/nwdl_logo.png"
            alt="NewWorkDesignLab"
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
          <a
            href="#contact"
            className="cta"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.cta.contact}
          </a>
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
                <span className="pillar-shape" aria-hidden="true">
                  {PILLAR_SHAPES[color]}
                </span>
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
                  sizes="(max-width: 860px) 100vw, 54rem"
                />
                <span className="home-project-tile-content">
                  <span className="home-project-tile-tags">
                    {p.categories.map((c) => (
                      <span key={c} className="tag tag--on-image">
                        {t.projectMeta.categories[c]}
                      </span>
                    ))}
                  </span>
                  <span className="home-project-tile-title">{p.title}</span>
                  <span className="home-project-tile-tagline">
                    {p.tagline[lang]}
                  </span>
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

      <TeamTeaser />

      <section className="home-events">
        <div className="pillars-intro">
          <h2 className="pillars-heading">{t.events.heading}</h2>
          <p className="pillars-lead">{t.events.intro}</p>
        </div>
        <EventStrip />
      </section>

      <ContactBlock />

      <SiteFooter />
    </main>
  );
}
