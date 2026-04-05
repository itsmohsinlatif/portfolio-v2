"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bio from "@/data/bio.json";
import { useLang } from "@/context/LanguageContext";
import { contentTranslations } from "@/locales/translations";

/* Picsum IDs are deterministic — same seed = same image every time */
const projectVisuals = [
  {
    /* AI Compliance / legal-tech / data */
    imgSrc: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=700&h=360&fit=crop&q=75&auto=format&fm=webp",
    fallbackGradient: "from-blue-900/60 via-primary-dim/30 to-transparent",
    accentIcon: "policy",
  },
  {
    /* Company profiling / business automation */
    imgSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&h=360&fit=crop&q=75&auto=format&fm=webp",
    fallbackGradient: "from-cyan-900/60 via-secondary/20 to-transparent",
    accentIcon: "business",
  },
  {
    /* Educational tech / knowledge graph */
    imgSrc: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&h=360&fit=crop&q=75&auto=format&fm=webp",
    fallbackGradient: "from-purple-900/60 via-tertiary-dim/20 to-transparent",
    accentIcon: "school",
  },
];

const tagColors = [
  "text-primary   bg-primary/10  border-primary/20",
  "text-secondary bg-secondary/10 border-secondary/20",
  "text-tertiary  bg-tertiary/10  border-tertiary/20",
];

export default function Projects() {
  const { t, locale } = useLang();
  const content = contentTranslations[locale];
  return (
    <section className="px-5 sm:px-8 lg:px-32 py-20 sm:py-32" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <p className="font-label text-secondary text-xs tracking-widest uppercase mb-3">{t.sections.projects.label}</p>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight">{t.sections.projects.heading}</h2>
          </div>
          <a
            href="https://github.com/itsmohsinlatif"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-secondary text-sm border-b-2 border-secondary/20 hover:border-secondary transition-all pb-1 hidden md:block"
          >
            {t.sections.projects.viewGithub}
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bio.projects.map((project, i) => {
            const visual = projectVisuals[i % projectVisuals.length];
            const color  = tagColors[i % tagColors.length];
            const lc     = content?.projects[i];
            const role        = lc?.role        ?? project.role;
            const description = lc?.description ?? project.description;
            const highlight   = lc?.highlight   ?? project.highlight;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-surface-container-high dark:bg-surface-container-high light:bg-white rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-white/5 dark:border-white/5 light:border-black/5 hover:border-white/10 shadow-sm hover:shadow-[0_8px_40px_rgba(0,112,235,0.12)]"
              >
                {/* ── Card visual header ── */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={visual.imgSrc}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${visual.fallbackGradient} opacity-80`} />
                  {/* Accent icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 glass-panel rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-lg">{visual.accentIcon}</span>
                  </div>
                  {/* Date badge */}
                  <span className="absolute bottom-3 left-3 font-label text-[9px] text-white/70 bg-black/40 backdrop-blur px-2 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>

                {/* ── Card body ── */}
                <div className="p-7">
                  {/* Role + tags */}
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <span className={`font-label text-[9px] px-2.5 py-1 border rounded-full uppercase tracking-widest ${color}`}>
                      {role}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label text-[9px] px-2 py-0.5 bg-surface-variant dark:bg-surface-variant light:bg-slate-100 text-on-surface-variant rounded uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-headline text-lg font-bold mb-2 leading-tight">{project.title}</h3>
                  <p className="text-on-surface-variant dark:text-on-surface-variant light:text-neutral-500 text-sm mb-5 leading-relaxed">
                    {description}
                  </p>

                  {/* Highlight chip */}
                  <div className="glass-panel px-3 py-1.5 rounded-lg mb-5 border border-secondary/10 inline-block">
                    <span className="font-label text-[10px] text-secondary uppercase tracking-widest">
                      ⚡ {highlight}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <span className="material-symbols-outlined text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-neutral-900 cursor-pointer transition-colors">code</span>
                      <span className="material-symbols-outlined text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-neutral-900 cursor-pointer transition-colors">open_in_new</span>
                    </div>
                    <span className="font-label text-[10px] text-primary uppercase">Deployed</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
