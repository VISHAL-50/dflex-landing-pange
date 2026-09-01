import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { CLIENTS } from '../data/content'

export default function Clients() {
  return (
    <section id="work" className="relative bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
            Our work
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Real clients. Real{' '}
            <span className="font-accent italic text-pop">launches.</span>
          </h2>
          <p className="mt-5 text-white/60">
            A few of the businesses we've built and shipped for — across real estate, SaaS,
            e-commerce, and remote ops.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client, i) => {
            const Wrapper = client.url ? motion.a : motion.div
            return (
              <Wrapper
                key={client.name}
                {...(client.url
                  ? { href: client.url, target: '_blank', rel: 'noreferrer' }
                  : {})}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent-light/40 hover:bg-white/[0.06]"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wide text-white/40">
                    {client.industry}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{client.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{client.desc}</p>
                </div>

                <div className="mt-6">
                  {client.url ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-accent-light">
                      Visit site
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-white/40">
                      <CheckCircle2 size={14} className="text-cyber" />
                      Delivered
                    </span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
