"use client";

import texts from "../../content/texts.json";
import { team } from "../../content/team";
import { useLang } from "../useLang";
import { PageShell } from "../../components/PageShell";
import { TeamCard } from "../../components/TeamCard";

export default function TeamPage() {
  const { lang } = useLang();
  const t = texts[lang].teamPage;

  const current = team.filter((m) => m.status === "current");
  const alumni = team.filter((m) => m.status === "alumni");

  return (
    <PageShell>
      <section className="content page-head">
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">{t.current}</h2>
        <div className="team-grid">
          {current.map((m, i) => (
            <TeamCard key={i} member={m} lang={lang} />
          ))}
        </div>
      </section>

      {alumni.length > 0 ? (
        <section className="team-section">
          <h2 className="team-section-title">{t.alumni}</h2>
          <div className="team-grid">
            {alumni.map((m, i) => (
              <TeamCard key={i} member={m} lang={lang} />
            ))}
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
