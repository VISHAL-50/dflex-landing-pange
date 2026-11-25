const STACK = [
  'React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'AWS',
  'Docker', 'Python', 'OpenAI', 'n8n', 'Tailwind', 'Stripe',
]

export default function TrustMarquee() {
  const items = [...STACK, ...STACK]

  return (
    <section className="relative border-y border-white/10 bg-surface py-5" aria-label="Tech stack">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {items.map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
              <span className="font-chunky text-lg font-bold text-white/35 transition-colors hover:text-pop">
                {item}
              </span>
              <span className="text-xs text-hot/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
