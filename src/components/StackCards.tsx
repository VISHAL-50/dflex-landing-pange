import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

/*
 * Scroll-stacking cards for small screens.
 * On phones (< 640px) each card sticks below the navbar and the next one slides over it,
 * while the cards underneath shrink and dim into a "deck". On larger screens the
 * wrappers are plain grid items and nothing changes.
 */

const MOBILE_QUERY = '(max-width: 639px)'
const STACK_TOP = 92 // px from the top of the viewport, clears the fixed navbar
const PEEK = 12 // px of each buried card left visible above the next one

export function StackGroup({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const mobile = window.matchMedia(MOBILE_QUERY)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const cards = () => Array.from(root.querySelectorAll<HTMLElement>(':scope > [data-stack-card]'))
    const innerOf = (card: HTMLElement) => card.firstElementChild as HTMLElement

    const reset = (el: HTMLElement) => {
      el.style.transform = ''
      el.style.filter = ''
      el.style.clipPath = ''
    }

    const paint = () => {
      frame = 0
      const list = cards()
      if (!mobile.matches) return list.forEach((c) => reset(innerOf(c)))

      const tops = list.map((c) => c.getBoundingClientRect().top)
      const heights = list.map((c) => innerOf(c).offsetHeight || 1)

      // How far each card has slid over the one before it (0 = not yet, 1 = fully landed).
      const arrived = list.map((_, j) =>
        Math.min(1, Math.max(0, 1 - (tops[j] - (STACK_TOP + j * PEEK)) / heights[j])),
      )

      // Cards underneath shrink and dim a little more for every card stacked on top of them.
      const scales = list.map((_, i) => {
        let depth = 0
        for (let j = i + 1; j < list.length; j++) depth += arrived[j]
        return { depth, scale: reduceMotion.matches ? 1 : Math.max(0.84, 1 - depth * 0.05) }
      })

      // A taller card underneath would poke out below a shorter one on top, so tuck its bottom
      // away (working from the top card down) as the covering card lands.
      const visibleBottom: number[] = []
      for (let i = list.length - 1; i >= 0; i--) {
        const bottom = tops[i] + heights[i] * scales[i].scale
        let clip = 0
        if (i < list.length - 1 && tops[i + 1] < bottom) {
          const coverBottom = visibleBottom[i + 1]
          if (coverBottom < bottom) clip = ((bottom - coverBottom) * arrived[i + 1]) / scales[i].scale
        }
        visibleBottom[i] = bottom - clip * scales[i].scale

        const el = innerOf(list[i])
        const { depth, scale } = scales[i]
        if (depth <= 0.001) {
          reset(el)
          continue
        }
        el.style.transform = scale < 1 ? `scale(${scale.toFixed(4)})` : ''
        el.style.filter = `brightness(${Math.max(0.4, 1 - depth * 0.28).toFixed(3)})`
        el.style.clipPath =
          clip > 0.5 ? `inset(-80px 0 ${clip.toFixed(1)}px 0 round 0 0 24px 24px)` : ''
      }
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    mobile.addEventListener('change', schedule)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      mobile.removeEventListener('change', schedule)
      cards().forEach((c) => reset(innerOf(c)))
    }
  }, [])

  return (
    <div ref={ref} className={`${className} max-sm:!gap-8 max-sm:pb-12`}>
      {children}
    </div>
  )
}

export function StackCard({
  index,
  className = '',
  children,
}: {
  index: number
  className?: string
  children: ReactNode
}) {
  return (
    <div
      data-stack-card
      style={{ '--stack-top': `${STACK_TOP + index * PEEK}px` } as CSSProperties}
      className={`flex flex-col max-sm:sticky max-sm:top-[var(--stack-top)] ${className}`}
    >
      <div className="stack-inner flex flex-1 origin-top flex-col will-change-transform">
        {children}
      </div>
    </div>
  )
}
