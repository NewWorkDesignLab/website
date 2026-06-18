"use client";

import Image from "next/image";
import texts from "../content/texts.json";
import { useLang } from "../app/useLang";

/**
 * Closing contact block: a vivid brand-gradient panel pairing the lab's
 * contact details with a (presentational) message form. Shared by the
 * homepage and the dedicated contact page so the UX stays identical.
 *
 * `headingTag` lets the dedicated contact page expose this as its primary
 * <h1>, while the homepage keeps it an <h2> below the hero headline.
 * `standalone` trims the large top whitespace that only makes sense when the
 * block follows other homepage sections.
 * `contactPage` switches the block into its dedicated-page guise: the heading
 * reads "Kontakt" instead of the homepage's hero line, and Marius Brade is
 * introduced as the lab's named point of contact. The homepage section keeps
 * its original wording.
 */
export function ContactBlock({
  headingTag: Heading = "h2",
  standalone = false,
  contactPage = false,
}: {
  headingTag?: "h1" | "h2";
  standalone?: boolean;
  contactPage?: boolean;
}) {
  const { lang } = useLang();
  const c = texts[lang].homeContact;
  const cp = texts[lang].contactPage;

  return (
    <section
      id="contact"
      className={`home-contact${standalone ? " home-contact--standalone" : ""}`}
    >
      <div className="pillars-intro">
        <Heading className="pillars-heading">
          {contactPage ? cp.title : c.heading}
        </Heading>
        <p className="pillars-lead">{c.intro}</p>
      </div>

      {contactPage ? (
        <div className="contact-spotlight">
          <div className="contact-spotlight-photo">
            <Image
              src="/team/marius-brade.jpg"
              alt={cp.person}
              fill
              sizes="(max-width: 768px) 8rem, 11rem"
            />
          </div>
          <div className="contact-spotlight-text">
            <span className="contact-spotlight-role">{cp.role}</span>
            <strong className="contact-spotlight-name">{cp.person}</strong>
            <span className="contact-spotlight-title">{cp.titleFhd}</span>
          </div>
          <p className="contact-spotlight-bio">{cp.bio}</p>
        </div>
      ) : null}

      <div className="home-contact-panel">
        <div className="home-contact-info">
          <div className="home-contact-block">
            <strong>{c.orgName}</strong>
            {c.orgLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a
              className="home-contact-link"
              href={c.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.websiteLabel}
            </a>
          </div>

          <div className="home-contact-block">
            <span className="home-contact-block-label">{c.phoneLabel}</span>
            {c.phones.map((phone) => (
              <a
                key={phone}
                className="home-contact-link"
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              >
                {phone}
              </a>
            ))}
          </div>

          <div className="home-contact-block">
            <span className="home-contact-block-label">{c.personLabel}</span>
            <strong className="home-contact-person">{c.person}</strong>
            <a className="home-contact-link" href={`mailto:${c.email}`}>
              {c.email}
            </a>
          </div>
        </div>

        {/* Form is presentational for now – wiring follows once our own
            server endpoint is ready. */}
        <form className="home-contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="home-contact-field">
            <label htmlFor="contact-name">{c.form.name}</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder={c.form.namePlaceholder}
              autoComplete="name"
            />
          </div>
          <div className="home-contact-field">
            <label htmlFor="contact-email">{c.form.email}</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder={c.form.emailPlaceholder}
              autoComplete="email"
            />
          </div>
          <div className="home-contact-field">
            <label htmlFor="contact-message">{c.form.message}</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder={c.form.messagePlaceholder}
            />
          </div>
          <button type="submit" className="cta home-contact-submit">
            {c.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
