"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function Contact() {
  const { t, locale } = useLang();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      access_key: WEB3FORMS_KEY,
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      subject: "New message from mohsinlatif.com",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSent(true);
      } else {
        setError("Something went wrong. Please email me directly.");
      }
    } catch {
      setError("Network error. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 sm:px-8 lg:px-32 py-24 sm:py-32 relative" id="contact"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary-dim/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-headline font-black mb-4 ${locale === "ur" ? "tracking-normal leading-[2]" : "tracking-tighter"}`}>
            <span className="adaptive-text">{t.sections.contact.heading.split(" ").slice(0, -1).join(" ")} </span>
            <span className={`text-gradient-primary ${locale === "ur" ? "py-2 px-2 inline-block" : ""}`}>{t.sections.contact.heading.split(" ").at(-1)}</span>
          </h2>
          <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">
            {t.sections.contact.availability}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-6 sm:p-10 md:p-12 rounded-2xl"
        >
          {sent ? (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-secondary text-6xl mb-4 block">check_circle</span>
              <h3 className="font-headline text-2xl font-bold adaptive-text mb-2">{t.sections.contact.success}</h3>
              <p className="text-on-surface-variant font-label text-sm">{t.sections.contact.successSub}</p>
            </div>
          ) : (
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">
                  {t.sections.contact.fieldName}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.sections.contact.placeholderName}
                  className="form-input w-full rounded-lg px-4 sm:px-5 py-3.5 sm:py-4 text-sm outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">
                  {t.sections.contact.fieldEmail}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.sections.contact.placeholderEmail}
                  className="form-input w-full rounded-lg px-4 sm:px-5 py-3.5 sm:py-4 text-sm outline-none transition-all"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">
                  {t.sections.contact.fieldMsg}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t.sections.contact.placeholderMsg}
                  className="form-input w-full rounded-lg px-4 sm:px-5 py-3.5 sm:py-4 text-sm outline-none transition-all resize-none"
                />
              </div>
              {error && (
                <p className="sm:col-span-2 text-center font-label text-xs text-red-400">{error}</p>
              )}
              <div className="sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-primary-dim to-secondary text-white font-headline font-bold
                             px-10 sm:px-12 py-3.5 sm:py-4 rounded-xl
                             hover:shadow-[0_0_30px_rgba(0,112,235,0.4)] transition-all active:scale-95
                             shadow-[0_0_20px_rgba(0,112,235,0.2)] disabled:opacity-60 disabled:cursor-not-allowed
                             flex items-center gap-2"
                >
                  {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {loading ? "Sending..." : t.sections.contact.transmit}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12"
        >
          {[
            { icon: "mail",     label: "itsmohsinlatif@gmail.com", href: "mailto:itsmohsinlatif@gmail.com" },
            { icon: "language", label: "mohsinlatif.com",          href: "https://www.mohsinlatif.com" },
            { icon: "link",     label: "LinkedIn",                 href: "https://www.linkedin.com/in/itsmohsinlatif/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label text-xs sm:text-sm"
            >
              <span className="material-symbols-outlined text-base text-secondary">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
