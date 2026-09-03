"use client";

import Image from "next/image";
import type { PartnerRef } from "../content/types";
import { getPartner } from "../content/partners";

export function PartnerCards({ refs }: { refs: PartnerRef[] }) {
  const cards = refs
    .map((ref) => getPartner(ref.key))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (cards.length === 0) return null;

  return (
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
  );
}
