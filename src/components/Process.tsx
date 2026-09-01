import { motion } from 'framer-motion'
import { PROCESS } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="relative bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
            How it works
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Simple process. Zero{' '}
            <span className="font-accent italic text-pop">surprises.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="font-mono text-4xl text-white/15">{step.step}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
              {i < PROCESS.length - 1 && (
                <div className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-gradient-to-r from-white/20 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
