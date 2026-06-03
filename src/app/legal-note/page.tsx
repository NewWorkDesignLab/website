"use client";

import Link from "next/link";
import texts from "../../content/texts.json";
import { useLang } from "../useLang";
import { PageShell } from "../../components/PageShell";

export default function ImpressumPage() {
  const { lang } = useLang();
  const im = texts[lang].impressum;

  return (
    <PageShell>
      <section className="content content--legal">
        <h1>{im.title}</h1>

        <div className="legal-block">
          <p>{im.intro}</p>
          <p>
            <a
              href="https://www.fh-dresden.eu/de/impressum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.fh-dresden.eu/de/impressum/
            </a>
            <br />
            {im.company}
            <br />
            {im.street}
            <br />
            {im.city}
          </p>
          <p>
            {im.register}
            <br />
            {im.court}
            <br />
            {im.vat}
          </p>
        </div>

        <div className="legal-block">
          <h2>{im.representedByTitle}</h2>
          <p>{im.representedBy}</p>
        </div>

        <div className="legal-block">
          <h2>{im.contactTitle}</h2>
          <p>
            {im.phone}
            <br />
            {im.fax}
            <br />
            {im.email}
          </p>
        </div>

        <div className="legal-block">
          <h2>{im.editorTitle}</h2>
          <p>{im.editor}</p>
        </div>

        <Link className="back-link" href="/">
          ← {im.back}
        </Link>
      </section>
    </PageShell>
  );
}
