<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* Title card, a hairline of light, then the doors part on the hero.
   Plays once per browser session, and never for reduced-motion users.
   Total runtime is about 2.5s. */
const emit = defineEmits(['open'])

const SEEN_KEY = 'am-intro-seen'
const phase = ref('title') // title, line, open, done
const timers = []
const later = (fn, ms) => timers.push(setTimeout(fn, ms))
const root = document.documentElement

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}

function skip() {
  phase.value = 'done'
  emit('open')
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || alreadySeen()) return skip()

  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch {
    /* private mode: intro simply replays next visit */
  }

  root.classList.add('is-locked')
  later(() => (phase.value = 'line'), 1100)
  later(() => {
    phase.value = 'open'
    emit('open')
  }, 1450)
  later(() => {
    phase.value = 'done'
    root.classList.remove('is-locked')
  }, 2550)
})

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  root.classList.remove('is-locked')
})
</script>

<template>
  <div v-if="phase !== 'done'" class="intro" :class="`is-${phase}`" aria-hidden="true">
    <div class="intro__door intro__door--top"></div>
    <div class="intro__door intro__door--bottom"></div>
    <div class="intro__card">
      <p class="label intro__presents">Azhar Manie presents</p>
      <p class="display intro__title">A Portfolio</p>
    </div>
    <div class="intro__line"></div>
  </div>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 200;
}
.intro.is-open {
  pointer-events: none;
}

.intro__door {
  position: absolute;
  left: 0;
  right: 0;
  height: 50.2%; /* tiny overlap so no seam of page shows through */
  background: var(--bg);
  transition: transform 1s var(--ease-cine);
  will-change: transform;
}
.intro__door--top {
  top: 0;
}
.intro__door--bottom {
  bottom: 0;
}
.is-open .intro__door--top {
  transform: translateY(-100%);
}
.is-open .intro__door--bottom {
  transform: translateY(100%);
}

.intro__card {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  gap: 1.1rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.is-title .intro__card {
  opacity: 1;
}
.intro__presents {
  color: var(--muted);
}
.intro__title {
  font-size: clamp(2.4rem, 8vw, 5.5rem);
  font-style: italic;
  font-weight: 400;
}

.intro__line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--accent-text);
  transform: scaleX(0);
  transition: transform 0.35s var(--ease-cine), opacity 0.3s ease;
}
.is-line .intro__line {
  transform: scaleX(1);
}
.is-open .intro__line {
  transform: scaleX(1);
  opacity: 0;
}
</style>
