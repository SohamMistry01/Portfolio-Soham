# Soham Mistry — AI/ML Engineer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)

A personal developer portfolio and technical showcase engineered for **Soham Mistry** — AI/ML Engineer, GenAI & LLM Systems Builder, and Python Developer. Built with modern web standards using Next.js 16 App Router, React 19, Tailwind CSS v4, and Framer Motion, this site highlights production-grade AI platforms, agentic RAG architectures, startup founding engineering, and research publications.

---

## 🌟 Contents & Key Sections

The portfolio is structured as a narrative technical journey across several interactive sections:

### 1. Hero & Profile
- **Introduction**: Professional summary highlighting AI/ML engineering, GenAI systems development, and backend microservice experience.
- **Quick Actions & CTAs**: Fast-access links to "Let's Talk" (email), LinkedIn profile, GitHub repositories, and downloadable `resume.pdf`.
- **Status Indicator**: Live pulse badge indicating current job availability for full-time AI/ML & GenAI engineering roles.

### 2. Core Competencies (Skills Grid)
Categorized technical competencies presented as responsive, glassmorphic badges:
- **Generative AI**: Large Language Models (LLMs), AI Agents, Prompt Engineering, Retrieval-Augmented Generation (RAG), Embeddings, Vector Databases, Model Context Protocol (MCP), LLM Evaluation.
- **Machine Learning & Deep Learning**: NLP, Scikit-learn, XGBoost, LightGBM, CatBoost, PyTorch, TensorFlow, Data Analysis & Visualization.
- **Engineering & Frameworks**: Python, FastAPI, Django, LangChain, LangGraph, CrewAI, Docker, SQL, Git/GitHub, HTML/CSS/JavaScript.

### 3. Experience Timeline
- **Founding Software & AI Engineer** at **Scoreazy EduTech Pvt. Ltd.** (Aug 2025 – Present):
  - **Platform Architecture & RBAC**: Flagship platform built from scratch with Django, serving 150+ users with a 6-tier Role-Based Access Control system.
  - **FastAPI Microservices & AI**: 10+ microservices secured via BearerAuth, cutting operational workload by 50% using integrated RAG and ML workflows.
  - **System Reliability**: Maintained **99.95% production uptime** with automated cron schedulers, Docker orchestration, and CI testing.
  - **Mobile Engineering**: Published production Android application on the **Google Play Store** utilizing Flutter and WebView.

### 4. Education & Academic Leadership
- **Degree**: BTech in Computer Engineering from **Savitribai Phule Pune University** (2022 – 2026, CGPA: 8.44).
- **Coursework**: Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Deep Learning, NLP, Data Science, DBMS, and Computational Statistics.
- **Leadership & Extracurriculars**:
  - **CESA (Computer Engineering Student Association)**: 3-year tenure across Administrator (2025–2026), Technical Secretary (2024–2025), and Technical Executive (2023–2024).
  - **CodeHub (Official Department Coding Club)**: Club Advisor (2025–2026) and Club Lead (2024–2025).

### 5. Featured Architecture & Projects
Each featured project includes live links, GitHub repositories, expandable architectural breakdowns, and screenshot galleries:

- **JeevanYaan — AI-Powered Career & Wellness Companion**:
  - **Architecture**: 8 AI modules built on Django, orchestrating multi-agent workflows with LangGraph (Search → Scrape → Summarize Tavily agent, Map-Reduce notes processor).
  - **RAG & ML**: FAISS + HuggingFace embeddings resume analysis (50% hallucination reduction, 100–300ms latency), and CatBoost mental health prediction (96% F1-score).
  - **Publication**: Peer-reviewed paper published at **IEEE CCGE 2026** with an in-app BibTeX citation drawer.
  - **Gallery**: 5-screenshot full-screen interactive preview.

- **PyChamp — AI DSA Learning Platform & In-Browser Python IDE**:
  - **Agentic Engine**: Concurrent 3-agent fan-out via LangGraph powered by Groq LPUs (Theory, Pseudocode, and Code specialist agents).
  - **Pedagogy & Execution**: Step-by-step unlock pipeline, sandboxed Python code execution with a strict 5-second timeout guard, and a zero-token local Markdown study notes library.
  - **Reliability**: Backed by 23 passing automated Django unit tests.
  - **Gallery**: 7-screenshot full-screen interactive preview.

- **Health Insurance Claim Prediction**:
  - **ML & GenAI**: End-to-end ensemble regression pipeline delivering 91% cost prediction accuracy and reducing manual assessment time by 40%.
  - **Analytics**: Integrated Google Gemini-powered medical chatbot and interactive Plotly visualization dashboards.
  - **Gallery**: 6-screenshot full-screen interactive preview.

### 6. Interactive Screenshot Gallery Modal (`ProjectGalleryModal`)
- Custom, accessible modal viewer with keyboard navigation (`Esc` to close, `ArrowLeft` / `ArrowRight` to navigate).
- Features zoom-in, zoom-out, zoom-reset controls, and responsive thumbnail previews.
- Preserves smooth background lock and Framer Motion enter/exit transitions.

### 7. Contact Section
- Direct contact gateway with animated callout for recruiting teams and collaborators.

---

## 🛠️ Tech Stack & Architecture

### Frontend & Core
| Technology | Description |
| :--- | :--- |
| **[Next.js 16](https://nextjs.org/)** | React framework with App Router, Server Components, and client optimization |
| **[React 19](https://react.dev/)** | Modern component architecture, hooks, and client-side interactions |
| **[TypeScript 5](https://www.typescriptlang.org/)** | Strict type safety across components, props, and data models |

### Styling & UI Design
| Technology | Description |
| :--- | :--- |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Next-generation utility-first CSS engine configured with `@tailwindcss/postcss` |
| **[Base UI](https://base-ui.com/)** | Accessible unstyled primitives (`@base-ui/react`) for accessible accordions and dialogs |
| **Custom UI Components** | Modular card, badge, button, and accordion components crafted in `src/components/ui` |
| **Design System** | Glassmorphism, ambient background glow, dark-mode-first aesthetic with custom CSS variables |

### Animation & Micro-interactions
| Technology | Description |
| :--- | :--- |
| **[Framer Motion 13](https://www.framer.com/motion/)** | Smooth scroll reveals, modal transitions, and interactive gesture feedback |
| **[Lucide React](https://lucide.dev/)** | Crisp, scalable SVG iconography |

### Typography
- **Headings**: `Space Grotesk` (via `next/font/google`)
- **Body**: `Manrope` (via `next/font/google`)
- **Code & Diagrams**: `JetBrains Mono` (via `next/font/google`)

### SEO, Performance & Metadata
- **Dynamic SEO**: Comprehensive OpenGraph and Twitter card metadata in `src/app/layout.tsx`.
- **Automated Sitemap & Robots**: Generated at build time via `src/app/sitemap.ts` and `src/app/robots.ts`.
- **Search Verification**: Built-in Google Site Verification integration.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── projects/                  # Project screenshot assets
│   │   ├── health-insurance/      # Health insurance project screenshots (img1-img6)
│   │   ├── jeevanyaan/            # JeevanYaan screenshots (img1-img5)
│   │   └── pychamp/               # PyChamp screenshots (img1-img7)
│   ├── favicon.ico                # Site favicon
│   ├── icon.png                   # App icon (192x192)
│   ├── apple-icon.png             # Apple touch icon (180x180)
│   └── resume.pdf                 # Downloadable resume document
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind CSS v4 directives & theme variables
│   │   ├── layout.tsx             # Root layout, Google Fonts, and OpenGraph metadata
│   │   ├── page.tsx               # Main portfolio landing page (Hero, Skills, Experience, Education)
│   │   ├── robots.ts              # Search engine robots rule configuration
│   │   └── sitemap.ts             # XML sitemap generator
│   ├── components/
│   │   ├── projects.tsx           # Featured projects section with technical deep-dives
│   │   ├── project-gallery-modal.tsx # Lightbox modal with zoom, thumbnails, and keyboard controls
│   │   └── ui/                    # Reusable design system primitives
│   │       ├── accordion.tsx      # Accessible expandable drawers
│   │       ├── badge.tsx          # Tech tag pills & highlight indicators
│   │       ├── button.tsx         # Customizable action buttons
│   │       └── card.tsx           # Glassmorphic containers
│   └── lib/
│       └── utils.ts               # Class utility helpers (`cn`)
├── components.json                # Shadcn configuration
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js build and runtime configuration
├── package.json                   # Dependencies and npm scripts
├── postcss.config.mjs             # PostCSS configuration for Tailwind v4
└── tsconfig.json                  # TypeScript compiler settings
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or newer
- **npm**, **pnpm**, **yarn**, or **bun**

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/SohamMistry01/Portfolio.git
cd Portfolio/portfolio
npm install
```

### 2. Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Production Build
Compile and bundle the production application:

```bash
npm run build
npm run start
```

### 4. Code Quality & Linting
Run ESLint across TypeScript and TSX files:

```bash
npm run lint
```

---

## ⚙️ Environment Configuration

You can configure the base deployment URL by setting the environment variable in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL="https://soham-mistry.vercel.app"
```

---

## 👤 Author

**Soham Mistry**
- **Website**: [soham-mistry.vercel.app](https://soham-mistry.vercel.app)
- **LinkedIn**: [linkedin.com/in/soham-mistry](https://www.linkedin.com/in/soham-mistry)
- **GitHub**: [@SohamMistry01](https://github.com/SohamMistry01)
- **Email**: [mistry.sohamm@gmail.com](mailto:mistry.sohamm@gmail.com)

