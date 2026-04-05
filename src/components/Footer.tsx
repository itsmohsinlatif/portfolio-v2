"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer
      className="w-full py-10 border-t border-white/5 dark:border-white/5 light:border-black/5 flex flex-col items-center gap-5"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="text-lg font-black font-headline tracking-tighter">
        <span className="text-gradient-primary">MOHSIN</span>
        <span className="text-on-surface-variant mx-2 opacity-40">/</span>
        <span className="font-label text-xs text-on-surface-variant tracking-widest uppercase">AI Engineer</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-label text-[10px] tracking-widest text-on-surface-variant">
        <a href="https://github.com/itsmohsinlatif"           target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/itsmohsinlatif/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="https://www.mohsinlatif.com"                 target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Website</a>
        <a href="mailto:itsmohsinlatif@gmail.com"                              className="hover:text-primary transition-colors">Email</a>
      </div>
      <p className="font-label text-[9px] tracking-widest text-on-surface-variant/40 uppercase">
        {t.footer.copy}
      </p>
    </footer>
  );
}
