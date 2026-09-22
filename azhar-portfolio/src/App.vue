<script setup>
import { ref } from 'vue'
import Intro from './components/Intro.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Journey from './components/Journey.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// Flips to true the moment the intro doors start opening. The hero waits for
// it before its own entrance, so the two read as one continuous shot.
const ready = ref(false)
</script>

<template>
  <div class="app" :class="{ 'is-ready': ready }">
    <a class="skip-link" href="#main">Skip to content</a>
    <Intro @open="ready = true" />
    <Navbar />
    <main id="main">
      <Hero />
      <Projects />
      <About />
      <Journey />
      <Skills />
      <Contact />
    </main>
    <Footer />
    <div class="film-overlay" aria-hidden="true"></div>
  </div>
</template>
