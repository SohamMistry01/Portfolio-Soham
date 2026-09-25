"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Code2, Cpu, Blocks, ArrowRight, FileText, Database } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

// Shared heading style — Space Grotesk applied via Tailwind
const headingFont = "[font-family:var(--font-heading)]";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[55%] h-[55%] bg-primary/12 blur-[160px] rounded-full mix-blend-screen opacity-70" />
        <div className="absolute top-[45%] -right-[10%] w-[45%] h-[65%] bg-violet-600/8 blur-[160px] rounded-full mix-blend-screen opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-[30%] h-[30%] bg-indigo-500/6 blur-[120px] rounded-full mix-blend-screen opacity-40" />
      </div>

      {/* ── Navigation ──────────────────────────────────────── */}
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-[400px] sm:max-w-none">
        <div className="flex items-center justify-between sm:justify-center gap-0.5 sm:gap-1 px-2 sm:px-2 py-1.5 sm:py-2 bg-background/60 backdrop-blur-lg border border-border/40 rounded-full shadow-lg shadow-black/20 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 sm:px-4 py-1.5 text-[13px] sm:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-8 md:px-12 py-20 md:py-28 space-y-36 relative z-10">

        {/* ── Hero ────────────────────────────────────────── */}
        <section id="about" className="space-y-10 pt-10 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5"
          >
            {/* Name — Space Grotesk, gradient */}
            <h1 className={`${headingFont} text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/85 to-primary/60 bg-clip-text text-transparent pb-2 leading-none`}>
              Soham Mistry
            </h1>

            {/* Role — Space Grotesk, muted */}
            <h2 className={`${headingFont} text-xl md:text-3xl font-medium tracking-tight`}>
              <span className="text-foreground/60">AI/ML Engineer</span>
              <span className="text-primary/80 mx-3">·</span>
              <span className="text-foreground/60">GenAI Systems Builder</span>
              <span className="text-primary/80 mx-3">·</span>
              <span className="text-foreground/60">Python Developer</span>
            </h2>
          </motion.div>

          {/* Bio — Manrope body font */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl max-w-3xl leading-[1.75] text-muted-foreground font-light"
          >
            Computer Engineering graduate and Software &amp; AI Engineer focused on building production-ready AI systems and intelligent applications. My experience spans Python, Django, FastAPI, machine learning, LLMs, RAG and agentic AI, with hands-on work across backend architecture, AI workflows, APIs and full-stack products. I enjoy turning emerging AI capabilities into reliable software that solves meaningful real-world problems and continuously expanding my expertise through hands-on engineering.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a href="mailto:mistry.sohamm@gmail.com" className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5">
              <Mail className="w-5 h-5" /> Let's Talk
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/soham-mistry" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 border border-border/60 bg-card/30 backdrop-blur-sm rounded-full text-base font-medium hover:bg-muted/40 hover:border-primary/30 transition-all hover:-translate-y-0.5">
              <LinkedinIcon className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://www.github.com/SohamMistry01" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 border border-border/60 bg-card/30 backdrop-blur-sm rounded-full text-base font-medium hover:bg-muted/40 hover:border-primary/30 transition-all hover:-translate-y-0.5">
              <GithubIcon className="w-5 h-5" /> GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 border border-primary/30 bg-primary/8 backdrop-blur-sm rounded-full text-base font-medium hover:bg-primary/15 text-primary transition-all hover:-translate-y-0.5">
              <FileText className="w-5 h-5" /> Resume
            </a>
          </motion.div>

          {/* Status note — subtle, below CTAs */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground pt-1"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shrink-0"></span>
            Open to full-time AI/ML &amp; GenAI engineering roles
          </motion.p>
        </section>

        {/* ── Skills ──────────────────────────────────────── */}
        <section id="skills" className="space-y-10 scroll-mt-32">
          {/* Section label */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h3 className={`${headingFont} text-4xl font-semibold tracking-tight`}>Core Competencies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-md border-border/40 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-5 pt-7 px-7">
                <CardTitle className={`${headingFont} text-2xl font-semibold tracking-tight text-foreground`}>Generative AI</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2.5 px-7 pb-7">
                {["LLMs", "AI Agents", "Prompt Engineering", "RAG", "Embeddings", "Vector DBs", "MCP", "LLM Evaluation"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/15 text-primary border-primary/20 hover:bg-primary/25 text-sm px-3 py-1 font-medium">{skill}</Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-md border-border/40 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-5 pt-7 px-7">
                <CardTitle className={`${headingFont} text-2xl font-semibold tracking-tight text-foreground`}>Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2.5 px-7 pb-7">
                {["Machine Learning", "Deep Learning", "NLP", "Data Analysis", "Data Visualization", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "PyTorch", "TensorFlow"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/15 text-primary border-primary/20 hover:bg-primary/25 text-sm px-3 py-1 font-medium">{skill}</Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-md border-border/40 hover:border-primary/30 transition-all duration-300 md:col-span-2">
              <CardHeader className="pb-5 pt-7 px-7">
                <CardTitle className={`${headingFont} text-2xl font-semibold tracking-tight text-foreground`}>Engineering &amp; Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2.5 px-7 pb-7">
                {["Python", "FastAPI", "Django", "LangChain", "LangGraph", "CrewAI", "Docker", "SQL", "Git/GitHub", "HTML/CSS/JS"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/15 text-primary border-primary/20 hover:bg-primary/25 text-sm px-3 py-1 font-medium">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Experience ──────────────────────────────────── */}
        <section id="experience" className="space-y-10 scroll-mt-32">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
              <Blocks className="w-6 h-6 text-primary" />
            </div>
            <h3 className={`${headingFont} text-4xl font-semibold tracking-tight`}>Experience</h3>
          </div>

          <div className="border-l-2 border-border/40 ml-4 pl-10 space-y-12 relative">
            <div className="absolute w-3.5 h-3.5 bg-background border-2 border-primary rounded-full -left-[8px] top-2 shadow-sm shadow-primary/30" />
            <div className="space-y-5 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <h4 className={`${headingFont} text-2xl md:text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200`}>
                  Founding Software &amp; AI Engineer
                </h4>
                <span className="text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full w-fit shrink-0">
                  Aug 2025 – Present
                </span>
              </div>
              {/* Company */}
              <p className="text-lg font-medium text-foreground/70 flex items-center gap-2.5">
                Scoreazy EduTech Pvt. Ltd.
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span className="text-muted-foreground font-normal">Mumbai (Remote)</span>
              </p>
              {/* Bullets */}
              <ul className="space-y-4 text-lg text-muted-foreground leading-[1.8] font-light">
                {[
                  "Architected and built the startup's flagship student-facing web platform from scratch using Django, supporting onboarding of 150+ early users.",
                  "Engineered 10+ FastAPI microservices, integrating RAG pipelines, ML workflows, and operational APIs — automating business processes and reducing internal manual workload by 50%.",
                  "Led end-to-end mobile development and published the live Android app on the Google Play Store using Flutter and WebView.",
                  "Managed database operations, full-stack UI workflows, live bug fixes, and deployment infrastructure using Docker and CI testing.",
                ].map((point, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:-left-6 before:top-3.5 before:w-1.5 before:h-1.5 before:bg-primary/60 before:rounded-full">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Featured Work ───────────────────────────────── */}
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
                    <CardTitle className={`${headingFont} text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 flex items-center gap-3`}>
                      JeevanYaan
                      <a href="https://github.com/SohamMistry01/JeevanYaan" target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors" title="View on GitHub">
                        <GithubIcon className="w-6 h-6" />
                      </a>
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground/80">AI-Powered Career &amp; Wellness Companion</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">Django</Badge>
                    <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">LangGraph</Badge>
                    <Badge variant="secondary" className="bg-primary/12 text-primary border-primary/20 text-sm px-3 py-1">RAG</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 px-8 pb-8">
                <p className="text-lg text-muted-foreground leading-[1.8] font-light">
                  Built a full-stack GenAI platform with 8 AI modules for career guidance and wellness, aligned with SDG-3 &amp; SDG-4.
                  Trained a CatBoost classifier on 12 lifestyle features for mental health prediction <span className="text-foreground/80 font-medium">(96% F1-score)</span>, paired with an LLM expert-review chain for actionable insights.
                </p>

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
                  </Accordion>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 — Health Insurance */}
            <Card className="group overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/60 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-primary/5">
              <CardHeader className="space-y-5 px-8 pt-8 pb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-5">
                  <div className="space-y-2">
                    <CardTitle className={`${headingFont} text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 flex items-center gap-3`}>
                      Health Insurance Claim Prediction
                      <a href="https://github.com/SohamMistry01/Health-Insurance-Claim-Prediction" target="_blank" rel="noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors" title="View on GitHub">
                        <GithubIcon className="w-6 h-6" />
                      </a>
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
                  Built an end-to-end ML system using ensemble regression with <span className="text-foreground/80 font-medium">91% accuracy</span> for cost prediction.
                  Integrated a Gemini-powered medical chatbot and interactive Plotly charts for analytics, reducing manual claim assessment time by <span className="text-foreground/80 font-medium">40%</span> through automation.
                </p>

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
        </section>

        {/* ── Contact ─────────────────────────────────────── */}
        <section id="contact" className="pt-20 pb-28 text-center space-y-10 border-t border-border/30 relative scroll-mt-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="space-y-5">
            <h3 className={`${headingFont} text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/85 to-primary/60 bg-clip-text text-transparent pb-1`}>
              Let's build something.
            </h3>
            <p className="text-xl max-w-2xl mx-auto font-light leading-[1.8] text-muted-foreground">
              I'm actively looking for opportunities in AI/ML and GenAI engineering. If you have a role or just want to chat about agentic systems, my inbox is open.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a href="mailto:mistry.sohamm@gmail.com" className="w-full sm:w-auto px-9 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Say Hello
            </a>
            <a href="https://www.linkedin.com/in/soham-mistry" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-9 py-4 border border-border/60 bg-card/30 backdrop-blur-sm rounded-full text-base font-medium hover:bg-muted/40 hover:border-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              <LinkedinIcon className="w-5 h-5" /> Connect on LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-9 py-4 border border-primary/30 bg-primary/8 backdrop-blur-sm rounded-full text-base font-medium hover:bg-primary/15 text-primary transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" /> View Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
