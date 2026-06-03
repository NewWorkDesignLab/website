"use client";

import texts from "../../content/texts.json";
import { useLang } from "../useLang";
import { PageShell } from "../../components/PageShell";

const EMAIL = "m.brade@fh-dresden.eu";

export default function ContactPage() {
  const { lang } = useLang();
  const t = texts[lang].contactPage;

  return (
    <PageShell>
      <section className="content contact">
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>

        <div className="contact-card">
          <span className="contact-name">{t.person}</span>
          <span className="contact-role">{t.role}</span>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>

        <a className="cta" href={`mailto:${EMAIL}`}>
          {t.emailCta}
        </a>
      </section>
    </PageShell>
  );
}
