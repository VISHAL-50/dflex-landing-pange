import { QUOTES } from '../data/content'

export default function QuoteMarquee() {
  const items = [...QUOTES, ...QUOTES]

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-accent-dark via-accent to-accent-dark py-8">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee-reverse items-center gap-10">
          {items.map((q, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-accent text-2xl italic text-white sm:text-3xl">{q}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyber" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
