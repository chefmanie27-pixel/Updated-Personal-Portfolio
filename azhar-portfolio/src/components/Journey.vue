<script setup>
import { journey } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="journey" class="section" aria-labelledby="journey-title">
    <div class="container">
      <SectionHeading id="journey-title" title="My learning journey">
        {{ journey.intro }}
      </SectionHeading>

      <!-- The timeline as a strip of film: each stage is one frame -->
      <ol class="strip">
        <li
          v-for="(frame, i) in journey.frames"
          :key="frame.title"
          v-reveal="{ delay: i * 140 }"
          class="frame"
          :class="{ 'frame--current': frame.current }"
        >
          <div class="frame__inner">
            <p class="frame__scene label">Scene {{ i + 1 }}</p>
            <p class="frame__when">
              {{ frame.when }}
              <span v-if="frame.current" class="visually-hidden">(current)</span>
            </p>
            <h3 class="frame__title display">{{ frame.title }}</h3>
            <p class="frame__place label">{{ frame.place }}</p>
            <p class="frame__text">{{ frame.text }}</p>
          </div>
        </li>
      </ol>

      <figure v-reveal class="journey__quote">
        <blockquote class="display">&ldquo;{{ journey.quote }}&rdquo;</blockquote>
        <figcaption class="label">{{ journey.quoteBy }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
/* Sprocket holes are an inline SVG tile, so there are no extra assets */
.strip {
  --hole: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='18'%3E%3Crect x='7' y='4' width='12' height='10' rx='2.5' fill='%230e0c0b'/%3E%3C/svg%3E");
  display: grid;
  gap: 1.25rem;
}

.frame {
  position: relative;
  display: flex;
  padding-block: 1.6rem; /* room for the sprocket rows */
  background: var(--surface);
}
.frame::before,
.frame::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1.1rem;
  background: var(--hole) repeat-x center / auto 100%;
  opacity: 0.9;
}
.frame::before {
  top: 0.2rem;
}
.frame::after {
  bottom: 0.2rem;
}

.frame__inner {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem 1.4rem 1.25rem;
  border-block: 1px solid var(--line);
  background: var(--bg);
  margin-inline: 0.9rem;
}
.frame__scene {
  margin-bottom: 1.75rem;
}
.frame__when {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
}
.frame__title {
  margin-top: 0.5rem;
  font-size: var(--fs-h3);
  font-weight: 500;
  line-height: 1.08;
}
.frame__place {
  margin-top: 0.85rem;
  line-height: 1.5;
}
.frame__text {
  margin-top: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--muted);
}

/* The frame that is "lit": where I am now */
.frame--current {
  background: color-mix(in srgb, var(--accent) 72%, var(--bg));
}
.frame--current .frame__inner {
  border-color: rgba(236, 229, 216, 0.25);
}
.frame--current .frame__scene {
  color: var(--accent-text);
}

/* Closing card */
.journey__quote {
  max-width: 44rem;
  margin: clamp(4.5rem, 9vw, 8rem) auto 0;
  text-align: center;
}
.journey__quote blockquote {
  font-size: var(--fs-lead);
  font-style: italic;
  font-weight: 400;
  line-height: 1.25;
}
.journey__quote figcaption {
  margin-top: 1.5rem;
}

@media (min-width: 40em) {
  .strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

/* Desktop: the frames butt together into one continuous strip */
@media (min-width: 72em) {
  .strip {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;
  }
  .frame + .frame {
    border-left: 1px solid var(--bg);
  }
}
</style>
