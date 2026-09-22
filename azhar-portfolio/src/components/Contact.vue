<script setup>
import { reactive, ref } from 'vue'
import { profile, contact } from '../data/content'
import SectionHeading from './SectionHeading.vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const status = ref('idle') // idle, sending, success, error

async function submit(event) {
  if (status.value === 'sending') return
  status.value = 'sending'
  try {
    // FormData from the form keeps the honeypot field (_gotcha) in the payload
    const res = await fetch(profile.formEndpoint, {
      method: 'POST',
      body: new FormData(event.target),
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`Form service responded ${res.status}`)
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="section" aria-labelledby="contact-title">
    <div class="container">
      <SectionHeading id="contact-title" title="Get in touch">
        {{ contact.intro }}
      </SectionHeading>

      <div class="contact__grid">
        <dl v-reveal class="details">
          <div>
            <dt class="label">Location</dt>
            <dd>{{ profile.location }}</dd>
          </div>
          <div>
            <dt class="label">Email</dt>
            <dd>
              <a class="link" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            </dd>
          </div>
          <div>
            <dt class="label">Elsewhere</dt>
            <dd class="details__social">
              <a class="link" :href="profile.github" target="_blank" rel="noopener">
                GitHub<span class="visually-hidden"> (opens in a new tab)</span>
              </a>
              <a class="link" :href="profile.linkedin" target="_blank" rel="noopener">
                LinkedIn<span class="visually-hidden"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
        </dl>

        <form v-reveal="{ delay: 120 }" class="form" @submit.prevent="submit">
          <div class="field">
            <label class="label" for="name">Your name</label>
            <input id="name" v-model.trim="form.name" name="name" type="text" autocomplete="name" required />
          </div>
          <div class="field">
            <label class="label" for="email">Your email</label>
            <input id="email" v-model.trim="form.email" name="email" type="email" autocomplete="email" required />
          </div>
          <div class="field">
            <label class="label" for="subject">Subject</label>
            <input id="subject" v-model.trim="form.subject" name="subject" type="text" required />
          </div>
          <div class="field">
            <label class="label" for="message">Your message</label>
            <textarea id="message" v-model.trim="form.message" name="message" rows="5" required></textarea>
          </div>

          <!-- Honeypot for spam bots (Formspree ignores submissions that fill it) -->
          <input class="visually-hidden" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-label="Leave this field empty" />

          <div class="form__actions">
            <button class="btn" type="submit" :disabled="status === 'sending'">
              {{ status === 'sending' ? 'Sending' : 'Send message' }}
            </button>
            <p class="form__status" role="status" aria-live="polite">
              <template v-if="status === 'success'">Message sent. Thank you, I will reply soon.</template>
              <template v-else-if="status === 'error'">
                <span class="form__error">
                  The message did not send. Please try again, or email
                  <a class="link" :href="`mailto:${profile.email}`">{{ profile.email }}</a>.
                </span>
              </template>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  gap: 3.5rem;
}

.details {
  display: grid;
  gap: 2rem;
  align-content: start;
}
.details dd {
  margin: 0.35rem 0 0;
  font-family: var(--font-display);
  font-size: var(--fs-h3);
  font-weight: 500;
  line-height: 1.2;
  overflow-wrap: anywhere;
}
.details__social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.75rem;
}

.form {
  display: grid;
  gap: 1.75rem;
  max-width: 40rem;
}
.field {
  display: grid;
  gap: 0.4rem;
}
.field input,
.field textarea {
  width: 100%;
  padding: 0.7rem 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--line-strong);
  border-radius: 0;
  font-size: 1.1rem;
  transition: border-color 0.3s ease;
}
.field textarea {
  resize: vertical;
  min-height: 8rem;
}
.field input:hover,
.field textarea:hover {
  border-bottom-color: var(--muted);
}
.field input:focus,
.field textarea:focus {
  outline: none;
  border-bottom-color: var(--accent-text);
  box-shadow: 0 1px 0 0 var(--accent-text);
}

.form__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
}
.form__actions .btn:disabled {
  opacity: 0.6;
  cursor: progress;
}
.form__status {
  flex: 1 1 14rem;
  font-size: 0.95rem;
  color: var(--muted);
}
.form__error {
  color: var(--accent-text);
}

@media (min-width: 56.25em) {
  .contact__grid {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: clamp(3rem, 8vw, 8rem);
  }
}
</style>
