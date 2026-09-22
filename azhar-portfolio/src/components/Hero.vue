<script setup>
import { ref } from 'vue'
import { profile } from '../data/content'
import { useHeroMotion } from '../composables/useHeroMotion'

const hero = ref(null)
useHeroMotion(hero)
</script>

<template>
  <section id="top" ref="hero" class="hero" aria-labelledby="hero-title">
    <!-- Atmosphere: a cone of projector light, all decorative -->
    <div class="hero__light" aria-hidden="true">
      <div class="hero__beam"></div>
    </div>

    <!-- Viewfinder corners -->
    <span class="hero__corner hero__corner--tl" aria-hidden="true"></span>
    <span class="hero__corner hero__corner--tr" aria-hidden="true"></span>
    <span class="hero__corner hero__corner--bl" aria-hidden="true"></span>
    <span class="hero__corner hero__corner--br" aria-hidden="true"></span>

    <div class="hero__inner container">
      <div class="hero__meta fade">
        <span class="label">Portfolio {{ profile.year }}</span>
        <span class="label">{{ profile.location }}</span>
      </div>

      <h1 id="hero-title" class="hero__title display">
        <span class="hero__line"><span class="hero__line-inner">{{ profile.first }}</span></span>
        <span class="hero__line hero__line--indent"><span class="hero__line-inner">{{ profile.last }}</span></span>
      </h1>

      <div class="hero__foot fade">
        <div class="hero__role">
          <p class="hero__role-main">{{ profile.role }}</p>
          <p class="hero__role-sub">{{ profile.roleNote }}</p>
        </div>
        <p class="hero__statement">{{ profile.statement }}</p>
        <div class="hero__cta">
          <a class="btn" href="#work">View work</a>
          <a class="btn btn--ghost" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  --p: 0;
  --mx: 0;
  --my: 0;
  position: relative;
  min-height: 100svh;
  display: flex;
  overflow: hidden;
  isolation: isolate;
}

/* ---- Light ------------------------------------------------------------- */
.hero__light {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(55% 45% at 88% -5%, rgba(236, 229, 216, 0.13), transparent 70%),
    radial-gradient(45% 40% at 96% 8%, rgba(178, 56, 46, 0.2), transparent 70%);
}
.hero__beam {
  position: absolute;
  inset: -10% -10% 0 -10%;
  background: linear-gradient(205deg, rgba(236, 229, 216, 0.1) 0%, rgba(236, 229, 216, 0.02) 45%, transparent 70%);
  clip-path: polygon(96% 0, 100% 0, 46% 100%, 12% 100%);
  transform: translate3d(calc(var(--mx) * -18px), calc(var(--my) * -10px), 0);
  will-change: transform;
}

/* ---- Viewfinder corners ------------------------------------------------ */
.hero__corner {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border: 0 solid var(--line-strong);
  pointer-events: none;
  opacity: 0;
  transition: opacity 1.2s ease 1.1s;
}
.is-ready .hero__corner {
  opacity: 1;
}
.hero__corner--tl {
  top: calc(var(--nav-h) + 1rem);
  left: var(--gutter);
  border-top-width: 1px;
  border-left-width: 1px;
}
.hero__corner--tr {
  top: calc(var(--nav-h) + 1rem);
  right: var(--gutter);
  border-top-width: 1px;
  border-right-width: 1px;
}
.hero__corner--bl {
  bottom: 1.75rem;
  left: var(--gutter);
  border-bottom-width: 1px;
  border-left-width: 1px;
}
.hero__corner--br {
  bottom: 1.75rem;
  right: var(--gutter);
  border-bottom-width: 1px;
  border-right-width: 1px;
}

/* ---- Composition ------------------------------------------------------- */
.hero__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: clamp(2rem, 5vh, 3.5rem);
  padding-top: calc(var(--nav-h) + 3.25rem);
  padding-bottom: clamp(3.25rem, 7vh, 4.75rem);
  transform: translate3d(0, calc(var(--p) * 60px), 0);
  opacity: calc(1 - var(--p) * 0.85);
}

.hero__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

/* The name: stacked, tight, second line stepped in like a title card */
.hero__title {
  font-size: clamp(4.1rem, min(17vw, 27svh), 15rem);
  font-weight: 500;
  line-height: 0.86;
  letter-spacing: -0.035em;
}
.hero__line {
  display: block;
  overflow: hidden;
  padding-block: 0.06em 0.1em; /* room for Bodoni's hairline ascenders and descenders */
  margin-block: -0.06em -0.1em;
}
.hero__line--indent {
  padding-left: clamp(0rem, 11vw, 10rem);
}
.hero__line-inner {
  display: block;
  transform: translate3d(0, 108%, 0);
  transition: transform 1.25s var(--ease-out);
}
.hero__line:nth-child(2) .hero__line-inner {
  transition-delay: 0.14s;
}
.is-ready .hero__line-inner {
  transform: none;
}

.hero__foot {
  display: grid;
  gap: 1.75rem;
  align-items: end;
}
.hero__role-main {
  font-size: 1.05rem;
  font-weight: 600;
}
.hero__role-sub {
  color: var(--muted);
}
.hero__statement {
  max-width: 34ch;
  color: var(--muted);
}
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Meta and foot arrive after the name lands */
.fade {
  opacity: 0;
  transition: opacity 1.1s ease 0.75s;
}
.is-ready .fade {
  opacity: 1;
}

@media (min-width: 56.25em) {
  .hero__foot {
    grid-template-columns: 1fr minmax(0, 1.1fr) 1fr;
    gap: 3rem;
  }
  .hero__cta {
    justify-content: flex-end;
  }
}

@media (max-width: 40em) {
  .hero__title {
    font-size: min(25vw, 24svh);
  }
}

@media (max-width: 24em) {
  .hero__corner {
    display: none;
  }
}

@media (max-width: 34em) {
  .hero__meta {
    flex-direction: column;
    gap: 0.35rem;
  }
  .hero__cta .btn {
    flex: 1 1 auto;
  }
  .hero__corner--tl,
  .hero__corner--tr {
    top: calc(var(--nav-h) + 0.5rem);
  }
}
</style>
