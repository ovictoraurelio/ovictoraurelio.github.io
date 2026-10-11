<template>
  <div class="home-page">
    <Infos />
    <section
      id="about"
      class="section site-shell about-section"
      aria-labelledby="about-title">
      <div>
        <p class="eyebrow">01 / {{ $t('ui.nav.about') }}</p>
        <h2 id="about-title">
          {{ $t('ui.about.title') }}<em>{{ $t('ui.about.emphasis') }}</em>
        </h2>
      </div>
      <div class="about-copy">
        <p class="lead">{{ $t('ui.about.lead') }}</p>
        <p>{{ $t('ui.about.description') }}</p>
        <details class="about-details">
          <summary>{{ $t('ui.about.more') }}<AppIcon name="plus" /></summary>
          <div class="long-bio">
            <p v-for="(paragraph, index) in biography" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </details>
        <div class="about-tags">
          <span>{{ $t('ui.about.tagStrategy') }}</span
          ><span>{{ $t('ui.about.tagPeople') }}</span
          ><span>{{ $t('ui.about.tagTechnology') }}</span>
        </div>
      </div>
    </section>
    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="site-shell section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">02 / {{ $t('ui.nav.work') }}</p>
            <h2 id="work-title">{{ $t('ui.work.title') }}</h2>
          </div>
          <p>{{ $t('ui.work.intro') }}</p>
        </div>
        <article class="current-role">
          <div>
            <p class="eyebrow">{{ $t('ui.work.currentRole') }}</p>
            <h3>
              <a
                href="https://extreme.digital"
                target="_blank"
                rel="noopener noreferrer"
                >{{ $t('ui.work.currentTitle') }}<AppIcon name="external"
              /></a>
            </h3>
          </div>
          <p>{{ $t('ui.work.currentDescription') }}</p>
        </article>
        <div class="venture-grid">
          <article
            v-for="(venture, index) in ventures"
            :key="venture.id"
            class="venture-card">
            <div class="venture-top">
              <span>0{{ index + 1 }}</span
              ><AppIcon :name="venture.icon" />
            </div>
            <h3 :class="'wordmark-' + venture.id">{{ venture.name }}</h3>
            <p class="venture-role">
              {{ $t('ui.work.' + venture.id + '.role') }}
            </p>
            <p>{{ $t('ui.work.' + venture.id + '.description') }}</p>
            <span class="venture-category">{{
              $t('ui.work.' + venture.id + '.category')
            }}</span>
          </article>
        </div>
        <div class="impact-strip" :aria-label="$t('ui.work.impact')">
          <p class="eyebrow">{{ $t('ui.work.impact') }}</p>
          <div
            v-for="(metric, index) in impactMetrics"
            :key="index"
            class="impact-metric">
            <strong>{{ metric.value }}</strong
            ><span>{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </section>
    <History />
    <Projects />
    <Skills />
    <section class="site-shell closing-section" aria-labelledby="closing-title">
      <div>
        <p class="eyebrow">{{ $t('ui.closing.eyebrow') }}</p>
        <h2 id="closing-title">
          {{ $t('ui.closing.title') }}<em>{{ $t('ui.closing.emphasis') }}</em>
        </h2>
        <p>{{ $t('ui.closing.description') }}</p>
      </div>
      <RouterLink class="button button-light" to="/calendar"
        >{{ $t('scheduleMeeting') }}<AppIcon name="external"
      /></RouterLink>
    </section>
  </div>
</template>

<script>
import Infos from '@/components/Infos.vue'
import History from '@/components/History.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import AppIcon from '@/components/AppIcon.vue'

export default {
  name: 'Home',
  components: { Infos, History, Projects, Skills, AppIcon },
  data: () => ({
    ventures: [
      { id: 'beyond', name: 'beyond co.', icon: 'layers' },
      { id: 'legis', name: 'Legis', icon: 'code' },
      { id: 'absens', name: 'absens', icon: 'spark' }
    ]
  }),
  computed: {
    impactMetrics() {
      return Object.values(this.$tm('ui.work.metrics')).map((metric) => ({
        value: this.$rt(metric.value),
        label: this.$rt(metric.label)
      }))
    },
    biography() {
      return this.$t('infos.description').split(/<br\s*\/?>\s*<br\s*\/?>/i)
    }
  }
}
</script>
