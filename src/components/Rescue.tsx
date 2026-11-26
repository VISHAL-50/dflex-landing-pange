import { motion } from 'framer-motion'
import { LifeBuoy, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'

const POINTS = [
  'Free codebase audit before you commit to anything',
  "We work with whatever stack you're already on",
  'Clear handover docs — never a black box again',
  'Flexible engagement: one sprint or the full finish line',
]

const FINDINGS = [
  { icon: XCircle, color: 'text-hot', text: 'No docs, no README, no tests' },
  { icon: AlertTriangle, color: 'text-pop', text: '3 half-finished features on main' },
  { icon: CheckCircle2, color: 'text-cyber', text: 'Core logic salvageable — no rewrite' },
]

const HEALTH = [
  { label: 'Code quality', before: 28, after: 86 },
  { label: 'Test coverage', before: 4, after: 72 },
  { label: 'Deploy readiness', before: 15, after: 100 },
]

function AuditCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rotate-[-1.5deg] rounded-[2rem] border-2 border-white/15 bg-ink/80 p-2 shadow-[10px_10px_0_0_#ff4fd8] backdrop-blur">
        <div className="rounded-[1.6rem] bg-gradient-to-br from-white/[0.07] to-transparent p-6">
          <div className="flex items-center justify-between font-mono text-xs text-white/50">
            <span>rescue_audit.md</span>
            <span className="rounded-full bg-white/10 px-2 py-0.5">48h turnaround</span>
          </div>

          <p className="mt-5 font-chunky text-lg font-bold">your-half-built-app</p>
          <p className="font-mono text-[11px] uppercase tracking-wide text-white/40">
            previous dev: last seen 6 weeks ago 👻
          </p>

          <ul className="mt-5 space-y-2.5">
            {FINDINGS.map(({ icon: Icon, color, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-white/75">
                <Icon size={16} className={`mt-0.5 shrink-0 ${color}`} />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-3.5 border-t border-white/10 pt-5">
            {HEALTH.map((h, i) => (
              <div key={h.label}>
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-wide">
                  <span className="text-white/55">{h.label}</span>
                  <span>
                    <span className="text-hot line-through decoration-2">{h.before}%</span>
                    <span className="text-white/30"> → </span>
                    <span className="text-pop">{h.after}%</span>
                  </span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: `${h.before}%` }}
                    whileInView={{ width: `${h.after}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-hot via-pop to-cyber"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="sticker absolute -right-3 -top-4 rotate-6 bg-pop">✓ rescued &amp; shipped</span>
      <span className="sticker absolute -bottom-5 -left-3 -rotate-3 bg-cyber">🛟 free audit</span>
    </div>
  )
}

export default function Rescue() {
  return (
    <section id="rescue" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid-slate bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[24rem] w-[24rem] rounded-full bg-hot/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <AuditCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <span className="eyebrow">
            <LifeBuoy size={13} />
            Project rescue
          </span>

          <h2 className="heading mt-5">
            Your project is stuck. That's literally our <span className="text-pop">specialty.</span>
          </h2>
          <p className="mt-5 text-white/60">
            Freelancer went dark? Agency blew the deadline? In-house dev quit mid-sprint? We
            parachute in, make sense of the mess, and carry it across the finish line — no
            judgment, just delivery.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-white/75">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyber" />
                {point}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-pop mt-9">
            Get a free audit
          </a>
        </motion.div>
      </div>
    </section>
  )
}
