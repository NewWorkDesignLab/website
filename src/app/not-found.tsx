import type { Metadata } from "next";
import texts from "../content/texts.json";
import { SITE_NAME } from "../content/seo";
import { NotFoundContent } from "./NotFoundContent";

export const metadata: Metadata = {
  title: { absolute: `404 · ${SITE_NAME}` },
  description: texts.de.notFound.lead,
  robots: { index: false, follow: true },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return <NotFoundContent />;
}
