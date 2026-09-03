import type { Metadata } from "next";
import { pageMetadata, seo } from "../../content/seo";

export const metadata: Metadata = pageMetadata({
  title: seo.teamTitle,
  description: seo.teamDescription,
  path: "/team",
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
