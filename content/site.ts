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
