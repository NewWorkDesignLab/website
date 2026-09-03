"use client";

import Link from "next/link";
import texts from "../content/texts.json";
import { useLang } from "./useLang";
import { PageShell } from "../components/PageShell";

export function NotFoundContent() {
  const { lang } = useLang();
  const nf = texts[lang].notFound;
  const nav = texts[lang].nav;

  return (
    <PageShell>
      <section className="content content--legal">
        <h1>
          404 <span className="accent">—</span> {nf.title}
        </h1>

        <div className="legal-block">
          <p>{nf.lead}</p>
        </div>

        <div className="legal-block">
          <h2>{nf.linksTitle}</h2>
          <p>
            <Link href="/projects">{nav.projects}</Link>
            {" · "}
            <Link href="/team">{nav.team}</Link>
            {" · "}
            <Link href="/contact">{nav.contact}</Link>
          </p>
        </div>

        <Link className="back-link" href="/">
          ← {nf.back}
        </Link>
      </section>
    </PageShell>
  );
}
