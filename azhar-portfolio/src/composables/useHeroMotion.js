import { onMounted, onBeforeUnmount } from 'vue'

/* Subtle hero depth. Writes three CSS variables onto the element:
     --p   scroll progress through the hero (0 to 1)
     --mx  pointer offset from centre, -1 to 1 (fine pointers only)
     --my  same, vertical
   The CSS turns these into transform/opacity only, so nothing triggers layout.
   Does nothing for reduced-motion users. */
export function useHeroMotion(elRef) {
  let frame = 0
  let pointerFrame = 0
  const cleanups = []

  onMounted(() => {
    const el = elRef.value
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const p = Math.min(Math.max(window.scrollY / (el.offsetHeight || 1), 0), 1)
        el.style.setProperty('--p', p.toFixed(3))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const onMove = (e) => {
        if (pointerFrame) return
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0
          const r = el.getBoundingClientRect()
          el.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
          el.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
        })
      }
      el.addEventListener('pointermove', onMove, { passive: true })
      cleanups.push(() => el.removeEventListener('pointermove', onMove))
    }
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    cancelAnimationFrame(pointerFrame)
    cleanups.forEach((fn) => fn())
  })
}
