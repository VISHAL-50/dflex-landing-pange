const STACK = [
  'React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'AWS',
  'Docker', 'Python', 'GraphQL', 'Tailwind', 'Kubernetes', 'Stripe',
]

export default function TrustMarquee() {
  const items = [...STACK, ...STACK]

  return (
    <section className="relative border-y border-white/10 bg-surface py-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {items.map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-mono text-lg text-white/30 transition-colors hover:text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
