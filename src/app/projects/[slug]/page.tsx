import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../../content/projects";
import { pageMetadata } from "../../../content/seo";
import { ProjectDetail } from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.tagline.de,
    path: `/projects/${project.slug}`,
    // Covers are still SVG placeholders; socialImage() falls back to the site
    // card until real raster covers land.
    image: project.cover,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
