<template>
  <section class="hero site-shell" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow">
        <span class="status-dot"></span>{{ $t('infos.title') }}
      </p>
      <h1 id="hero-title">
        {{ $t('ui.hero.title') }}<br /><em>{{ $t('ui.hero.emphasis') }}</em>
      </h1>
      <p class="hero-description">{{ $t('ui.hero.description') }}</p>
      <div class="hero-actions">
        <RouterLink class="button" to="/calendar"
          >{{ $t('scheduleMeeting') }}<AppIcon name="external"
        /></RouterLink>
        <RouterLink class="text-link" to="/#work"
          >{{ $t('ui.hero.explore') }}<AppIcon name="down"
        /></RouterLink>
      </div>
      <div class="hero-socials">
        <span>{{ $t('ui.hero.find') }}</span>
        <a
          href="https://www.linkedin.com/in/ovictoraurelio/"
          target="_blank"
          rel="noopener noreferrer"
          >LinkedIn<AppIcon name="external"
        /></a>
        <a
          href="https://github.com/ovictoraurelio"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub<AppIcon name="external"
        /></a>
      </div>
    </div>
    <figure class="hero-portrait">
      <div class="portrait-frame">
        <img
          v-if="!photoFailed"
          :src="portrait"
          alt="Victor Aurélio"
          width="715"
          height="715"
          fetchpriority="high"
          @error="photoFailed = true" />
        <div v-else class="portrait-fallback" aria-label="Victor Aurélio">
          va.
        </div>
        <span class="portrait-note">{{ $t('ui.hero.portraitNote') }}</span>
      </div>
      <div class="credential">
        <AppIcon name="cloud" />
        <div>
          <span>Google Cloud</span
          ><strong>{{ $t('ui.hero.certification') }}</strong>
        </div>
        <AppIcon name="check" />
      </div>
      <figcaption>
        <span>Victor Aurélio</span><span>{{ $t('infos.location') }}</span>
      </figcaption>
    </figure>
    <div class="hero-strip">
      <div class="experience-number">
        <strong>{{ years }}<span>+</span></strong>
        <p>{{ $t('ui.hero.experience') }}</p>
      </div>
      <div class="company-strip">
        <span>{{ $t('ui.hero.leading') }}</span>
        <div>
          <strong class="wordmark-beyond">beyond co.</strong
          ><strong class="wordmark-legis">Legis</strong
          ><strong class="wordmark-absens">absens<span>↗</span></strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppIcon from './AppIcon.vue'
const portrait = '/victor-aurelio.jpg'

export default {
  components: { AppIcon },
  data: () => ({
    portrait,
    photoFailed: false,
    years: new Date().getFullYear() - 2012
  })
}
</script>
