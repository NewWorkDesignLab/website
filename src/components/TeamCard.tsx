"use client";

import { useState } from "react";
import Image from "next/image";
import texts from "../content/texts.json";
import type { Member } from "../content/types";
import type { Lang } from "../app/useLang";

export function TeamCard({ member, lang }: { member: Member; lang: Lang }) {
  const t = texts[lang].teamPage;
  const [bioOpen, setBioOpen] = useState(false);

  const hasContact = Boolean(member.email || member.linkedin);

  return (
    <figure className="team-card">
      <div className="team-photo">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 860px) 50vw, 14rem"
        />
      </div>

      <figcaption className="team-caption">
        <span className="team-name">{member.name}</span>
        <span className="team-role">{member.role[lang]}</span>

        {member.specialty ? (
          <span className="team-specialty">{member.specialty[lang]}</span>
        ) : null}

        {member.tags && member.tags.length > 0 ? (
          <div className="team-tags">
            {member.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {member.bio ? (
          <button
            type="button"
            className="team-bio-toggle"
            aria-expanded={bioOpen}
            onClick={() => setBioOpen((open) => !open)}
          >
            {bioOpen ? t.bioLess : t.bioMore}
          </button>
        ) : null}

        {hasContact ? (
          <div className="team-contact">
            {member.email ? (
              <a
                className="team-contact-link"
                href={`mailto:${member.email}`}
                aria-label={`${t.emailLabel} ${member.name}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3.5" y="5" width="17" height="14" rx="2.2" />
                  <path d="m4.5 7 7.5 5.5L19.5 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : null}
            {member.linkedin ? (
              <a
                className="team-contact-link"
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.linkedinLabel} ${member.name}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            ) : null}
          </div>
        ) : null}
      </figcaption>

      {/* Sits outside the caption on purpose: the caption is the part TeamGrid
          measures for the shared card height, so it has to stay constant. */}
      {member.bio && bioOpen ? (
        <p className="team-bio">{member.bio[lang]}</p>
      ) : null}
    </figure>
  );
}
