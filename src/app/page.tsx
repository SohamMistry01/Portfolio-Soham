"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Cpu, Blocks, ArrowRight, FileText, GraduationCap, Users, Terminal } from "lucide-react";
import { Projects } from "@/components/projects";

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
            { name: "Education", href: "#education" },
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
                  Aug 2025 - Present
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
                  "Architected and built the startup's flagship web platform from scratch using Django for 150+ early users, implementing granular Role-Based Access Control (RBAC) across mentors, demo/paid students, parents, content team, management, and superusers.",
                  "Engineered 10+ FastAPI microservices secured with Bearer token authentication (BearerAuth), integrating RAG pipelines and ML workflows that automated business processes and reduced internal manual workload by 50%.",
                  "Implemented automated cron jobs and background task schedulers to handle periodic third-party API polling and synchronize live records at fixed time intervals.",
                  "Maintained 99.95% production uptime by incorporating comprehensive error-handling mechanisms, managing database operations, and deploying containerized services via Docker and CI testing.",
                  "Led end-to-end mobile development and published the live Android app on the Google Play Store using Flutter and WebView, managing live releases and continuous bug fixes.",
                ].map((point, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:-left-6 before:top-3.5 before:w-1.5 before:h-1.5 before:bg-primary/60 before:rounded-full">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Education ───────────────────────────────────── */}
        <section id="education" className="space-y-10 scroll-mt-32">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className={`${headingFont} text-4xl font-semibold tracking-tight`}>Education</h3>
          </div>

          <div className="border-l-2 border-border/40 ml-4 pl-10 space-y-12 relative">
            <div className="absolute w-3.5 h-3.5 bg-background border-2 border-primary rounded-full -left-[8px] top-2 shadow-sm shadow-primary/30" />
            <div className="space-y-5 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <h4 className={`${headingFont} text-2xl md:text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200`}>
                  BTech in Computer Engineering
                </h4>
                <span className="text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full w-fit shrink-0">
                  Oct 2022 - May 2026
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium text-foreground/70 flex items-center gap-2.5">
                  Savitribai Phule Pune University
                </p>
                <p className="text-base text-muted-foreground font-medium flex items-center gap-2">
                  CGPA: <span className="text-foreground/80">8.44</span>
                </p>
              </div>

              {/* Coursework */}
              <div className="space-y-3 pt-1">
                <h5 className={`${headingFont} text-lg font-medium text-foreground`}>
                  Relevant Coursework
                </h5>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {[
                    "Data Structures & Algorithms",
                    "Artificial Intelligence & Machine Learning",
                    "Deep Learning",
                    "Natural Language Processing",
                    "Data Science",
                    "Data Analysis",
                    "Database Management System",
                    "Operating System",
                    "Computer Networks",
                    "Object Oriented Programming",
                    "Theory of Computation",
                    "Computational Statistics",
                    "Discrete Mathematics",
                    "Programming & Problem Solving",
                  ].map((course) => (
                    <Badge
                      key={course}
                      variant="secondary"
                      className="h-auto py-1.5 px-3 text-xs sm:text-sm font-normal text-muted-foreground bg-card/50 border border-border/50 hover:border-primary/40 hover:text-foreground hover:bg-primary/5 transition-all rounded-lg"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-3">
                <h5 className={`${headingFont} text-lg font-medium text-foreground`}>
                  Leadership &amp; Volunteering
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {/* CESA */}
                  <div className="rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-5 space-y-4 hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <h6 className="font-semibold text-foreground text-base tracking-tight leading-snug">
                            CESA
                          </h6>
                          <p className="text-xs text-muted-foreground">
                            Computer Engineering Student Association
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full shrink-0">
                        3-Yr Tenure
                      </span>
                    </div>

                    <div className="relative pl-5 space-y-3.5 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border/60">
                      <div className="relative">
                        <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                          <span className="text-sm font-medium text-foreground">Administrator</span>
                          <span className="text-xs text-muted-foreground/80 font-light">Sep 2025 – May 2026</span>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-primary/70 ring-4 ring-background" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                          <span className="text-sm font-medium text-foreground/90">Technical Secretary</span>
                          <span className="text-xs text-muted-foreground/80 font-light">Sep 2024 – Aug 2025</span>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-primary/40 ring-4 ring-background" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                          <span className="text-sm font-medium text-foreground/80">Technical Executive</span>
                          <span className="text-xs text-muted-foreground/80 font-light">Sep 2023 – Aug 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CodeHub */}
                  <div className="rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-5 space-y-4 hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <div>
                          <h6 className="font-semibold text-foreground text-base tracking-tight leading-snug">
                            CodeHub
                          </h6>
                          <p className="text-xs text-muted-foreground">
                            Official Department Coding Club
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full shrink-0">
                        Coding Club
                      </span>
                    </div>

                    <div className="relative pl-5 space-y-3.5 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border/60">
                      <div className="relative">
                        <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                          <span className="text-sm font-medium text-foreground">Club Advisor</span>
                          <span className="text-xs text-muted-foreground/80 font-light">Aug 2025 – May 2026</span>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-primary/60 ring-4 ring-background" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                          <span className="text-sm font-medium text-foreground/90">Club Lead</span>
                          <span className="text-xs text-muted-foreground/80 font-light">Aug 2024 – July 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Work ───────────────────────────────── */}
        <Projects />

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
