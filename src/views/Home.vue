<template lang="pug">
.grid.grid-cols-12.gap-y-5.mt-4(v-if="$isMobile() && $route.path !== '/home'")
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    Infos(hideDescription)
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white.rounded(class="hover:bg-gray-900" @click="$router.push('/calendar')")
      | {{ $t("scheduleMeeting") }}
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white.rounded(class="hover:bg-gray-900" @click="showFullSite")
      | {{ $t("openSite") }}
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white.rounded(class="hover:bg-gray-900" @click="$router.push('/contact')")
      | {{ $t("contact.title") }}
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white.rounded(class="hover:bg-gray-900" @click="$openUrl(linkedinUrl)")
      | Linkedin
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white.rounded(class="hover:bg-gray-900" @click="$openUrl(instagramUrl)")
      | Instagram
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white.rounded(class="hover:bg-gray-900" @click="$openUrl(githubUrl)")
      | Github
.grid.grid-cols-12.gap-y-5.mt-12(v-else)
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    Infos
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    History
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    Projects
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    Skills
</template>

<script>
import Infos from '@/components/Infos.vue'
import History from '@/components/History.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Infos,
    History,
    Projects,
    Skills,
    Footer
  },
  data() {
    return {
      calendarUrl:
        'https://calendar.google.com/calendar/u/0/appointments/AcZssZ17c0QXkjjkMQg8U6EkdtQeQXFN0Y1_LbmjKtY=',
      linkedinUrl: 'https://www.linkedin.com/in/ovictoraurelio/',
      instagramUrl: 'https://instagram.com/ovictoraurelio',
      githubUrl: 'https://github.com/ovictoraurelio'
    }
  },
  methods: {
    showFullSite() {
      this.$router.push('/home')
    }
  }
}
</script>
