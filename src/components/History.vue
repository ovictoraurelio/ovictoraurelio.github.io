<template>
  <section
    id="history"
    class="section site-shell history-section"
    aria-labelledby="history-title">
    <div class="history-heading">
      <p class="eyebrow">03 / {{ $t('ui.nav.history') }}</p>
      <h2 id="history-title">{{ $t('ui.history.title') }}</h2>
      <p>{{ $t('ui.history.intro') }}</p>
      <span class="history-since"
        >{{ $t('ui.history.since') }}<AppIcon name="arrow"
      /></span>
    </div>
    <div class="timeline">
      <template
        v-for="(history, index) in visibleHistories"
        :key="history.locate.name + history.date">
        <p
          v-if="
            index === 0 ||
            history.category !== visibleHistories[index - 1].category
          "
          class="eyebrow timeline-group">
          {{
            $t(
              history.category === 'leadership'
                ? 'life.leadershipLabel'
                : 'life.trajectoryLabel'
            )
          }}
        </p>
        <article class="timeline-row">
          <div class="timeline-meta">
            <span
              class="timeline-dot"
              :class="{ 'is-current': index === 0 }"></span
            ><span>{{
              $i18n.locale === 'pt'
                ? history.date
                : $t('ui.history.entries.' + index + '.date')
            }}</span>
          </div>
          <h3>
            <a
              v-if="getLink(history)"
              :href="getLink(history)"
              target="_blank"
              rel="noopener noreferrer"
              >{{ history.locate.name.replace('Pernanbuco', 'Pernambuco')
              }}<AppIcon name="external" /></a
            ><span v-else>{{ history.locate.name }}</span>
          </h3>
          <p>
            {{
              $i18n.locale === 'pt'
                ? history.office
                : $t('ui.history.entries.' + index + '.role')
            }}
          </p>
        </article>
      </template>
      <button
        class="text-link disclosure-button"
        type="button"
        :aria-expanded="showAll"
        aria-controls="history"
        @click="showAll = !showAll">
        {{ $t(showAll ? 'ui.history.less' : 'ui.history.more')
        }}<AppIcon :name="showAll ? 'minus' : 'plus'" />
      </button>
    </div>
  </section>
</template>

<script>
import data from '@/services'
import AppIcon from './AppIcon.vue'

export default {
  components: { AppIcon },
  data: () => ({ histories: data.history, showAll: false }),
  computed: {
    visibleHistories() {
      return this.showAll ? this.histories : this.histories.slice(0, 3)
    }
  },
  methods: {
    getLink(history) {
      const link = history.locate.link
      if (!link || link === 'not_found') return null
      return /^https?:\/\//.test(link) ? link : 'https://' + link
    }
  }
}
</script>
