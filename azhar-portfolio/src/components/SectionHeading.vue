<script setup>
/* One consistent section opener: a hairline, the title on the left, and a
   short supporting line on the right. The default slot is that line. */
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <header v-reveal class="heading">
    <h2 :id="id" class="heading__title display">{{ title }}</h2>
    <p v-if="$slots.default" class="heading__aside"><slot /></p>
  </header>
</template>

<style scoped>
.heading {
  display: grid;
  gap: 1.75rem;
  padding-top: 1.5rem;
  margin-bottom: clamp(3rem, 6vw, 5.5rem);
  border-top: 1px solid var(--line-strong);
}
.heading__title {
  font-size: var(--fs-h2);
  max-width: 14ch;
}
.heading__aside {
  max-width: 38ch;
  color: var(--muted);
}

@media (min-width: 56.25em) {
  .heading {
    grid-template-columns: minmax(0, 1fr) minmax(0, 20rem);
    align-items: end;
    gap: 3rem;
  }
}
</style>
