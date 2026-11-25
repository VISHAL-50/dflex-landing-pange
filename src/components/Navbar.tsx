import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import logoLight from '../assets/logo/dflexpro-dark.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? 'border-white/15 bg-ink/75 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logoLight}
            alt="DflexPro Studios"
            className="h-7 w-auto drop-shadow-[0_0_18px_rgba(255,255,255,0.12)] md:h-8"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/#contact"
          className="hidden items-center gap-1.5 rounded-full bg-pop px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:-rotate-2 hover:scale-105 md:inline-flex"
        >
          Start a project
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </Link>

        <button
          className="rounded-full p-1.5 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-chunky text-lg font-bold text-white/85 hover:bg-white/5 hover:text-pop"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/#contact" onClick={() => setOpen(false)} className="btn-pop mt-2">
                Start a project
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
