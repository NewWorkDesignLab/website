"use client";

import texts from "../../content/texts.json";
import { useLang } from "../useLang";
import { PageShell } from "../../components/PageShell";
import { ProjectGrid } from "../../components/ProjectGrid";

export default function ProjectsPage() {
  const { lang } = useLang();
  const t = texts[lang].projectsPage;

  return (
    <PageShell>
      <section className="content page-head">
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>
      </section>

      <ProjectGrid />
    </PageShell>
  );
}
