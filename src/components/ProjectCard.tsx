import Image from "next/image";
import Link from "next/link";
import texts from "../content/texts.json";
import type { Project } from "../content/types";
import type { Lang } from "../app/useLang";

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const meta = texts[lang].projectMeta;

  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-card-cover">
        <Image
          src={project.cover}
          alt=""
          fill
          sizes="(max-width: 860px) 100vw, 22rem"
        />
      </div>
      <div className="project-card-body">
        <div className="project-card-tags">
          {project.categories.map((c) => (
            <span key={c} className="tag">
              {meta.categories[c]}
            </span>
          ))}
          <span className="tag tag--status">{meta.status[project.status]}</span>
        </div>
        <h2 className="project-card-title">{project.title}</h2>
        <p className="project-card-tagline">{project.tagline[lang]}</p>
      </div>
    </Link>
  );
}
