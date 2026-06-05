"use client";

import Image from "next/image";
import Link from "next/link";
import texts from "../../../content/texts.json";
import type { Project } from "../../../content/types";
import { useLang } from "../../useLang";
import { PageShell } from "../../../components/PageShell";
import { BlockRenderer } from "../../../components/BlockRenderer";
import { FundingBar } from "../../../components/FundingBar";

export function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLang();
  const meta = texts[lang].projectMeta;

  return (
    <PageShell>
      <article className="project-detail">
        <Link href="/projects" className="back-link">
          ← {meta.backToProjects}
        </Link>

        <header className="project-hero">
          <div className="project-card-tags">
            {project.categories.map((c) => (
              <span key={c} className="tag">
                {meta.categories[c]}
              </span>
            ))}
            <span className="tag tag--status">{meta.status[project.status]}</span>
            {project.year ? <span className="tag tag--year">{project.year}</span> : null}
          </div>

          <h1>{project.title}</h1>
          <p className="lead">{project.tagline[lang]}</p>

          <div className="project-hero-cover">
            <Image
              src={project.cover}
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 50rem"
            />
          </div>

          {project.externalUrl ? (
            <a
              className="cta"
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {meta.visit}
            </a>
          ) : null}
        </header>

        <div className="project-body">
          <BlockRenderer blocks={project.sections} lang={lang} />
        </div>

        <FundingBar keys={project.funding} title={meta.fundingTitle} />
      </article>
    </PageShell>
  );
}
