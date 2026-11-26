export const CONTACT_EMAIL = 'dflexprostudios@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/dflexpro-studios/'
export const SITE_URL = 'https://www.dflexpro.in'
// Cal.com booking page for the free 15-min call
export const BOOKING_URL = 'https://cal.com/dflexpro-studios/15min'

// Promises shown above the contact form. Keep these in sync with the FAQ answers.
export const GUARANTEES = [
  { icon: 'code', title: 'You own the code', text: '100% yours once paid' },
  { icon: 'wallet', title: 'Milestone payments', text: 'Pay as work is delivered' },
  { icon: 'shield', title: 'NDA on request', text: 'Your idea stays private' },
  { icon: 'sparkles', title: '1 year of free tweaks', text: 'Minor changes after launch' },
  { icon: 'clock', title: 'Reply within 48h', text: 'Usually way sooner' },
]

export const HOME_FAQS = [
  {
    q: 'How much will my project cost?',
    a: "It depends on what you need, so we don't push one-size-fits-all packages. Tell us your idea and we'll send a clear, fixed quote after a quick free call. Projects start from under $100, and you can pay in any currency.",
  },
  {
    q: "I'm not technical. Can I still work with you?",
    a: "Absolutely — most of our clients aren't. We explain everything in plain language, show you progress every week on a live link you can click around, and you can message the people actually building it.",
  },
  {
    q: 'How long will it take?',
    a: 'Simple websites usually take 1–2 weeks, and most MVPs and custom apps take 4–8 weeks. You get an exact timeline with your quote, before any work starts.',
  },
  {
    q: 'How do payments work?',
    a: 'We split payments into milestones, so you only pay as work gets delivered — never everything upfront. We accept payment in any currency.',
  },
  {
    q: 'Do I own the code and design?',
    a: 'Yes. Once the project is paid for, the code, designs and everything we build are 100% yours.',
  },
  {
    q: 'What happens after launch?',
    a: "We don't disappear. You get 1 year of free minor changes (like text, image or small design tweaks), and we offer ongoing support and maintenance if you need bigger updates or new features.",
  },
  {
    q: 'My project is stuck with another developer. Can you help?',
    a: "Yes — that's one of our specialities. We audit what's already built, tell you honestly what's salvageable, and take it over the finish line.",
  },
]

export const PROJECT_TYPES = [
  'Enterprise Software',
  'SaaS Platform / MVP',
  'Project Rescue',
  'Outsourced Dev Team',
  'Support & Maintenance',
  'Automation & AI Workflows',
  'Something else',
]

export const BUDGET_RANGES = [
  'Under $100',
  '$100 – $200',
  '$200 – $500',
  '$500 – $1,000',
  '$1,000 – $2,000',
  '$2,000+',
  'Not sure yet',
]

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Team', href: '/#team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export const TEAM = [
  {
    role: 'Software Engineers',
    icon: 'code',
    desc: 'Full-stack devs who ship production code — not just prototypes that break in the demo.',
  },
  {
    role: 'Graphic Designers',
    icon: 'palette',
    desc: 'Brand identity, UI, and marketing creatives — visuals that make you look like the real company you are.',
  },
  {
    role: 'Video Editors',
    icon: 'clapperboard',
    desc: 'Reels, ads, product walkthroughs, demo videos — cut and polished to actually hold attention.',
  },
  {
    role: 'Social Media Managers',
    icon: 'megaphone',
    desc: 'We plan, post, and manage your socials so your online presence grows while you run the business.',
  },
]

export const CLIENTS = [
  {
    name: 'Propkeepers',
    industry: 'Real Estate',
    desc: 'RERA-registered property advisory platform helping buyers and investors discover listings across Pune.',
    url: 'https://propkeepers.com/',
  },
  {
    name: 'CloudRiva',
    industry: 'Remote Operations',
    desc: 'Remote-staffing platform connecting businesses with trained virtual assistants and back-office support.',
    url: 'https://thecloudriva.com/',
  },
  {
    name: 'PropAgreement',
    industry: 'PropTech / Legal',
    desc: 'Online registered rent agreements across Maharashtra — expert drafting, doorstep biometrics, and the registered copy on WhatsApp, often within 24 hours.',
    url: 'https://propagreement.in/',
  },
  {
    name: 'Ace Fans',
    industry: 'E-Commerce',
    desc: 'D2C storefront for a premium range of exhaust, table, wall, and pedestal cooling fans.',
    url: 'https://acefans.in/',
  },
  {
    name: 'Invesco Realty',
    industry: 'Real Estate',
    desc: 'Digital presence and lead generation build for a growing realty business.',
    url: null,
  },
  {
    name: 'Cloudpunch',
    industry: 'Platform Build',
    desc: 'End-to-end platform designed, built, and handed over — no longer live, but shipped clean.',
    url: null,
  },
]

export const SERVICES = [
  {
    tag: '01',
    slug: 'enterprise-software-development',
    title: 'Enterprise Software',
    metaTitle: 'Enterprise Software Development Company | DflexPro Studios',
    metaDescription:
      'DflexPro Studios builds custom enterprise software — internal tools, ERPs, and dashboards engineered for real scale and long-term reliability.',
    desc: 'Internal tools, ERPs, dashboards — built to handle real scale, not just a demo that looks good on a Friday.',
    intro:
      "Enterprise software doesn't get to be flaky. It runs your operations, holds your data, and gets used by people who didn't choose it — so it has to just work. We build internal tools, ERPs, and dashboards that are engineered for real usage patterns, real data volumes, and the messy edge cases that only show up after launch.",
    tags: ['Web Apps', 'Internal Tools', 'Dashboards', 'APIs'],
    included: [
      'Requirements & workflow mapping with your actual teams',
      'Role-based access control and audit-friendly logging',
      'Integrations with your existing tools (ERPs, CRMs, payment systems)',
      'Scalable architecture built for growing data and users',
      'Documentation and handover so it doesn\'t depend on one person',
    ],
    faqs: [
      {
        q: 'How long does an enterprise software project usually take?',
        a: 'Most internal tools and dashboards take 6–14 weeks depending on scope and integrations. We scope it upfront so there are no surprises.',
      },
      {
        q: 'Can you work with our existing systems and data?',
        a: "Yes — most of our enterprise work involves integrating with systems that already exist. We audit what's there before proposing a rebuild.",
      },
      {
        q: 'Do you provide support after launch?',
        a: 'Yes, ongoing support and maintenance is available as a separate engagement — see our Support & Maintenance service.',
      },
    ],
  },
  {
    tag: '02',
    slug: 'saas-development',
    title: 'SaaS Platforms',
    metaTitle: 'SaaS Development Company | MVP to Scale | DflexPro Studios',
    metaDescription:
      'DflexPro Studios is a SaaS development company helping founders go from idea to MVP to scale — multi-tenant architecture, billing, and auth handled.',
    desc: 'From idea to MVP to v2. Multi-tenant architecture, billing, auth — the boring-but-critical stuff, handled.',
    intro:
      "Most SaaS ideas don't fail because the idea was bad — they stall because the boring infrastructure (billing, auth, multi-tenancy) eats months before you ever ship. We handle that layer properly from day one, so you can validate your product instead of your database schema.",
    tags: ['MVP Builds', 'Multi-tenant', 'Billing & Auth', 'Scaling'],
    included: [
      'MVP scoping focused on your core value proposition, not feature bloat',
      'Multi-tenant architecture built to scale without a rewrite',
      'Subscription billing, plans, and usage metering (Stripe or similar)',
      'Authentication, roles, and team/org account structures',
      'A clear path from MVP to v2 as you find product-market fit',
    ],
    faqs: [
      {
        q: 'We just have an idea — can you help scope it into an MVP?',
        a: "Yes. We start with a scoping call to find the smallest version of your product that actually tests your core hypothesis, then build that first.",
      },
      {
        q: 'Do you build the billing and subscription logic too?',
        a: 'Yes — plans, trials, upgrades/downgrades, and usage-based billing are all things we handle regularly.',
      },
      {
        q: 'What if we already have a partially built SaaS product?',
        a: "That's common — we audit what exists, then either extend it or advise a targeted rebuild of the parts holding you back.",
      },
    ],
  },
  {
    tag: '03',
    slug: 'product-engineering',
    title: 'Product Engineering',
    metaTitle: 'Product Engineering & Full-Stack Development | DflexPro Studios',
    metaDescription:
      'End-to-end web and mobile product engineering — from design handoff to production, built by DflexPro Studios.',
    desc: 'End-to-end web & mobile builds — design handoff to production, with code that survives contact with real users.',
    intro:
      "Design files aren't a product until someone builds them properly. We take your designs — or help create them — and turn them into fast, responsive, production-grade web and mobile products that hold up once real users start clicking around.",
    tags: ['Web', 'Mobile', 'UI Engineering', 'DevOps'],
    included: [
      'Pixel-accurate implementation of Figma/design handoffs',
      'Responsive, accessible front-end engineering',
      'Mobile builds (React Native / cross-platform) where needed',
      'CI/CD pipelines and deployment setup',
      'Performance passes so it feels fast, not just looks good',
    ],
    faqs: [
      {
        q: "We don't have designs yet — can you help?",
        a: 'Yes — our design team can take this from wireframes through to a polished UI before engineering starts.',
      },
      {
        q: 'Do you build native mobile apps or cross-platform?',
        a: 'We primarily build cross-platform (React Native) to keep one codebase for iOS and Android, unless a project specifically needs native.',
      },
    ],
  },
  {
    tag: '04',
    slug: 'software-support-maintenance',
    title: 'Support & Maintenance',
    metaTitle: 'Software Support & Maintenance Services | DflexPro Studios',
    metaDescription:
      'Ongoing software support and maintenance — bug fixes, performance passes, and uptime monitoring so your product stays alive after launch.',
    desc: "Ongoing sprints, bug bashes, performance passes. We keep your product alive after launch, not just until invoice.",
    intro:
      "Launch day isn't the finish line — it's when real usage starts finding the bugs your test suite didn't. We run ongoing support sprints, fix what breaks, and keep an eye on performance and uptime so your product keeps working long after the invoice is paid.",
    tags: ['Bug Fixes', 'Uptime', 'Performance', 'Monitoring'],
    included: [
      'Bug triage and fixes on a retainer or as-needed basis',
      'Uptime and error monitoring with alerting',
      'Performance audits and optimization passes',
      'Dependency and security updates',
      'A direct line to the team that built it — not a ticket queue',
    ],
    faqs: [
      {
        q: 'Do we need to have used DflexPro for the original build?',
        a: "No — we regularly take over maintenance for products built by other teams. We start with a short codebase audit.",
      },
      {
        q: 'Is this a fixed retainer or pay-as-you-go?',
        a: 'Both are available — a monthly retainer for predictable ongoing work, or as-needed sprints for occasional fixes.',
      },
    ],
  },
  {
    tag: '05',
    slug: 'project-rescue',
    title: 'Project Rescue',
    metaTitle: 'Project Rescue Services — Fix a Stuck Software Project | DflexPro Studios',
    metaDescription:
      "Freelancer disappeared? Codebase a mess? DflexPro Studios specializes in project rescue — auditing stuck software projects and getting them shipped.",
    desc: "Dev ghosted you? Codebase a mess? We parachute in, audit the chaos, and get your project shipped.",
    intro:
      "This is the call most agencies don't want. A freelancer went dark, an agency missed every deadline, or an in-house dev quit mid-sprint — and now there's a half-built app and a deadline that isn't moving. This is what we specialize in: parachuting into an unfamiliar codebase, making sense of it fast, and carrying it to done.",
    tags: ['Audits', 'Handover', 'Refactors', 'Delivery'],
    included: [
      'A free initial codebase audit before you commit to anything',
      'An honest report on what\'s salvageable vs. what needs a rebuild',
      'Clear, fixed-scope pricing to finish or fix the project',
      'Documentation and clean handover — no more black boxes',
      'Working with whatever stack you\'re already on, no forced rewrites',
    ],
    faqs: [
      {
        q: 'What if the previous developer left no documentation?',
        a: "That's the norm, not the exception, in rescue projects. Our audit process is built around reverse-engineering undocumented codebases quickly.",
      },
      {
        q: 'How fast can you start?',
        a: 'Codebase audits typically start within 48 hours of a signed NDA — we know rescue projects are usually time-sensitive.',
      },
      {
        q: 'Is it always cheaper to fix vs. rebuild from scratch?',
        a: "Not always — our audit tells you honestly which option costs less in time and money. We don't upsell a rebuild if a fix will do.",
      },
    ],
  },
  {
    tag: '06',
    slug: 'outsourced-development-teams',
    title: 'Outsourced Dev Teams',
    metaTitle: 'Outsourced Software Development Teams | Staff Augmentation | DflexPro Studios',
    metaDescription:
      'Hire a dedicated outsourced development team from DflexPro Studios — scale your engineering capacity up or down without the hiring overhead.',
    desc: 'Need extra hands without the hiring headache? Plug in a dedicated squad and scale up or down on demand.',
    intro:
      "Hiring is slow, expensive, and risky when you just need more engineering capacity for a defined stretch of work. We plug in a dedicated squad — engineers, designers, or a full cross-functional team — that works inside your existing workflow and scales up or down as your roadmap changes.",
    tags: ['Staff Augmentation', 'Dedicated Squads', 'Flexible Scope'],
    included: [
      'Dedicated engineers who work inside your existing tools and workflow',
      'Flexible team size — scale up for a sprint, down after launch',
      'No recruitment overhead, notice periods, or benefits admin',
      'Direct communication with the engineers, not account layers',
      'Works alongside your in-house team or fully independently',
    ],
    faqs: [
      {
        q: 'How quickly can a team be ready to start?',
        a: 'Typically within 1–2 weeks, depending on the skill set and team size required.',
      },
      {
        q: 'Can we scale the team size up or down mid-project?',
        a: 'Yes — that flexibility is the main point of this model. We adjust as your roadmap and budget change.',
      },
    ],
  },
  {
    tag: '07',
    slug: 'business-automation',
    title: 'Automation & AI Workflows',
    metaTitle: 'Business Process Automation & AI Workflow Services | DflexPro Studios',
    metaDescription:
      'DflexPro Studios automates repetitive business work — CRM and WhatsApp flows, lead routing, reports, and AI agents that plug into the tools you already use.',
    desc: 'Copy-pasting between tabs all day? We automate the boring stuff — workflows, integrations, and AI agents that run while you sleep.',
    intro:
      "Most teams lose hours every week to work a machine should be doing — copying leads into a CRM, chasing follow-ups, building the same report every Monday. We map those workflows, then automate them end-to-end: integrations between the tools you already use, WhatsApp and email flows, scheduled reports, and AI agents that read, sort, and respond so your team can focus on work that actually needs a human.",
    tags: ['Workflow Automation', 'AI Agents', 'Integrations', 'WhatsApp & CRM'],
    included: [
      'Workflow audit to find the highest-ROI tasks to automate first',
      'Integrations between your CRM, sheets, email, WhatsApp, and payment tools',
      'AI agents for lead qualification, support replies, and document processing',
      'Automated reports and dashboards delivered on a schedule',
      'Monitoring and alerts so automations never fail silently',
    ],
    faqs: [
      {
        q: 'What kind of work can actually be automated?',
        a: 'Anything repetitive and rule-based: lead capture and routing, follow-up messages, invoice and document processing, data syncing between tools, and recurring reports. With AI, a lot of "judgment-light" work like sorting enquiries or drafting replies is now automatable too.',
      },
      {
        q: 'Do we need to replace our existing tools?',
        a: 'No. We build on top of what you already use — Google Workspace, Zoho, HubSpot, WhatsApp Business, Razorpay, Tally, and so on — and connect them together.',
      },
      {
        q: 'How quickly will we see results?',
        a: 'Most first automations go live within 1–3 weeks. We start with the workflow that saves the most hours so the ROI is visible fast.',
      },
    ],
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Tell us the vibe',
    desc: "Book a call or drop the brief. No 40-page RFPs required — just tell us what you're building and why.",
  },
  {
    step: '02',
    title: 'We scope it, no fluff',
    desc: 'Clear timeline, clear pricing, clear stack. You know exactly what you\'re getting before we start.',
  },
  {
    step: '03',
    title: 'Build in the open',
    desc: 'Weekly demos, live staging links, direct Slack access. Watch it come together in real time.',
  },
  {
    step: '04',
    title: 'Ship & support',
    desc: "We launch, then stick around. Patches, upgrades, scaling help — whenever you need it.",
  },
]

export const STATS = [
  { value: '24/7', label: 'Dev availability' },
  { value: '<48h', label: 'Avg. first response' },
  { value: '100%', label: 'MSME registered & real' },
  { value: '0', label: 'Ghosted projects' },
]

export const QUOTES = [
  'Move fast. Ship things that actually work.',
  'No cap, your codebase deserves better.',
  'Deadlines are a vibe we take seriously.',
  'Outsourcing shouldn\'t feel like a gamble.',
  'Built by devs who still write clean commits.',
  'Big Tech energy, startup speed.',
  'We debug at 2am so you don\'t have to.',
  'Your MVP, minus the mid execution.',
]

export const WHY_US = [
  {
    title: "We're builders, not just billers",
    desc: 'Every project is led by engineers who ship — not account managers reading off a script.',
  },
  {
    title: 'Radical transparency',
    desc: 'Live staging links, real Git history, honest timelines. You always know where things stand.',
  },
  {
    title: 'We rescue what others abandon',
    desc: 'Half-built app? Frozen codebase? We specialize in picking up where things went sideways.',
  },
  {
    title: 'Registered. Real. Reachable',
    desc: "DflexPro Studios is an MSME-registered software house — not a freelancer alias that disappears.",
  },
]
