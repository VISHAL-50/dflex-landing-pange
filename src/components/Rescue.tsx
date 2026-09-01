import { motion } from 'framer-motion'
import { LifeBuoy, CheckCircle2 } from 'lucide-react'
import workspaceImg from '../assets/images/creative-workspace-with-laptops-and-analytics.jpg'

const POINTS = [
  'Free codebase audit before you commit to anything',
  'We work with whatever stack you\'re already on',
  'Clear handover docs — never a black box again',
  'Flexible engagement: one sprint or the full finish line',
]

export default function Rescue() {
  return (
    <section id="rescue" className="relative overflow-hidden bg-surface py-28">
      <div className="absolute inset-0 bg-grid-slate bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src={workspaceImg}
              alt="DflexPro engineers working through a project handover"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-light/30 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-accent-light">
            <LifeBuoy size={14} />
            Project rescue
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Your project is stuck. That's literally our{' '}
            <span className="font-accent italic text-pop">specialty.</span>
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

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Get a free audit
          </a>
        </motion.div>
      </div>
    </section>
  )
}
