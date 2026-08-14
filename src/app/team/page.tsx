"use client";

import texts from "../../content/texts.json";
import { team } from "../../content/team";
import { useLang } from "../useLang";
import { PageShell } from "../../components/PageShell";
import { TeamGrid } from "../../components/TeamGrid";

export default function TeamPage() {
  const { lang } = useLang();
  const t = texts[lang].teamPage;

  const current = team.filter((m) => m.status === "current");
  const alumni = team.filter((m) => m.status === "alumni");

  return (
    <PageShell>
      <div className="page-column">
        <section className="content page-head">
          <h1>{t.title}</h1>
          <p className="lead">
            {t.introBefore}
            <strong>{t.introBrand}</strong>
            {t.intro}
          </p>
        </section>

        <section className="team-section">
          <h2 className="team-section-title">{t.current}</h2>
          <TeamGrid
            members={current}
            lang={lang}
            className="team-grid-current"
          />
        </section>

        {alumni.length > 0 ? (
          <section className="team-section">
            <h2 className="team-section-title">{t.alumni}</h2>
            <TeamGrid members={alumni} lang={lang} />
          </section>
        ) : null}
      </div>
    </PageShell>
  );
}
