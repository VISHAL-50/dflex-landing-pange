import { motion } from 'framer-motion'
import { Code2, Palette, Clapperboard, Megaphone, type LucideIcon } from 'lucide-react'
import { TEAM } from '../data/content'

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  palette: Palette,
  clapperboard: Clapperboard,
  megaphone: Megaphone,
}

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-ink py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
            Behind the screen
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Not just devs. A full{' '}
            <span className="font-accent italic text-pop">crew.</span>
          </h2>
          <p className="mt-5 max-w-xl text-white/60">
            DflexPro isn't a lone freelancer with a laptop. Under one roof, we've got engineers,
            designers, editors, and social folks — so your project doesn't stall waiting on the
            one person who can do "the design part."
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => {
            const Icon = ICONS[member.icon]
            return (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent-light/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-light transition-colors group-hover:border-pop/40 group-hover:text-pop">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{member.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{member.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
