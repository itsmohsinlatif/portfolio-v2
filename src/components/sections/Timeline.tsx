"use client";

import { motion } from "framer-motion";
import bio from "@/data/bio.json";
import { useLang } from "@/context/LanguageContext";
import { contentTranslations } from "@/locales/translations";

const iconMap: Record<string, string> = {
  "BSH Hausgeräte GmbH": "factory",
  "OptimusFox Ltd.": "smart_toy",
  "Fiverr": "hub",
};

const dotStyle: Record<string, { bg: string; ring: string }> = {
  "BSH Hausgeräte GmbH": { bg: "bg-primary-dim",  ring: "shadow-[0_0_0_4px_rgba(0,112,235,0.2)]" },
  "OptimusFox Ltd.":     { bg: "bg-secondary",     ring: "shadow-[0_0_0_4px_rgba(0,210,253,0.2)]" },
  "Fiverr":              { bg: "bg-neutral-500",   ring: "shadow-[0_0_0_4px_rgba(128,128,128,0.2)]" },
};

type Entry =
  | { kind: "job";  data: (typeof bio.experience)[number] }
  | { kind: "edu";  data: (typeof bio.education)[number]  };

const entries: Entry[] = [
  ...bio.experience.map((e) => ({ kind: "job" as const, data: e })),
  ...bio.education.map( (e) => ({ kind: "edu" as const, data: e })),
];

export default function Timeline() {
  const { t, locale } = useLang();
  const content = contentTranslations[locale];
  return (
    <section
      className="px-5 sm:px-8 lg:px-32 py-24 sm:py-32 section-alt border-y border-white/5 dark:border-white/5 light:border-black/5"
      id="timeline"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-label text-secondary text-xs tracking-widest uppercase mb-3">{t.sections.timeline.label}</p>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight">{t.sections.timeline.heading}</h2>
        </motion.div>

        {/* ── MOBILE: left-rail timeline ─────────────────────── */}
        <div className="md:hidden space-y-0">
          {entries.map((entry, i) => {
            const isJob   = entry.kind === "job";
            const job     = isJob ? (entry.data as (typeof bio.experience)[number]) : null;
            const edu     = !isJob ? (entry.data as (typeof bio.education)[number]) : null;
            const dot     = isJob ? dotStyle[job!.company] ?? { bg: "bg-neutral-500", ring: "" } : { bg: "bg-tertiary-dim/80", ring: "shadow-[0_0_0_4px_rgba(228,143,236,0.2)]" };
            const icon    = isJob ? (iconMap[job!.company] ?? "work") : "school";
            const jobIdx  = isJob ? bio.experience.findIndex(e => e.company === job!.company) : -1;
            const eduIdx  = !isJob ? bio.education.findIndex(e => e.institution === edu!.institution) : -1;
            const lcJob   = isJob  ? content?.experience[jobIdx] : null;
            const lcEdu   = !isJob ? content?.education[eduIdx]  : null;
            const jobRole   = lcJob?.role    ?? job?.role;
            const jobBullets = lcJob?.bullets ?? job?.bullets ?? [];
            const eduDegree = lcEdu?.degree  ?? edu?.degree;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-4"
              >
                {/* Rail column */}
                <div className="flex flex-col items-center flex-shrink-0 w-8">
                  {/* Dot */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${dot.bg} ${dot.ring}`}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "14px" }}>{icon}</span>
                  </div>
                  {/* Connector line — hidden on last item */}
                  {i < entries.length - 1 && (
                    <div className="flex-1 w-[2px] bg-gradient-to-b from-primary-dim/50 to-secondary/20 my-1 rounded-full" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 glass-panel p-5 rounded-xl mb-4 border border-white/5 dark:border-white/5 light:border-black/5">
                  {isJob ? (
                    <>
                      <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                        <div>
                          <p className="font-label text-[9px] text-secondary tracking-widest uppercase mb-1">{job!.period}</p>
                          <h4 className="font-headline text-sm font-bold adaptive-text">{jobRole}</h4>
                          <p className="font-label text-xs text-primary mt-0.5">{job!.company}</p>
                        </div>
                        {job!.current && (
                          <span className="flex items-center gap-1.5 font-label text-[9px] text-green-500 bg-green-400/10 px-2 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />{t.active}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-1.5">
                        {jobBullets.slice(0, 2).map((b, bi) => (
                          <li key={bi} className="text-on-surface-variant text-xs leading-relaxed flex gap-2">
                            <span className="text-primary flex-shrink-0 mt-0.5">›</span>{b}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <p className="font-label text-[9px] text-tertiary-dim tracking-widest uppercase mb-1">{edu!.period}</p>
                      <h4 className="font-headline text-sm font-bold adaptive-text">{eduDegree}</h4>
                      <p className="font-label text-xs text-primary mt-0.5">{edu!.institution}</p>
                      {edu!.current && (
                        <span className="inline-flex items-center gap-1.5 font-label text-[9px] text-green-500 bg-green-400/10 px-2 py-1 rounded-full mt-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />{t.ongoing}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── DESKTOP: 3-col grid — dot column owns its space, cards never overlap ── */}
        <div className="hidden md:block space-y-8">
          {entries.map((entry, i) => {
            const isLeft  = i % 2 === 0;
            const isJob   = entry.kind === "job";
            const job     = isJob ? (entry.data as (typeof bio.experience)[number]) : null;
            const edu     = !isJob ? (entry.data as (typeof bio.education)[number]) : null;
            const dot     = isJob ? dotStyle[job!.company] ?? { bg: "bg-neutral-500", ring: "" } : { bg: "bg-tertiary-dim/80", ring: "shadow-[0_0_0_4px_rgba(228,143,236,0.2)]" };
            const icon    = isJob ? (iconMap[job!.company] ?? "work") : "school";
            const jobIdx  = isJob ? bio.experience.findIndex(e => e.company === job!.company) : -1;
            const eduIdx  = !isJob ? bio.education.findIndex(e => e.institution === edu!.institution) : -1;
            const lcJob   = isJob  ? content?.experience[jobIdx] : null;
            const lcEdu   = !isJob ? content?.education[eduIdx]  : null;
            const jobRole    = lcJob?.role    ?? job?.role;
            const jobBullets = lcJob?.bullets ?? job?.bullets ?? [];
            const eduDegree  = lcEdu?.degree  ?? edu?.degree;

            const card = (
              <motion.div
                initial={{ opacity: 0, x: isLeft ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="glass-panel p-6 rounded-xl border border-white/5 dark:border-white/5 light:border-black/5
                           hover:shadow-[0_4px_24px_rgba(0,112,235,0.08)] transition-all"
              >
                {isJob ? (
                  <>
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <div>
                        <p className="font-label text-[9px] text-secondary tracking-widest uppercase mb-1">{job!.period}</p>
                        <h4 className="font-headline text-base font-bold adaptive-text">{jobRole}</h4>
                        <p className="font-label text-xs text-primary mt-0.5">{job!.company}</p>
                      </div>
                      {job!.current && (
                        <span className="flex items-center gap-1.5 font-label text-[9px] text-green-500 bg-green-400/10 px-2 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />{t.active}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {jobBullets.slice(0, 2).map((b, bi) => (
                        <li key={bi} className="text-on-surface-variant text-xs leading-relaxed flex gap-2">
                          <span className="text-primary flex-shrink-0 mt-0.5">›</span>{b}
                        </li>
                      ))}
                    </ul>
                    <p className="font-label text-[9px] text-on-surface-variant/40 mt-3">{job!.location}</p>
                  </>
                ) : (
                  <>
                    <p className="font-label text-[9px] text-tertiary-dim tracking-widest uppercase mb-1">{edu!.period}</p>
                    <h4 className="font-headline text-base font-bold adaptive-text">{eduDegree}</h4>
                    <p className="font-label text-xs text-primary mt-0.5">{edu!.institution}</p>
                    {edu!.current && (
                      <span className="inline-flex items-center gap-1.5 font-label text-[9px] text-green-500 bg-green-400/10 px-2 py-1 rounded-full mt-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />{t.ongoing}
                      </span>
                    )}
                    <p className="font-label text-[9px] text-on-surface-variant/40 mt-2">{edu!.location}</p>
                  </>
                )}
              </motion.div>
            );

            return (
              /*
               * 3-column grid:
               *   col 1 (flex-1): left card area
               *   col 2 (w-16):   dot + vertical line  ← has its OWN width, never collapses
               *   col 3 (flex-1): right card area
               */
              <div key={i} className="grid items-start" style={{ gridTemplateColumns: "1fr 4rem 1fr" }}>

                {/* LEFT card area */}
                <div className="pr-6">
                  {!isLeft && card}
                </div>

                {/* CENTER column — dot + line */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10
                                  flex-shrink-0 border-4 border-[var(--bg)]
                                  ${dot.bg} ${dot.ring}`}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "15px" }}>{icon}</span>
                  </div>
                  {/* Connector to next item */}
                  {i < entries.length - 1 && (
                    <div className="w-[2px] flex-1 min-h-[3rem] bg-gradient-to-b from-primary-dim/60 to-secondary/20 rounded-full mt-1" />
                  )}
                </div>

                {/* RIGHT card area */}
                <div className="pl-6">
                  {isLeft && card}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
