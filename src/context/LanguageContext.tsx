"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations, type Locale, type Translations } from "@/locales/translations";

type LangCtx = {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
  isRTL: boolean;
};

const LanguageContext = createContext<LangCtx>({
  locale: "en",
  t: translations.en,
  setLocale: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale") as Locale | null;
    if (saved && saved in translations) setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("portfolio-locale", l);
    // RTL for Urdu
    document.documentElement.dir = l === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = l;
  }, []);

  useEffect(() => {
    document.documentElement.dir = locale === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale, isRTL: locale === "ur" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
