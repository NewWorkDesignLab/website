import { Fragment } from "react";
import texts from "../content/texts.json";
import type { Project } from "../content/types";
import type { Lang } from "../app/useLang";

/** Labelled block of key facts (funding, duration, …) shown above the team. */
export function ProjectFacts({ project, lang }: { project: Project; lang: Lang }) {
  const details = project.details ?? [];
  if (details.length === 0) return null;

  const meta = texts[lang].projectMeta;

  return (
    <section className="facts-section" aria-label={meta.detailsTitle}>
      <span className="funding-title">{meta.detailsTitle}</span>
      <dl className="facts-list">
        {details.map((d, i) => (
          <Fragment key={i}>
            <dt className="facts-label">{d.label[lang]}</dt>
            <dd className="facts-value">{d.value[lang]}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
}
