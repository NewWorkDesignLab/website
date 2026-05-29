"use client";

import { useEffect, useState } from "react";
import texts from "../content/texts.json";

export type Lang = keyof typeof texts;

const STORAGE_KEY = "nwdl-lang";

export const FLAGS: Record<Lang, { src: string; label: string }> = {
  de: { src: "/flag-de.svg", label: "Deutsch" },
  en: { src: "/flag-gb.svg", label: "English" },
};


export function useLang() {
  const [lang, setLang] = useState<Lang>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "de" || stored === "en") {
      setLang(stored);
    }
  }, []);

  const update = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return { lang, setLang: update };
}

