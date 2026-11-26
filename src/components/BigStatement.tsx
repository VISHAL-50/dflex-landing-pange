import { motion } from 'framer-motion'

export default function BigStatement() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hot/15 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl px-5 text-center sm:px-6"
      >
        <p className="font-chunky text-[2.2rem] font-black uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-stroke">Half-built</span> isn't
          <br />
          an option. we ship{' '}
          <span className="relative inline-block -rotate-2 rounded-2xl bg-pop px-3 text-ink">everything.</span>
        </p>
      </motion.div>
    </section>
  )
}
