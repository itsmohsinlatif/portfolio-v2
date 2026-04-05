export type Locale = "en" | "de" | "ur";

export const translations = {
  en: {
    // Nav
    nav: { projects: "Projects", stack: "Stack", timeline: "Timeline", awards: "Awards", contact: "Contact", downloadCV: "Download CV", hireMe: "Hire Me" },
    // Hero
    hero: {
      intro: "Hi, I'm Mohsin —",
      line1: "I Build AI",
      line2: "That Thinks & Scales.",
      available: "Available for Projects",
      location: "Berlin, Germany",
      description: "Microsoft Certified AI & Data Analyst at BSH Hausgeräte GmbH, Berlin. Specialising in LLMs, RAG pipelines & agentic AI systems for Industry 4.0.",
      connectLinkedIn: "Connect on LinkedIn",
      viewProjects: "View Projects",
      emailMe: "Email Me",
    },
    // Ticker
    ticker: { label: "Tech Arsenal" },
    // Sections
    sections: {
      stack: { label: "Neural Engine", heading: "Tech Stack & Infrastructure" },
      projects: { label: "Portfolio", heading: "Project Deployments", viewGithub: "View GitHub →" },
      timeline: { label: "Roadmap", heading: "Career Trajectory" },
      awards: { label: "Validation", heading: "Certifications & Awards", clickHint: "Click any card to view certificate", awardsSubHeading: "Awards" },
      contact: { label: "", heading: "Start a Connection", availability: "Current Availability: Open for High-Impact Projects", transmit: "Transmit Request", success: "Message Transmitted!", successSub: "I'll get back to you within 24 hours.", fieldName: "Identity", fieldEmail: "Communication", fieldMsg: "Project Specification", placeholderName: "Your Name", placeholderEmail: "Email Address", placeholderMsg: "Describe your project or how I can help..." },
    },
    // Stats
    stats: [
      { value: "6+",  label: "MS Certifications" },
      { value: "4+",  label: "Years Experience"  },
      { value: "95%", label: "RAG Accuracy"       },
      { value: "70%", label: "Effort Reduction"   },
    ],
    // Timeline
    active: "Active", ongoing: "Ongoing",
    deployed: "Deployed",
    // Chatbot
    chatbot: { title: "Mohsin's Assistant", online: "Online", placeholder: "Ask anything..." },
    // Footer
    footer: { copy: "© 2025 Mohsin Latif · All Systems Operational" },
  },

  de: {
    nav: { projects: "Projekte", stack: "Stack", timeline: "Verlauf", awards: "Auszeichnungen", contact: "Kontakt", downloadCV: "Lebenslauf", hireMe: "Einstellen" },
    hero: {
      intro: "Hallo, ich bin Mohsin —",
      line1: "Ich entwickle KI,",
      line2: "die denkt & skaliert.",
      available: "Verfügbar für Projekte",
      location: "Berlin, Deutschland",
      description: "Microsoft-zertifizierter KI- & Datenanalyst bei BSH Hausgeräte GmbH, Berlin. Spezialisiert auf LLMs, RAG-Pipelines & agentische KI-Systeme für Industrie 4.0.",
      connectLinkedIn: "LinkedIn verbinden",
      viewProjects: "Projekte ansehen",
      emailMe: "E-Mail senden",
    },
    ticker: { label: "Tech-Arsenal" },
    sections: {
      stack: { label: "Neural Engine", heading: "Technologie-Stack & Infrastruktur" },
      projects: { label: "Portfolio", heading: "Projekt-Deployments", viewGithub: "GitHub ansehen →" },
      timeline: { label: "Karrierekarte", heading: "Karriereverlauf" },
      awards: { label: "Validierung", heading: "Zertifizierungen & Auszeichnungen", clickHint: "Klicken Sie auf eine Karte, um das Zertifikat anzuzeigen", awardsSubHeading: "Auszeichnungen" },
      contact: { label: "", heading: "Verbindung aufnehmen", availability: "Verfügbarkeit: Offen für wirkungsvolle Projekte", transmit: "Anfrage senden", success: "Nachricht gesendet!", successSub: "Ich melde mich innerhalb von 24 Stunden.", fieldName: "Name", fieldEmail: "Kommunikation", fieldMsg: "Projektbeschreibung", placeholderName: "Ihr Name", placeholderEmail: "E-Mail-Adresse", placeholderMsg: "Beschreiben Sie Ihr Projekt..." },
    },
    stats: [
      { value: "6+",  label: "MS-Zertifikate"    },
      { value: "4+",  label: "Jahre Erfahrung"    },
      { value: "95%", label: "RAG-Genauigkeit"    },
      { value: "70%", label: "Aufwandsreduktion"  },
    ],
    active: "Aktiv", ongoing: "Laufend",
    deployed: "Deployed",
    chatbot: { title: "Mohsins Assistent", online: "Online", placeholder: "Fragen Sie alles..." },
    footer: { copy: "© 2025 Mohsin Latif · Alle Systeme betriebsbereit" },
  },

  ur: {
    nav: { projects: "منصوبے", stack: "ٹیک اسٹیک", timeline: "سفر", awards: "اعزازات", contact: "رابطہ", downloadCV: "سی وی ڈاؤنلوڈ", hireMe: "ملازمت دیں" },
    hero: {
      intro: "ہیلو، میں محسن ہوں —",
      line1: "میں اے آئی بناتا ہوں",
      line2: "جو سوچے اور بڑھے۔",
      available: "منصوبوں کے لیے دستیاب",
      location: "برلن، جرمنی",
      description: "مائیکروسافٹ سرٹیفائیڈ اے آئی & ڈیٹا تجزیہ کار، BSH Hausgeräte GmbH برلن۔ LLMs، RAG پائپ لائنز اور ایجنٹک اے آئی سسٹمز میں مہارت۔",
      connectLinkedIn: "LinkedIn پر جڑیں",
      viewProjects: "منصوبے دیکھیں",
      emailMe: "ای میل کریں",
    },
    ticker: { label: "ٹیک آرسنل" },
    sections: {
      stack: { label: "نیورل انجن", heading: "ٹیک اسٹیک اور انفراسٹرکچر" },
      projects: { label: "پورٹ فولیو", heading: "منصوبے", viewGithub: "GitHub دیکھیں →" },
      timeline: { label: "نقشہ راہ", heading: "کیریئر کا سفر" },
      awards: { label: "تصدیق", heading: "سرٹیفیکیٹس اور اعزازات", clickHint: "سرٹیفیکیٹ دیکھنے کے لیے کلک کریں", awardsSubHeading: "اعزازات" },
      contact: { label: "", heading: "رابطہ کریں", availability: "دستیابی: اثر انگیز منصوبوں کے لیے کھلا ہوں", transmit: "درخواست بھیجیں", success: "پیغام موصول ہو گیا!", successSub: "میں 24 گھنٹوں میں جواب دوں گا۔", fieldName: "شناخت", fieldEmail: "رابطہ", fieldMsg: "منصوبے کی تفصیل", placeholderName: "آپ کا نام", placeholderEmail: "ای میل پتہ", placeholderMsg: "اپنے منصوبے کی تفصیل بتائیں..." },
    },
    stats: [
      { value: "6+",  label: "MS سرٹیفیکیٹس" },
      { value: "4+",  label: "سال کا تجربہ"   },
      { value: "95%", label: "RAG درستگی"      },
      { value: "70%", label: "محنت میں کمی"    },
    ],
    active: "فعال", ongoing: "جاری",
    deployed: "تعینات",
    chatbot: { title: "محسن کا معاون", online: "آن لائن", placeholder: "کچھ بھی پوچھیں..." },
    footer: { copy: "© 2025 محسن لطیف · تمام سسٹم فعال ہیں" },
  },
};

export type Translations = (typeof translations)["en"];

// ── Locale-specific content translations (project descriptions, job bullets) ──
export type ContentTranslation = {
  projects: Array<{ role: string; description: string; highlight: string }>;
  experience: Array<{ role: string; bullets: string[] }>;
  education: Array<{ degree: string }>;
};

export const contentTranslations: Partial<Record<Locale, ContentTranslation>> = {
  de: {
    projects: [
      {
        role: "KI-Ingenieur",
        description: "Entwicklung eines Compliance-Empfehlungssystems mit fortschrittlichen RAG-Abruftechniken zur Verarbeitung von über 50.000 Reifenrichtlinien in US-Bundesstaaten – 95% Genauigkeit bei regulatorischen Compliance-Vorschlägen.",
        highlight: "95% Genauigkeit · 50k+ Richtlinien",
      },
      {
        role: "Entwickler",
        description: "Entwicklung einer KI-gestützten Lösung mit DeepSeek- und Llama-Modellen sowie PostgreSQL-Integration zur automatisierten Generierung von Unternehmensprofilen – manueller Aufwand um 70% reduziert.",
        highlight: "70% weniger manueller Aufwand",
      },
      {
        role: "Data-Science-Ingenieur",
        description: "Datenanalyse und Implementierung von Graph RAG mit Graph-Datenbanken und OpenAI-Modellen zur Verbesserung des Lernerlebnisses durch personalisierte Bildungsempfehlungen.",
        highlight: "Personalisierte KI-Empfehlungen",
      },
    ],
    experience: [
      {
        role: "Werkstudent Datenanalyse",
        bullets: [
          "Mitwirkung am 'Shopfloor Analyzer'-Projekt im BED-Team durch Integration und Analyse von IFP-Geräteprotokollen zur Identifikation von Produktionstrends.",
          "Entwicklung interaktiver Dashboards für GPOs/LPOs zur Visualisierung von Protokolldaten – Fehlerbeseitigungszeit erheblich verkürzt und Workflows optimiert.",
          "Konzeption und Entwicklung proprietärer agentischer KI-Modelle für KI-gestützte Echtzeit-Diagnostik bei Produktionslinien-Problemen.",
          "Zusammenarbeit mit funktionsübergreifenden Teams (Engineering, Operations, KI) zur Einführung skalierbarer Industrie-4.0-Lösungen.",
        ],
      },
      {
        role: "KI-Ingenieur",
        bullets: [
          "Leitung der Data Fabric-Integration als Ersatz für Azure Analysis Service – 30% Kostenreduzierung und Beseitigung von Datenredundanz.",
          "Führung eines 4-köpfigen Teams zur Entwicklung eines Denial-Appeal-Moduls mit ChatGPT zur Steigerung der Betriebseffizienz.",
          "Implementierung der RAG-Technik zum Training mehrerer GPT-basierter Bots für verbesserte Entscheidungsfindung aus Medicaid/Medicare-Richtlinien.",
          "Verwaltung und Konfiguration von Azure-Diensten (Azure OpenAI, AI Services, Cognitive Search) für optimale Leistung.",
          "Orchestrierung der Datenmigration von Jira zu Microsoft DevOps mit 40% Kosteneinsparung.",
        ],
      },
      {
        role: "Data-Science-Freelancer",
        bullets: [
          "Umfassende Dienstleistungen in Data Science, Machine Learning, Graph-Datenbanken und Microsoft Azure-Technologien.",
          "Entwicklung von ChatGPT-Chatbots mit GPT-3.5 Turbo und GPT-4-Modellen.",
          "Training und Deployment von ML-Modellen zur Vorhersage von SQA-Testergebnissen in DevOps-Pipelines.",
          "Konvertierung von SBML-Medizindaten in Neo4j Graph-Datenbank.",
        ],
      },
    ],
    education: [
      { degree: "M.Sc. in Künstlicher Intelligenz" },
      { degree: "B.Sc. in Informatik" },
    ],
  },
  ur: {
    projects: [
      {
        role: "اے آئی انجینئر",
        description: "امریکی ریاستوں میں 50 ہزار سے زائد ٹائر پالیسیوں پر کارروائی کے لیے RAG تکنیک سے ایک تعمیل سفارش نظام تیار کیا – قانونی تعمیل کے مشوروں میں 95% درستگی۔",
        highlight: "95% درستگی · 50 ہزار+ پالیسیاں",
      },
      {
        role: "ڈویلپر",
        description: "DeepSeek اور Llama ماڈلز اور PostgreSQL انٹیگریشن کے ساتھ ایک اے آئی حل تیار کیا جو کمپنی پروفائل خودکار طریقے سے بناتا ہے – دستی محنت 70% کم ہوئی۔",
        highlight: "70% دستی محنت میں کمی",
      },
      {
        role: "ڈیٹا سائنس انجینئر",
        description: "گراف ڈیٹا بیس اور OpenAI ماڈلز کے ساتھ Graph RAG کا نفاذ کرتے ہوئے ڈیٹا تجزیہ کیا – ذاتی نوعیت کی تعلیمی سفارشات کے ذریعے سیکھنے کا تجربہ بہتر ہوا۔",
        highlight: "ذاتی اے آئی سفارشات",
      },
    ],
    experience: [
      {
        role: "ورکنگ اسٹوڈنٹ ڈیٹا تجزیہ",
        bullets: [
          "BED ٹیم میں 'Shopfloor Analyzer' پراجیکٹ میں IFP آلات لاگز کو مربوط اور تجزیہ کر کے پیداواری رجحانات کو سامنے لایا۔",
          "GPOs/LPOs کے لیے انٹرایکٹو ڈیش بورڈ تیار کیے جن سے خرابی دور کرنے کا وقت نمایاں طور پر کم ہوا اور ورک فلو بہتر ہوئے۔",
          "پیداواری لائن مسائل کی ریئل ٹائم اے آئی ڈائیگنوسٹکس کے لیے ایجنٹک اے آئی ماڈلز ڈیزائن کیے۔",
          "انجینئرنگ، آپریشنز اور اے آئی ٹیموں کے ساتھ مل کر انڈسٹری 4.0 حل تعینات کیے۔",
        ],
      },
      {
        role: "اے آئی انجینئر",
        bullets: [
          "Data Fabric انٹیگریشن کی قیادت کی جس سے Azure Analysis Service کی جگہ لی اور 30% لاگت کم ہوئی۔",
          "ChatGPT کا استعمال کرتے ہوئے Denials Appeal ماڈیول کے لیے 4 افراد کی ٹیم کی قیادت کی۔",
          "Medicaid/Medicare پالیسیوں سے فیصلہ سازی بہتر بنانے کے لیے RAG تکنیک سے متعدد GPT بوٹس تربیت دیے۔",
          "Azure سروسز (Azure OpenAI, AI Services, Cognitive Search) کی بہترین کارکردگی کے لیے ترتیب اور انتظام کیا۔",
          "Jira سے Microsoft DevOps میں ڈیٹا منتقلی کا انتظام کیا – 40% لاگت کی بچت ہوئی۔",
        ],
      },
      {
        role: "ڈیٹا سائنس فری لانسر",
        bullets: [
          "Data Science، Machine Learning، Graph Databases اور Microsoft Azure ٹیکنالوجیز میں جامع خدمات فراہم کیں۔",
          "GPT-3.5 Turbo اور GPT-4 ماڈلز کے ساتھ ChatGPT چیٹ بوٹس تیار کیے۔",
          "DevOps Pipelines میں SQA ٹیسٹ نتائج کی پیشگوئی کے لیے ML ماڈلز تربیت دیے اور تعینات کیے۔",
          "SBML طبی ڈیٹا کو Neo4j Graph Database میں تبدیل کیا۔",
        ],
      },
    ],
    education: [
      { degree: "ایم ایس سی - مصنوعی ذہانت" },
      { degree: "بی ایس سی - کمپیوٹر سائنس" },
    ],
  },
};
