import { ref, onMounted, onBeforeUnmount } from 'vue'

/* Returns a ref holding the id of the section currently crossing the middle of
   the viewport. Used by the navbar to mark where you are. */
export function useActiveSection(ids) {
  const active = ref('')
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())

  return active
}
