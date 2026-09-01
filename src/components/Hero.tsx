import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import AuroraBackground from './AuroraBackground'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <AuroraBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wide text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-cyber" />
            MSME-registered software studio
          </div>

          <h1 className="leading-[0.9] tracking-tight">
            <span className="block font-display text-2xl font-medium text-white/80 sm:text-3xl lg:text-4xl">
              We build software that
            </span>
            <span className="block font-accent text-8xl italic text-pop sm:text-9xl lg:text-[9rem]">
              Ships.
            </span>
            <span className="block font-accent text-xl italic text-white/40 sm:text-2xl">
              no cap, we mean it.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base text-white/70 sm:text-lg">
            DflexPro Studios designs and engineers enterprise software, SaaS platforms, and
            full-stack products for founders and businesses. Stuck mid-project? We finish what
            others couldn't.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Let's build something
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              See what we do
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-white/50">
            <span>ENTERPRISE_SOFTWARE</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <span>SAAS_PLATFORMS</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <span>PROJECT_RESCUE</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <span>OUTSOURCING</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden md:block"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-accent/20 backdrop-blur">
            <div className="flex h-full flex-col justify-between rounded-[1.6rem] bg-gradient-to-br from-white/[0.06] to-transparent p-6 font-mono">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>status.log</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyber" /> live
                </span>
              </div>

              <div className="space-y-3 font-mono text-[13px] text-white/80">
                <p><span className="text-cyber">$</span> deploying dflexpro/client-app</p>
                <p className="text-white/50">→ running build...</p>
                <p className="text-white/50">→ tests passed (128/128)</p>
                <p><span className="text-accent-light">✓</span> shipped to production</p>
                <p className="text-white/40">no rollbacks. no drama.</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 font-accent text-lg italic text-white/80">
                "Stuck project? We've got you." <br />
                <span className="text-sm not-italic text-white/40">— the DflexPro way</span>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -right-6 -top-6 rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 font-mono text-xs backdrop-blur"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            🚀 On-time delivery
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 font-mono text-xs backdrop-blur"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            💬 Direct dev access
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
