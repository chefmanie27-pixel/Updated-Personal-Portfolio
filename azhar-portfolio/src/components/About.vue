<script setup>
import { about, profile } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="container">
      <SectionHeading id="about-title" :title="about.heading">
        Hi, I&rsquo;m Azhar Manie.
      </SectionHeading>

      <div class="about__story">
        <p v-reveal class="about__lead display">{{ about.lead }}</p>

        <div class="about__aside">
          <figure v-reveal="{ delay: 90 }" class="about__portrait">
            <img :src="profile.photo" :alt="`${profile.name}, outdoors`" loading="lazy" decoding="async" />
            <figcaption class="label">{{ profile.location }}</figcaption>
          </figure>
          <div v-reveal="{ delay: 180 }" class="about__body">
            <p v-for="para in about.body" :key="para">{{ para }}</p>
          </div>
        </div>
      </div>

      <ul class="about__principles">
        <li v-for="(item, i) in about.principles" :key="item.title" v-reveal="{ delay: i * 100 }">
          <h3 class="about__principle-title display">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>

      <div v-reveal class="about__cta">
        <p class="about__cta-text display">{{ about.cta }}</p>
        <a class="btn" href="#contact">Let&rsquo;s connect</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__story {
  display: grid;
  gap: 2.5rem;
}
.about__lead {
  font-size: var(--fs-lead);
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.01em;
  max-width: 34em;
}
.about__aside {
  display: grid;
  gap: 2.5rem;
}

/* Framed like the project posters, so the same visual language covers a real
   photo of Azhar as covers the project stills. */
.about__portrait {
  margin: 0;
  max-width: 22rem;
}
.about__portrait img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border: 1px solid var(--line);
}
.about__portrait figcaption {
  margin-top: 0.85rem;
}

.about__body {
  display: grid;
  gap: 1.25rem;
  max-width: 34rem;
  color: var(--muted);
}

.about__principles {
  display: grid;
  gap: 2.75rem;
  margin-top: clamp(4rem, 8vw, 7rem);
}
.about__principles li {
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
}
.about__principle-title {
  font-size: var(--fs-h3);
  font-weight: 500;
  margin-bottom: 1rem;
}
.about__principles p {
  color: var(--muted);
  max-width: 34ch;
}

.about__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem 3rem;
  margin-top: clamp(4rem, 8vw, 7rem);
  padding-top: 2rem;
  border-top: 1px solid var(--line-strong);
}
.about__cta-text {
  font-size: var(--fs-h3);
  font-weight: 400;
}

@media (min-width: 56.25em) {
  .about__story {
    grid-template-columns: minmax(0, 7fr) minmax(0, 4fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: start;
  }
  .about__body {
    padding-top: 0.6rem;
  }
  .about__principles {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(2rem, 4vw, 4rem);
  }
}
</style>
