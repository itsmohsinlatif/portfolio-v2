"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const stackItems = [
  {
    title: "Python & Data Science",
    label: "Core Language",
    iconColor: "text-primary",
    description: "Pandas, NumPy, Scikit-learn, TensorFlow for advanced analytics and ML pipelines.",
    span: "md:col-span-2",
    tags: ["Python", "Pandas", "TensorFlow", "Scikit-learn"],
    logos: [
      { src: "https://cdn.simpleicons.org/python/3776AB", alt: "Python" },
      { src: "https://cdn.simpleicons.org/pandas/150458", alt: "Pandas" },
      { src: "https://cdn.simpleicons.org/tensorflow/FF6F00", alt: "TensorFlow" },
      { src: "https://cdn.simpleicons.org/scikitlearn/F7931E", alt: "Scikit-learn" },
    ],
  },
  {
    title: "Microsoft Azure",
    label: "Cloud Platform",
    iconColor: "text-secondary",
    description: "Azure AI Foundry, Azure OpenAI, Cognitive Search, AutoML.",
    span: "",
    tags: ["Azure OpenAI", "AI Foundry", "AutoML"],
    logos: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", alt: "Azure" },
      { src: "https://cdn.simpleicons.org/openai/0078D4", alt: "Azure OpenAI" },
      { src: "https://cdn.simpleicons.org/microsoftazure/50B2FF", alt: "Azure AI" },
    ],
  },
  {
    title: "Power BI",
    label: "Visualization",
    iconColor: "text-tertiary-dim",
    description: "Interactive dashboards with DAX for business stakeholders.",
    span: "",
    tags: ["Power BI", "DAX", "Data Fabric"],
    logos: [
      { src: "/icons/powerbi.svg", alt: "Power BI" },
      { src: "/icons/dax.svg", alt: "DAX" },
      { src: "https://cdn.simpleicons.org/microsoftexcel/217346", alt: "Excel" },
    ],
  },
  {
    title: "Agentic AI Systems",
    label: "Agents & LLMs",
    iconColor: "text-secondary",
    description: "Multi-agent orchestration with LangGraph & n8n. GPT-4o, Claude 3.5, Gemini, DeepSeek, Ollama for production agentic pipelines and RAG systems.",
    span: "md:col-span-2",
    tags: ["LangGraph", "RAG", "Claude", "Gemini", "GPT-4o", "n8n", "Ollama"],
    badge: { text: "ACTIVE", dot: true },
    logos: [
      { src: "https://cdn.simpleicons.org/openai/00d2fd", alt: "OpenAI" },
      { src: "https://cdn.simpleicons.org/anthropic/d4a574", alt: "Anthropic / Claude" },
      { src: "https://cdn.simpleicons.org/googlegemini/8E75B2", alt: "Gemini" },
      { src: "https://cdn.simpleicons.org/langchain/1C3C3C", alt: "LangChain" },
      { src: "https://cdn.simpleicons.org/ollama/888888", alt: "Ollama" },
    ],
  },
  {
    title: "Neo4j & Graph DB",
    label: "Graph Analytics",
    iconColor: "text-primary",
    description: "Cypher queries, SBML data modeling, Graph RAG.",
    span: "",
    tags: ["Neo4j", "Cypher", "Graph RAG"],
    logos: [
      { src: "https://cdn.simpleicons.org/neo4j/008CC1", alt: "Neo4j" },
      { src: "https://cdn.simpleicons.org/postgresql/4169E1", alt: "PostgreSQL" },
    ],
  },
  {
    title: "n8n & Automation",
    label: "Agentic AI",
    iconColor: "text-tertiary",
    description: "Workflow automation, agentic pipelines, Azure AI Foundry.",
    span: "",
    tags: ["n8n", "LangGraph", "Azure AI"],
    logos: [
      { src: "https://cdn.simpleicons.org/n8n/EA4B71", alt: "n8n" },
      { src: "https://cdn.simpleicons.org/databricks/FF3621", alt: "Databricks" },
    ],
  },
];

export default function TechStack() {
  const { t } = useLang();
  return (
    <section className="px-5 sm:px-8 lg:px-32 py-20 sm:py-24 section-alt" id="stack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="font-label text-secondary text-xs tracking-widest uppercase mb-3">{t.sections.stack.label}</p>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight">
            {t.sections.stack.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stackItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.span} glass-panel p-7 rounded-xl flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(0,210,253,0.08)] transition-all cursor-default min-h-[200px]`}
            >
              {/* Header row */}
              <div className="flex justify-between items-start mb-5">
                {/* Tech logos row */}
                <div className="flex gap-2 items-center">
                  {item.logos.map((logo) => (
                    <div
                      key={logo.alt}
                      className="logo-box w-8 h-8 rounded-lg bg-surface-container-highest dark:bg-surface-container-highest light:bg-slate-100 flex items-center justify-center p-1.5"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                        unoptimized
                        onError={(e) => {
                          const box = (e.target as HTMLImageElement).closest(".logo-box") as HTMLElement | null;
                          if (box) box.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* Badge */}
                <div className="flex items-center gap-1.5">
                  {item.badge?.dot && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  )}
                  <span className="font-label text-[9px] text-primary dark:text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-tighter whitespace-nowrap">
                    {item.badge ? item.badge.text : item.label}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div>
                <h3 className="font-headline text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-on-surface-variant dark:text-on-surface-variant light:text-neutral-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label text-[9px] px-2 py-0.5 bg-surface-container-highest dark:bg-surface-container-highest light:bg-slate-100 text-on-surface-variant rounded uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
