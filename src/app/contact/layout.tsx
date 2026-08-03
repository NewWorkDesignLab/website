import type { Metadata } from "next";
import { pageMetadata, seo } from "../../content/seo";

export const metadata: Metadata = pageMetadata({
  title: seo.contactTitle,
  description: seo.contactDescription,
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
