"use client";

import Image from "next/image";
import texts from "../content/texts.json";
import type { Project } from "../content/types";
import type { Lang } from "../app/useLang";
import { getMember } from "../content/team";
import { PartnerCards } from "./PartnerCards";

type CreditPerson = { name: string; role?: string; photo: string };

export function ProjectCredits({ project, lang }: { project: Project; lang: Lang }) {
  const meta = texts[lang].projectMeta;

  // Team references reuse the photo/name/role from team.ts; unknown names are
  // skipped. Inline contributors (externals) are appended afterwards.
  const people: CreditPerson[] = [
    ...(project.team ?? [])
      .map((name) => getMember(name))
      .filter((m): m is NonNullable<typeof m> => Boolean(m))
      .map((m) => ({ name: m.name, role: m.role[lang], photo: m.photo })),
    ...(project.contributors ?? []).map((c) => ({
      name: c.name,
      role: c.role?.[lang],
      photo: c.photo,
    })),
  ];

  const partnerRefs = project.partners ?? [];
  const clients = partnerRefs.filter((p) => p.kind === "client");
  const collaborators = partnerRefs.filter((p) => p.kind !== "client");

  if (people.length === 0 && partnerRefs.length === 0) return null;

  return (
    <>
      {people.length > 0 ? (
        <section className="contributor-section" aria-label={meta.contributorsTitle}>
          <span className="funding-title">{meta.contributorsTitle}</span>
          <div className="contributor-grid">
            {people.map((p, i) => (
              <figure key={i} className="contributor-card">
                <div className="contributor-photo">
                  <Image src={p.photo} alt={p.name} fill sizes="6rem" />
                </div>
                <figcaption className="contributor-caption">
                  <span className="contributor-name">{p.name}</span>
                  {p.role ? <span className="contributor-role">{p.role}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {clients.length > 0 ? (
        <section className="partner-section" aria-label={meta.clientsTitle}>
          <span className="funding-title">{meta.clientsTitle}</span>
          <PartnerCards refs={clients} />
        </section>
      ) : null}

      {collaborators.length > 0 ? (
        <section className="partner-section" aria-label={meta.partnersTitle}>
          <span className="funding-title">{meta.partnersTitle}</span>
          <PartnerCards refs={collaborators} />
        </section>
      ) : null}
    </>
  );
}
