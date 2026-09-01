# SM Portfolio — Design Spec

Date: 2026-09-01

## Purpose

Build a personal portfolio website for Anuraj K B's **Scrum Master / Agile
Delivery Lead** profile, mechanically identical to the existing PM portfolio
(`anurajkbabu-a11y/pm-portfolio`, live at `https://pm-portfolio-ebon.vercel.app`)
— same stack, same auto-deploy pipeline, same single-page/component
architecture — but with **all content sourced exclusively from
`Anuraj_K_B_Resume.docx`** (the Scrum Master resume), not from the PM
portfolio's `content/site.ts`. Where the same real underlying facts appear in
both (e.g., ReportPilot, the AI agent adoption program — genuinely the same
work), the copy on this new site must still be written independently from the
resume text, not copied from the PM site.

## Reference: how the PM portfolio works (mechanism to replicate)

Inspected at `ResumeAndPorftolio-PM/pm-portfolio-remote`:

- **Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4,
  `create-next-app` scaffold, Google fonts via `next/font`.
- **Structure:** `app/layout.tsx` (metadata/fonts/JSON-LD) + `app/page.tsx`
  (composes section components) + `components/*.tsx` (one per section) +
  `content/site.ts` (single source of truth for all copy, imported by every
  component — no hardcoded copy inside components).
- **Deployment:** GitHub repo linked to a Vercel project via Vercel's Git
  integration. Push to `master` → Vercel builds and deploys automatically
  (confirmed in the PM repo's `README.md`). No `vercel` CLI use required
  for ongoing deploys.
- **Tooling available in this environment:** `gh` CLI is authenticated
  (repo scope) — can create/push the new GitHub repo directly. `vercel` CLI
  is **not** installed; the user will do a one-time "Import Project" on
  vercel.com to link the new repo (per user's explicit choice).

## Scope

### In scope
- New Next.js app at `sm-portfolio/` (this directory), new GitHub repo
  `anurajkbabu-a11y/sm-portfolio`, pushed to `master`.
- Sections (per user's selection): Hero, About, Experience, AI-Augmented
  Delivery Highlights, Core Competencies/Skills, Certifications & Education,
  Contact, plus structural Nav and Footer.
- All copy sourced from `Anuraj_K_B_Resume.docx` (current version, as of
  2026-09-01 — includes the SAFe/PI Planning, financial services, Western
  market, and AI-Augmented Delivery Highlights edits made earlier in this
  session).

### Out of scope
- Case studies / Projects / Videos sections (PM-portfolio-only content —
  YouTube channel, Football Oracle, Notion case studies — none of this is in
  the SM resume).
- Actually linking the Vercel project (user does this manually after push).
- Any content not present in the resume (no invented metrics, no
  embellishment beyond what the resume already states).

## Content mapping (resume → site)

Source: full text extraction of `Anuraj_K_B_Resume.docx` as of 2026-09-01.

- **person**: Name "Anuraj K B"; role line "Agile Delivery Lead | Senior
  Scrum Master | Agile Coach (PMP, CSM)"; location "Kerala, India — Open to
  Relocation, Dubai UAE"; email `anurajkbabu@gmail.com`; phone
  `+91 96455 53445`; linkedin
  `https://www.linkedin.com/in/anurajkbalakrishnan`.
- **hero**: Headline built from the role line; subtext adapted from the
  first Professional Summary paragraph (16+ years IT delivery, 8+ years
  Agile/Scrum delivery, 4+ years dedicated Scrum Master/Agile Delivery Lead,
  PMP & CSM certified); facts strip: "16+ years", "PMP · CSM certified",
  "SAFe · PI Planning · RTE collaboration", "Financial services digital
  transformation".
- **about**: Both Professional Summary paragraphs, adapted into 2–3 short
  paragraphs (SDLC/modern dev practices, SAFe/PI Planning/RTE, Kanban/XP,
  data-driven continuous improvement, multicultural/Western European
  stakeholder collaboration, AI-augmented delivery practices, ISB Leadership
  with AI program in progress).
- **experience**: One entry per employer from Professional Experience,
  condensed from the resume bullets, most recent first:
  - Allianz Services India Pvt Ltd — Business Consultant, Project Management
    (Agile Delivery Lead / Scrum Master), Apr 2024–Present. Financial
    services digital transformation (Motor Retail → Motor Renewals); SAFe
    ceremonies incl. PI Planning with RTEs; RAID/impediment removal; backlog
    partnership with POs/BAs; Scrum-of-Scrums leadership; CI/CD/automated
    testing/design-thinking coaching; JIRA dashboards & Acceptance
    Criteria/DoD governance.
  - Indium Software — Project Manager / Scrum Master, Dec 2022–Nov 2023.
    Ceremony facilitation, velocity/cycle-time/lead-time tracking against
    quality/performance criteria, RAID logs, ~15% sprint predictability
    improvement.
  - LID&EW – GoK — Project Manager, Sep 2019–May 2022. End-to-end delivery
    of technology initiatives, RAID, governance, steering committee
    reporting.
  - UST Global — Manager, Projects (QA & Agile Delivery), Jan 2018–Sep 2019.
    QA delivery management, Agile/Kanban coaching, ~20% cycle/lead time
    reduction.
  - Earlier career (condensed): Good Methods Global/Carestack, Ernst &
    Young, Cognizant — testing/delivery governance roles building toward PM
    and Agile delivery.
- **aiHighlights**: The 3 entries from the resume's new "AI-Augmented
  Delivery Highlights" section — ReportPilot, Enterprise AI Agent Adoption,
  Motor Renewals AI Agent — rewritten as card copy (title, one-line
  description, 2–3 metric chips each) sourced from the resume's bullet text,
  written fresh (not copied from the PM site's Projects/Case Studies cards).
- **skillGroups**: The 11-row, 2-column Core Competencies table (22 items),
  regrouped into 4–5 logical categories (e.g., Agile Delivery & Coaching;
  AI & Automation; Stakeholder & Program Governance; Tools & Process
  Facilitation).
- **credentials**: Certifications (PMP, CSM, UiPath Certified RPA
  Professional, ISTQB Certified) + Education (ISB Hyderabad – Leadership
  with AI [in progress, expected June 2026], Master of Engineering, Bachelor
  of Engineering — College of Engineering, Trivandrum).
- **contact**: Email, phone, LinkedIn, relocation note.

## Architecture

Mirrors the PM portfolio 1:1 at the mechanism level:

```
sm-portfolio/
  app/
    layout.tsx         # fonts, metadata (OG/JSON-LD), globals.css import
    page.tsx           # composes section components in order
    globals.css
    icon.tsx            # generated favicon (Next.js metadata file convention,
                        # e.g. "AKB" monogram) — no static asset to reuse
    opengraph-image.tsx # generated OG image (Next.js ImageResponse) built
                        # from the hero headline/role — no static asset to reuse
  components/
    Nav.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    AIHighlights.tsx
    Skills.tsx
    Credentials.tsx
    Contact.tsx
    Footer.tsx
  content/
    site.ts           # single source of truth for all copy, written from
                       # the resume; header comment states this explicitly
                       # (same convention as the PM site's site.ts)
  package.json, tsconfig.json, next.config.ts, postcss.config.mjs,
  eslint.config.mjs, .gitignore, README.md
```

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 — same
  versions as the PM portfolio for consistency.
- `app/layout.tsx` metadata: title "Anuraj K B — Senior Scrum Master |
  Agile Delivery Lead", description drawn from the resume summary,
  canonical/OG URL placeholder `https://sm-portfolio.vercel.app` (Vercel's
  likely default naming; user updates after Vercel assigns the real URL if
  different). Icon and OG image come from `app/icon.tsx` /
  `app/opengraph-image.tsx` (Next.js metadata file convention, generated —
  see Architecture tree below), not static files under `public/`.
- No reuse of PM portfolio's visual identity requirement — new site can
  have its own simple, clean design (not specified to match PM site's
  visual style, only its mechanism), using Tailwind defaults/a small
  custom palette.

## Testing / verification

- `npm run build` must succeed with no TypeScript/ESLint errors.
- `npm run dev` manual check: all sections render, no console errors,
  responsive at mobile/desktop widths.
- Content spot-check: every fact/number on the site must trace back to a
  specific line in `Anuraj_K_B_Resume.docx` (no invented copy).
- `git push` to a new GitHub repo `anurajkbabu-a11y/sm-portfolio` (via `gh
  repo create`) succeeds; user completes Vercel import manually.

## Explicitly out of scope / deferred

- Automating the Vercel project link (user's choice — manual import).
- Any content categories not present in the SM resume (case studies,
  videos, external project links).
- Custom domain setup beyond the default Vercel URL.
