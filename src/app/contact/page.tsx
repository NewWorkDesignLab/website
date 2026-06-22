"use client";

import { PageShell } from "../../components/PageShell";
import { ContactBlock } from "../../components/ContactBlock";

export default function ContactPage() {
  return (
    <PageShell cornerOrbs>
      <ContactBlock headingTag="h1" standalone contactPage />
    </PageShell>
  );
}
