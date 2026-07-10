import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight, Mail, MapPin, Phone, Github, Linkedin,
  Sparkles, Code2, Camera, GraduationCap, Award, Briefcase,
  FileText,
} from "lucide-react";
import resumeAsset from "../assets/Resume_Kanishka_Chaudhary.pdf.asset.json";
import portraitAsset from "../assets/kanishka-portrait.jpg.asset.json";



export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200" },
    ],
  }),
});

/* ---------------- Data ---------------- */

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = {
  "Languages": ["Java", "C", "Python", "SQL", "JavaScript", "HTML5", "CSS3"],
  "AI & Tools": ["Gemini", "ChatGPT", "Antigravity", "Perplexity", "Comet", "Claude", "Copilot", "Google AI Studio", "Cursor AI", "VS Code", "Git", "OpenCV", "PyTorch"],
  "Core CS": ["Advance Data Structure and Algorithms", "Computer Networks & Design (Wireshark, NS2)", "Operating Systems (Linux/Unix)", "DBMS (MySQL)", "Theory of Computation"],
  "Open Electives": ["Finance", "Human Resource Management"],
  "Design": ["Photography", "Writing", "Digital Creatives", "Brand Systems"],
};

const EXPERIENCE = [
  {
    role: "Campus Ambassador",
    org: "E-Cell, IIT Bombay",
    period: "Jun 2026 – Present",
    color: "sage",
    body: "Selected to represent IIT Bombay's Entrepreneurship Cell on campus, driving technical awareness, cross-college collaboration, and startup culture ecosystems.",
  },
  {
    role: "Student Ambassador",
    org: "Google",
    period: "May 2026 – Present",
    color: "terracotta",
    body: "Selected for the 2026 cohort to advocate for Google AI technologies, bridging the gap between innovative enterprise technologies and the campus community. Foster a culture of peer-to-peer learning and technological growth by hosting hands-on workshops and implementing AI solutions via the Agent Development Kit.",
  },
  {
    role: "Web Development Intern",
    org: "QSkill (SR India)",
    period: "Jan – Feb 2026",
    color: "sage",
    body: "Developed full-stack web applications using HTML, CSS, and JavaScript, focusing on seamless frontend experiences and streamlined backend code logic. Built practical feature sets including API handling and database integrations for a Razorpay payment gateway clone and a Spotify song downloader.",
  },
  {
    role: "Graphic Design Intern",
    org: "InAmigos Foundation",
    period: "Sep – Oct 2025",
    color: "ochre",
    body: "Created intuitive digital creatives and promotional campaign materials to enhance social media engagement, matching aesthetic layout rules with brand criteria.",
  },
  {
    role: "Core Member – Marketing & Digital Creative",
    org: "ABIT (Association of Budding Information Technocrats)",
    period: "Sep 2024 – Present",
    body: "Marketing & Publicity Team: Plan, strategize, and execute campus-wide promotional models to boost event outreach and active student participation. Digital Creative Team: Crafted visual branding architectures, digital graphics, and event collaterals to amplify the department's technical presence.",
  },
];

const PROJECTS = [
  {
    name: "Aegis Gateway",
    tag: "Zero-Trust AI Security Proxy",
    body: "A zero-trust AI security proxy that intercepts, scores, and controls every AI agent tool call before it executes. Built a dual-layer detection system combining a 16-pattern heuristic threat engine with Groq and Gemini AI analysis, an additive risk scoring model (0.0–1.0), human-in-the-loop approval queue with real-time dashboard, honeypot deception layer, and SHA-256 signed tamper-evident audit logs. Deployed live with Next.js on Vercel and a persistent Node.js proxy on Render backed by Supabase PostgreSQL with real-time WebSockets. Selected for the Hackverse National Level Hackathon Flagship Event at Microsoft Hyderabad (July 25).",
    accent: "terracotta",
    size: "lg",
  },
  {
    name: "AttenTrack",
    tag: "Full-stack – OCR – Firebase",
    body: "An elegant attendance simulator with glassmorphism UI, client-side OCR (Tesseract.js + PDF.js) for schedule uploads, and a What-If engine that predicts safety status in real time.",
    accent: "terracotta",
    size: "lg",
  },
  {
    name: "BioSim",
    tag: "Streamlit – Scikit-Learn – Python",
    body: "Bacterial evolution simulator with AI-powered antibiotic resistance prediction and live visualizations.",
    badge: "HackBio IIT Mandi – Finalist",
    accent: "sage",
    size: "md",
  },
  {
    name: "Razorpay Clone",
    tag: "HTML – CSS – JS",
    body: "Pixel-faithful responsive replica of the Razorpay interface.",
    accent: "ochre",
    size: "sm",
  },
  {
    name: "Chatting Application",
    tag: "Java – Sockets – Threads",
    body: "Real-time two-way chat over socket programming with multithreading.",
    accent: "sage",
    size: "sm",
  },
  {
    name: "Flappy Bird",
    tag: "Browser – DOM – Canvas",
    body: "Flappy Bird-inspired game with collision detection, real-time animation, and score tracking.",
    accent: "ochre",
    size: "sm",
  },
  {
    name: "AgriLink & Co",
    tag: "AI – HTML – CSS",
    body: "Online crops marketplace prototype using AI-assisted content.",
    accent: "terracotta",
    size: "md",
  },
  {
    name: "Quiz Application",
    tag: "Python – JEE Pattern",
    body: "Physics, Chemistry & Maths quiz engine built in Python.",
    accent: "sage",
    size: "sm",
  },
  {
    name: "Hotel Sky Lark Website",
    tag: "Web Development",
    body: "Developed a responsive business website for hotel services and customer engagement.",
    accent: "sage",
    size: "sm",
  },
  {
    name: "Parlour Website",
    tag: "UI/UX – Web",
    body: "Created a service-based website with appointment interface and clean UI design.",
    accent: "ochre",
    size: "sm",
  },
  {
    name: "Heritage Trails Tamil Nadu",
    tag: "Photography – Exhibition",
    body: "Featured photographer for the initiative; work exhibited at Government Museum Chennai.",
    accent: "ochre",
    size: "md",
  },
];

const CERTS = [
  "AI Tools Workshop by Be10x",
  "Gemini for Google Workspace",
  "Hacktify's Cyberflare 2.0 Cybersecurity Workshop",
  "Internet of Things with Arduino",
  "ChatGPT Prompt Engineering for Developers – DeepLearning.AI",
  "Fit in German A1",
  "Career Skills in Software Development – LinkedIn",
  "Career Skills in Data Analytics – LinkedIn",
  "Microsoft Azure AI Essentials – LinkedIn",
  "Cybersecurity Threat Landscape – LinkedIn",
  "AI for beginners – HP Life",
];

/* ---------------- Components ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-6xl px-5">
        <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full border border-border/60 px-5 py-3 backdrop-blur-xl transition-all ${scrolled ? "bg-paper/80 shadow-[0_10px_40px_-20px_oklch(0.18_0.015_60/0.25)]" : "bg-paper/40"}`}>
          <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-lg">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-medium">K</span>
            <span className="truncate">Kanishka Chaudhary</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-3.5 py-1.5 text-sm text-foreground/70 transition hover:bg-secondary hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-sm text-background transition hover:bg-primary">
              Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden rounded-full border border-border px-3 py-1.5 text-xs font-medium" aria-label="Menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-3xl border border-border/60 bg-paper/95 p-4 backdrop-blur-xl md:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-2.5 text-base font-medium hover:bg-secondary">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const socials = [
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/kanishkachaudhary/" },
    { label: "GitHub", icon: Github, href: "https://github.com/kanishkachaudharyvr-cmyk" },
  ];

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-28 pb-24 grain-bg">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-ochre/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-3xl" />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-paper/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-sage/60" />
                <span className="relative h-2 w-2 rounded-full bg-sage" />
              </span>
              Available for internships & collaborations
            </motion.div>

            <h1 className="mt-6 font-display text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] text-balance">
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="block">
                Building thoughtful
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="block">
                software with a
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="block italic text-primary">
                creative eye.
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I'm <span className="text-foreground">Kanishka Chaudhary</span> — an Information Technology engineering student, Google Student Ambassador, and full-stack tinkerer based in Mumbai. I pair engineering precision with a photographer's sense of composition.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-primary">
                See selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border bg-paper/50 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-secondary hover:border-primary">
                <FileText className="h-4 w-4 transition-colors group-hover:text-primary" />
                View resume
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[0_30px_80px_-30px_oklch(0.62_0.14_40/0.35)]">
              <img
                src={portraitAsset.url}
                alt="Kanishka Chaudhary"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-6 pt-20">
                <div className="font-display text-3xl text-background md:text-4xl">Kanishka Chaudhary</div>
                <div className="mt-1 text-sm text-background/80">IT Engineering Student · Mumbai</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-paper/70 px-4 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:bg-primary">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mini stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-border/70 pt-8 md:grid-cols-4">
          {[
            { k: "8.59", v: "CGPA · RGIT Mumbai" },
            { k: "10+", v: "Shipped projects" },
            { k: "11", v: "Certifications" },
            { k: "2026", v: "Google Ambassador" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl font-medium md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}


function Marquee() {
  const items = ["Full-stack Development", "AI Engineering", "UI Design", "Photography", "Google Ambassador", "IT Engineering", "Open Source"];
  return (
    <section className="border-y border-border/70 bg-cream py-6 overflow-hidden">
      <div className="flex marquee w-max whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-2xl italic text-foreground/70 md:text-3xl">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, icon: Icon }: { eyebrow: string; title: string; icon?: any }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
      className="mb-14 grid gap-4 md:grid-cols-[auto_1fr] md:items-end">
      <div>
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </div>
        <h2 className="mt-3 font-display text-4xl font-medium leading-[1] md:text-6xl text-balance">{title}</h2>
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeader eyebrow="About" title="Engineer by training, storyteller by instinct." icon={Sparkles} />
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            I'm an Information Technology student at <span className="italic">MCT's Rajiv Gandhi Institute of Technology</span>, Mumbai, and part of the 2026 Google Student Ambassador cohort. My work sits at the intersection of software, systems, and visual craft.
          </p>
          <p>
            Whether I'm building an OCR-powered attendance simulator, prototyping a bacterial-evolution model with Streamlit, or curating a heritage photography exhibit for the Government Museum Chennai — I chase the same thing: <span className="text-primary italic">clarity through detail</span>.
          </p>
          <p className="text-muted-foreground">
            Off the keyboard, I write, photograph, and study a bit of German (A1, and counting).
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-border bg-card p-7">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Currently</div>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
              <div><span className="font-medium">Advocating</span> Google AI as Student Ambassador '26</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage" />
              <div><span className="font-medium">Studying</span> Advanced DSA, Networks & OS</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ochre" />
              <div><span className="font-medium">Shooting</span> heritage & street photography</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground" />
              <div><span className="font-medium">Learning</span> German — <span className="font-mono text-xs">Guten Tag!</span></div>
            </li>
          </ul>
          <div className="mt-6 rounded-2xl bg-secondary p-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
            <div className="mt-1 flex items-center gap-2 font-display text-2xl">
              <MapPin className="h-5 w-5 text-primary" /> Powai, Mumbai
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Toolkit" title="The stack I reach for." icon={Code2} />
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(SKILLS).map(([cat, list], i) => (
            <motion.div key={cat}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-paper p-7 transition hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.14_40/0.4)]">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">{cat}</h3>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-paper/50 px-3 py-1.5 text-sm transition hover:border-primary hover:bg-primary hover:text-primary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeader eyebrow="Experience" title="Places I've worked & led." icon={Briefcase} />
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" />
        <div className="space-y-12">
          {EXPERIENCE.map((e, i) => (
            <motion.div key={e.role + e.org}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
              className={`relative grid gap-4 pl-12 md:grid-cols-2 md:gap-10 md:pl-0 ${i % 2 === 1 ? "md:[&>div:first-child]:col-start-2" : ""}`}>
              <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-paper md:left-[calc(50%-6px)]" />
              <div className={i % 2 === 1 ? "md:pl-10" : "md:pr-10 md:text-right"}>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</div>
                <h3 className="mt-2 font-display text-3xl leading-tight">{e.role}</h3>
                <div className="mt-1 text-primary">{e.org}</div>
              </div>
              <div className={i % 2 === 1 ? "md:pr-10 md:text-right md:row-start-1" : "md:pl-10"}>
                <p className="text-foreground/80 leading-relaxed">{e.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const sizeClass: Record<string, string> = {
    lg: "md:col-span-2 md:row-span-2",
    md: "md:col-span-2",
    sm: "",
  };
  const accentBg: Record<string, string> = {
    terracotta: "from-terracotta/15 to-transparent",
    sage: "from-sage/20 to-transparent",
    ochre: "from-ochre/25 to-transparent",
  };
  return (
    <section id="projects" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Selected Work" title="Things I've built & shipped." icon={Sparkles} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {PROJECTS.map((p, i) => (
            <motion.article key={p.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_80px_-40px_oklch(0.62_0.14_40/0.5)] ${sizeClass[p.size]}`}>
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentBg[p.accent]} opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative flex h-full flex-col justify-between gap-4">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/50 transition-all duration-500 group-hover:rotate-45 group-hover:text-primary" />
                  </div>
                  <h3 className={`mt-3 font-display leading-tight ${p.size === "lg" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                    {p.name}
                  </h3>
                </div>
                <div>
                  <p className={`text-foreground/75 ${p.size === "lg" ? "text-base md:text-lg" : "text-sm"}`}>{p.body}</p>
                  {p.badge && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-xs text-background">
                      <Award className="h-3 w-3" /> {p.badge}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCerts() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeader eyebrow="Education & Recognition" title="Study, honors, and a top-1.5% national rank." icon={GraduationCap} />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { deg: "B.E. Information Technology", inst: "Rajiv Gandhi Institute of Technology, Univ. of Mumbai", period: "2024 — 2028", grade: "CGPA 8.59 / 10" },
          { deg: "12th CBSE", inst: "Kendriya Vidyalaya Bhandup, Mumbai", period: "2024", grade: "81%" },
          { deg: "10th CBSE", inst: "Kendriya Vidyalaya Mandapam, Tamil Nadu", period: "2022", grade: "96% — National Ranker (Top 1.5%)" },
        ].map((e, i) => (
          <motion.div key={e.deg}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</div>
            <h3 className="mt-3 font-display text-xl leading-tight">{e.deg}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.inst}</p>
            <div className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium">{e.grade}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <div className="mb-6 flex items-baseline justify-between">
          <h3 className="font-display text-2xl md:text-3xl">Certifications</h3>
          <span className="font-mono text-xs text-muted-foreground">{CERTS.length} total</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <motion.div key={c}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-paper p-4 transition hover:border-primary/50 hover:bg-secondary">
              <Award className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 text-background md:py-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 text-xs uppercase tracking-widest text-background/70">
          <Camera className="h-3 w-3" /> Let's collaborate
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,8vw,6.5rem)] font-medium leading-[0.95] text-balance">
          Have an idea? <span className="italic text-ochre">Let's build it.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-background/70">
          I'm open to internships, freelance projects, and collaborations in full-stack development, AI tooling, and visual design.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Email", val: "kanishkachaudhary.vr@gmail.com", href: "mailto:kanishkachaudhary.vr@gmail.com" },
            { icon: Phone, label: "Phone", val: "+91 74004 62318", href: "tel:+917400462318" },
            { icon: MapPin, label: "Location", val: "Powai, Mumbai", href: "#" },
          ].map((c) => (
            <a key={c.label} href={c.href}
              className="group rounded-3xl border border-background/15 bg-background/5 p-6 text-left backdrop-blur transition hover:bg-background/10 hover:border-primary">
              <c.icon className="h-5 w-5 text-ochre" />
              <div className="mt-4 text-xs uppercase tracking-widest text-background/60">{c.label}</div>
              <div className="mt-1 truncate font-display text-lg">{c.val}</div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:kanishkachaudhary.vr@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-ochre hover:text-foreground">
            Say hello <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/kanishkachaudhary/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3.5 text-sm font-medium transition hover:bg-background/10">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/kanishkachaudharyvr-cmyk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3.5 text-sm font-medium transition hover:bg-background/10">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 text-sm text-muted-foreground">
        <div className="min-w-0 truncate">© {new Date().getFullYear()} Kanishka Chaudhary. Handcrafted in Mumbai.</div>
        <a href="#top" className="shrink-0 link-underline text-foreground">Back to top ↑</a>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary" />;
}

function Portfolio() {
  return (
    <div className="bg-paper">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
