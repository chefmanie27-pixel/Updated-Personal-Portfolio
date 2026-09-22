<script setup>
import { nav, profile, credits } from '../data/content'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p v-reveal class="footer__end display">Thanks for watching.</p>

      <dl v-reveal class="credits">
        <div v-for="c in credits" :key="c.role">
          <dt class="label">{{ c.role }}</dt>
          <dd class="display">{{ c.value }}</dd>
        </div>
      </dl>

      <div class="footer__bar">
        <p class="footer__legal">&copy; {{ profile.year }} {{ profile.name }}. All rights reserved.</p>
        <nav aria-label="Footer">
          <ul class="footer__links">
            <li v-for="item in nav" :key="item.id"><a class="link" :href="`#${item.id}`">{{ item.label }}</a></li>
            <li>
              <a class="link" :href="profile.github" target="_blank" rel="noopener">
                GitHub<span class="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a class="link" :href="profile.linkedin" target="_blank" rel="noopener">
                LinkedIn<span class="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
        <a class="link footer__top" href="#top">Back to top</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-top: var(--section-space);
  padding-bottom: 2rem;
  border-top: 1px solid var(--line-strong);
  text-align: center;
}

.footer__end {
  font-size: clamp(2.2rem, 1.2rem + 4vw, 4.5rem);
  font-style: italic;
  font-weight: 400;
}

.credits {
  display: grid;
  gap: 2.25rem;
  margin: clamp(3.5rem, 7vw, 6rem) auto;
  max-width: 52rem;
}
.credits dd {
  margin: 0.5rem 0 0;
  font-size: clamp(1.3rem, 1rem + 1vw, 1.75rem);
  font-weight: 500;
  line-height: 1.2;
}

.footer__bar {
  display: grid;
  gap: 1.25rem;
  justify-items: center;
  padding-top: 1.75rem;
  border-top: 1px solid var(--line);
  font-size: 0.9rem;
  color: var(--muted);
}
.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.5rem;
}

@media (min-width: 40em) {
  .credits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem 2rem;
  }
}

@media (min-width: 62em) {
  .footer__bar {
    grid-template-columns: 1fr auto 1fr;
    justify-items: stretch;
    align-items: center;
  }
  .footer__legal {
    text-align: left;
  }
  .footer__top {
    justify-self: end;
  }
}
</style>
