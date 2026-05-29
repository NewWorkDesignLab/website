import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://newworkdesignlab.org"),
  title: {
    default: "New Work Design Lab",
    template: "%s · New Work Design Lab",
  },
  description:
    "Das transdisziplinäre New Work Design Lab forscht und gestaltet im Schnittgebiet von User Experience Design, Gamification, Softwareentwicklung und kognitiver Ergonomie.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "New Work Design Lab",
    "User Experience Design",
    "Gamification",
    "Kognitive Ergonomie",
    "Digital Business",
    "FH Dresden",
  ],
  openGraph: {
    title: "New Work Design Lab",
    description:
      "Forschung und Entwicklung für ein Erlebnis des Flow beim Arbeiten, Denken und Lernen.",
    url: "https://newworkdesignlab.org",
    siteName: "New Work Design Lab",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Work Design Lab",
    description:
      "Forschung und Entwicklung für ein Erlebnis des Flow beim Arbeiten, Denken und Lernen.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

