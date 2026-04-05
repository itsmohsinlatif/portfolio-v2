"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLang } from "@/context/LanguageContext";
import type { Locale } from "@/locales/translations";

const LANG_LABELS: Record<Locale, { short: string; label: string; flag: string }> = {
  en: { short: "EN", label: "English",  flag: "🇬🇧" },
  de: { short: "DE", label: "Deutsch",  flag: "🇩🇪" },
  ur: { short: "UR", label: "اردو",     flag: "🇵🇰" },
};

export default function TopNav() {
  const [scrolled, setScrolled]     = useState(false);
  const [mounted, setMounted]       = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const [cvOpen, setCvOpen]         = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const cvRef   = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t }    = useLang();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) setCvOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: t.nav.projects,  href: "#projects"  },
    { label: t.nav.stack,     href: "#stack"      },
    { label: t.nav.timeline,  href: "#timeline"   },
    { label: t.nav.awards,    href: "#awards"     },
    { label: t.nav.contact,   href: "#contact"    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "shadow-[0_2px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
            : ""}
          dark:bg-neutral-950/90 dark:backdrop-blur-xl dark:border-b dark:border-white/8
          light:bg-white/96 light:backdrop-blur-xl light:border-b light:border-black/10
          light:shadow-[0_1px_0_rgba(0,0,0,0.06)]`}
        style={mounted ? {
          backgroundColor: isDark ? "rgba(10,10,10,0.92)" : "rgba(255,255,255,0.96)",
          backdropFilter: "blur(24px)",
          borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.08)",
        } : {
          backgroundColor: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 max-w-7xl mx-auto gap-4">

          {/* ── Logo (single, no duplication) ── */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            {/* Logo badge — neural network glyph */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-dim to-secondary flex items-center justify-center shadow-[0_0_14px_rgba(0,112,235,0.35)] flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px]">
                {/* Outer triangle nodes */}
                <circle cx="16" cy="4"  r="2.8" fill="white"/>
                <circle cx="5"  cy="24" r="2.8" fill="white"/>
                <circle cx="27" cy="24" r="2.8" fill="white"/>
                {/* Center hub */}
                <circle cx="16" cy="17" r="2" fill="white" fillOpacity="0.75"/>
                {/* Spokes: outer → hub */}
                <line x1="16" y1="6.8"  x2="16" y2="15"   stroke="white" strokeWidth="1.4" strokeOpacity="0.7"/>
                <line x1="7.4" y1="22.4" x2="14.2" y2="18.6" stroke="white" strokeWidth="1.4" strokeOpacity="0.7"/>
                <line x1="24.6" y1="22.4" x2="17.8" y2="18.6" stroke="white" strokeWidth="1.4" strokeOpacity="0.7"/>
                {/* Triangle outline (subtle) */}
                <line x1="16" y1="6.8"  x2="7.4"  y2="22.4" stroke="white" strokeWidth="0.8" strokeOpacity="0.22"/>
                <line x1="16" y1="6.8"  x2="24.6" y2="22.4" stroke="white" strokeWidth="0.8" strokeOpacity="0.22"/>
                <line x1="7.4" y1="24"  x2="24.6" y2="24"   stroke="white" strokeWidth="0.8" strokeOpacity="0.22"/>
              </svg>
            </div>
            {/* Name — hidden on very small screens */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-headline font-black text-sm tracking-tight adaptive-text">
                MOHSIN LATIF
              </span>
              <span className="font-label text-[9px] text-secondary tracking-[0.18em] uppercase">
                AI Engineer
              </span>
            </div>
          </motion.a>

          {/* ── Desktop nav links ── */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-xs tracking-wider uppercase px-3 py-2 rounded-lg transition-all
                           text-on-surface-variant dark:text-on-surface-variant light:text-neutral-500
                           hover:text-primary dark:hover:text-primary
                           hover:bg-primary-dim/8 dark:hover:bg-white/5 light:hover:bg-primary-dim/6"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* ── Right actions ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {/* Language picker */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
                           border border-black/10 dark:border-white/10
                           bg-transparent hover:bg-primary-dim/8 dark:hover:bg-white/5
                           adaptive-text transition-all"
              >
                <span className="text-sm leading-none">{LANG_LABELS[locale].flag}</span>
                <span className="font-label text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant">
                  {LANG_LABELS[locale].short}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "13px" }}>
                  expand_more
                </span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-36 rounded-xl overflow-hidden z-50
                               shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                    style={{
                      background: mounted && !isDark ? "rgba(255,255,255,0.98)" : "rgba(20,20,20,0.97)",
                      border: mounted && !isDark ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {(Object.entries(LANG_LABELS) as [Locale, typeof LANG_LABELS[Locale]][]).map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => { setLocale(key); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                          font-label text-xs uppercase tracking-widest
                          ${locale === key
                            ? "text-primary bg-primary-dim/10"
                            : "text-on-surface-variant dark:text-on-surface-variant light:text-neutral-600 hover:bg-primary-dim/8 dark:hover:bg-white/5"
                          }`}
                      >
                        <span className="text-base">{val.flag}</span>
                        <span>{val.label}</span>
                        {locale === key && <span className="ml-auto material-symbols-outlined text-primary" style={{ fontSize: "14px" }}>check</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-lg transition-all
                           border border-black/10 dark:border-white/10
                           text-on-surface-variant hover:text-primary
                           hover:bg-primary-dim/8 dark:hover:bg-white/5 light:hover:bg-black/4"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>
                  {isDark ? "light_mode" : "dark_mode"}
                </span>
              </button>
            )}

            {/* Download CV — split button with EN/DE picker */}
            <div className="relative hidden md:flex" ref={cvRef}>
              <a
                href={locale === "de" ? "/cv-de.pdf" : "/cv.pdf"}
                target="_blank"
                className="flex items-center gap-1.5
                           border border-black/12 dark:border-white/12 border-r-0
                           text-on-surface-variant dark:text-on-surface-variant light:text-neutral-600
                           hover:text-primary hover:border-primary-dim/40
                           px-3 py-1.5 rounded-l-lg font-label text-[11px] uppercase tracking-wider
                           transition-all hover:bg-primary-dim/6 dark:hover:bg-white/5"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>download</span>
                {t.nav.downloadCV}
              </a>
              <button
                onClick={() => setCvOpen((o) => !o)}
                className="flex items-center px-1.5 py-1.5
                           border border-black/12 dark:border-white/12
                           text-on-surface-variant hover:text-primary
                           rounded-r-lg transition-all hover:bg-primary-dim/6 dark:hover:bg-white/5"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>expand_more</span>
              </button>

              <AnimatePresence>
                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-40 rounded-xl overflow-hidden z-50
                               shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                    style={{
                      background: mounted && !isDark ? "rgba(255,255,255,0.98)" : "rgba(20,20,20,0.97)",
                      border: mounted && !isDark ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {[
                      { label: "English CV", flag: "🇬🇧", href: "/cv.pdf" },
                      { label: "Deutsch CV", flag: "🇩🇪", href: "/cv-de.pdf" },
                    ].map((cv) => (
                      <a
                        key={cv.href}
                        href={cv.href}
                        target="_blank"
                        onClick={() => setCvOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 w-full
                                   font-label text-xs uppercase tracking-widest
                                   text-on-surface-variant dark:text-on-surface-variant light:text-neutral-600
                                   hover:text-primary hover:bg-primary-dim/8 dark:hover:bg-white/5 transition-colors"
                      >
                        <span className="text-base">{cv.flag}</span>
                        <span>{cv.label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hire Me CTA */}
            <a
              href="https://www.linkedin.com/in/itsmohsinlatif/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dim hover:bg-[#0060d0] text-white
                         px-4 py-2 rounded-lg font-label text-[11px] uppercase tracking-wider
                         transition-all active:scale-95 shadow-[0_0_14px_rgba(0,112,235,0.3)]
                         hover:shadow-[0_0_22px_rgba(0,112,235,0.45)]"
            >
              {t.nav.hireMe}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg adaptive-text hover:bg-primary-dim/8 transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </motion.div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-black/8 dark:border-white/8"
              style={{ background: mounted && !isDark ? "rgba(255,255,255,0.98)" : "rgba(10,10,10,0.97)" }}
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-label text-sm uppercase tracking-wider px-3 py-2.5 rounded-lg
                               text-on-surface-variant hover:text-primary hover:bg-primary-dim/8
                               transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="font-label text-sm uppercase tracking-wider px-3 py-2.5 rounded-lg
                             text-on-surface-variant hover:text-primary hover:bg-primary-dim/8 transition-all
                             flex items-center gap-2 mt-1"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>download</span>
                  🇬🇧 {t.nav.downloadCV}
                </a>
                <a
                  href="/cv-de.pdf"
                  target="_blank"
                  className="font-label text-sm uppercase tracking-wider px-3 py-2.5 rounded-lg
                             text-on-surface-variant hover:text-primary hover:bg-primary-dim/8 transition-all
                             flex items-center gap-2"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>download</span>
                  🇩🇪 Deutsch CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
