<script setup>
import { certifications } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="certifications" class="section" aria-labelledby="certifications-title">
    <div class="container">
      <SectionHeading id="certifications-title" title="Certifications">
        {{ certifications.intro }}
      </SectionHeading>

      <ul class="certs">
        <li v-for="(cert, i) in certifications.items" :key="cert.id" v-reveal="{ delay: i * 100 }" class="cert">
          <p v-if="cert.year" class="cert__year">{{ cert.year }}</p>
          <div class="cert__main">
            <h3 class="cert__title display">{{ cert.title }}</h3>
            <p v-if="cert.issuer" class="cert__issuer label">{{ cert.issuer }}</p>
          </div>
          <div class="cert__body">
            <p v-if="cert.detail" class="cert__detail">{{ cert.detail }}</p>
            <a
              v-if="cert.file"
              class="cert__link link"
              :href="cert.file"
              target="_blank"
              rel="noopener"
            >
              View certificate
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.certs {
  border-bottom: 1px solid var(--line);
}

.cert {
  display: grid;
  gap: 0.9rem;
  padding-block: 2rem;
  border-top: 1px solid var(--line);
}

.cert__year {
  font-size: 0.95rem;
  font-weight: 600;
}
.cert__title {
  font-size: var(--fs-h3);
  font-weight: 500;
  line-height: 1.1;
}
.cert__issuer {
  margin-top: 0.85rem;
  line-height: 1.5;
}
.cert__detail {
  max-width: 62ch;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--muted);
}
.cert__link {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.95rem;
}

@media (min-width: 56.25em) {
  .cert {
    grid-template-columns: minmax(0, 0.5fr) minmax(0, 1.6fr) minmax(0, 1.4fr);
    gap: 2rem;
    align-items: start;
    padding-block: 2.5rem;
  }
  /* Keep the title column aligned when a card has no year */
  .cert > :first-child:not(.cert__year) {
    grid-column: 2;
  }
}
</style>
