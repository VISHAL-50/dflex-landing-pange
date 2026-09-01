import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Copy, Check, Send } from 'lucide-react'
import { BUDGET_RANGES, CONTACT_EMAIL, LINKEDIN_URL, PROJECT_TYPES } from '../data/content'

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
    setTimeout(() => setSent(false), 5000)
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
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-light/60 focus:bg-white/[0.07]'

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28">
      <div className="absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
            Let's talk
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Got a project? Say <span className="font-accent italic text-pop">less.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Fill the brief below or hit us up directly. We read everything — no bots, no
            gatekeeping, just the team.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
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
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.01] sm:w-auto"
            >
              <Send size={16} />
              Send the brief
            </button>
            {sent && (
              <p className="mt-3 text-xs text-cyber">
                Opening your email client with everything pre-filled — hit send from there!
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-white/40">
                Prefer email?
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-light"
                >
                  <Mail size={16} className="text-accent-light" />
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

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent-light/40 hover:bg-white/[0.06]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-white/40">
                  Follow along
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
                  <Linkedin size={16} className="text-accent-light" />
                  DflexPro Studios on LinkedIn
                </p>
              </div>
              <span className="text-white/30 transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-sm text-white/60">
              Registered MSME · Remote-first team · Replies within 48 hours, usually way sooner.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
