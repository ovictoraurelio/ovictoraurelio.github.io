<template lang="pug">
.px-4.mt-4(v-if="$isMobile() && $route.path !== '/home'")
  // "Business card" glass panel - same translucent/blur/shadow system used
  // across the rest of the site (History/Projects/Skills cards, Contact
  // form, etc.) so the mobile landing card reads as part of one coherent
  // liquid-glass system.
  div(class="bg-white/65 backdrop-filter backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-glass rounded-3xl p-5")
    .grid.grid-cols-12.gap-y-5
      .col-start-2.col-span-10.md_col-start-4.md_col-span-6
        Infos(hideDescription)
      .col-start-2.col-span-10.md_col-start-4.md_col-span-6
        Button.h-10.w-full.font-medium.text-sm(variant="primary" @click="$router.push('/calendar')")
          | {{ $t("scheduleMeeting") }}
      .col-start-2.col-span-10.md_col-start-4.md_col-span-6
        Button.h-10.w-full.font-medium.text-sm(variant="neutral" @click="showFullSite")
          | {{ $t("openSite") }}
      .col-start-2.col-span-10.md_col-start-4.md_col-span-6
        Button.h-10.w-full.font-medium.text-sm(variant="neutral" @click="$router.push('/contact')")
          | {{ $t("contact.title") }}
      .col-start-2.col-span-10.md_col-start-4.md_col-span-6
        Button.h-10.w-full.font-medium.text-sm(variant="neutral" @click="$openUrl(linkedinUrl)")
          | Linkedin
      .col-start-2.col-span-10.md_col-start-4.md_col-span-6
        Button.h-10.w-full.font-medium.text-sm(variant="neutral" @click="$openUrl(instagramUrl)")
          | Instagram
      .col-start-2.col-span-10.md_col-start-4.md_col-span-6
        Button.h-10.w-full.font-medium.text-sm(variant="neutral" @click="$openUrl(githubUrl)")
          | Github
.grid.grid-cols-12.gap-y-16.md_gap-y-24.mt-12(v-else)
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
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Home',
  components: {
    Infos,
    History,
    Projects,
    Skills,
    Footer,
    Button
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
