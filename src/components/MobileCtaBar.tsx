import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Send } from 'lucide-react'
import { BOOKING_URL } from '../data/content'

/*
 * Phone-only call-to-action bar pinned to the bottom of the screen.
 * Appears once the visitor scrolls past the hero, and gets out of the way while the
 * contact section or footer is on screen (they already hold the same actions).
 */
export default function MobileCtaBar() {
  const { pathname } = useLocation()
  const [scrolledPast, setScrolledPast] = useState(false)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = [document.getElementById('contact'), document.querySelector('footer')].filter(
      (el): el is HTMLElement => el !== null,
    )
    if (!targets.length || !('IntersectionObserver' in window)) return

    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)))
        setBlocked(visible.size > 0)
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [pathname])

  const goToBrief = (e: MouseEvent) => {
    const contact = document.getElementById('contact')
    if (contact) {
      e.preventDefault()
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const show = scrolledPast && !blocked

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          className="fixed inset-x-3 z-40 sm:hidden"
          style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-ink/80 p-1.5 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <Link
              to="/#contact"
              onClick={goToBrief}
              className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white/85 transition-colors active:bg-white/10"
            >
              <Send size={15} />
              Send a brief
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-[1.3] items-center justify-center gap-2 rounded-full border-2 border-ink bg-pop px-4 py-3 text-sm font-bold text-ink shadow-[3px_3px_0_0_#ff4fd8] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <CalendarDays size={16} />
              Book a free call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
