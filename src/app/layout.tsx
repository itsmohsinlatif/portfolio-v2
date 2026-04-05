import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";

const BASE_URL = "https://www.mohsinlatif.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mohsin Latif | AI Engineer & Data Scientist — Berlin",
    template: "%s | Mohsin Latif",
  },
  description: "Microsoft Certified AI Engineer & Data Scientist based in Berlin, Germany. Specialising in LLMs, RAG pipelines, Azure AI Foundry, and agentic AI systems for Industry 4.0 at BSH Hausgeräte GmbH.",
  keywords: [
    "AI Engineer", "Data Scientist", "Machine Learning Engineer", "LLM",
    "RAG pipelines", "Azure AI", "Agentic AI", "Berlin", "Germany",
    "Mohsin Latif", "Microsoft Certified", "Azure OpenAI", "LangGraph",
    "Industry 4.0", "Data Analyst", "BSH Hausgeräte", "Python", "Neo4j",
  ],
  authors: [{ name: "Mohsin Latif", url: BASE_URL }],
  creator: "Mohsin Latif",
  publisher: "Mohsin Latif",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "en": BASE_URL, "de": BASE_URL, "ur": BASE_URL },
  },
  openGraph: {
    title: "Mohsin Latif | AI Engineer & Data Scientist",
    description: "Microsoft Certified AI Engineer based in Berlin. LLMs, RAG pipelines, Azure AI & agentic systems for Industry 4.0.",
    url: BASE_URL,
    siteName: "Mohsin Latif",
    locale: "en_US",
    type: "profile",
    firstName: "Mohsin",
    lastName: "Latif",
    username: "itsmohsinlatif",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mohsin Latif — AI Engineer & Data Scientist" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itsmohsinlatif",
    creator: "@itsmohsinlatif",
    title: "Mohsin Latif | AI Engineer & Data Scientist",
    description: "Microsoft Certified AI Engineer in Berlin. LLMs, RAG, Azure AI & agentic systems.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification=45YUzNKDIqQS709AbeabBuHIIsiO5Sd8X8Jso0TfxpU",
  },
  other: {
    "profile:first_name": "Mohsin",
    "profile:last_name": "Latif",
    "profile:username": "itsmohsinlatif",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Mohsin Latif",
      url: BASE_URL,
      image: `${BASE_URL}/profile.avif`,
      jobTitle: "AI Engineer & Data Scientist",
      description: "Microsoft Certified AI Engineer specialising in LLMs, RAG pipelines, Azure AI, and agentic AI systems.",
      email: "itsmohsinlatif@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
      worksFor: {
        "@type": "Organization",
        name: "BSH Hausgeräte GmbH",
        url: "https://www.bsh-group.com",
      },
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Brandenburg University of Technology (BTU)", url: "https://www.b-tu.de" },
        { "@type": "EducationalOrganization", name: "COMSATS University Islamabad" },
      ],
      knowsAbout: [
        "Large Language Models", "Retrieval-Augmented Generation", "Azure AI",
        "Machine Learning", "Data Science", "Agentic AI Systems",
        "Python", "Neo4j", "LangGraph", "Industry 4.0",
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)", credentialCategory: "Professional Certification" },
        { "@type": "EducationalOccupationalCredential", name: "Microsoft Certified: Azure Data Scientist Associate (DP-100)", credentialCategory: "Professional Certification" },
        { "@type": "EducationalOccupationalCredential", name: "Microsoft Certified: Azure AI Engineer Associate (AI-102)", credentialCategory: "Professional Certification" },
      ],
      sameAs: [
        "https://www.linkedin.com/in/itsmohsinlatif/",
        "https://github.com/itsmohsinlatif",
        "https://twitter.com/itsmohsinlatif",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Mohsin Latif — AI Engineer Portfolio",
      description: "Personal portfolio of Mohsin Latif, AI Engineer & Data Scientist based in Berlin.",
      publisher: { "@id": `${BASE_URL}/#person` },
      inLanguage: ["en", "de", "ur"],
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: "Mohsin Latif | AI Engineer & Data Scientist",
      about: { "@id": `${BASE_URL}/#person` },
      mainEntity: { "@id": `${BASE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
