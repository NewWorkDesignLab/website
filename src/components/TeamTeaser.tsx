"use client";

import Image from "next/image";
import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "../app/useLang";
import { team } from "../content/team";

/**
 * Team teaser between the projects and the events section: an asymmetric band
 * that points scrollers towards /team. It deliberately breaks the centered
 * heading rhythm the other homepage sections share — the off-center split and
 * its compact height mark it as a transition, and the tight gap to "Wir sind
 * dabei" below ties the two into one block.
 *
 * Members still on a placeholder silhouette are left out of the face cluster;
 * the counter next to it still names the full current team.
 */
export function TeamTeaser() {
  const { lang } = useLang();
  const t = texts[lang].teamTeaser;

  const current = team.filter((m) => m.status === "current");
  const faces = current.filter((m) => !m.photo.includes("placeholder"));

  return (
    <section className="home-team">
      <span className="section-orbs section-orbs--team" aria-hidden="true">
        <span className="section-orb blue" />
        <span className="section-orb green" />
        <span className="section-orb orange" />
      </span>

      <div className="home-team-inner">
        <div className="home-team-copy">
          <h2 className="pillars-heading">{t.heading}</h2>
          <p className="pillars-lead">{t.intro}</p>
          <Link href="/team" className="home-projects-more home-team-more">
            {t.more}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="home-team-cluster">
          <div className="home-team-faces">
            {faces.map((m) => (
              <span key={m.name} className="home-team-face">
                <Image src={m.photo} alt={m.name} fill sizes="8rem" />
              </span>
            ))}
          </div>
          <span className="home-team-count">
            {t.count.replace("{count}", String(current.length))}
          </span>
        </div>
      </div>
    </section>
  );
}
