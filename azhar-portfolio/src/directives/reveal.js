/* v-reveal: fades an element in once it scrolls into view.
   Usage: <div v-reveal> or <div v-reveal="{ delay: 120 }">
   Skips the effect entirely for reduced-motion users or old browsers. */

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
  }
  return observer
}

export default {
  beforeMount(el, binding) {
    el.classList.add('reveal')
    if (binding.value?.delay) el.style.setProperty('--reveal-delay', `${binding.value.delay}ms`)
    if (prefersReduced() || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
    }
  },
  mounted(el) {
    if (!el.classList.contains('is-visible')) getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
