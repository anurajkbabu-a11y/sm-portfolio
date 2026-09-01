# SM Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a personal portfolio site for Anuraj K B's Scrum Master / Agile Delivery Lead profile at `sm-portfolio/`, mechanically identical to the existing PM portfolio (Next.js + Tailwind + Vercel Git auto-deploy), with all copy sourced from `Anuraj_K_B_Resume.docx`.

**Architecture:** Next.js 16 App Router site, one `content/site.ts` module holding every piece of copy (typed exports), one presentational component per page section (`components/*.tsx`), composed in `app/page.tsx`. No client-side interactivity is required (no forms, no JS-driven nav toggle) — this keeps every component a server component and removes an entire class of runtime bugs, satisfying YAGNI over the PM site's more elaborate custom-CSS/animation system.

**Tech Stack:** Next.js 16.3.2, React 19.2.8, TypeScript ^5, Tailwind CSS ^4 (`@tailwindcss/postcss`), ESLint ^9 (`eslint-config-next`), `next/font/google` (Inter + JetBrains Mono), `next/og` (`ImageResponse`) for generated icon/OG image. No test framework — see **Testing approach** below.

**Spec:** `docs/superpowers/specs/2026-09-01-sm-portfolio-design.md`

## Testing approach (read before Task 1)

This is a presentational, no-backend site: there is no business logic to unit-test. "Test" for every task in this plan means: **`npm run build` completes with zero TypeScript and ESLint errors**, plus (from Task 4 onward, once there's a renderable page) a manual check via `npm run dev` that the section renders without console errors. This replaces the pytest-style red/green cycle used in the plan template — each task's "write the failing test" step is instead "attempt the build before the code exists and confirm it fails for the expected reason (missing module/type error)", and "make it pass" is the real implementation.

## Global Constraints

- Package versions pinned exactly as specified in Tech Stack above (matches the reference PM portfolio for consistency).
- All copy in `content/site.ts` must trace back to a specific fact in `Anuraj_K_B_Resume.docx` — no invented metrics or embellishment. Copy is written fresh (not copied from the PM portfolio's `content/site.ts`), even where the same real underlying fact (e.g. ReportPilot) appears in both.
- No case studies / videos / external-project sections — out of scope per spec (not present in the SM resume).
- `npm run build` must pass with zero errors before any commit.
- Every commit message follows Conventional Commits style (`feat:`, `chore:`, `docs:`) matching this plan's step instructions.
- Working directory for every command in this plan: `C:\Users\Anuraj\OneDrive\VSProjects\ResumeAndPortfolio-SM\sm-portfolio` (already `git init`-ed; this plan's own spec is already committed there as the first commit).

---

### Task 1: Scaffold the Next.js project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `.gitignore`
- Create: `app/globals.css`
- Create: `app/layout.tsx` (minimal placeholder — Next.js App Router requires a root layout to exist for any build to succeed; Task 3 replaces this with the full version with fonts/metadata/JSON-LD)
- Create: `app/page.tsx` (placeholder, replaced task-by-task from Task 4 onward)
- Create: `README.md`

**Interfaces:**
- Produces: a working `npm run build` pipeline that every later task builds on. No exported functions/types yet.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "sm-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.3.2",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

- [ ] **Step 4: Create `postcss.config.mjs`**

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 5: Create `eslint.config.mjs`**

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
```

- [ ] **Step 6: Create `.gitignore`**

```
# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 7: Create `app/globals.css`**

```css
@import "tailwindcss";

:root {
  --font-sans: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  --font-mono: var(--font-jetbrains-mono), "Courier New", Courier, monospace;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
}
```

- [ ] **Step 8: Create minimal placeholder `app/layout.tsx`** (replaced with the full version in Task 3)

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 9: Create placeholder `app/page.tsx`** (replaced incrementally from Task 4)

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>sm-portfolio scaffold OK</p>
    </main>
  );
}
```

- [ ] **Step 10: Create `README.md`**

```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped for Anuraj K B's Scrum Master / Agile Delivery Lead portfolio.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

All page copy lives in `content/site.ts`, sourced from `Anuraj_K_B_Resume.docx`.

## Deployment

Deployed on Vercel with automatic deploys from the `master` branch of this repo.
```

- [ ] **Step 11: Install dependencies and verify the build**

Run: `npm install && npm run build`
Expected: build completes successfully, no TypeScript/ESLint errors. This is the "test" for this task — there is no code to unit-test yet, only a pipeline to verify (see Testing approach).

- [ ] **Step 12: Commit**

```bash
git add package.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs .gitignore app/globals.css app/layout.tsx app/page.tsx README.md package-lock.json
git commit -m "chore: scaffold Next.js 16 + Tailwind 4 project"
```

---

### Task 2: Write `content/site.ts` — the single source of truth for all copy

**Files:**
- Create: `content/site.ts`

**Interfaces:**
- Consumes: nothing (pure data module).
- Produces: named exports `person`, `hero`, `about`, `experience`, `aiHighlights`, `skillGroups`, `credentials`, `contact`, `footer`, each with the exact shape shown below. Every later component task imports directly from `@/content/site`.

- [ ] **Step 1: Attempt to import the module from a throwaway check (expected to fail)**

Run: `node -e "require('./content/site.ts')"` (expected to fail — file doesn't exist yet, or is TS and can't be required directly by node; either failure confirms the module isn't there yet)
Expected: FAIL (`Cannot find module './content/site.ts'` or similar)

- [ ] **Step 2: Create `content/site.ts`**

```typescript
// All copy on this site is sourced exclusively from Anuraj_K_B_Resume.docx
// (the Scrum Master / Agile Delivery Lead resume). Nothing here is invented
// marketing copy — every fact traces back to a specific line in that resume.

export const person = {
  name: "Anuraj K B",
  role: "Agile Delivery Lead | Senior Scrum Master | Agile Coach",
  credentials: "PMP, CSM",
  location: "Kerala, India",
  relocation: "Open to Relocation — Dubai, UAE",
  email: "anurajkbabu@gmail.com",
  phone: "+91 96455 53445",
  phoneHref: "+919645553445",
  linkedin: "https://www.linkedin.com/in/anurajkbalakrishnan",
};

export const hero = {
  statusPill: "PMP · CSM Certified — Open to Senior Scrum Master / Agile Delivery roles",
  headingLine1: "Agile delivery leadership,",
  headingLine2: "augmented by AI agents.",
  subtext:
    "16+ years of IT program and project delivery experience, including 8+ years driving Agile/Scrum-based delivery and 4+ years in dedicated Scrum Master / Agile Delivery Lead roles. SAFe practitioner with hands-on PI Planning and Release Train Engineer collaboration, delivering financial services digital transformation programs across matrixed, globally distributed teams.",
  ctaPrimary: { label: "Get in touch", href: "#contact" },
  ctaGhost: { label: "View experience", href: "#experience" },
  factsStrip: [
    { label: "Experience", value: "16+ years" },
    { label: "Certifications", value: "PMP · CSM" },
    { label: "Agile Frameworks", value: "SAFe · PI Planning · RTE Collaboration" },
    { label: "Domain", value: "Financial Services Digital Transformation" },
  ],
};

export const about = {
  eyebrow: "About",
  heading: "Senior Scrum Master driving Agile and AI-augmented delivery.",
  paragraphs: [
    "Agile Delivery Lead and Senior Scrum Master with 16+ years of IT program and project delivery experience, including 8+ years driving Agile/Scrum-based delivery and 4+ years in dedicated Scrum Master / Agile Delivery Lead roles. PMP and CSM certified, with a consistent track record of leading end-to-end delivery — spanning vendor-led initiatives, in-house product enhancements, and support releases — across matrixed, multi-team, and globally distributed environments, partnering with Western European and global business stakeholders, including financial services digital transformation programs.",
    "Strong in sprint planning, backlog management, risk and dependency governance, stakeholder and vendor management, and Agile ceremony facilitation, with solid grounding in SDLC and modern development practices. Practical exposure to SAFe practices — including PI Planning and coordination with Release Train Engineers — alongside Kanban and XP, applying a data-driven approach to monitor team performance and drive continuous improvement across multicultural, globally distributed teams.",
    "Early adopter of AI-augmented delivery practices, using Claude LLM-based AI agents for project planning, delivery tracking, dynamic executive reporting, and spec-driven initiative generation. Currently pursuing the Leadership with AI program at the Indian School of Business, Hyderabad (expected completion June 2026).",
  ],
  snapshot: [
    { label: "Business Consultant – Project Management, Allianz", tag: "2024–Present" },
    { label: "PMP — Project Management Professional", tag: "PMI" },
    { label: "CSM — Certified ScrumMaster", tag: "Scrum Alliance" },
    { label: "Leadership with AI", tag: "Indian School of Business, Hyderabad" },
    { label: "Based in Kerala, India", tag: "IST" },
    { label: "Open to Relocation", tag: "Dubai, UAE" },
  ],
};

export const experience = [
  {
    role: "Business Consultant – Project Management (Agile Delivery Lead / Scrum Master)",
    org: "Allianz Services India Pvt Ltd",
    dates: "Apr 2024 – Present",
    detail:
      "Operating as Agile Delivery Lead / Scrum Master on Allianz's financial services digital transformation initiatives — first the Motor Retail application development program, currently Motor Renewals. Facilitate the full Agile ceremony cadence within a SAFe environment, including PI Planning, in close coordination with Release Train Engineers.",
    highlights: [
      "Own risk, assumption, issue, and dependency (RAID) management; proactively remove impediments and blockers to maintain optimal team flow.",
      "Partner with Product Owners and Business Analysts on requirements gathering, backlog grooming, and sprint commitment; maintain delivery roadmaps and JIRA milestone tracking.",
      "Lead Scrum-of-Scrums sessions to manage cross-team dependencies and program alignment, reporting delivery status to senior management forums.",
      "Coach teams on Agile best practices, CI/CD, automated testing, and design thinking, strengthening engineering maturity and continuous delivery capability.",
    ],
  },
  {
    role: "Project Manager / Scrum Master",
    org: "Indium Software",
    dates: "Dec 2022 – Nov 2023",
    detail:
      "Facilitated Agile ceremonies and managed end-to-end delivery for cross-functional product teams. Tracked velocity, cycle time, and lead time against quality and performance criteria; coached teams to higher levels of Scrum maturity at a sustainable, comfortable pace.",
    highlights: [
      "Managed risk, issue, and dependency logs; partnered with Product Owners to refine and prioritize the backlog.",
      "Drove stakeholder communication, status reporting, and process improvement, improving sprint delivery predictability by ~15%.",
    ],
  },
  {
    role: "Project Manager",
    org: "LID&EW – Government of Kerala",
    dates: "Sep 2019 – May 2022",
    detail:
      "Led end-to-end delivery of technology initiatives, managing scope, schedule, budget, and stakeholder expectations across multi-team programs. Owned risk, issue, and dependency management; facilitated structured project governance and steering committee reporting.",
    highlights: [],
  },
  {
    role: "Manager – Projects (QA & Agile Delivery)",
    org: "UST Global",
    dates: "Jan 2018 – Sep 2019",
    detail:
      "Managed end-to-end QA delivery across multiple projects, owning test planning, test strategy, and release quality sign-off. Supported Agile transformation initiatives, coaching teams on Scrum and Kanban practices — contributing to a ~20% reduction in cycle time and lead time.",
    highlights: [],
  },
  {
    role: "Testing & Delivery Governance",
    org: "Good Methods Global (now Carestack) · Ernst & Young · Cognizant Technology Solutions",
    dates: "Nov 2009 – Oct 2017",
    detail:
      "Built the foundation in IT project and program management across testing, delivery governance, and client engagement roles — Lead, Projects (QA) at Cognizant Technology Solutions; Project Lead at Ernst & Young supporting SDLC planning and release readiness; Consultant at Good Methods Global overseeing test planning and delivery.",
    highlights: [],
  },
];

export const aiHighlights = [
  {
    icon: "📊",
    title: "ReportPilot",
    description:
      "Python-based reporting tool built with Claude Code, connecting to the Jira REST API and rendering Jinja2 HTML dashboards to automate program status reporting.",
    metrics: [{ value: "2–3 hrs → <2 min", label: "Report generation time" }],
  },
  {
    icon: "🤖",
    title: "Enterprise AI Agent Adoption",
    description:
      "Led Claude AI agent rollout across a 40-member, five-team program — bypassing the traditional pilot phase — introducing spec-driven developer agents and QA agents with structured enablement and human sign-off gates.",
    metrics: [
      { value: "70%", label: "Adoption in 6 weeks" },
      { value: "58%", label: "Agent-first delivery" },
      { value: "31%→18%", label: "Agent rework reduced" },
    ],
  },
  {
    icon: "🚗",
    title: "Motor Renewals AI Agent",
    description:
      "Claude-powered agent for the Motor Renewals program performing automated bug analysis (front-end vs. back-end classification), requirements querying, and case support.",
    metrics: [{ value: "~35%", label: "Less manual case-handling effort" }],
  },
];

export const skillGroups = [
  {
    title: "Agile Delivery & Coaching",
    skills: [
      "Agile Delivery Leadership (Scrum & Kanban)",
      "Scrum Maturity Coaching & Team Empowerment",
      "Scrum Ceremony Facilitation & Scrum-of-Scrums",
      "Self-Organizing Team Coaching",
      "SAFe Practices, PI Planning & RTE Collaboration",
    ],
  },
  {
    title: "Planning & Tools",
    skills: [
      "Sprint Planning, JIRA Roadmaps & Milestone Management",
      "JIRA & Azure DevOps Administration and Automation",
      "Backlog Refinement & Requirements Gathering",
      "Confluence & MS Office Suite",
      "Acceptance Criteria / Definition of Done Governance",
    ],
  },
  {
    title: "Program & Stakeholder Governance",
    skills: [
      "Risk, Issue & Dependency Management",
      "Stakeholder & Executive Communication (Western/Global Markets)",
      "Vendor & Cross-Functional Team Management",
      "Change Management, Conflict Resolution, Problem-Solving & Resilience",
      "Financial Services & Digital Transformation Delivery",
    ],
  },
  {
    title: "AI, QA & Continuous Improvement",
    skills: [
      "AI-Driven Delivery Management (Claude LLM Agents)",
      "RPA & Process Automation (UiPath)",
      "QA Delivery & Test Management",
      "Test Strategy & Release Quality Governance",
      "Kanban, XP & Data-Driven Continuous Improvement",
    ],
  },
];

export const credentials = {
  eyebrow: "Certifications & Education",
  heading: "Credentials",
  certifications: [
    { name: "Project Management Professional (PMP)", issuer: "PMI" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance" },
    { name: "UiPath Certified RPA Professional", issuer: "UiPath" },
    { name: "ISTQB Certified", issuer: "ISTQB" },
  ],
  // Every entry declares `note` (even as undefined) so TS infers one object
  // shape for the array instead of a union — keeps `edu.note &&` in
  // Credentials.tsx valid for every entry.
  education: [
    {
      program: "Leadership with AI",
      institution: "Indian School of Business, Hyderabad",
      note: "Expected completion: June 2026" as string | undefined,
    },
    {
      program: "Master of Engineering",
      institution: "College of Engineering, Trivandrum",
      note: undefined as string | undefined,
    },
    {
      program: "Bachelor of Engineering",
      institution: "College of Engineering, Trivandrum",
      note: undefined as string | undefined,
    },
  ],
};

export const contact = {
  eyebrow: "Get in touch",
  heading: "Contact",
  socialLinks: [
    { label: person.email, href: `mailto:${person.email}` },
    { label: person.phone, href: `tel:${person.phoneHref}` },
    { label: "LinkedIn", href: person.linkedin },
  ],
};

export const footer = {
  copyright: "© 2026 Anuraj K B · Kerala, India",
  tagline: "Agile delivery, AI-augmented.",
};
```

- [ ] **Step 3: Type-check the module**

Run: `npx tsc --noEmit`
Expected: PASS, no errors (this confirms the module is syntactically and structurally valid TypeScript — the practical equivalent of "the test passes" for a pure data module).

- [ ] **Step 4: Commit**

```bash
git add content/site.ts
git commit -m "feat: add site content sourced from Anuraj_K_B_Resume.docx"
```

---

### Task 3: `app/layout.tsx`, generated icon, generated OG image

**Files:**
- Modify: `app/layout.tsx` (replaces Task 1's minimal placeholder with the full version — fonts, metadata, JSON-LD)
- Create: `app/icon.tsx`
- Create: `app/opengraph-image.tsx`

**Interfaces:**
- Consumes: `person`, `hero` from `@/content/site` (Task 2).
- Produces: root HTML shell with fonts wired via CSS variables `--font-inter` / `--font-jetbrains-mono` (consumed by `app/globals.css`, Task 1) and `<html>`/`<body>` structure every component renders inside of.

- [ ] **Step 1: Attempt build with current placeholder page (baseline, expected to still pass — confirms starting state before this task's changes)**

Run: `npm run build`
Expected: PASS (same placeholder build as Task 1 — this step just re-confirms the starting point before editing `layout.tsx`)

- [ ] **Step 2: Replace `app/layout.tsx`** (overwrite Task 1's minimal placeholder with the full version)

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { person, hero } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://sm-portfolio.vercel.app";

const title = `${person.name} — Senior Scrum Master | Agile Delivery Lead`;
const description = hero.subtext;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: SITE_URL,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  sameAs: [person.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Create `app/icon.tsx`**

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          color: "#5EEAD4",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        AKB
      </div>
    ),
    { ...size }
  );
}
```

- [ ] **Step 4: Create `app/opengraph-image.tsx`**

```tsx
import { ImageResponse } from "next/og";
import { person, hero } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0F172A",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#5EEAD4", marginBottom: 24 }}>{person.name}</div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15 }}>
          {hero.headingLine1}
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15 }}>
          {hero.headingLine2}
        </div>
      </div>
    ),
    { ...size }
  );
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: PASS. Confirms `layout.tsx` compiles, fonts resolve, and the generated icon/OG image routes build without error.

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx app/icon.tsx app/opengraph-image.tsx
git commit -m "feat: add root layout, metadata, generated icon and OG image"
```

---

### Task 4: `components/Nav.tsx`, `components/Footer.tsx` — wire into `app/page.tsx`

**Files:**
- Create: `components/Nav.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/page.tsx` (replace placeholder with real composition, starting with Nav/Footer)

**Interfaces:**
- Consumes: `footer` from `@/content/site` (Footer); Nav uses hardcoded section-id links (`#about`, `#experience`, `#ai-highlights`, `#skills`, `#credentials`, `#contact`) that later tasks' components must expose as their `id` attribute.
- Produces: `Nav` and `Footer` default exports, each a zero-prop server component.

- [ ] **Step 1: Confirm current build still passes before edits (baseline)**

Run: `npm run build`
Expected: PASS (Task 3's state)

- [ ] **Step 2: Create `components/Nav.tsx`**

```tsx
const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "AI Highlights", href: "#ai-highlights" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold text-slate-900">
          Anuraj K B
        </a>
        <ul className="flex flex-wrap items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-teal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
```

- [ ] **Step 3: Create `components/Footer.tsx`**

```tsx
import { footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 text-xs uppercase tracking-wide text-slate-500">
        <p className="m-0">{footer.copyright}</p>
        <p className="m-0">{footer.tagline}</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Replace `app/page.tsx`**

```tsx
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">{/* section components are added here task-by-task */}</main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: PASS, no TypeScript/ESLint errors.

- [ ] **Step 6: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`
Expected: Nav bar renders at top with 6 links; footer renders at bottom; no console errors. Stop the dev server after checking.

- [ ] **Step 7: Commit**

```bash
git add components/Nav.tsx components/Footer.tsx app/page.tsx
git commit -m "feat: add Nav and Footer, wire into page composition"
```

---

### Task 5: `components/Hero.tsx`

**Files:**
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx:8` (insert `<Hero />` as the first child of `<main>`)

**Interfaces:**
- Consumes: `hero`, `person` from `@/content/site`.
- Produces: `Hero` default export, zero-prop server component, renders inside a `<section id="top">`.

- [ ] **Step 1: Confirm current build passes (baseline)**

Run: `npm run build`
Expected: PASS (Task 4's state)

- [ ] **Step 2: Create `components/Hero.tsx`**

```tsx
import { hero, person } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20">
      <p className="mb-6 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-2 font-mono text-xs uppercase tracking-wide text-teal-800">
        {hero.statusPill}
      </p>
      <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
        {hero.headingLine1}
        <br />
        {hero.headingLine2}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{hero.subtext}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={hero.ctaPrimary.href}
          className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
        >
          {hero.ctaPrimary.label}
        </a>
        <a
          href={hero.ctaGhost.href}
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-teal-700 hover:text-teal-800"
        >
          {hero.ctaGhost.label}
        </a>
      </div>
      <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {hero.factsStrip.map((fact) => (
          <div
            key={fact.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <dt className="font-mono text-xs uppercase tracking-wide text-slate-500">
              {fact.label}
            </dt>
            <dd className="mt-2 text-sm font-bold text-slate-900">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <p className="sr-only">{person.name} — {person.role}</p>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

Modify `app/page.tsx`: add the import and render `<Hero />` as the first child inside `<main id="main">`.

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`
Expected: Hero renders with status pill, two-line heading, subtext, two CTA buttons, and a 4-cell facts strip. No console errors. Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section"
```

---

### Task 6: `components/About.tsx`

**Files:**
- Create: `components/About.tsx`
- Modify: `app/page.tsx` (insert `<About />` after `<Hero />`)

**Interfaces:**
- Consumes: `about` from `@/content/site`.
- Produces: `About` default export, server component, renders inside `<section id="about">`.

- [ ] **Step 1: Confirm current build passes (baseline)**

Run: `npm run build`
Expected: PASS (Task 5's state)

- [ ] **Step 2: Create `components/About.tsx`**

```tsx
import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">{about.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{about.heading}</h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-slate-600">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="divide-y divide-slate-200">
            {about.snapshot.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                <span className="text-sm text-slate-700">{item.label}</span>
                <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                  {item.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

Add `import About from "@/components/About";` and render `<About />` immediately after `<Hero />` inside `<main>`.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`
Expected: About section renders below Hero with 3 paragraphs on the left and a 6-item snapshot list on the right. No console errors. Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add components/About.tsx app/page.tsx
git commit -m "feat: add About section"
```

---

### Task 7: `components/Experience.tsx`

**Files:**
- Create: `components/Experience.tsx`
- Modify: `app/page.tsx` (insert `<Experience />` after `<About />`)

**Interfaces:**
- Consumes: `experience` (array) from `@/content/site`.
- Produces: `Experience` default export, server component, renders inside `<section id="experience">`.

- [ ] **Step 1: Confirm current build passes (baseline)**

Run: `npm run build`
Expected: PASS (Task 6's state)

- [ ] **Step 2: Create `components/Experience.tsx`**

```tsx
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">Experience</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
        Professional experience
      </h2>
      <div className="mt-10 space-y-8 border-l-2 border-slate-200 pl-8">
        {experience.map((role) => (
          <div key={`${role.org}-${role.dates}`} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-teal-700 ring-4 ring-white" />
            <p className="font-mono text-xs uppercase tracking-wide text-slate-500">
              {role.dates}
            </p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {role.role} · {role.org}
            </h3>
            <p className="mt-2 max-w-2xl text-slate-600">{role.detail}</p>
            {role.highlights.length > 0 && (
              <ul className="mt-3 max-w-2xl space-y-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-700" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

Add `import Experience from "@/components/Experience";` and render `<Experience />` immediately after `<About />`.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`
Expected: 5 timeline entries render in order (Allianz, Indium, LID&EW, UST Global, earlier career), each with dates, role/org, detail paragraph, and bullet highlights where present. No console errors. Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add components/Experience.tsx app/page.tsx
git commit -m "feat: add Experience timeline section"
```

---

### Task 8: `components/AIHighlights.tsx`

**Files:**
- Create: `components/AIHighlights.tsx`
- Modify: `app/page.tsx` (insert `<AIHighlights />` after `<Experience />`)

**Interfaces:**
- Consumes: `aiHighlights` (array) from `@/content/site`.
- Produces: `AIHighlights` default export, server component, renders inside `<section id="ai-highlights">`.

- [ ] **Step 1: Confirm current build passes (baseline)**

Run: `npm run build`
Expected: PASS (Task 7's state)

- [ ] **Step 2: Create `components/AIHighlights.tsx`**

```tsx
import { aiHighlights } from "@/content/site";

export default function AIHighlights() {
  return (
    <section id="ai-highlights" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-teal-700">
          AI-Augmented Delivery
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          AI-augmented delivery highlights
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiHighlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{item.description}</p>
              <dl className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between gap-3">
                    <dt className="text-xs text-slate-500">{metric.label}</dt>
                    <dd className="font-mono text-sm font-bold text-teal-800">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

Add `import AIHighlights from "@/components/AIHighlights";` and render `<AIHighlights />` immediately after `<Experience />`.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`
Expected: 3 cards render (ReportPilot, Enterprise AI Agent Adoption, Motor Renewals AI Agent), each with icon, title, description, and metric rows. No console errors. Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add components/AIHighlights.tsx app/page.tsx
git commit -m "feat: add AI-Augmented Delivery Highlights section"
```

---

### Task 9: `components/Skills.tsx`

**Files:**
- Create: `components/Skills.tsx`
- Modify: `app/page.tsx` (insert `<Skills />` after `<AIHighlights />`)

**Interfaces:**
- Consumes: `skillGroups` (array) from `@/content/site`.
- Produces: `Skills` default export, server component, renders inside `<section id="skills">`.

- [ ] **Step 1: Confirm current build passes (baseline)**

Run: `npm run build`
Expected: PASS (Task 8's state)

- [ ] **Step 2: Create `components/Skills.tsx`**

```tsx
import { skillGroups } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">Skills</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Core competencies</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-slate-100 pb-3 text-sm text-slate-700 last:border-b-0 last:pb-0"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

Add `import Skills from "@/components/Skills";` and render `<Skills />` immediately after `<AIHighlights />`.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`
Expected: 4 skill group cards render (Agile Delivery & Coaching; Planning & Tools; Program & Stakeholder Governance; AI, QA & Continuous Improvement), each with 5 list items. No console errors. Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add components/Skills.tsx app/page.tsx
git commit -m "feat: add Skills section"
```

---

### Task 10: `components/Credentials.tsx`

**Files:**
- Create: `components/Credentials.tsx`
- Modify: `app/page.tsx` (insert `<Credentials />` after `<Skills />`)

**Interfaces:**
- Consumes: `credentials` from `@/content/site`.
- Produces: `Credentials` default export, server component, renders inside `<section id="credentials">`.

- [ ] **Step 1: Confirm current build passes (baseline)**

Run: `npm run build`
Expected: PASS (Task 9's state)

- [ ] **Step 2: Create `components/Credentials.tsx`**

```tsx
import { credentials } from "@/content/site";

export default function Credentials() {
  return (
    <section id="credentials" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-teal-700">
          {credentials.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          {credentials.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500">
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {credentials.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 text-sm text-slate-700 last:border-b-0 last:pb-0"
                >
                  <span>{cert.name}</span>
                  <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500">
              Education
            </h3>
            <ul className="mt-4 space-y-3">
              {credentials.education.map((edu) => (
                <li key={edu.program} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                  <p className="m-0 text-sm font-semibold text-slate-800">{edu.program}</p>
                  <p className="m-0 text-sm text-slate-600">{edu.institution}</p>
                  {edu.note && <p className="m-0 text-xs text-slate-500">{edu.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into `app/page.tsx`**

Add `import Credentials from "@/components/Credentials";` and render `<Credentials />` immediately after `<Skills />`.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000`
Expected: Two cards render side by side (Certifications: 4 items; Education: 3 items, ISB entry shows the "Expected completion" note). No console errors. Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add components/Credentials.tsx app/page.tsx
git commit -m "feat: add Credentials (Certifications & Education) section"
```

---

### Task 11: `components/Contact.tsx` — final page composition and full verification

**Files:**
- Create: `components/Contact.tsx`
- Modify: `app/page.tsx` (insert `<Contact />` after `<Credentials />` — final section)

**Interfaces:**
- Consumes: `contact`, `person` from `@/content/site`.
- Produces: `Contact` default export, server component, renders inside `<section id="contact">`. This is the last section — after this task, `app/page.tsx` composition is complete.

- [ ] **Step 1: Confirm current build passes (baseline)**

Run: `npm run build`
Expected: PASS (Task 10's state)

- [ ] **Step 2: Create `components/Contact.tsx`**

```tsx
import { contact, person } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-teal-700">{contact.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{contact.heading}</h2>
      <p className="mt-4 max-w-xl text-slate-600">{person.relocation}</p>
      <ul className="mt-8 max-w-md divide-y divide-slate-200">
        {contact.socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center justify-between py-4 text-sm font-semibold text-slate-700 hover:text-teal-800"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Finalize `app/page.tsx`**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AIHighlights from "@/components/AIHighlights";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <AIHighlights />
        <Skills />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS, zero TypeScript/ESLint errors.

- [ ] **Step 5: Full manual walkthrough**

Run: `npm run dev`, open `http://localhost:3000`. Scroll through the entire page top to bottom, and click every Nav link to confirm it scrolls to the matching section id (`#about`, `#experience`, `#ai-highlights`, `#skills`, `#credentials`, `#contact`).
Expected: All 7 sections render in order, all Nav links jump to the correct section, no console errors. Resize the browser to a narrow (mobile) width and confirm the layout doesn't break (facts strip and skill/credential grids collapse to fewer columns, nav links wrap). Stop dev server.

- [ ] **Step 6: Content spot-check against the resume**

Open `Anuraj_K_B_Resume.docx` (or its already-extracted text from this session) side-by-side with `content/site.ts` and confirm every number and named tool (ReportPilot, 40-member/five-team, 70% adoption, ~35% case-handling effort, PMP/CSM/UiPath/ISTQB, ISB Leadership with AI, SAFe/PI Planning/RTE, etc.) matches the resume. Fix any discrepancy directly in `content/site.ts` and re-run `npm run build`.
Expected: No discrepancies, or any found are fixed and the build still passes.

- [ ] **Step 7: Commit**

```bash
git add components/Contact.tsx app/page.tsx
git commit -m "feat: add Contact section, complete page composition"
```

---

### Task 12: Create GitHub repo and push

**Files:** none (repo/CLI operations only)

**Interfaces:**
- Consumes: the complete, committed working tree from Tasks 1–11.
- Produces: a GitHub repository at `anurajkbabu-a11y/sm-portfolio` with `master` as the default branch, containing all commits from this plan.

- [ ] **Step 1: Confirm `gh` auth and full build one more time**

Run: `gh auth status && npm run build`
Expected: `gh auth status` shows logged in as `anurajkbabu-a11y`; `npm run build` PASSes.

- [ ] **Step 2: Confirm the branch is named `master`**

Run: `git branch --show-current`
Expected: `master` (this repo was created with `git init`, whose default branch name depends on local git config — if this prints something other than `master`, rename it: `git branch -M master`)

- [ ] **Step 3: Create the GitHub repo and push**

Run:
```bash
gh repo create anurajkbabu-a11y/sm-portfolio --public --source=. --remote=origin --push
```
Expected: Repo is created on GitHub, `origin` remote is added, and all commits are pushed to `master`. Command output includes the new repo URL.

- [ ] **Step 4: Verify**

Run: `gh repo view anurajkbabu-a11y/sm-portfolio --web=false` and `git log --oneline origin/master`
Expected: Repo metadata prints successfully; `origin/master` log matches local `master` log (same commits, same order).

- [ ] **Step 5: Report the manual Vercel step to the user**

This plan does not automate Vercel linking (per the spec, the user does a one-time "Import Project" on vercel.com). No commit for this step — it's a manual instruction to relay: go to vercel.com → Add New → Project → import `anurajkbabu-a11y/sm-portfolio` → deploy. Once deployed, if the resulting URL differs from the `https://sm-portfolio.vercel.app` placeholder used in `app/layout.tsx`, update `SITE_URL` there, rebuild, and push a follow-up commit.

---

## Post-plan follow-up (not a task — note for the user)

After Vercel assigns the real production URL, `app/layout.tsx:SITE_URL` (currently `https://sm-portfolio.vercel.app`) should be updated to match if different, then rebuilt and pushed.
