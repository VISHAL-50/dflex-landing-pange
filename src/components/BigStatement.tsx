import { motion } from 'framer-motion'

export default function BigStatement() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pop/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl px-6 text-center"
      >
        <p className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Half-built isn't
          <br />
          an option. we ship{' '}
          <span className="font-accent normal-case italic text-pop">everything.</span>
        </p>
      </motion.div>
    </section>
  )
}
