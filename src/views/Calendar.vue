<template lang="pug">
.container.mx-auto.px-4
  // Mobile View
  template(v-if="$isMobile()")
    .grid.grid-cols-12.gap-4
      .col-span-12
        button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white(class="hover:bg-gray-900" @click="$router.push('/')")
          | Voltar ao site
      
      // Before Link Selection
      template(v-if="!selectedLink")
        .col-span-12(v-for="(link, index) in roamLinks" :key="index")
          button.h-10.w-full.mb-2.bg-gray-800.font-medium.text-sm.text-white(class="hover:bg-gray-900" @click="selectLink(link)")
            | {{ link.name }}
      
      // After Link Selection
      template(v-else)
        .col-span-12
          button.h-10.w-full.mb-4.bg-gray-700.font-medium.text-sm.text-white(class="hover:bg-gray-800" @click="resetSelection")
            | Voltar para seleção
          div(:id="selectedLink.id" style="min-width: 320px; width: 100%;")
  
  // Desktop View
  template(v-else)
    .grid.grid-cols-12.gap-6
      .col-span-12
        button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white(class="hover:bg-gray-900" @click="$router.push('/')")
          | Voltar ao site
      
      .col-span-6(v-for="(link, index) in roamLinks" :key="index")
        .bg-white.shadow-md.rounded-lg.p-4
          h2.text-xl.font-semibold.mb-4 {{ link.name }}
          div(:id="link.id" style="min-width: 320px; width: 100%;")
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      roamScriptLoaded: false,
      selectedLink: null,
      roamLinks: [
        {
          id: 'roam-30min',
          url: 'https://ro.am/ovictoraurelio/',
          name: '30 minutos'
        },
        {
          id: 'roam-1hora',
          url: 'https://ro.am/ovictoraurelio/1-hora',
          name: '1 hora'
        }
      ]
    }
  },
  mounted() {
    this.loadRoamScript()
  },
  methods: {
    selectLink(link) {
      this.selectedLink = link
      this.$nextTick(() => {
        this.initRoamEmbed({
          elementId: link.id,
          url: link.url
        })
      })
    },
    resetSelection() {
      this.selectedLink = null
    },
    loadRoamScript() {
      const script = document.createElement('script')
      script.src = 'https://ro.am/lobbylinks/embed.js'
      script.async = true
      script.onload = this.initRoamEmbeds
      script.onerror = this.handleScriptLoadError
      document.head.appendChild(script)
    },
    initRoamEmbeds() {
      this.roamLinks.forEach(link => {
        this.initRoamEmbed({
          elementId: link.id,
          url: link.url
        })
      })
    },
    initRoamEmbed({ elementId, url }) {
      const parentElement = document.getElementById(elementId)
      if (parentElement && window.Roam) {
        this.roamScriptLoaded = true
        window.Roam.initLobbyEmbed({
          url,
          parentElement,
          lobbyConfiguration: 'booking_only',
          accentColor: '#0059DC',
          theme: 'light',
          onSizeChange: (width, height) => {
            parentElement.style.height = `${height}px`
          }
        })
      }
    },
    handleScriptLoadError() {
      console.error('Failed to load Roam embed script')
    }
  }
}
</script>
