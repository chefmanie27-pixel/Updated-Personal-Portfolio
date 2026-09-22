<script setup>
import { skills, profile } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="skills" class="section" aria-labelledby="skills-title">
    <div class="container">
      <SectionHeading id="skills-title" title="Skills">
        {{ skills.intro }}
      </SectionHeading>

      <div class="skills__groups">
        <section
          v-for="(group, gi) in skills.groups"
          :key="group.title"
          v-reveal
          class="group"
          :aria-labelledby="`skills-group-${gi}`"
        >
          <h3 :id="`skills-group-${gi}`" class="group__title label">{{ group.title }}</h3>
          <dl class="group__rows">
            <div v-for="row in group.rows" :key="row.category" class="row">
              <dt class="row__category display">{{ row.category }}</dt>
              <dd class="row__items">{{ row.items.join(', ') }}</dd>
              <dd class="row__where">Learned at {{ row.where }}</dd>
            </div>
          </dl>
        </section>
      </div>

      <div v-reveal class="skills__cv">
        <a class="btn" :href="profile.cv" download="Azhar-Manie-CV.pdf">Download CV</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__groups {
  display: grid;
  gap: clamp(3rem, 6vw, 5rem);
}

.group__title {
  padding-bottom: 1rem;
  color: var(--accent-text);
}

.row {
  display: grid;
  gap: 0.35rem;
  padding-block: 1.5rem;
  border-top: 1px solid var(--line);
}
.group__rows .row:last-child {
  border-bottom: 1px solid var(--line);
}
.row__category {
  font-size: var(--fs-h3);
  font-weight: 500;
  line-height: 1.1;
}
.row__items {
  font-size: 1.1rem;
}
.row__where {
  font-size: 0.9rem;
  color: var(--muted);
}

.skills__cv {
  margin-top: clamp(3rem, 6vw, 4.5rem);
}

@media (min-width: 56.25em) {
  .group {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);
    gap: 2rem;
  }
  .group__title {
    padding-top: 1.75rem;
  }
  .row {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) minmax(0, 1fr);
    align-items: baseline;
    gap: 2rem;
  }
  .group__rows .row:last-child {
    border-bottom: 0;
  }
}
</style>
