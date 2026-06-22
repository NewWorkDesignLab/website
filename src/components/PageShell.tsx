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
 *
 * `cornerOrbs` swaps the large faded hero blobs for the compact corner-orb
 * cluster on desktop too (used by the short contact page so it stays clean and
 * readable). On mobile every page already shows the corner orbs.
 */
export function PageShell({
  children,
  cornerOrbs = false,
}: {
  children: ReactNode;
  cornerOrbs?: boolean;
}) {
  return (
    <main
      className={`placeholder placeholder--page${
        cornerOrbs ? " placeholder--orbs" : ""
      }`}
    >
      <Background />

      <div className="page-brand">
        <Link
          href="/"
          className="page-brand-logo"
          aria-label="NewWorkDesignLab — Startseite"
        >
          <Image
            src="/nwdl_logo.png"
            alt="NewWorkDesignLab"
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
