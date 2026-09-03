import Image from "next/image";
import { funding } from "../content/funding";
import type { FundingKey } from "../content/types";

export function FundingBar({ keys, title }: { keys: FundingKey[]; title: string }) {
  if (keys.length === 0) return null;

  return (
    <section className="funding-bar" aria-label={title}>
      <span className="funding-title">{title}</span>
      <div className="funding-logos">
        {keys.map((key) => {
          const f = funding[key];
          const logo = (
            <Image
              className="funding-logo"
              src={f.src}
              alt={f.label}
              width={200}
              height={100}
              style={{ height: "4.75rem", width: "auto" }}
            />
          );
          return f.url ? (
            <a key={key} href={f.url} target="_blank" rel="noopener noreferrer" title={f.label}>
              {logo}
            </a>
          ) : (
            <span key={key}>{logo}</span>
          );
        })}
      </div>
    </section>
  );
}
