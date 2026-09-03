"use client";

import Image from "next/image";
import { useState } from "react";
import texts from "../content/texts.json";
import { useLang } from "../app/useLang";

const CONTACT_API_URL =
  process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "https://api.nwdl.org/contact";

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

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "rateLimit"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    setStatus("sending");
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name ?? "",
          email: data.email ?? "",
          message: data.message ?? "",
          website: data.website ?? "",
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else if (res.status === 429) {
        setStatus("rateLimit");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          <span className="contact-spotlight-role">{cp.role}</span>
          <div className="contact-spotlight-text">
            <strong className="contact-spotlight-name">{cp.person}</strong>
            <span className="contact-spotlight-title">{cp.titleFhd}</span>
          </div>
          <div className="contact-spotlight-photo">
            <Image
              src="/team/marius-brade.jpg"
              alt={cp.person}
              fill
              sizes="(max-width: 768px) 8rem, 11rem"
            />
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
            <span className="home-contact-block-label">{c.personLabel}</span>
            <strong className="home-contact-person">{c.person}</strong>
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
        </div>

        <form className="home-contact-form" onSubmit={handleSubmit} noValidate>
          <div className="home-contact-field">
            <label htmlFor="contact-name">{c.form.name}</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder={c.form.namePlaceholder}
              autoComplete="name"
              required
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
              required
            />
          </div>
          <div className="home-contact-field">
            <label htmlFor="contact-message">{c.form.message}</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder={c.form.messagePlaceholder}
              required
            />
          </div>

          {}
          <input
            className="home-contact-honeypot"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button
            type="submit"
            className="cta home-contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? c.form.sending : c.form.submit}
          </button>

          {status === "success" ? (
            <p className="home-contact-status home-contact-status--ok" role="status">
              {c.form.success}
            </p>
          ) : null}
          {status === "rateLimit" ? (
            <p className="home-contact-status home-contact-status--err" role="alert">
              {c.form.rateLimit}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="home-contact-status home-contact-status--err" role="alert">
              {c.form.error}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
