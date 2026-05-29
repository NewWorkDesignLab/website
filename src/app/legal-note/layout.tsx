import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Legal notice of the New Work Design Lab at Fachhochschule Dresden (FHD).",
};

export default function LegalNoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

