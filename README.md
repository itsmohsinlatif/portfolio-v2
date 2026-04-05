# Mohsin Latif — Personal Portfolio v2

A multilingual, AI-accessible personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Features dark/light mode, three languages (English, German, Urdu), a floating AI chatbot, and full SEO + LLM metadata.

**Live:** [mohsinlatif.com](https://www.mohsinlatif.com)

---

## Features

- **Multilingual** — English, German, Urdu with RTL-aware layout
- **Dark / Light mode** — no flash on load, system-aware default
- **AI Chatbot** — floating assistant that reads from `bio.json`
- **Sections** — Hero, Tech Stack, Projects, Timeline, Certifications & Awards, Contact
- **Functional contact form** — powered by Web3Forms (no backend needed)
- **Image lightbox** — click any certificate or award card to view full image
- **SEO ready** — JSON-LD structured data (Person + WebSite schema), OpenGraph, Twitter card, `robots.txt`, `sitemap.xml`, `llms.txt` for AI crawlers
- **Responsive** — mobile-first, portrait hidden on small screens, RTL-safe hero

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 with `@theme` CSS variables |
| Animations | Framer Motion 12 |
| Theme switching | next-themes |
| Icons | Material Symbols, SimpleIcons CDN, Devicons CDN |
| Language | TypeScript 5 |
| Contact form | Web3Forms API |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, JSON-LD, providers
│   ├── page.tsx            # Page assembly (all sections)
│   └── globals.css         # Tailwind v4 @theme variables, utilities
│
├── components/
│   ├── nav/
│   │   ├── TopNav.tsx      # Fixed navbar — language picker, theme toggle, CV download
│   │   └── SideNav.tsx     # Side navigation (desktop)
│   ├── sections/
│   │   ├── Hero.tsx        # Landing — portrait, headline, role rotator, stats
│   │   ├── TechStack.tsx   # Tech cards grid
│   │   ├── Projects.tsx    # Project cards with cover images
│   │   ├── Timeline.tsx    # Career & education alternating timeline
│   │   ├── Certifications.tsx  # Certs + awards with image lightbox
│   │   └── Contact.tsx     # Functional contact form
│   ├── Chatbot.tsx         # Floating AI assistant
│   ├── Footer.tsx          # Footer with social links
│   └── ToolsTicker.tsx     # Auto-scrolling tech arsenal ticker
│
├── context/
│   └── LanguageContext.tsx # Locale state — useLang() hook
│
├── data/
│   └── bio.json            # Single source of truth for all personal data
│
└── locales/
    └── translations.ts     # UI strings (EN/DE/UR) + content translations

public/
├── profile.avif            # Hero portrait (transparent background AVIF)
├── og-image.png            # Open Graph preview image (1200×630px)
├── cv.pdf                  # Downloadable CV — linked in nav
├── certs/                  # Certificate images (.webp)
├── awards/                 # Award images (.webp)
├── icons/                  # Local SVG icons (powerbi.svg, dax.svg)
├── robots.txt              # Crawler permissions including AI bots
├── sitemap.xml             # Sitemap for search engines
└── llms.txt                # Human-readable summary for LLM/AI crawlers
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher (v22 recommended)
- **npm** v10+

> Using nvm? Run: `source ~/.nvm/nvm.sh && nvm use 22`

### 1. Clone & install

```bash
git clone https://github.com/itsmohsinlatif/portfolio-v2.git
cd portfolio-v2
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Configuration

### Personal data — `src/data/bio.json`

**This is the single file you edit to update all content.** The chatbot, timeline, projects, certifications, and awards all read from it automatically.

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "experience": [ ... ],
  "projects":   [ ... ],
  "certifications": [ ... ],
  "awards":     [ ... ],
  "education":  [ ... ]
}
```

### Contact form — `src/components/sections/Contact.tsx`

```ts
const WEB3FORMS_KEY = "your-key-here";
```

Get a free key at **[web3forms.com](https://web3forms.com)** — enter your email, key arrives in seconds. Free plan includes unlimited submissions.

### SEO & metadata — `src/app/layout.tsx`

```ts
const BASE_URL = "https://www.yourdomain.com";
// After deploying, add your Google Search Console token:
verification: { google: "your-token-here" }
```

### Translations — `src/locales/translations.ts`

- **UI strings** (nav labels, button text, section headings): edit the `translations` object for `en`, `de`, `ur`
- **Content text** (job descriptions, project descriptions): edit the `contentTranslations` export for `de` and `ur`
- English content always falls back to `bio.json`

### CV download

Place your CV at `public/cv.pdf` — the "Download CV" button in the navbar links to it automatically.

---

## Adding Content

### Add a certification

1. Place the certificate image at `public/certs/filename.webp`
2. Add to `bio.json` under `certifications`:

```json
{
  "name": "Certification Name",
  "issuer": "Issuing Body",
  "year": "2025",
  "icon": "verified",
  "image": "/certs/filename.webp"
}
```

Available icons (Material Symbols): `verified`, `science`, `psychology`, `storage`, `bar_chart`, `school`, `cloud`, `analytics`, `lightbulb`, `work`

### Add a project

1. Add to `bio.json` under `projects`:

```json
{
  "title": "Project Title",
  "role": "AI Engineer",
  "date": "Jan. 2025",
  "description": "What it does and the impact.",
  "tags": ["RAG", "Python", "Azure"],
  "highlight": "Key metric or outcome"
}
```

2. Add German/Urdu translations in `translations.ts` under `contentTranslations.de.projects` and `contentTranslations.ur.projects` (matching index order).

### Add a job to the timeline

1. Add to `bio.json` under `experience`:

```json
{
  "company": "Company Name",
  "location": "City, Country",
  "role": "Job Title",
  "period": "Jan. 2025 – Present",
  "current": true,
  "bullets": [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2"
  ]
}
```

2. Add German translation in `contentTranslations.de.experience` at the same array index.

---

## Deployment

### Vercel (recommended)

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Click **Deploy** — no environment variables needed
4. Add your custom domain under **Settings → Domains**

### Netlify

```bash
npm run build
# Deploy the .next/ output folder
```

### Self-hosted (VPS / Coolify)

```bash
npm run build
npm run start   # runs on port 3000
```

Use nginx or Caddy as a reverse proxy pointing to port 3000.

---

## Portrait & Branding

- **Portrait**: Replace `public/profile.avif` — use **AVIF format with transparent background** for the best blending effect on the hero section
- **OG image**: Replace `public/og-image.png` at exactly **1200×630px** — shown when sharing your link on LinkedIn/Twitter
- **Theme colours**: Defined in `src/app/globals.css` under `@theme`:
  - `--primary` / `--primary-dim` — blue accent
  - `--secondary` — cyan accent
  - `--bg` / `--fg` — background and foreground

---

## License

MIT — free to use as a template. Credit appreciated but not required.

---

*Built with [Claude Code](https://claude.ai/code) · Designed for AI-first discovery*
