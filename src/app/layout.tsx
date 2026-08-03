import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import { LangProvider } from "./useLang";
import { SITE_URL, pageMetadata, seo } from "../content/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/**
 * Root metadata doubles as the homepage's metadata (app/page.tsx is a client
 * component and cannot export `metadata`). Every sub-route builds its own
 * complete object via pageMetadata() instead of inheriting from here — see the
 * note in content/seo.ts on how Next merges metadata.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    description: seo.homeDescription,
    path: "/",
  }),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "NewWorkDesignLab",
    "New Work Design Lab",
    "User Experience Design",
    "Gamification",
    "Kognitive Ergonomie",
    "Digital Business",
    "FH Dresden",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

