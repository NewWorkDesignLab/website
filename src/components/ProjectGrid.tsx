"use client";

import { projects } from "../content/projects";
import { useLang } from "../app/useLang";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const { lang } = useLang();

  return (
    <div className="project-grid">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} lang={lang} />
      ))}
    </div>
  );
}
