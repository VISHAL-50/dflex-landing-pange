import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import AuroraBackground from './AuroraBackground'

const WORDS = ['ships.', 'scales.', 'automates.', 'slaps.']

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <AuroraBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="sticker -rotate-2 bg-pop">✓ MSME registered</span>
            <span className="sticker rotate-1 bg-hot">🤖 now doing AI automation</span>
          </div>

          <h1 className="font-chunky font-black leading-[0.95] tracking-tight">
            <span className="block text-[2.6rem] sm:text-6xl lg:text-7xl">We build</span>
            <span className="block text-[2.6rem] sm:text-6xl lg:text-7xl">software that</span>
            <span className="relative block h-[1.15em] overflow-hidden text-[2.9rem] sm:text-7xl lg:text-[5.5rem]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={WORDS[index]}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="text-gradient-pop absolute left-0 top-0"
                >
                  {WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            DflexPro Studios designs and engineers enterprise software, SaaS platforms,
            automations, and full-stack products. Stuck mid-project?{' '}
            <span className="font-semibold text-white">We finish what others couldn't.</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-pop group">
              Let's build something
              <ArrowRight size={17} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-ghost">
              See what we do
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide text-white/55">
            {['Enterprise', 'SaaS', 'Automation', 'Project Rescue', 'Dev Teams'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                #{t.replace(' ', '_')}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto w-full max-w-sm rotate-[-2deg] rounded-[2rem] border-2 border-white/15 bg-ink/70 p-2 shadow-[10px_10px_0_0_#d4ff3a] backdrop-blur">
            <div className="flex flex-col gap-6 rounded-[1.6rem] bg-gradient-to-br from-white/[0.07] to-transparent p-6 font-mono">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-hot" />
                  <span className="h-2.5 w-2.5 rounded-full bg-pop" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyber" />
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyber" /> live
                </span>
              </div>

              <div className="space-y-2.5 text-[13px] text-white/80">
                <p><span className="text-pop">$</span> dflex deploy client-app</p>
                <p className="text-white/50">→ tests passed (128/128)</p>
                <p><span className="text-cyber">✓</span> shipped to production</p>
                <p className="pt-2"><span className="text-pop">$</span> dflex automate leads</p>
                <p className="text-white/50">→ 412 leads routed to CRM</p>
                <p><span className="text-hot">⚡</span> 18 hrs/week saved</p>
              </div>

              <div className="rounded-2xl bg-pop p-4 font-chunky text-base font-bold leading-snug text-ink">
                "Stuck project? We've got you."
                <span className="mt-1 block font-mono text-[11px] font-normal uppercase">— the DflexPro way</span>
              </div>
            </div>
          </div>

          <motion.div
            className="sticker absolute -right-4 -top-5 rotate-6 bg-cyber"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            🚀 on-time delivery
          </motion.div>
          <motion.div
            className="sticker absolute -bottom-6 -left-6 -rotate-3 bg-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <Zap size={13} /> direct dev access
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
