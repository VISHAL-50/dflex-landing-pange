import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  Clock,
  Code2,
  Copy,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  RotateCcw,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import {
  BOOKING_URL,
  BUDGET_RANGES,
  CONTACT_EMAIL,
  GUARANTEES,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PROJECT_TYPES,
} from '../data/content'

const GUARANTEE_ICONS: Record<string, { icon: LucideIcon; tint: string }> = {
  code: { icon: Code2, tint: 'text-pop bg-pop/10 ring-pop/25' },
  wallet: { icon: Wallet, tint: 'text-cyber bg-cyber/10 ring-cyber/25' },
  shield: { icon: ShieldCheck, tint: 'text-accent-light bg-accent-light/10 ring-accent-light/25' },
  sparkles: { icon: Sparkles, tint: 'text-hot bg-hot/10 ring-hot/25' },
  clock: { icon: Clock, tint: 'text-pop bg-pop/10 ring-pop/25' },
}

function Guarantees() {
  return (
    <ul className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {GUARANTEES.map((g, i) => {
        const { icon: Icon, tint } = GUARANTEE_ICONS[g.icon] ?? GUARANTEE_ICONS.code
        return (
          <motion.li
            key={g.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.05] ${
              i === GUARANTEES.length - 1 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ${tint}`}>
              <Icon size={17} />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[13px] font-semibold leading-tight text-white">
                {g.title}
              </span>
              <span className="mt-0.5 block text-[11px] leading-snug text-white/45">{g.text}</span>
            </span>
          </motion.li>
        )
      })}
    </ul>
  )
}

const NEXT_STEPS = [
  { title: 'We read your brief', text: 'A real person on the team — usually within a few hours, always within 48.' },
  { title: 'Quick free call', text: 'A short chat to understand your idea and answer your questions.' },
  { title: 'Clear plan & quote', text: 'Timeline, price and what you get — in writing, before any work starts.' },
]

function ThankYou({
  name,
  briefText,
  mailtoHref,
  onStartOver,
}: {
  name: string
  briefText: string
  mailtoHref: string
  onStartOver: () => void
}) {
  const [copied, setCopied] = useState(false)
  const firstName = name.trim().split(/\s+/)[0]

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      role="status"
      aria-live="polite"
    >
      <motion.span
        initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-pop text-ink shadow-[4px_4px_0_0_#ff4fd8]"
      >
        <CircleCheck size={28} strokeWidth={2.5} />
      </motion.span>

      <h3 className="mt-6 font-chunky text-2xl font-extrabold leading-tight sm:text-3xl">
        Thanks{firstName ? `, ${firstName}` : ''}! <span className="text-pop">One last tap.</span>
      </h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
        Your email app just opened with your brief already written. Hit{' '}
        <span className="font-semibold text-white">Send</span> there and it lands straight in our
        inbox.
      </p>

      <div className="mt-7">
        <p className="font-mono text-xs uppercase tracking-wide text-white/40">What happens next</p>
        <ol className="mt-4 space-y-4">
          {NEXT_STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.1 }}
              className="flex gap-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-pop/40 bg-pop/10 font-mono text-xs font-bold text-pop">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-white/50">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pop">
          <CalendarDays size={16} />
          Skip the wait: book a call
        </a>
        <button type="button" onClick={onStartOver} className="btn-ghost">
          <RotateCcw size={15} />
          Send another brief
        </button>
      </div>

      <div className="mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 text-xs leading-relaxed text-white/55">
        <span className="font-semibold text-white/80">Email app didn't open?</span>{' '}
        <a href={mailtoHref} className="text-pop underline-offset-2 hover:underline">
          Try again
        </a>
        , or{' '}
        <button type="button" onClick={copyBrief} className="text-pop underline-offset-2 hover:underline">
          {copied ? 'copied!' : 'copy your brief'}
        </button>{' '}
        and paste it into an email to{' '}
        <span className="font-medium text-white/80">{CONTACT_EMAIL}</span>.
      </div>
    </motion.div>
  )
}

function PricingNotes() {
  const [open, setOpen] = useState(false)

  const cards = [
    {
      icon: Wallet,
      tint: 'text-cyber bg-cyber/10 ring-cyber/20',
      title: 'Pay in any currency',
      text: 'Prices are general estimates and may change based on your requirements.',
    },
    {
      icon: Globe,
      tint: 'text-pop bg-pop/10 ring-pop/20',
      title: 'Domain & server not included',
      text: 'You purchase these separately. We’ll guide you through it.',
      action: true,
    },
    {
      icon: Sparkles,
      tint: 'text-hot bg-hot/10 ring-hot/20',
      title: '1 year of free minor changes',
      text: 'Small text, image or design tweaks after launch. Bigger features are quoted separately.',
    },
  ]

  return (
    <div className="mt-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {cards.map(({ icon: Icon, tint, title, text, action }) => (
          <div
            key={title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${tint}`}>
              <Icon size={16} />
            </span>
            <p className="font-display text-sm font-semibold leading-snug text-white">{title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/50">{text}</p>
            {action && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="mt-3 inline-flex items-center gap-1 self-start text-xs font-medium text-pop hover:text-pop/80"
              >
                What are these?
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
              </button>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 grid gap-3 rounded-2xl border border-pop/20 bg-pop/[0.04] p-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <Globe size={18} className="mt-0.5 shrink-0 text-pop" />
                <div>
                  <p className="text-sm font-semibold text-white">Domain</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    Your website’s address on the internet, like{' '}
                    <span className="font-mono text-white/80">yourbusiness.com</span>. It’s what
                    people type to find you.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Server size={18} className="mt-0.5 shrink-0 text-pop" />
                <div>
                  <p className="text-sm font-semibold text-white">Server (hosting)</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    The computer on the internet that stores your website or app and keeps it
                    running 24/7, so people can visit it anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface FormState {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: PROJECT_TYPES[0],
  budget: BUDGET_RANGES[0],
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New project inquiry — ${form.projectType}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Company: ${form.company || '—'}\n` +
        `Project type: ${form.projectType}\n` +
        `Budget: ${form.budget}\n\n` +
        `Message:\n${form.message}`
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    document.getElementById('contact-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const briefText = () =>
    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || '—'}\n` +
    `Project type: ${form.projectType}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`

  const startOver = () => {
    setForm(INITIAL_STATE)
    setSent(false)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — no-op, the email is still visible to copy manually
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-pop/70 focus:bg-white/[0.07]'

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28">
      <div className="absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-16 text-center">
          <span className="eyebrow">Let's talk</span>
          <h2 className="heading mt-5">
            Got a project? Say <span className="text-pop">less.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Fill the brief below or hit us up directly. We read everything — no bots, no
            gatekeeping, just the team.
          </p>
        </div>

        <Guarantees />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <motion.div
            id="contact-form-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
          <AnimatePresence mode="wait" initial={false}>
          {sent ? (
            <ThankYou
              key="thanks"
              name={form.name}
              briefText={briefText()}
              mailtoHref={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                `New project inquiry — ${form.projectType}`,
              )}&body=${encodeURIComponent(briefText())}`}
              onStartOver={startOver}
            />
          ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-white/60">Your name</label>
                <input
                  required
                  className={inputClass}
                  placeholder="Alex Rivera"
                  value={form.name}
                  onChange={update('name')}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-white/60">Email</label>
                <input
                  required
                  type="email"
                  className={inputClass}
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={update('email')}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-white/60">
                  Company <span className="text-white/30">(optional)</span>
                </label>
                <input
                  className={inputClass}
                  placeholder="Company / project name"
                  value={form.company}
                  onChange={update('company')}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-white/60">Project type</label>
                <select className={inputClass} value={form.projectType} onChange={update('projectType')}>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-ink">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-white/60">Budget range</label>
                <select className={inputClass} value={form.budget} onChange={update('budget')}>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range} className="bg-ink">
                      {range}
                    </option>
                  ))}
                </select>
                <PricingNotes />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-medium text-white/60">
                  Tell us about the project
                </label>
                <textarea
                  required
                  rows={5}
                  className={inputClass}
                  placeholder="What are you building, what's stuck, or what you need help with..."
                  value={form.message}
                  onChange={update('message')}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 btn-pop w-full sm:w-auto"
            >
              <Send size={16} />
              Send the brief
            </button>
          </motion.form>
          )}
          </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border-2 border-ink bg-pop p-6 text-ink shadow-[6px_6px_0_0_#ff4fd8] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_#ff4fd8]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-hot/40 blur-2xl" />
              <p className="relative font-mono text-xs font-bold uppercase tracking-wide text-ink/60">
                Rather just talk?
              </p>
              <p className="relative mt-2 flex items-center gap-2 font-chunky text-lg font-extrabold">
                <CalendarDays size={20} />
                Book a free 15-min call
              </p>
              <p className="relative mt-1.5 text-sm font-medium text-ink/70">
                Pick a time that suits you. No forms, no sales pitch.
              </p>
              <span className="relative mt-4 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-bold text-pop">
                See available times
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-white/40">
                Prefer email?
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-pop"
                >
                  <Mail size={16} className="text-pop" />
                  {CONTACT_EMAIL}
                </a>
                <button
                  onClick={copyEmail}
                  className="rounded-lg border border-white/10 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={15} className="text-cyber" /> : <Copy size={15} />}
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-white/40">
                Follow along
              </p>
              <div className="mt-3 space-y-1">
                {[
                  { href: LINKEDIN_URL, icon: Linkedin, label: 'DflexPro Studios on LinkedIn' },
                  { href: INSTAGRAM_URL, icon: Instagram, label: '@dflexpro.in on Instagram' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group -mx-3 flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] hover:text-pop"
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} className="text-pop" />
                      {label}
                    </span>
                    <span className="text-white/30 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-sm text-white/60">
              Registered MSME · Remote-first team · Replies within 48 hours, usually way sooner.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
