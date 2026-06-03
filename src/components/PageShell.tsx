import type { ReactNode } from "react";
import { Background } from "./Background";
import { Sidebar } from "./Sidebar";
import { SiteFooter } from "./SiteFooter";

/**
 * Scrollable page frame shared by all content pages: decorative background,
 * floating sidebar, the page content, and the footer (pushed to the bottom).
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="placeholder placeholder--page">
      <Background />
      <Sidebar />
      {children}
      <SiteFooter />
    </main>
  );
}
