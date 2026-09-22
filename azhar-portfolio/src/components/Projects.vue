<script setup>
import { projects } from '../data/content'
import SectionHeading from './SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="work" class="section" aria-labelledby="work-title">
    <div class="container">
      <SectionHeading id="work-title" title="Selected work">
        What I have built so far.
      </SectionHeading>

      <div class="projects__grid">
        <ProjectCard v-for="(project, i) in projects" :key="project.id" :project="project" :index="i" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

@media (min-width: 40em) {
  .projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 62em) {
  .projects__grid {
    --poster-ratio: 1.5; /* true one-sheet proportions on wide screens */
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: start;
  }
  /* Posters hang at staggered heights, like a wall of one-sheets */
  .projects__grid > :nth-child(3n + 2) {
    margin-top: clamp(2rem, 5vw, 4.5rem);
  }
}
</style>
