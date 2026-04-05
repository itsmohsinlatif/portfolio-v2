"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navItems = [
  { icon: "home",         label: "Home",     href: "#",         section: "" },
  { icon: "psychology",   label: "Skills",   href: "#stack",    section: "stack" },
  { icon: "rocket_launch",label: "Projects", href: "#projects", section: "projects" },
  { icon: "route",        label: "Timeline", href: "#timeline", section: "timeline" },
  { icon: "verified",     label: "Awards",   href: "#awards",   section: "awards" },
  { icon: "mail",         label: "Contact",  href: "#contact",  section: "contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  /* Track which section is in the viewport */
  useEffect(() => {
    const sections = navItems
      .filter((n) => n.section)
      .map((n) => document.getElementById(n.section))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section: string) => {
    setActive(section);
    setSettingsOpen(false);
  };

  return (
    /* Sidebar starts below the top nav (~72px) */
    <aside className="fixed left-0 top-0 h-full w-16 hover:w-56 transition-all duration-500 z-40 border-r border-white/5 dark:border-white/5 light:border-black/5 bg-neutral-900/80 light:bg-white/90 backdrop-blur-2xl hidden lg:flex flex-col overflow-hidden group">

      {/* ── Top spacer so M doesn't overlap the TopNav ── */}
      <div className="h-[72px] flex-shrink-0" />

      {/* Avatar / logo */}
      <div className="flex flex-col items-center mb-6 px-3">
        <div className="w-9 h-9 rounded-lg bg-primary-dim/20 border border-primary-dim/30 flex items-center justify-center flex-shrink-0">
          <span className="font-black text-primary text-sm font-headline">M</span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-center">
          <p className="font-label text-[9px] tracking-[0.2em] text-primary uppercase whitespace-nowrap">Mohsin.v2</p>
          <p className="font-label text-[8px] text-neutral-500 light:text-neutral-400 uppercase">Active</p>
        </div>
      </div>

      {/* Nav items */}
      <div className="flex-1 flex flex-col gap-1 px-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = item.section === "" ? active === "" : active === item.section;
          return (
            <a
              key={item.section}
              href={item.href}
              onClick={() => handleNavClick(item.section)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary-dim/15 text-primary border-r-2 border-primary-dim shadow-[inset_0_0_12px_rgba(0,112,235,0.08)]"
                  : "text-neutral-500 dark:text-neutral-500 light:text-neutral-400 hover:text-neutral-200 light:hover:text-neutral-800 hover:bg-neutral-800/50 light:hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined text-xl flex-shrink-0">{item.icon}</span>
              <span className="font-label text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Settings panel */}
      <div className="px-3 border-t border-white/5 dark:border-white/5 light:border-black/5 pt-4 pb-6 flex flex-col gap-2 relative">
        <button
          onClick={() => setSettingsOpen((o) => !o)}
          className={`flex items-center gap-3 p-3 rounded-xl transition-all w-full ${
            settingsOpen
              ? "bg-primary-dim/15 text-primary"
              : "text-neutral-500 dark:text-neutral-500 light:text-neutral-400 hover:text-neutral-200 light:hover:text-neutral-800 hover:bg-neutral-800/50 light:hover:bg-slate-100"
          }`}
        >
          <span className="material-symbols-outlined text-xl flex-shrink-0">settings</span>
          <span className="font-label text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 whitespace-nowrap">Settings</span>
        </button>

        {/* Settings dropdown panel */}
        {settingsOpen && (
          <div className="absolute bottom-full left-0 right-0 mb-2 mx-3 glass-panel rounded-xl p-4 space-y-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Theme toggle */}
            <div className="flex items-center justify-between">
              <span className="font-label text-[10px] text-on-surface-variant dark:text-on-surface-variant light:text-neutral-500 uppercase tracking-widest whitespace-nowrap">
                Theme
              </span>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary-dim/20 text-primary hover:bg-primary-dim/30 transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
                <span className="font-label text-[9px] uppercase tracking-widest">
                  {theme === "dark" ? "Light" : "Dark"}
                </span>
              </button>
            </div>

            {/* Quick links */}
            <div className="border-t border-white/5 dark:border-white/5 light:border-black/5 pt-3 space-y-1.5">
              {[
                { icon: "link",     label: "LinkedIn",  href: "https://www.linkedin.com/in/itsmohsinlatif/" },
                { icon: "language", label: "Website",   href: "https://www.mohsinlatif.com" },
                { icon: "mail",     label: "Email",     href: "mailto:itsmohsinlatif@gmail.com" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500 light:text-neutral-400 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">{l.icon}</span>
                  <span className="font-label text-[10px] uppercase tracking-wider whitespace-nowrap">{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
