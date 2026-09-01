import { Linkedin, Mail } from 'lucide-react'
import { CONTACT_EMAIL, LINKEDIN_URL, NAV_LINKS } from '../data/content'
import logo from '../assets/logo/dflexpro-dark.png'
import msmeLogo from '../assets/logo/msme-logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <img
              src={logo}
              alt="DflexPro Studios"
              className="h-8 w-auto drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Enterprise software, SaaS platforms & project rescue — built by a registered
              software studio that actually ships.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/60 transition-colors hover:border-accent-light/50 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-full border border-white/10 p-2.5 text-white/60 transition-colors hover:border-accent-light/50 hover:text-white"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DflexPro Studios. All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white p-1">
              <img src={msmeLogo} alt="MSME" className="h-full w-full object-contain" />
            </span>
            <p>MSME Registered · Software Development Studio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
