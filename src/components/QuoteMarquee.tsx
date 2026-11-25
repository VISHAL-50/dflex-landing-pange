import { QUOTES } from '../data/content'

export default function QuoteMarquee() {
  const items = [...QUOTES, ...QUOTES]

  return (
    <section className="relative overflow-hidden bg-ink py-10" aria-label="DflexPro mottos">
      <div className="-mx-4 -rotate-2 border-y-2 border-ink bg-pop py-4 shadow-[0_8px_0_0_#ff4fd8]">
        <div className="flex w-max animate-marquee-reverse items-center">
          {items.map((q, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
              <span className="font-chunky text-xl font-extrabold uppercase text-ink sm:text-2xl">{q}</span>
              <span className="text-2xl text-hot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
