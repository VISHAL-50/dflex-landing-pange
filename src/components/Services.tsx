import { motion } from 'framer-motion'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
            What we do
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            One studio. Every layer of your{' '}
            <span className="font-accent italic text-pop">stack.</span>
          </h2>
          <p className="mt-5 text-white/60">
            From a scrappy MVP to enterprise-grade infrastructure — we cover the full lifecycle
            so you don't have to juggle five different vendors.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent-light/40 hover:bg-white/[0.06]"
            >
              <div className="absolute right-6 top-6 font-mono text-3xl text-white/10 transition-colors group-hover:text-accent-light/25">
                {service.tag}
              </div>
              <h3 className="font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{service.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
