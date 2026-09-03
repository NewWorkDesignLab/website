"use client";

import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import texts from "../content/texts.json";

export type Lang = keyof typeof texts;

const STORAGE_KEY = "nwdl-lang";

export const FLAGS: Record<Lang, { src: string; label: string }> = {
  de: { src: "/flag-de.svg", label: "Deutsch" },
  en: { src: "/flag-en.svg", label: "English" },
};

const SWITCH_LABEL_PREFIX: Record<Lang, string> = {
  de: "Sprache wechseln zu",
  en: "Switch language to",
};

export function getLangSwitchLabel(currentLang: Lang, nextLang: Lang) {
  return `${SWITCH_LABEL_PREFIX[currentLang]} ${FLAGS[nextLang].label}`;
}

type LangContextValue = { lang: Lang; setLang: (next: Lang) => void };

const LangContext = createContext<LangContextValue | null>(null);

/**
 * Holds the active language and persists it to localStorage. Wrapping the app
 * in a single provider keeps every consumer (sidebar toggle, page content) in
 * sync — otherwise each useLang() call would own independent state.
 */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "de" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage failures (e.g. private mode) */
    }
  };

  return createElement(LangContext.Provider, { value: { lang, setLang } }, children);
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return ctx;
}
