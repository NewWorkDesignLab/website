import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import { LangProvider } from "./useLang";

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
    default: "NewWorkDesignLab",
    template: "%s · NewWorkDesignLab",
  },
  description:
    "Das transdisziplinäre NewWorkDesignLab forscht und gestaltet im Schnittgebiet von User Experience Design, Gamification, Softwareentwicklung und kognitiver Ergonomie.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "NewWorkDesignLab",
    "User Experience Design",
    "Gamification",
    "Kognitive Ergonomie",
    "Digital Business",
    "FH Dresden",
  ],
  openGraph: {
    title: "NewWorkDesignLab",
    description:
      "Forschung und Entwicklung für ein Erlebnis des Flow beim Arbeiten, Denken und Lernen.",
    url: "https://newworkdesignlab.org",
    siteName: "NewWorkDesignLab",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewWorkDesignLab",
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
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

