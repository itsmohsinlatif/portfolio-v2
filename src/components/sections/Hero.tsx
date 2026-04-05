"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const ROLES_BY_LOCALE = {
  en: ["AI Engineer", "Data Scientist", "ML Engineer", "Agentic AI Builder"],
  de: ["KI-Ingenieur", "Datenwissenschaftler", "ML-Ingenieur", "Agentischer KI-Entwickler"],
  ur: ["اے آئی انجینئر", "ڈیٹا سائنسدان", "ایم ایل انجینئر", "ایجنٹک اے آئی ڈویلپر"],
};

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const { t, locale } = useLang();
  const roles = ROLES_BY_LOCALE[locale];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section dir="ltr" className="min-h-screen relative overflow-hidden flex flex-col justify-center">

      {/* ── Background glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-16 sm:-left-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-primary-dim rounded-full blur-[100px] sm:blur-[140px] opacity-15 dark:opacity-20" />
        <div className="absolute top-0 right-0 sm:right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary rounded-full blur-[120px] sm:blur-[160px] opacity-8 dark:opacity-10" />
      </div>

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] hidden sm:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,112,235,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,112,235,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── PORTRAIT — absolutely positioned, top-right, full height, bleeds off-screen ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 right-0 h-[88%] w-[55%] sm:w-[50%] lg:w-[46%] z-0 pointer-events-none hidden sm:block"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 28%, black 100%), linear-gradient(to top, transparent 0%, black 25%)",
          WebkitMaskComposite: "intersect",
          maskImage: "linear-gradient(to right, transparent 0%, black 28%, black 100%), linear-gradient(to top, transparent 0%, black 25%)",
          maskComposite: "intersect",
        }}
      >
        <Image
          src="/profile.avif"
          alt="Mohsin Latif"
          fill
          priority
          className="object-contain object-right-top"
          style={{
            objectPosition: "right top",
            transform: "scale(1.25) translateX(4%)",
            transformOrigin: "top right",
            filter: "drop-shadow(-20px 0 40px rgba(0,112,235,0.3)) drop-shadow(0 0 60px rgba(0,210,253,0.12))",
          }}
          sizes="50vw"
        />
        {/* Subtle right-edge glow line */}
        <div className="absolute top-[10%] right-0 w-[2px] h-[60%] bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
      </motion.div>

      {/* ── TEXT CONTENT ── */}
      <div className={`relative z-10 px-5 sm:px-8 lg:px-32 pt-24 pb-12 sm:py-28 w-full max-w-[100%] ${locale === "ur" ? "sm:pr-[52%] lg:pr-[50%]" : ""}`}>
        <div dir={locale === "ur" ? "rtl" : "ltr"} className="max-w-xl lg:max-w-2xl">

          {/* Status row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 glass-panel px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="font-label text-[10px] text-green-500 dark:text-green-400 uppercase tracking-widest">
                {t.hero.available}
              </span>
            </div>
            <span className="flex items-center gap-2 font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
              <span className="w-6 h-[1px] bg-on-surface-variant/40" />
              {t.hero.location}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`font-headline font-black mb-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl ${locale === "ur" ? "leading-[3.4] tracking-normal" : "leading-[0.92] tracking-tighter"}`}
          >
            <span className={`adaptive-text block font-semibold text-2xl sm:text-3xl md:text-4xl tracking-normal opacity-80 ${locale === "ur" ? "mb-8" : "mb-2"}`}>
              {t.hero.intro}
            </span>
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-primary-dim via-secondary to-primary ${
              locale === "ur" ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-8" :
              locale === "de" ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl" :
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            }`}>
              {t.hero.line1}
            </span>
            <span className="adaptive-text block">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary ${
                locale === "ur" ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-8 block" :
                locale === "de" ? "text-3xl sm:text-5xl md:text-6xl lg:text-7xl" :
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              }`}>
                {t.hero.line2}
              </span>
            </span>
          </motion.h1>

          {/* Role rotator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={`overflow-hidden mb-6 ${locale === "ur" ? "h-14" : "h-7"}`}
          >
            <motion.p
              key={roleIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className={`font-label text-base sm:text-lg text-secondary ${locale === "ur" ? "tracking-normal" : "tracking-[0.25em] uppercase"}`}
            >
              {roles[roleIdx]}
              <span className="cursor-blink text-primary ml-1">_</span>
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-body text-on-surface-variant text-sm sm:text-base md:text-lg mb-8 max-w-lg leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://www.linkedin.com/in/itsmohsinlatif/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-dim to-secondary text-white font-headline font-bold
                         px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl
                         shadow-[0_0_25px_rgba(0,112,235,0.35)]
                         hover:shadow-[0_0_40px_rgba(0,112,235,0.5)]
                         hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              {t.hero.connectLinkedIn}
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 font-headline font-bold
                         px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all text-sm sm:text-base
                         border border-primary-dim/40 dark:border-primary-dim/30
                         adaptive-text hover:bg-primary-dim/10 dark:hover:bg-white/5"
            >
              {t.hero.viewProjects}
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </a>
            <a
              href="mailto:itsmohsinlatif@gmail.com"
              className="flex items-center gap-2 font-headline font-bold
                         px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all text-sm sm:text-base
                         border border-primary-dim/40 dark:border-primary-dim/30
                         adaptive-text hover:bg-primary-dim/10 dark:hover:bg-white/5"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              {t.hero.emailMe}
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 sm:mt-14 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-4 sm:gap-y-5"
          >
            {t.stats.map((stat: { value: string; label: string }) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-headline text-2xl sm:text-3xl font-black text-gradient-primary">
                  {stat.value}
                </span>
                <span className="font-label text-[9px] text-on-surface-variant uppercase tracking-widest mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
