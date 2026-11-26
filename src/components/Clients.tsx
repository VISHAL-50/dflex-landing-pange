import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { CLIENTS } from '../data/content'
import { StackCard, StackGroup } from './StackCards'

const ACCENTS = ['bg-pop', 'bg-hot', 'bg-cyber', 'bg-accent-light']

export default function Clients() {
  return (
    <section id="work" className="relative bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Our work</span>
            <h2 className="heading mt-5">
              Real clients. Real <span className="text-hot">launches.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60">
            A few of the businesses we've built and shipped for — across real estate, proptech,
            e-commerce, and remote ops.
          </p>
        </div>

        <StackGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client, i) => {
            const Wrapper = client.url ? motion.a : motion.div
            return (
              <StackCard key={client.name} index={i}>
              <Wrapper
                {...(client.url ? { href: client.url, target: '_blank', rel: 'noopener' } : {})}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card group flex flex-col justify-between overflow-hidden p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-ink ${
                        ACCENTS[i % ACCENTS.length]
                      }`}
                    >
                      {client.industry}
                    </span>
                    <span className="font-mono text-xs text-white/25">/{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-6 font-chunky text-2xl font-extrabold transition-colors group-hover:text-pop">
                    {client.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{client.desc}</p>
                </div>

                <div className="mt-7">
                  {client.url ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wide text-pop">
                      Visit site
                      <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-white/45">
                      <CheckCircle2 size={14} className="text-cyber" />
                      Delivered
                    </span>
                  )}
                </div>
              </Wrapper>
              </StackCard>
            )
          })}
        </StackGroup>
      </div>
    </section>
  )
}
