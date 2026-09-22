<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, required: true },
})

const number = computed(() => String(props.index + 1).padStart(2, '0'))
// Each poster is lit from a slightly different direction
const lightX = computed(() => ['72%', '22%', '50%'][props.index % 3])
</script>

<template>
  <article
    v-reveal="{ delay: index * 110 }"
    class="poster"
    :class="{ 'poster--placeholder': project.placeholder }"
    :style="{ '--lx': lightX }"
  >
    <div class="poster__frame">
      <div class="poster__art" aria-hidden="true">
        <img
          v-if="project.image"
          class="poster__img"
          :src="project.image"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span v-else class="poster__numeral display">{{ number }}</span>
      </div>

      <div class="poster__shade" aria-hidden="true"></div>

      <div class="poster__top label">
        <span>Project {{ number }}</span>
        <span>{{ project.year }}</span>
      </div>

      <div class="poster__body">
        <div class="poster__more">
          <p class="poster__desc">{{ project.description }}</p>
          <dl class="poster__facts">
            <div>
              <dt class="label">Role</dt>
              <dd>{{ project.role }}</dd>
            </div>
            <div>
              <dt class="label">Technology</dt>
              <dd>{{ project.tech.join(', ') }}</dd>
            </div>
          </dl>
          <p v-if="project.github || project.live" class="poster__links">
            <a
              v-if="project.live"
              class="btn"
              :href="project.live"
              target="_blank"
              rel="noopener"
              :aria-label="`${project.title}: live demo (opens in a new tab)`"
            >
              Live demo
            </a>
            <a
              v-if="project.github"
              class="btn btn--ghost"
              :href="project.github"
              target="_blank"
              rel="noopener"
              :aria-label="`${project.title}: GitHub repository (opens in a new tab)`"
            >
              GitHub
            </a>
          </p>
        </div>

        <h3 class="poster__title display">{{ project.title }}</h3>
        <p class="poster__tech label">{{ project.tech.join(', ') }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.poster {
  container-type: inline-size;
}

.poster__frame {
  position: relative;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line);
  transition: border-color 0.5s ease;
}

/* ---- Art --------------------------------------------------------------- */
.poster__art {
  position: absolute;
  inset: 0;
  background: radial-gradient(85% 62% at var(--lx) 0%, rgba(236, 229, 216, 0.15), transparent 72%), var(--surface);
  transition: transform 1.2s var(--ease-out);
}
.poster__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.poster__numeral {
  position: absolute;
  inset: 8% 0 auto;
  text-align: center;
  font-size: 62cqw;
  font-weight: 400;
  line-height: 0.85;
  color: transparent;
  -webkit-text-stroke: 1px rgba(236, 229, 216, 0.24);
}

/* Legibility gradient for the title, deepens on hover */
.poster__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14, 12, 11, 0.94) 0%, rgba(14, 12, 11, 0.55) 38%, transparent 68%);
  transition: opacity 0.6s ease;
}

.poster__top {
  position: absolute;
  inset: 1.1rem 1.25rem auto;
  display: flex;
  justify-content: space-between;
  color: var(--text);
}

/* ---- Text -------------------------------------------------------------- */
.poster__body {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* Poster proportions come from here, not from the frame: the poster is at
     least this tall, and grows if the copy needs more room. */
  min-height: calc(var(--poster-ratio, 1.25) * 100cqw);
  padding: 3.25rem 1.25rem 1.25rem; /* top padding clears the Project / year row */
}
.poster__title {
  font-size: clamp(1.7rem, 9cqw, 2.4rem);
  font-weight: 500;
  line-height: 1;
}
.poster__tech {
  margin-top: 0.6rem;
}

.poster__more {
  display: grid;
  gap: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translate3d(0, 1rem, 0);
  transition: opacity 0.5s ease, transform 0.7s var(--ease-out);
}
.poster__desc {
  font-size: 0.95rem;
  line-height: 1.55;
  max-width: 34ch;
}
.poster__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  font-size: 0.9rem;
}
.poster__facts dd {
  margin-top: 0.15rem;
}
.poster__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.poster__links .btn {
  padding: 0.85rem 1.25rem;
}

/* ---- Interaction: hover, keyboard focus, and touch --------------------- */
.poster__frame:hover,
.poster__frame:focus-within {
  border-color: var(--line-strong);
}
.poster__frame:hover .poster__art,
.poster__frame:focus-within .poster__art {
  transform: scale(1.06);
}
.poster__frame:hover .poster__more,
.poster__frame:focus-within .poster__more {
  opacity: 1;
  transform: none;
}
.poster__frame:hover .poster__shade,
.poster__frame:focus-within .poster__shade {
  background: linear-gradient(to top, rgba(14, 12, 11, 0.97) 0%, rgba(14, 12, 11, 0.88) 60%, rgba(14, 12, 11, 0.55) 100%);
}

/* Touch screens have no hover, so the details are simply always shown */
@media (hover: none) {
  .poster__more {
    opacity: 1;
    transform: none;
  }
  .poster__shade {
    background: linear-gradient(to top, rgba(14, 12, 11, 0.97) 0%, rgba(14, 12, 11, 0.9) 60%, rgba(14, 12, 11, 0.72) 100%);
  }
}

/* ---- Placeholder slots ------------------------------------------------- */
.poster--placeholder .poster__frame {
  background: transparent;
  border-style: dashed;
  border-color: var(--line-strong);
}
.poster--placeholder .poster__art {
  background: none;
}
.poster--placeholder .poster__numeral {
  -webkit-text-stroke-color: rgba(236, 229, 216, 0.1);
}
.poster--placeholder .poster__title,
.poster--placeholder .poster__desc {
  color: var(--muted);
}
</style>
