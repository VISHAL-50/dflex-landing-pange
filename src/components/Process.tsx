import { motion } from 'framer-motion'
import { PROCESS } from '../data/content'

const COLORS = ['text-pop', 'text-hot', 'text-cyber', 'text-accent-light']

export default function Process() {
  return (
    <section id="process" className="relative bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="heading mt-5">
            Simple process. Zero <span className="text-pop">surprises.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-7"
            >
              <div className={`font-chunky text-5xl font-black ${COLORS[i % COLORS.length]}`}>{step.step}</div>
              <h3 className="mt-5 font-chunky text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
