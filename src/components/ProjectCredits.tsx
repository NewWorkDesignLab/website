"use client";

import Image from "next/image";
import texts from "../content/texts.json";
import type { Project, PartnerRef } from "../content/types";
import type { Lang } from "../app/useLang";
import { getMember } from "../content/team";
import { getPartner } from "../content/partners";

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
        <PartnerGroup title={meta.clientsTitle} refs={clients} />
      ) : null}
      {collaborators.length > 0 ? (
        <PartnerGroup title={meta.partnersTitle} refs={collaborators} />
      ) : null}
    </>
  );
}

function PartnerGroup({ title, refs }: { title: string; refs: PartnerRef[] }) {
  const cards = refs
    .map((ref) => getPartner(ref.key))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (cards.length === 0) return null;

  return (
    <section className="partner-section" aria-label={title}>
      <span className="funding-title">{title}</span>
      <div className="partner-grid">
        {cards.map((p, i) => {
          const inner = (
            <>
              <span className="partner-logo">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={120}
                  height={60}
                  style={{ height: "2.5rem", width: "auto" }}
                />
              </span>
              <span className="partner-name">{p.name}</span>
            </>
          );
          return p.url ? (
            <a
              key={i}
              className="partner-card"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              title={p.name}
            >
              {inner}
            </a>
          ) : (
            <span key={i} className="partner-card">
              {inner}
            </span>
          );
        })}
      </div>
    </section>
  );
}
