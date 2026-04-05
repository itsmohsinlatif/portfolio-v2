"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bio from "@/data/bio.json";

/* ─── Knowledge base built from bio.json ─── */
type Intent = {
  patterns: string[];
  response: () => string;
};

const kb: Intent[] = [
  {
    patterns: ["hello", "hi", "hey", "greet", "good morning", "good evening"],
    response: () =>
      `Hi! I'm Mohsin's AI assistant. I can answer questions about his skills, experience, projects, certifications, or how to get in touch. What would you like to know?`,
  },
  {
    patterns: ["skill", "tech", "stack", "tools", "language", "know", "use", "python", "azure", "sql", "power bi"],
    response: () => {
      const s = bio.skills;
      return `**Tech Skills:**\n• **Programming:** ${s.Programming.join(", ")}\n• **Data Analysis:** ${s["Data Analysis"].join(", ")}\n• **Gen AI:** ${s["Generative & Agentic AI"].slice(0, 6).join(", ")}\n• **Tools:** ${s.Tools.slice(0, 7).join(", ")}`;
    },
  },
  {
    patterns: ["experience", "work", "job", "company", "bsh", "optimusfox", "fiverr", "career"],
    response: () => {
      return bio.experience
        .map((e) => `**${e.role}** @ ${e.company} (${e.period})`)
        .join("\n");
    },
  },
  {
    patterns: ["project", "built", "deploy", "rag", "torrk", "edulga", "compliance", "tire"],
    response: () => {
      return bio.projects
        .map((p) => `**${p.title}** — ${p.highlight}`)
        .join("\n");
    },
  },
  {
    patterns: ["cert", "certified", "microsoft", "databricks", "qualification", "credential"],
    response: () => {
      return bio.certifications
        .map((c) => `• ${c.name} (${c.year})`)
        .join("\n");
    },
  },
  {
    patterns: ["education", "study", "degree", "university", "btu", "cui", "master", "bachelor", "ms", "bsc"],
    response: () => {
      return bio.education
        .map((e) => `**${e.degree}** — ${e.institution}, ${e.location} (${e.period})`)
        .join("\n");
    },
  },
  {
    patterns: ["contact", "email", "reach", "get in touch", "hire", "message", "connect"],
    response: () =>
      `**Contact Mohsin:**\n📧 ${bio.email}\n🔗 LinkedIn: ${bio.linkedin}\n🌐 ${bio.website}`,
  },
  {
    patterns: ["available", "availability", "freelance", "open", "hire", "opportunity"],
    response: () =>
      `Mohsin is currently **${bio.availability}**. He's based in ${bio.location} and open to remote or hybrid positions. Reach out at ${bio.email}!`,
  },
  {
    patterns: ["location", "where", "city", "berlin", "germany", "based"],
    response: () => `Mohsin is based in **${bio.location}**, currently working at ${bio.experience[0].company}.`,
  },
  {
    patterns: ["summary", "about", "who", "mohsin", "yourself", "introduce"],
    response: () => bio.summary,
  },
  {
    patterns: ["award", "prize", "winner", "recognition", "achievement"],
    response: () => {
      return bio.awards
        .map((a) => `🏆 **${a.title}** — ${a.org}, ${a.year}`)
        .join("\n");
    },
  },
  {
    patterns: ["linkedin", "github", "twitter", "social", "profile"],
    response: () =>
      `**Mohsin's Profiles:**\n🔗 LinkedIn: ${bio.linkedin}\n💻 GitHub: ${bio.github}\n🐦 Twitter: ${bio.twitter}\n🌐 Website: ${bio.website}`,
  },
];

function matchIntent(input: string): string {
  const lower = input.toLowerCase();
  for (const intent of kb) {
    if (intent.patterns.some((p) => lower.includes(p))) {
      return intent.response();
    }
  }
  return `I can answer questions about Mohsin's **skills**, **experience**, **projects**, **certifications**, **education**, or **contact info**. Try asking one of those!`;
}

/* Simple markdown-ish renderer */
function renderText(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i} className="block">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="font-semibold dark:text-white text-neutral-900">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </span>
    );
  });
}

type Message = { role: "user" | "bot"; text: string };

const SUGGESTIONS = ["About Mohsin", "Tech skills", "Projects", "Certifications", "How to hire?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm Mohsin's AI assistant. Ask me about his skills, projects, certifications, or availability!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = matchIntent(text);
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* FAB button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-gradient-to-tr from-primary-dim to-secondary rounded-full shadow-[0_0_30px_rgba(0,112,235,0.45)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        aria-label="Open chatbot"
      >
        <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          {open ? "close" : "smart_toy"}
        </span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[99] w-[340px] glass-panel-solid rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 dark:border-white/5 light:border-black/5 bg-gradient-to-r from-primary-dim/10 to-secondary/5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-dim to-secondary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  smart_toy
                </span>
              </div>
              <div>
                <p className="font-headline text-sm font-bold adaptive-text">Mohsin&apos;s Assistant</p>
                <p className="font-label text-[9px] text-green-400 uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block" />
                  Online
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto p-1.5 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"
                    }`}
                  >
                    <span className="text-on-surface-variant dark:text-on-surface-variant light:text-neutral-500 text-xs font-label leading-loose">
                      {renderText(msg.text)}
                    </span>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="chat-bubble-bot px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="font-label text-[10px] px-2.5 py-1 rounded-full border border-primary-dim/30 text-primary hover:bg-primary-dim/10 transition-all uppercase tracking-wider"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-3">
              <div className="flex gap-2 bg-surface-container-high dark:bg-surface-container-high light:bg-slate-100 rounded-xl px-3 py-2 border border-white/5 dark:border-white/5 light:border-black/8 focus-within:border-secondary/40 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-600 dark:placeholder:text-neutral-600 light:placeholder:text-neutral-400"
                />
                <button
                  onClick={() => send(input)}
                  disabled={!input.trim()}
                  className="p-1 rounded-lg bg-primary-dim hover:bg-primary disabled:opacity-30 transition-all text-white"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
