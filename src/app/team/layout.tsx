import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Das Team des New Work Design Lab – aktuelle und ehemalige Mitarbeitende.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
