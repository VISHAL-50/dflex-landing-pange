import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Plus } from 'lucide-react'
import { BOOKING_URL, HOME_FAQS } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[22rem] w-[22rem] rounded-full bg-hot/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading mt-5">
            Questions? We've got <span className="text-pop">answers.</span>
          </h2>
          <p className="mt-5 max-w-md text-white/60">
            The things clients usually ask before getting started. Don't see yours? Just ask —
            a real person will reply.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-pop/50 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pop text-ink">
              <CalendarDays size={20} />
            </span>
            <span className="flex-1">
              <span className="block font-display text-sm font-semibold text-white">
                Still unsure? Book a free 15-min call
              </span>
              <span className="mt-0.5 block text-xs text-white/50">
                Pick a time that suits you — no pressure, no sales pitch.
              </span>
            </span>
            <span className="text-white/30 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="space-y-3">
          {HOME_FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-pop/40 bg-white/[0.06]'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-display text-[15px] font-semibold leading-snug text-white sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-pop bg-pop text-ink'
                          : 'border-white/15 text-white/70'
                      }`}
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/65 sm:px-6 sm:pr-16">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
