import { motion } from 'framer-motion'
import { Hash } from 'lucide-react'
import { STATS, WHY_US } from '../data/content'

const MESSAGES = [
  { who: 'Dev team', badge: 'bg-pop', initial: '</>', text: 'Pushed checkout flow → staging link updated 🔗', time: '10:42' },
  { who: 'Design', badge: 'bg-hot', initial: '✦', text: 'New dashboard screens are in Figma, take a look 👀', time: '11:15' },
  { who: 'You', badge: 'bg-white', initial: '🙋', text: 'Looks fire. Can we add CSV export?', time: '11:20', self: true },
  { who: 'Dev team', badge: 'bg-pop', initial: '</>', text: 'Scoped it — ships in Friday\'s demo ✅', time: '11:31' },
]

function ChannelCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rotate-[1.5deg] rounded-[2rem] border-2 border-white/15 bg-ink/80 p-2 shadow-[10px_10px_0_0_#d4ff3a] backdrop-blur">
        <div className="rounded-[1.6rem] bg-gradient-to-br from-white/[0.07] to-transparent p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="flex items-center gap-1.5 font-chunky text-sm font-bold">
              <Hash size={15} className="text-pop" />
              your-project
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/50">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyber" /> team online
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {MESSAGES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.25 }}
                className={`flex items-start gap-3 ${m.self ? 'flex-row-reverse text-right' : ''}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-[10px] font-bold text-ink ${m.badge}`}
                >
                  {m.initial}
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-white/40">
                    {m.who} · {m.time}
                  </p>
                  <p
                    className={`mt-1 inline-block rounded-2xl px-3.5 py-2 text-left text-sm ${
                      m.self ? 'rounded-tr-sm bg-pop text-ink' : 'rounded-tl-sm bg-white/[0.07] text-white/85'
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <span className="sticker absolute -left-3 -top-4 -rotate-6 bg-cyber">🌍 remote-first</span>
      <span className="sticker absolute -bottom-5 -right-2 rotate-3 bg-hot">💬 talk to the devs, not a PM</span>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[24rem] w-[24rem] rounded-full bg-pop/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Why DflexPro</span>
            <h2 className="heading mt-5">
              Not another anonymous freelancer. We're <span className="text-pop">real.</span>
            </h2>
            <p className="mt-5 text-white/60">
              We're an MSME-registered, remote-first studio — not a random DM. That means
              accountability, paperwork when you need it, and a team that lives in your project
              channel instead of a fancy lobby.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {WHY_US.map((item) => (
                <div key={item.title} className="border-l-2 border-pop/40 pl-4">
                  <h3 className="font-chunky text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <ChannelCard />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 text-center"
            >
              <div className="font-chunky text-4xl font-black text-pop sm:text-5xl">{stat.value}</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-wide text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
