"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const tools = [
  { name: "Python",        src: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "TensorFlow",    src: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "PyTorch",       src: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "Scikit-learn",  src: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
  { name: "Pandas",        src: "https://cdn.simpleicons.org/pandas/150458" },
  { name: "OpenAI",        src: "https://cdn.simpleicons.org/openai/412991" },
  { name: "Anthropic",     src: "https://cdn.simpleicons.org/anthropic/d4a574" },
  { name: "LangChain",     src: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { name: "Microsoft Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "Power BI",      src: "/icons/powerbi.svg" },
  { name: "Grafana",       src: "https://cdn.simpleicons.org/grafana/F46800" },
  { name: "Databricks",    src: "https://cdn.simpleicons.org/databricks/FF3621" },
  { name: "Neo4j",         src: "https://cdn.simpleicons.org/neo4j/008CC1" },
  { name: "PostgreSQL",    src: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "n8n",           src: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Docker",        src: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Git",           src: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub",        src: "https://cdn.simpleicons.org/github/cccccc" },
  { name: "Linux",         src: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Elasticsearch", src: "https://cdn.simpleicons.org/elastic/005571" },
  { name: "Jira",          src: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "FastAPI",       src: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Jupyter",       src: "https://cdn.simpleicons.org/jupyter/F37626" },
  { name: "R",             src: "https://cdn.simpleicons.org/r/276DC3" },
];

const doubled = [...tools, ...tools];

export default function ToolsTicker() {
  const { t } = useLang();
  return (
    <div className="border-y border-white/5 dark:border-white/5 light:border-black/8"
      style={{ backgroundColor: "var(--bg)" }}>

      {/* Label row — sits above the scroll strip, NOT overlapping */}
      <div className="flex items-center justify-center gap-3 pt-4 pb-1">
        <span className="h-[1px] w-8 bg-secondary/40" />
        <span className="font-label text-[9px] text-on-surface-variant uppercase tracking-[0.3em]">
          {t.ticker.label}
        </span>
        <span className="h-[1px] w-8 bg-secondary/40" />
      </div>

      {/* Scrolling strip — fixed height, icons only (no hover text jitter) */}
      <div className="relative overflow-hidden py-3">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />

        <div className="flex animate-marquee">
          {doubled.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              title={tool.name}
              className="flex-shrink-0 mx-3 group"
            >
              <div className="ticker-box w-10 h-10 rounded-xl bg-surface-container dark:bg-surface-container light:bg-slate-100/80
                              flex items-center justify-center p-2
                              border border-transparent
                              group-hover:border-primary-dim/30
                              group-hover:bg-primary-dim/10
                              group-hover:shadow-[0_0_14px_rgba(0,112,235,0.18)]
                              transition-all duration-200">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={22}
                  height={22}
                  className="w-full h-full object-contain"
                  unoptimized
                  onError={(e) => {
                    const box = (e.target as HTMLImageElement).closest(".ticker-box") as HTMLElement | null;
                    if (box) box.style.display = "none";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom padding */}
      <div className="pb-3" />
    </div>
  );
}
