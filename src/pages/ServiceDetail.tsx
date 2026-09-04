import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { SERVICES, SITE_URL } from '../data/content'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) return <NotFound />

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.metaDescription,
      provider: { '@type': 'ProfessionalService', name: 'DflexPro Studios', url: SITE_URL },
      areaServed: 'Worldwide',
      url: `${SITE_URL}/services/${service.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: `${SITE_URL}/services/${service.slug}`,
        },
      ],
    },
  ]

  return (
    <div className="pt-28">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <nav className="mb-8 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-white/40">
            <Link to="/" className="hover:text-white/70">
              Home
            </Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-white/70">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/60">{service.title}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-light/30 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-accent-light">
              <Layers size={14} />
              Service {service.tag}
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">{service.intro}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              to="/#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Start this project
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
            What's included
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Here's what you actually <span className="font-accent italic text-pop">get.</span>
          </h2>

          <ul className="mt-9 space-y-4">
            {service.included.map((point) => (
              <li key={point} className="flex items-start gap-3 text-white/75">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-cyber" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">FAQ</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Questions people actually{' '}
            <span className="font-accent italic text-pop">ask.</span>
          </h2>

          <div className="mt-9 space-y-5">
            {service.faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-display text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <span className="font-mono text-sm uppercase tracking-widest text-accent-light">
            Explore more
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Other things we build
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-accent-light/40 hover:bg-white/[0.06]"
              >
                <span className="font-display font-semibold">{s.title}</span>
                <ArrowUpRight
                  size={16}
                  className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-light"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
