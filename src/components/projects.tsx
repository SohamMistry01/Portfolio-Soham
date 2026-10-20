"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code2, Cpu, Blocks, FileText, Database, ExternalLink, Images } from "lucide-react";
import { ProjectGalleryModal } from "@/components/project-gallery-modal";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const headingFont = "[font-family:var(--font-heading)]";

const jeevanyaanScreenshots = [
  { src: "/projects/jeevanyaan/img1.png", title: "Profile Page" },
  { src: "/projects/jeevanyaan/img2.png", title: "Dashboard Home Page" },
  { src: "/projects/jeevanyaan/img3.png", title: "Quiz Maker Module" },
  { src: "/projects/jeevanyaan/img4.png", title: "Notes & Assignments Assistant" },
  { src: "/projects/jeevanyaan/img5.png", title: "Mental Health Analysis & Support Module" },
];

const pychampScreenshots = [
  { src: "/projects/pychamp/img1.png", title: "PyChamp - Login Page" },
  { src: "/projects/pychamp/img2.png", title: "Home Page" },
  { src: "/projects/pychamp/img3.png", title: "Python Code Editor" },
  { src: "/projects/pychamp/img4.png", title: "DSA AI Tutor" },
  { src: "/projects/pychamp/img5.png", title: "Profile Page" },
  { src: "/projects/pychamp/img6.png", title: "Zero-Token Offline Study Notes & Library" },
  { src: "/projects/pychamp/img7.png", title: "API Key setup screen" },
];

const healthInsuranceScreenshots = [
  { src: "/projects/health-insurance/img1.png", title: "Home Page" },
  { src: "/projects/health-insurance/img2.png", title: "Dataset Analysis Page" },
  { src: "/projects/health-insurance/img3.png", title: "Model training notebook Page" },
  { src: "/projects/health-insurance/img4.png", title: "Prediction Page" },
  { src: "/projects/health-insurance/img5.png", title: "Insurance Prediction Results" },
  { src: "/projects/health-insurance/img6.png", title: "Visualizations Page" },
];

export function Projects() {
  const [jeevanyaanGalleryOpen, setJeevanyaanGalleryOpen] = useState(false);
  const [pychampGalleryOpen, setPychampGalleryOpen] = useState(false);
  const [healthInsuranceGalleryOpen, setHealthInsuranceGalleryOpen] = useState(false);

  return (
    <section id="projects" className="space-y-10 scroll-mt-32">
      <div className="flex items-center gap-4">
        <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
        <h3 className={`${headingFont} text-4xl font-semibold tracking-tight`}>Featured Architecture &amp; Work</h3>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* Project 1 — JeevanYaan */}
        <Card className="group overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/60 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="space-y-5 px-8 pt-8 pb-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-5">
              <div className="space-y-2">
                <CardTitle className={`${headingFont} text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 flex flex-wrap items-center gap-3`}>
                  <span>JeevanYaan</span>
                  <div className="flex items-center gap-2">
                    <a href="https://github.com/SohamMistry01/JeevanYaan" target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors" title="View on GitHub">
                      <GithubIcon className="w-6 h-6" />
                    </a>
                    <a href="https://jeevanyaan.onrender.com/" target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors" title="View Live Website">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setJeevanyaanGalleryOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 hover:border-primary/40 px-3 py-1 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ml-1"
                      title="View Project Screenshots"
                    >
                      <Images className="w-3.5 h-3.5" />
                      <span>Screenshots</span>
                      <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.2 rounded-full font-semibold">5</span>
                    </button>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground/80">AI-Powered Career &amp; Wellness Companion</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Ensemble Model</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">LangChain</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">RAG</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">IEEE Published</Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 px-8 pb-8">
            <p className="text-lg text-muted-foreground leading-[1.8] font-light">
              Built a full-stack GenAI platform with 8 AI modules for career guidance and wellness, aligned with SDG-3 &amp; SDG-4.
              Trained a CatBoost classifier on 12 lifestyle features for mental health prediction <span className="text-foreground/80 font-medium">(96% F1-score)</span>, paired with an LLM expert-review chain for actionable insights.
            </p>

            {/* Screenshots trigger banner */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setJeevanyaanGalleryOpen(true)}
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground/90 bg-card/60 hover:bg-card border border-border/60 hover:border-primary/40 px-4 py-2.5 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-sm"
              >
                <div className="p-1 rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Images className="w-4 h-4" />
                </div>
                <span>View Project Screenshots &amp; Glimpse</span>
                <span className="text-xs bg-primary/15 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-semibold">
                  5 Screenshots
                </span>
              </button>
            </div>

            <div className="bg-muted/20 rounded-xl px-3 border border-border/30">
              <Accordion className="w-full">
                <AccordionItem value="architecture" className="border-none">
                  <AccordionTrigger className={`${headingFont} text-primary hover:no-underline font-semibold px-2 py-5 text-base tracking-wide`}>
                    View Architecture &amp; Technical Details
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 px-2 pb-6">
                    <div className="space-y-6">
                      <p className="text-base leading-[1.8] text-muted-foreground font-light">
                        JeevanYaan is a comprehensive, production-ready AI platform designed to harmonize career advancement with mental wellness. Built on a robust Django backend, the system orchestrates 8 distinct AI-powered modules through complex agentic pipelines and machine learning inference.
                      </p>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Cpu className="w-4 h-4 text-primary" /> Multi-Agent Orchestration (LangGraph)
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          The core reasoning engine leverages LangGraph to create stateful, cyclical agent workflows.
                        </p>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          For the <strong className="text-foreground font-medium">Research Agent</strong>, I designed a multi-step <em className="text-foreground/80"> Search → Scrape → Summarize </em> pipeline that autonomously browses the web using the Tavily API, parses HTML content, and synthesizes findings.
                        </p>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          The <strong className="text-foreground font-medium">Notes Assistant</strong> utilizes a Map-Reduce fan-out architecture, processing multiple large documents (PDF/DOCX/TXT) in parallel across independent agent nodes.
                        </p>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          The <strong className="text-foreground font-medium">Career Planner</strong> implements a web-augmented pipeline with graceful fallbacks, ensuring robust responses even when external APIs fail.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Database className="w-4 h-4 text-primary" /> RAG &amp; Machine Learning Integration
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          For the <strong className="text-foreground font-medium">Resume Scanner</strong>, I built an end-to-end RAG pipeline using FAISS vector stores and HuggingFace embeddings. Token-aware chunking and structured JSON extraction parse complex resumes to generate precise skill scores and job recommendations, cutting hallucinations by 50% at ultra-low (100–300ms) latency.
                        </p>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          The <strong className="text-foreground font-medium">Mental Health Review</strong> module uses a deterministic CatBoost classifier <span className="text-foreground/80 font-medium">(96% F1-score)</span> trained on 12 lifestyle features. The prediction feeds an LLM expert-review chain to generate compassionate, actionable wellness advice.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Blocks className="w-4 h-4 text-primary" /> Platform Engineering &amp; Architecture
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">Beyond the AI components, the platform features enterprise-grade engineering:</p>
                        <ul className="list-none space-y-2.5 text-base font-light text-muted-foreground">
                          {[
                            ["Dynamic Module Discovery:", "Django automatically scans the utility directory using Python reflection, auto-registering new AI tools without hardcoded routing."],
                            ["Role-Based Rate Limiting:", "A custom ModulesControl schema enforces daily usage quotas per tool per user group, with optimised usage logging."],
                            ["Multi-Environment Deployment:", "Runs in the cloud (WSGI + MySQL/PostgreSQL) or as a native Desktop App via Waitress + PyWebView with offline SQLite storage."],
                            ["Export Infrastructure:", "Every AI interaction can be downloaded as a branded PDF report via a custom Markdown → HTML → PDF rendering pipeline."],
                          ].map(([title, desc]) => (
                            <li key={title} className="flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">→</span>
                              <span><strong className="text-foreground/90 font-medium">{title}</strong> {desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Architecture flow */}
                      <div className="mt-2 p-5 rounded-xl border border-primary/15 bg-primary/5">
                        <p className={`${headingFont} text-primary font-semibold mb-3 text-xs uppercase tracking-widest`}>Request Flow</p>
                        <p className="font-[family-name:var(--font-mono)] text-sm text-foreground/60 leading-relaxed">
                          Client → Django Router → Rate Limiter → Controller → LangGraph Agent ⇌ (Groq · Tavily · GitHub) → Usage Logger → Response / PDF
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="research" className="border-t border-border/30">
                  <AccordionTrigger className={`${headingFont} text-primary hover:no-underline font-semibold px-2 py-5 text-base tracking-wide`}>
                    IEEE Research Publication
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 px-2 pb-6">
                    <div className="space-y-6">
                      <p className="text-base leading-[1.8] text-muted-foreground font-light">
                        <strong className="text-foreground font-medium">Abstract:</strong> In this fast paced world, where every opportunity comes with a challenge, we try to balance our workload, set life goals, balance mental health and learn new skills, it can feel like we are on our own, struggling to make sense of all the information coming over us. This is where JeevanYaan comes in, an AI native platform that combines the best of human guidance with the power of technology by bringing together large language models, smart agentic architectures and machine learning practices. JeevanYaan is a robust, personalized system for career growth and overall development, it helps you understand your mental health, plan your career, and even do research for you. We present how JeevanYaan’s secure and user-friendly platform can make expert-level guidance available to everyone, helping people navigate their careers and personal lives with more confidence, clarity, and direction.
                      </p>
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-start gap-4">
                          <a href="https://ieeexplore.ieee.org/document/11581803" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-xl text-sm font-semibold hover:bg-primary/20 transition-all border border-primary/20 hover:-translate-y-0.5">
                            <FileText className="w-4 h-4" /> View on IEEE Xplore
                          </a>
                          <details className="group">
                            <summary className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border/60 bg-card/30 hover:bg-muted/40 rounded-xl text-sm font-medium transition-all cursor-pointer list-none text-foreground select-none hover:-translate-y-0.5">
                              Cite This
                            </summary>
                            <div className="mt-4 p-5 rounded-xl border border-primary/15 bg-primary/5 shadow-inner">
                              <p className="font-[family-name:var(--font-mono)] text-sm text-foreground/80 leading-relaxed selection:bg-primary/30">
                                S. Mistry, V. More, A. Pedgulwar and M. Nerkar, &quot;JeevanYaan - An AI Powered Career and Wellness Companion,&quot; 2026 2nd International Conference on Computing, Communication and Green Engineering (CCGE), Pune, India, 2026, pp. 1-6, doi: 10.1109/CCGE67142.2026.11581803.
                              </p>
                            </div>
                          </details>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Project 2 — PyChamp */}
        <Card className="group overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/60 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="space-y-5 px-8 pt-8 pb-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-5">
              <div className="space-y-2">
                <CardTitle className={`${headingFont} text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 flex flex-wrap items-center gap-3`}>
                  <span>PyChamp</span>
                  <div className="flex items-center gap-2">
                    <a href="https://github.com/SohamMistry01/PyChamp" target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors" title="View on GitHub">
                      <GithubIcon className="w-6 h-6" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setPychampGalleryOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 hover:border-primary/40 px-3 py-1 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ml-1"
                      title="View Project Screenshots"
                    >
                      <Images className="w-3.5 h-3.5" />
                      <span>Screenshots</span>
                      <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.2 rounded-full font-semibold">7</span>
                    </button>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground/80">AI DSA Learning Platform &amp; In-Browser Python IDE</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Django</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">LangGraph</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Groq LPU</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Multi-Agent AI</Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 px-8 pb-8">
            <p className="text-lg text-muted-foreground leading-[1.8] font-light">
              Architected an AI-native Data Structures &amp; Algorithms learning platform and integrated browser Python IDE.
              Orchestrated a concurrent <span className="text-foreground/80 font-medium">3-agent LangGraph pipeline</span> powered by Groq&apos;s high-speed LPU inference with a guided progressive unlock flow, paired with a sandboxed code execution engine and zero-token offline study notes library.
            </p>

            {/* Screenshots trigger banner */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setPychampGalleryOpen(true)}
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground/90 bg-card/60 hover:bg-card border border-border/60 hover:border-primary/40 px-4 py-2.5 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-sm"
              >
                <div className="p-1 rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Images className="w-4 h-4" />
                </div>
                <span>View Project Screenshots &amp; Glimpse</span>
                <span className="text-xs bg-primary/15 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-semibold">
                  7 Screenshots
                </span>
              </button>
            </div>

            <div className="bg-muted/20 rounded-xl px-3 border border-border/30">
              <Accordion className="w-full">
                <AccordionItem value="architecture" className="border-none">
                  <AccordionTrigger className={`${headingFont} text-primary hover:no-underline font-semibold px-2 py-5 text-base tracking-wide`}>
                    View Architecture &amp; Technical Details
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 px-2 pb-6">
                    <div className="space-y-6">
                      <p className="text-base leading-[1.8] text-muted-foreground font-light">
                        PyChamp is a developer ecosystem engineered to accelerate algorithmic problem-solving and Python proficiency. It couples parallel multi-agent reasoning graphs with an isolated code execution environment and a local Markdown study library.
                      </p>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Cpu className="w-4 h-4 text-primary" /> Concurrent Multi-Agent Engine (LangGraph &amp; Groq)
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          Upon receiving any algorithmic topic or problem (e.g., Merge Sort, LRU Cache, Dijkstra&apos;s Algorithm), PyChamp launches three parallel specialist agents orchestrated through a stateful LangGraph pipeline:
                        </p>
                        <ul className="list-none space-y-2.5 text-base font-light text-muted-foreground">
                          {[
                            ["Theory Agent (gpt-oss-20b):", "Generates foundational concepts, intuitive real-world analogies, step-by-step mechanics, and asymptotic Time & Space complexity analysis without spoiler code."],
                            ["Pseudocode Agent (qwen3.8-27b):", "Synthesizes clean, structured, language-agnostic logic and algorithmic blueprints."],
                            ["Code Agent (gpt-oss-120b):", "Produces idiomatic, production-ready Python solutions with helper functions, line-by-line annotations, and edge-case handling."],
                          ].map(([title, desc]) => (
                            <li key={title} className="flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">→</span>
                              <span><strong className="text-foreground/90 font-medium">{title}</strong> {desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Blocks className="w-4 h-4 text-primary" /> Guided Pedagogical Flow &amp; Error Diagnostics
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          To reinforce active recall over passive reading, the tutor enforces a progressive step-by-step unlock pipeline: <span className="text-foreground/80 font-medium">Theory First → Pseudocode Blueprint → Python Implementation</span>. Formatted with Marked.js for real-time Markdown rendering with syntax highlighting and complexity tables, accompanied by an interactive error inspector with expandable diagnostic stack trace drawers.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Code2 className="w-4 h-4 text-primary" /> In-Browser IDE &amp; Sandboxed Execution
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          Engineered a lightweight dark-themed Python editor with line numbering, hotkey execution (<kbd className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono border border-border/50 text-foreground/80">Ctrl + Enter</kbd>), and dual console streams separating stdout from exception tracebacks. Subprocess execution runs in isolated temporary files backed by a strict <span className="text-foreground/80 font-medium">5-second timeout guard</span> to prevent infinite loops and resource starvation.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Database className="w-4 h-4 text-primary" /> Offline Notes Library &amp; Platform Architecture
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">Engineered with production-minded modularity and security:</p>
                        <ul className="list-none space-y-2.5 text-base font-light text-muted-foreground">
                          {[
                            ["Zero-Token Offline Library:", "One-click archiving of lessons into structured local Markdown files (theory.md, pseudocode.md, code.md) under per-user directories for offline review without recurring API consumption."],
                            ["Multi-Tenant Key Isolation:", "Per-user Groq API key configuration with regex validation, masked storage (gsk_...xxxx), and administrator-level environment fallback."],
                            ["Automated Quality Assurance:", "Backed by 23 passing Django automated unit tests covering multi-agent state merge, auth boundaries, path-traversal sanitization, and open-redirect defenses."],
                          ].map(([title, desc]) => (
                            <li key={title} className="flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">→</span>
                              <span><strong className="text-foreground/90 font-medium">{title}</strong> {desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Architecture flow */}
                      <div className="mt-2 p-5 rounded-xl border border-primary/15 bg-primary/5">
                        <p className={`${headingFont} text-primary font-semibold mb-3 text-xs uppercase tracking-widest`}>Pipeline Flow</p>
                        <p className="font-[family-name:var(--font-mono)] text-sm text-foreground/60 leading-relaxed">
                          User DSA Topic → LangGraph Parallel Fan-Out (Theory · Pseudocode · Code via Groq) → Synchronized State Merge → Progressive UI / Local Markdown Storage
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Project 3 — Health Insurance */}
        <Card className="group overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/60 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="space-y-5 px-8 pt-8 pb-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-5">
              <div className="space-y-2">
                <CardTitle className={`${headingFont} text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 flex flex-wrap items-center gap-3`}>
                  <span>Health Insurance Claim Prediction</span>
                  <div className="flex items-center gap-2">
                    <a href="https://github.com/SohamMistry01/Health-Insurance-Claim-Prediction" target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors" title="View on GitHub">
                      <GithubIcon className="w-6 h-6" />
                    </a>
                    <a href="https://health-insurance-claim-prediction-app.streamlit.app/" target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors" title="View Live Website">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setHealthInsuranceGalleryOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 hover:border-primary/40 px-3 py-1 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ml-1"
                      title="View Project Screenshots"
                    >
                      <Images className="w-3.5 h-3.5" />
                      <span>Screenshots</span>
                      <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.2 rounded-full font-semibold">6</span>
                    </button>
                  </div>
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground/80">End-to-end ML System &amp; GenAI Analytics</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Machine Learning</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Gemini LLM</Badge>
                <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Plotly Viz</Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 px-8 pb-8">
            <p className="text-lg text-muted-foreground leading-[1.8] font-light">
              Built an end-to-end ML system using ensemble regression with <span className="text-foreground/80 font-medium">(91% accuracy)</span> for cost prediction.
              Integrated a Gemini-powered medical chatbot and interactive Plotly charts for analytics, reducing manual claim assessment time by <span className="text-foreground/80 font-medium">(40%)</span> through automation.
            </p>

            {/* Screenshots trigger banner */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setHealthInsuranceGalleryOpen(true)}
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground/90 bg-card/60 hover:bg-card border border-border/60 hover:border-primary/40 px-4 py-2.5 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-sm"
              >
                <div className="p-1 rounded-md bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Images className="w-4 h-4" />
                </div>
                <span>View Project Screenshots &amp; Glimpse</span>
                <span className="text-xs bg-primary/15 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-semibold">
                  6 Screenshots
                </span>
              </button>
            </div>

            <div className="bg-muted/20 rounded-xl px-3 border border-border/30">
              <Accordion className="w-full">
                <AccordionItem value="details" className="border-none">
                  <AccordionTrigger className={`${headingFont} text-primary hover:no-underline font-semibold px-2 py-5 text-base tracking-wide`}>
                    View Implementation Details
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 px-2 pb-6">
                    <div className="space-y-6">
                      <p className="text-base leading-[1.8] text-muted-foreground font-light">
                        A comprehensive machine learning pipeline designed to accurately estimate health insurance premiums based on 10+ clinical and demographic features, fully integrated into an interactive multi-page web application.
                      </p>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Cpu className="w-4 h-4 text-primary" /> Model Development &amp; Optimization
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          Evaluated five distinct regression algorithms: Linear Regression, Decision Trees, Random Forest, XGBoost, and Gradient Boosting. Implemented Bayesian Optimization using Optuna <span className="text-foreground/80 font-medium">(50 trials, 5-fold cross-validation)</span>. The final model — a hyperparameter-tuned Random Forest Regressor — was serialized via joblib for rapid inference. Feature importance analysis revealed Age as the strongest predictor (0.70 correlation) for premium pricing.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Blocks className="w-4 h-4 text-primary" /> Multi-Page Application Architecture
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">Engineered using Streamlit across modular application pages:</p>
                        <ul className="list-none space-y-2.5 text-base font-light text-muted-foreground">
                          {[
                            ["Predict Interface:", "Calculates premiums instantly with auto-computed WHO-standard BMI classifications and dynamic premium multipliers across 5 coverage tiers (₹5 Lakhs to ₹1 Crore)."],
                            ["Interactive Visualizations:", "8 dynamic Plotly charts including Cividis correlation heatmaps, violin plots, and grouped bar charts exploring relationships between health factors and costs."],
                            ["Model Overview:", "Transparently embeds the complete Jupyter notebook within the UI, enabling stakeholder review of the full ML pipeline."],
                          ].map(([title, desc]) => (
                            <li key={title} className="flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">→</span>
                              <span><strong className="text-foreground/90 font-medium">{title}</strong> {desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h5 className={`${headingFont} text-foreground font-semibold flex items-center gap-2 text-base`}>
                          <Code2 className="w-4 h-4 text-primary" /> GenAI Integration
                        </h5>
                        <p className="text-base leading-[1.8] text-muted-foreground font-light">
                          Augmented predictive capabilities with a fully integrated, context-aware medical assistant powered by <strong className="text-foreground font-medium">Google Gemini 2.0 Flash</strong>. Users can ask personalised health and insurance-related queries alongside their analytical dashboard.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* JeevanYaan Screenshots Modal */}
      <ProjectGalleryModal
        isOpen={jeevanyaanGalleryOpen}
        onClose={() => setJeevanyaanGalleryOpen(false)}
        projectName="JeevanYaan"
        images={jeevanyaanScreenshots}
      />

      {/* PyChamp Screenshots Modal */}
      <ProjectGalleryModal
        isOpen={pychampGalleryOpen}
        onClose={() => setPychampGalleryOpen(false)}
        projectName="PyChamp"
        images={pychampScreenshots}
      />

      {/* Health Insurance Screenshots Modal */}
      <ProjectGalleryModal
        isOpen={healthInsuranceGalleryOpen}
        onClose={() => setHealthInsuranceGalleryOpen(false)}
        projectName="Health Insurance Claim Prediction"
        images={healthInsuranceScreenshots}
      />
    </section>
  );
}

export default Projects;
