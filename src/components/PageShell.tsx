import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Background } from "./Background";
import { Sidebar } from "./Sidebar";
import { SiteFooter } from "./SiteFooter";

/**
 * Scrollable page frame shared by all content pages: decorative background,
 * fixed top-left home/brand shortcut, floating sidebar, the page content,
 * and the footer (pushed to the bottom).
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="placeholder placeholder--page">
      <Background />

      <div className="page-brand">
        <Link
          href="/"
          className="page-brand-logo"
          aria-label="New Work Design Lab — Startseite"
        >
          <Image
            src="/nwdl_logo.png"
            alt="New Work Design Lab"
            width={244}
            height={244}
            priority
          />
        </Link>
      </div>

      <Sidebar />
      {children}
      <SiteFooter />
    </main>
  );
}
