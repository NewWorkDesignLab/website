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
        <Link href="/" className="page-brand-home" aria-label="Home">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 10v9.5h13V10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link
          href="/"
          className="page-brand-logo"
          aria-label="New Work Design Lab — Startseite"
        >
          <Image
            src="/nwdl_logo.png"
            alt="New Work Design Lab"
            width={104}
            height={104}
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
