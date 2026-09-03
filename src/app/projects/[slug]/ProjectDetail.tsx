"use client";

import Image from "next/image";
import Link from "next/link";
import texts from "../../../content/texts.json";
import type { Project } from "../../../content/types";
import { useLang } from "../../useLang";
import { PageShell } from "../../../components/PageShell";
import { BlockRenderer } from "../../../components/BlockRenderer";
import { FundingBar } from "../../../components/FundingBar";
import { ProjectCredits } from "../../../components/ProjectCredits";
import { ProjectFacts } from "../../../components/ProjectFacts";
import type { Lang } from "../../useLang";

function formatDate(iso: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(iso));
}

export function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLang();
  const meta = texts[lang].projectMeta;

  const bylineParts = [
    project.authors && project.authors.length > 0
      ? `${meta.by} ${project.authors.join(", ")}`
      : null,
    project.createdAt ? `${meta.createdOn} ${formatDate(project.createdAt, lang)}` : null,
    project.updatedAt ? `${meta.updatedOn} ${formatDate(project.updatedAt, lang)}` : null,
  ].filter((part): part is string => Boolean(part));

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

          {bylineParts.length > 0 ? (
            <p className="project-byline">
              {bylineParts.map((part, i) => (
                <span key={i} className="project-byline-item">
                  {part}
                </span>
              ))}
            </p>
          ) : null}

          {project.awards && project.awards.length > 0 ? (
            <dl className="project-facts-inline">
              {project.awards.map((award, i) => (
                <div key={i} className="project-facts-inline-item">
                  <dt>{meta.awardLabel}</dt>
                  <dd>{award[lang]}</dd>
                </div>
              ))}
            </dl>
          ) : null}

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

        <ProjectFacts project={project} lang={lang} />

        <ProjectCredits project={project} lang={lang} />

        <FundingBar keys={project.funding} title={meta.fundingTitle} />
      </article>
    </PageShell>
  );
}
