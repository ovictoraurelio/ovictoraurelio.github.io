<template lang="pug">
.privacy-page.height-minus-footer.flex.flex-col
  .container.mx-auto.px-4.py-16.flex-grow
    .max-w-3xl.mx-auto
      h1.text-4xl.font-bold.mb-8.text-center.mt-8 {{ $t('privacy.title') }}
      div(class="bg-white/65 backdrop-filter backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-glass border border-white/70 p-8 mb-8")
        .prose.max-w-none
          p.mb-6.text-lg {{ $t('privacy.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 1. {{ $t('privacy.sections.collection.title') }}
          p.mb-6 {{ $t('privacy.sections.collection.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 2. {{ $t('privacy.sections.cookies.title') }}
          p.mb-6 {{ $t('privacy.sections.cookies.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 3. {{ $t('privacy.sections.thirdParty.title') }}
          p.mb-6 {{ $t('privacy.sections.thirdParty.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 4. {{ $t('privacy.sections.rights.title') }}
          p.mb-6 {{ $t('privacy.sections.rights.content') }}
      
      .text-center.mb-12
        Button.px-6.py-3.text-lg.font-medium(variant="neutral" @click="$router.push('/')") {{ $t('privacy.back') }}
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Privacy',
  components: {
    Button
  }
}
</script>
