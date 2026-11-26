import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Building2,
  Cloud,
  Layers,
  LifeBuoy,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES } from '../data/content'
import { StackCard, StackGroup } from './StackCards'

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  'enterprise-software-development': Building2,
  'saas-development': Cloud,
  'product-engineering': Layers,
  'software-support-maintenance': Wrench,
  'project-rescue': LifeBuoy,
  'outsourced-development-teams': Users,
  'business-automation': Bot,
}

const FEATURED = 'business-automation'

export default function Services() {
  const featured = SERVICES.find((s) => s.slug === FEATURED)!
  const rest = SERVICES.filter((s) => s.slug !== FEATURED)
  const FeaturedIcon = SERVICE_ICONS[featured.slug]

  return (
    <section id="services" className="relative bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="heading mt-5">
            One studio. Every layer of your <span className="text-pop">stack.</span>
          </h2>
          <p className="mt-5 text-white/60">
            From a scrappy MVP to enterprise-grade infra to automations that run on autopilot —
            we cover the full lifecycle so you don't juggle five vendors.
          </p>
        </div>

        <StackGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured: Automation */}
          <StackCard index={0} className="sm:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border-2 border-ink bg-pop p-7 text-ink shadow-[6px_6px_0_0_#ff4fd8] sm:p-9"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-hot/40 blur-3xl" />
            <div className="relative flex flex-wrap items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-pop">
                <FeaturedIcon size={24} />
              </span>
              <span className="sticker animate-wiggle bg-hot">✦ new drop</span>
            </div>
            <h3 className="relative mt-6 font-chunky text-2xl font-extrabold sm:text-4xl">{featured.title}</h3>
            <p className="relative mt-3 max-w-xl text-[15px] font-medium leading-relaxed text-ink/75">
              {featured.desc}
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <span key={t} className="rounded-full border-2 border-ink/80 px-3 py-1 font-mono text-xs font-bold">
                  {t}
                </span>
              ))}
            </div>
            <Link
              to={`/services/${featured.slug}`}
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-pop transition-transform hover:scale-105"
            >
              Automate my workflow
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </motion.div>
          </StackCard>

          {rest.map((service, i) => {
            const Icon = SERVICE_ICONS[service.slug] ?? Layers
            return (
              <StackCard key={service.slug} index={i + 1}>
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link to={`/services/${service.slug}`} className="card group flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-pop transition-all group-hover:rotate-[-8deg] group-hover:bg-pop group-hover:text-ink">
                      <Icon size={20} />
                    </span>
                    <span className="font-chunky text-2xl font-black text-white/10 transition-colors group-hover:text-hot/50">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-chunky text-lg font-bold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{service.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/55">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wide text-pop">
                    Learn more
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
              </StackCard>
            )
          })}

          <StackCard index={rest.length + 1}>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="group flex flex-col justify-between rounded-3xl border-2 border-dashed border-white/20 p-7 transition-colors max-sm:border-white/25 max-sm:bg-[#0e0e15] max-sm:shadow-[0_-22px_44px_-18px_rgba(0,0,0,0.95)] hover:border-hot hover:bg-hot/10"
          >
            <span className="text-4xl">🤔</span>
            <div>
              <h3 className="mt-6 font-chunky text-lg font-bold">Not sure what you need?</h3>
              <p className="mt-2 text-sm text-white/60">Tell us the problem. We'll tell you the fix — free, no pitch deck.</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wide text-hot">
                Let's talk <ArrowUpRight size={14} />
              </span>
            </div>
          </motion.a>
          </StackCard>
        </StackGroup>
      </div>
    </section>
  )
}
