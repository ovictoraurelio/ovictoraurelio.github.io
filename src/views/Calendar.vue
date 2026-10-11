<template>
  <div class="calendar-page site-shell">
    <div class="page-intro">
      <p class="eyebrow">{{ $t('ui.calendar.eyebrow') }}</p>
      <h1>{{ $t('ui.calendar.title') }}</h1>
      <p>{{ $t('ui.calendar.description') }}</p>
    </div>
    <div class="calendar-layout" :class="{ 'has-selection': selectedLink }">
      <div
        class="calendar-options"
        role="group"
        :aria-label="$t('ui.calendar.select')">
        <p class="calendar-step">01 / {{ $t('ui.calendar.step') }}</p>
        <button
          v-for="link in roamLinks"
          :key="link.id"
          class="duration-button"
          :class="{ 'is-selected': selectedLink?.id === link.id }"
          type="button"
          :aria-label="$t(link.label)"
          :aria-pressed="selectedLink?.id === link.id"
          @click="selectLink(link)">
          <span class="duration-title"
            ><AppIcon name="clock" />{{ $t(link.label) }}</span
          ><AppIcon :name="selectedLink?.id === link.id ? 'check' : 'arrow'" />
          <p>{{ $t(link.description) }}</p>
        </button>
        <p class="calendar-note">
          <AppIcon name="globe" />{{ $t('ui.calendar.note') }}
        </p>
        <RouterLink class="calendar-alternative" to="/contact">{{
          $t('ui.calendar.alternative')
        }}</RouterLink>
      </div>
      <div v-if="selectedLink" class="calendar-panel">
        <div class="calendar-panel-heading">
          <h2>
            {{ $t(selectedLink ? selectedLink.label : 'ui.calendar.select') }}
          </h2>
          <button
            v-if="selectedLink"
            class="text-link"
            type="button"
            @click="resetSelection">
            {{ $t('ui.calendar.change') }}<AppIcon name="close" />
          </button>
        </div>
        <div v-if="status !== 'ready'" class="calendar-state" role="status">
          <AppIcon name="clock" />
          <p>
            {{
              $t(
                status === 'loading'
                  ? 'ui.calendar.loading'
                  : status === 'error'
                  ? 'ui.calendar.unavailable'
                  : 'ui.calendar.select'
              )
            }}
          </p>
          <a
            v-if="status === 'error' && selectedLink"
            class="button button-outline"
            :href="selectedLink.url"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('ui.calendar.open') }}<AppIcon name="external"
          /></a>
        </div>
        <div
          id="roam-booking"
          class="calendar-embed"
          :class="{ 'embed-loading': status !== 'ready' }"
          :aria-busy="status === 'loading'"></div>
        <div
          v-if="selectedLink && status !== 'error'"
          class="calendar-fallback-link">
          <a :href="selectedLink.url" target="_blank" rel="noopener noreferrer"
            >{{ $t('ui.calendar.open') }}<AppIcon name="external"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from '../components/AppIcon.vue'

const ROAM_SCRIPT_ID = 'roam-lobby-embed-script'
const ROAM_SCRIPT_SRC = 'https://ro.am/lobbylinks/embed.js'
let roamScriptPromise = null

const loadRoamScript = () => {
  if (window.Roam?.initLobbyEmbed) return Promise.resolve(true)
  if (roamScriptPromise) return roamScriptPromise

  roamScriptPromise = new Promise((resolve) => {
    let script = document.getElementById(ROAM_SCRIPT_ID)
    const isNew = !script
    if (isNew) {
      script = document.createElement('script')
      script.id = ROAM_SCRIPT_ID
      script.src = ROAM_SCRIPT_SRC
      script.async = true
    }
    const finish = (loaded) => {
      clearTimeout(timeout)
      script.removeEventListener('load', onLoad)
      script.removeEventListener('error', onError)
      if (!loaded) script.remove()
      resolve(loaded)
    }
    const onLoad = () =>
      finish(typeof window.Roam?.initLobbyEmbed === 'function')
    const onError = () => finish(false)
    const timeout = setTimeout(onError, 8000)
    script.addEventListener('load', onLoad, { once: true })
    script.addEventListener('error', onError, { once: true })
    if (isNew) document.head.appendChild(script)
  }).then((loaded) => {
    if (!loaded) roamScriptPromise = null
    return loaded
  })
  return roamScriptPromise
}

export default {
  name: 'Calendar',
  components: { AppIcon },
  data: () => ({
    selectedLink: null,
    status: 'idle',
    selectionVersion: 0,
    embedTimeout: null,
    roamLinks: [
      {
        id: 'roam-30min',
        url: 'https://ro.am/ovictoraurelio/',
        label: 'ui.calendar.short',
        description: 'ui.calendar.shortDescription'
      },
      {
        id: 'roam-1hora',
        url: 'https://ro.am/ovictoraurelio/1-hora',
        label: 'ui.calendar.long',
        description: 'ui.calendar.longDescription'
      }
    ]
  }),
  beforeUnmount() {
    this.resetSelection()
  },
  methods: {
    resetSelection() {
      this.selectionVersion += 1
      clearTimeout(this.embedTimeout)
      const parent = document.getElementById('roam-booking')
      if (parent) {
        parent.innerHTML = ''
        parent.style.height = ''
      }
      this.selectedLink = null
      this.status = 'idle'
    },
    async selectLink(link) {
      this.resetSelection()
      this.selectedLink = link
      this.status = 'loading'
      const version = this.selectionVersion
      const loaded = await loadRoamScript()
      if (version !== this.selectionVersion) return
      if (!loaded) {
        this.status = 'error'
        return
      }
      await this.$nextTick()
      const parentElement = document.getElementById('roam-booking')
      if (!parentElement) return
      this.embedTimeout = setTimeout(() => {
        if (version === this.selectionVersion && this.status === 'loading')
          this.status = 'error'
      }, 8000)
      try {
        window.Roam.initLobbyEmbed({
          url: link.url,
          parentElement,
          lobbyConfiguration: 'booking_only',
          accentColor: '#536346',
          theme: 'light',
          onSizeChange: (_width, height) => {
            if (version !== this.selectionVersion) return
            if (Number.isFinite(Number(height)) && Number(height) > 0)
              parentElement.style.height = Number(height) + 'px'
            clearTimeout(this.embedTimeout)
            this.status = 'ready'
          }
        })
        const iframe = parentElement.querySelector('iframe')
        if (iframe)
          iframe.addEventListener(
            'load',
            () => {
              if (version !== this.selectionVersion) return
              clearTimeout(this.embedTimeout)
              this.status = 'ready'
            },
            { once: true }
          )
      } catch (_error) {
        clearTimeout(this.embedTimeout)
        this.status = 'error'
      }
    }
  }
}
</script>
