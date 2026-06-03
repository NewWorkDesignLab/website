import Image from "next/image";
import type { Member } from "../content/types";
import type { Lang } from "../app/useLang";

export function TeamCard({ member, lang }: { member: Member; lang: Lang }) {
  const card = (
    <>
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
      </figcaption>
    </>
  );

  return member.linkedin ? (
    <a
      className="team-card"
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      {card}
    </a>
  ) : (
    <figure className="team-card">{card}</figure>
  );
}
