import { motion } from 'framer-motion'
import { STATS, WHY_US } from '../data/content'
import teamImg from '../assets/images/successful-team-meeting-in-modern-office.jpg'

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
              Why DflexPro
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Not another anonymous freelancer. We're{' '}
              <span className="font-accent italic text-pop">real.</span>
            </h2>
            <p className="mt-5 text-white/60">
              We're a registered software studio, not a random DM. That means accountability,
              paperwork when you need it, and a team that's actually invested in your outcome.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {WHY_US.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
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
            className="relative overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={teamImg}
              alt="The DflexPro team collaborating"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-6 border-t border-white/10 pt-14 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-mono text-4xl font-bold text-pop sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wide text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
