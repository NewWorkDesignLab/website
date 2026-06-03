import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Projekte des New Work Design Lab aus Virtual Reality, Augmented Reality, Forschung und Künstlicher Intelligenz.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
