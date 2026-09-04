import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center pt-28">
      <Seo
        title="Page Not Found | DflexPro Studios"
        description="This page doesn't exist — head back to DflexPro Studios."
        noindex
      />
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="font-accent text-8xl italic text-pop">404.</p>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          This page shipped to nowhere.
        </h1>
        <p className="mt-4 text-white/60">
          The page you're looking for doesn't exist, moved, or never made it to production.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
        >
          Back to home
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  )
}
