import type { Metadata } from "next";
import { pageMetadata, seo } from "../../content/seo";

export const metadata: Metadata = pageMetadata({
  title: seo.projectsTitle,
  description: seo.projectsDescription,
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
