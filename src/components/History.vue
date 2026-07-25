<template lang="pug">
.container
  .flex.mb-10.md_mb-12
    .flex-col
      .text-3xl.md_text-4xl.font-light.tracking-tight.text-gray-900 {{$t("life.sectionTitle")}}

  // Current executive leadership - featured, more prominent cards
  .mb-10(v-if="leadershipHistories.length")
    .text-sm.font-semibold.text-primary-700.uppercase.tracking-wide.mb-4 {{ $t('life.leadershipLabel') }}
    .relative.timeline-container.pl-0
      .timeline-item.relative.mb-6(v-for="(history, index) of leadershipHistories" :key="'leadership-' + index" :class="{'opacity-0 translate-x-8': !isVisible(index)}" :ref="(el) => setLeadershipItemRef(el, index)")
        .timeline-content(class="bg-white/60 backdrop-filter backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-glass border border-white/70 p-6 md_p-8 transform transition-all duration-300 hover_-translate-y-1")
          .flex.flex-col.md_flex-row.justify-between.items-start.md_items-center.mb-2
            .font-bold.text-xl.text-gray-800.cursor-pointer.hover_text-primary-600.transition-colors(@click="openLink(history)") {{ history.locate.name }}
            .text-xs.font-medium.text-gray-500.mt-2.md_mt-0 {{ history.date }}

          .text-gray-700.text-base.mt-1 {{ history.office }}

  // Trajectory / education - condensed, secondary presentation
  .relative.timeline-container.pl-0.pb-8
    .text-sm.font-semibold.text-gray-500.uppercase.tracking-wide.mb-4(v-if="trajectoryHistories.length") {{ $t('life.trajectoryLabel') }}
    .timeline-item.relative.mb-4(v-for="(history, index) of trajectoryHistories" :key="'trajectory-' + index" :class="{'opacity-0 translate-x-8': !isVisible(index + leadershipHistories.length)}" :ref="(el) => setTrajectoryItemRef(el, index)")
      // Content card - same corner/shadow treatment as the leadership cards
      // above (rounded-2xl + shadow-soft/elegant), kept compact via p-4.
      .timeline-content(class="bg-white/60 backdrop-filter backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-glass border border-white/70 p-4 transform transition-all duration-300 hover_-translate-y-0.5")
        .flex.flex-col.md_flex-row.justify-between.items-start.md_items-center
          .font-semibold.text-sm.text-gray-700.cursor-pointer.hover_text-gray-500.transition-colors(@click="openLink(history)") {{ history.locate.name }}
          .text-xs.font-medium.text-gray-500.mt-1.md_mt-0 {{ history.date }}

        .text-gray-500.text-xs.mt-1 {{ history.office }}
</template>

<script>
import data from '@/services'

export default {
  data() {
    return {
      histories: data.history,
      visibleItems: new Set(),
      // Populated via function refs (see setLeadershipItemRef/setTrajectoryItemRef)
      // instead of a shared string `ref` across the two v-for blocks below.
      // Vue does not guarantee that a single ref name reused across separate
      // v-for regions keeps the elements in source order - see
      // https://vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for
      // - so each group tracks its own array explicitly to keep the
      // index math in `isVisible` reliable.
      leadershipItemRefs: [],
      trajectoryItemRefs: []
    }
  },
  computed: {
    // Current executive leadership positions (e.g. Beyond Co COO), shown first
    // and more prominently.
    leadershipHistories() {
      return this.histories.filter((history) => history.category === 'leadership')
    },
    // Everything else: student roles, monitoring, freelance, technical
    // positions - the broader career/education trajectory.
    trajectoryHistories() {
      return this.histories.filter((history) => history.category !== 'leadership')
    }
  },
  mounted() {
    this.setupIntersectionObserver()
    // Safety net: content must never stay permanently invisible if the
    // IntersectionObserver never fires (throttled background tab, older
    // browser, etc.) - the fade-in is a progressive enhancement, not a
    // requirement to see the content.
    const total = this.leadershipHistories.length + this.trajectoryHistories.length
    this.revealTimeout = setTimeout(() => {
      for (let i = 0; i < total; i++) {
        this.visibleItems.add(i)
      }
    }, 1500)
  },
  beforeUnmount() {
    clearTimeout(this.revealTimeout)
  },
  methods: {
    openLink(history) {
      if (history?.locate?.link) {
        this.$openUrl(history.locate.link)
      }
    },
    setLeadershipItemRef(el, index) {
      if (el) {
        this.leadershipItemRefs[index] = el
      }
    },
    setTrajectoryItemRef(el, index) {
      if (el) {
        this.trajectoryItemRefs[index] = el
      }
    },
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
      const leadershipCount = this.leadershipHistories.length

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const leadershipIndex = this.leadershipItemRefs.indexOf(entry.target)
          if (leadershipIndex !== -1) {
            this.visibleItems.add(leadershipIndex)
            return
          }

          const trajectoryIndex = this.trajectoryItemRefs.indexOf(entry.target)
          if (trajectoryIndex !== -1) {
            this.visibleItems.add(leadershipCount + trajectoryIndex)
          }
        })
      }, options)

      this.$nextTick(() => {
        this.leadershipItemRefs.forEach((item) => observer.observe(item))
        this.trajectoryItemRefs.forEach((item) => observer.observe(item))
      })
    },
    isVisible(index) {
      return this.visibleItems.has(index)
    }
  }
}
</script>

<style scoped>
.timeline-item {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .timeline-item {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
