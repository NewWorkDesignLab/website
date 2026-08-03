import type { Metadata } from "next";
import { pageMetadata, seo } from "../../content/seo";

export const metadata: Metadata = pageMetadata({
  title: seo.legalTitle,
  description: seo.legalDescription,
  path: "/legal-note",
});

export default function LegalNoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

