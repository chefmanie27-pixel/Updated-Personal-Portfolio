<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { nav, profile } from '../data/content'
import { useActiveSection } from '../composables/useActiveSection'

const active = useActiveSection(['top', ...nav.map((n) => n.id)])

const scrolled = ref(false)
const open = ref(false)
const toggleBtn = ref(null)
const panel = ref(null)

const close = () => (open.value = false)

watch(open, async (isOpen) => {
  document.documentElement.classList.toggle('is-locked', isOpen)
  if (isOpen) {
    await nextTick()
    panel.value?.querySelector('a')?.focus()
  }
})

function onKeydown(e) {
  if (e.key === 'Escape' && open.value) {
    close()
    toggleBtn.value?.focus()
  }
}

let frame = 0
function onScroll() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    scrolled.value = window.scrollY > 24
  })
}

// If the window grows past the mobile breakpoint, never leave the menu stuck open
let mq
const onMq = (e) => e.matches && close()

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  mq = window.matchMedia('(min-width: 56.25em)')
  mq.addEventListener('change', onMq)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  mq?.removeEventListener('change', onMq)
  document.documentElement.classList.remove('is-locked')
})
</script>

<template>
  <header class="nav" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <div class="nav__bar container">
      <a class="nav__brand display" href="#top" @click="close">{{ profile.name }}</a>

      <nav class="nav__links" aria-label="Primary">
        <ul>
          <li v-for="item in nav" :key="item.id">
            <a class="label" :href="`#${item.id}`" :aria-current="active === item.id ? 'true' : null">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        ref="toggleBtn"
        class="nav__toggle label"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        @click="open = !open"
      >
        {{ open ? 'Close' : 'Menu' }}
      </button>
    </div>

    <div id="mobile-menu" ref="panel" class="nav__panel" :inert="!open">
      <nav aria-label="Mobile">
        <ul>
          <li v-for="(item, i) in nav" :key="item.id" :style="{ '--i': i }">
            <a
              class="display"
              :href="`#${item.id}`"
              :aria-current="active === item.id ? 'true' : null"
              @click="close"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
      <p class="label nav__panel-foot">{{ profile.location }}</p>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  transition: background-color 0.4s ease, border-color 0.4s ease;
  border-bottom: 1px solid transparent;
}
.nav.is-scrolled {
  background: rgba(14, 12, 11, 0.94);
  border-color: var(--line);
}
.nav.is-open {
  background: var(--bg);
  border-color: var(--line);
}

.nav__bar {
  position: relative;
  z-index: 2;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__brand {
  font-size: 1.35rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-decoration: none;
}

.nav__links {
  display: none;
}
.nav__links ul {
  display: flex;
  gap: clamp(1.5rem, 3vw, 3rem);
}
.nav__links a {
  position: relative;
  display: inline-block;
  padding-block: 0.5rem;
  text-decoration: none;
  transition: color 0.3s ease;
}
.nav__links a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.1rem;
  height: 1px;
  background: var(--accent-text);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s var(--ease-cine);
}
.nav__links a:hover,
.nav__links a:focus-visible,
.nav__links a[aria-current='true'] {
  color: var(--text);
}
.nav__links a:hover::after,
.nav__links a:focus-visible::after,
.nav__links a[aria-current='true']::after {
  transform: scaleX(1);
}

.nav__toggle {
  padding: 0.75rem 0;
  background: none;
  border: 0;
  color: var(--text);
}

/* Mobile menu: a full-frame title list */
.nav__panel {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: calc(var(--nav-h) + 2rem) var(--gutter) 2.5rem;
  background: var(--bg);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0s linear 0.4s;
}
.nav.is-open .nav__panel {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.4s ease;
}
.nav__panel a {
  display: block;
  padding-block: 0.35rem;
  font-size: clamp(2.6rem, 13vw, 4.5rem);
  font-weight: 500;
  text-decoration: none;
  transform: translate3d(0, 1.5rem, 0);
  opacity: 0;
  transition: transform 0.7s var(--ease-out), opacity 0.5s ease, color 0.3s ease;
  transition-delay: calc(var(--i, 0) * 60ms + 120ms);
}
.nav.is-open .nav__panel a {
  transform: none;
  opacity: 1;
}
.nav__panel a[aria-current='true'] {
  color: var(--accent-text);
}
.nav__panel-foot {
  border-top: 1px solid var(--line);
  padding-top: 1.25rem;
}

@media (min-width: 56.25em) {
  .nav__links {
    display: block;
  }
  .nav__toggle,
  .nav__panel {
    display: none;
  }
}
</style>
