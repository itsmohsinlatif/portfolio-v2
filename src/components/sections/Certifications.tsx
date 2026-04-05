"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import bio from "@/data/bio.json";
import { useLang } from "@/context/LanguageContext";

type Cert = (typeof bio.certifications)[number];
type Award = (typeof bio.awards)[number] & { image?: string };

const certColors = [
  "border-primary/20 bg-primary/5",
  "border-secondary/20 bg-secondary/5",
  "border-tertiary/20 bg-tertiary/5",
  "border-primary/10",
  "border-secondary/10",
  "border-white/5 dark:border-white/5 light:border-black/5",
];

const certIconColors = ["text-primary", "text-secondary", "text-tertiary", "text-primary", "text-secondary", "text-on-surface-variant"];

type LightboxItem =
  | { kind: "cert"; data: Cert }
  | { kind: "award"; data: Award };

export default function Certifications() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  const title = lightbox?.kind === "cert" ? lightbox.data.name : lightbox?.data.title ?? "";
  const subtitle = lightbox?.kind === "cert"
    ? `${lightbox.data.issuer} · ${lightbox.data.year}`
    : lightbox
      ? `${lightbox.data.org} · ${lightbox.data.year}`
      : "";
  const image = lightbox?.kind === "cert" ? lightbox.data.image : (lightbox?.data as Award | undefined)?.image;
  const year = lightbox?.kind === "cert" ? lightbox.data.year : lightbox?.data.year ?? "";

  return (
    <section className="px-5 sm:px-8 lg:px-32 py-20 sm:py-32" id="awards">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-label text-secondary text-xs tracking-widest uppercase mb-3">{t.sections.awards.label}</p>
          <h2 className="text-4xl font-headline font-bold tracking-tight">{t.sections.awards.heading}</h2>
          <p className="font-label text-[11px] text-on-surface-variant dark:text-on-surface-variant light:text-neutral-400 mt-2 uppercase tracking-widest">
            {t.sections.awards.clickHint}
          </p>
        </motion.div>

        {/* Certifications masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">
          {bio.certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => setLightbox({ kind: "cert", data: cert })}
              className={`break-inside-avoid glass-panel p-6 rounded-xl border cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,112,235,0.12)] transition-all select-none ${certColors[i % certColors.length]}`}
            >
              <div className="flex items-start gap-4 mb-3">
                <span className={`material-symbols-outlined text-3xl flex-shrink-0 ${certIconColors[i % certIconColors.length]}`}>
                  verified
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-headline text-sm font-bold leading-tight mb-1">{cert.name}</h4>
                  <p className="font-label text-[10px] text-neutral-500">{cert.issuer} · {cert.year}</p>
                </div>
                <span className="material-symbols-outlined text-sm text-on-surface-variant opacity-50">zoom_in</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-6">{t.sections.awards.awardsSubHeading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(bio.awards as Award[]).map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setLightbox({ kind: "award", data: award })}
                className="glass-panel p-6 rounded-xl border border-white/5 dark:border-white/5 light:border-black/5 flex items-center gap-4 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/3 transition-all cursor-pointer select-none"
              >
                <span className="material-symbols-outlined text-secondary text-3xl">emoji_events</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-headline text-sm font-bold">{award.title}</h4>
                  <p className="font-label text-[10px] text-on-surface-variant mt-0.5">{award.org} · {award.year}</p>
                  <p className="font-label text-[10px] text-neutral-600">{award.location}</p>
                </div>
                {award.image && (
                  <span className="material-symbols-outlined text-sm text-on-surface-variant opacity-50">zoom_in</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="glass-panel-solid rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox header */}
              <div className="flex justify-between items-start p-5 border-b border-white/5 dark:border-white/5 light:border-black/5">
                <div>
                  <h3 className="font-headline font-bold text-base leading-tight">{title}</h3>
                  <p className="font-label text-xs text-on-surface-variant mt-1">{subtitle}</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all text-on-surface-variant hover:text-white dark:hover:text-white light:hover:text-neutral-900"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Image area */}
              <div className="relative bg-surface-container-lowest dark:bg-surface-container-lowest light:bg-slate-50 aspect-[16/10] overflow-hidden">
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain p-4"
                    unoptimized
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : null}
                {/* Placeholder shown when no image */}
                {!image && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="material-symbols-outlined text-7xl text-primary">
                      {lightbox?.kind === "cert" ? "verified" : "emoji_events"}
                    </span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-4 flex justify-between items-center">
                <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                  {year}
                </span>
                {image && (
                  <a
                    href={image}
                    download
                    className="flex items-center gap-1.5 font-label text-xs text-secondary hover:text-secondary-dim transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
