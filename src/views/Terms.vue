<template lang="pug">
.terms-page.height-minus-footer.flex.flex-col
  .container.mx-auto.px-4.py-16.flex-grow
    .max-w-3xl.mx-auto
      h1.text-4xl.font-bold.mb-8.text-center.mt-8 {{ $t('terms.title') }}
      div(class="bg-white/65 backdrop-filter backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-glass border border-white/70 p-8 mb-8")
        .prose.max-w-none
          p.mb-6.text-lg {{ $t('terms.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 1. {{ $t('terms.sections.use.title') }}
          p.mb-6 {{ $t('terms.sections.use.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 2. {{ $t('terms.sections.content.title') }}
          p.mb-6 {{ $t('terms.sections.content.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 3. {{ $t('terms.sections.liability.title') }}
          p.mb-6 {{ $t('terms.sections.liability.content') }}
          
          h2.text-2xl.font-semibold.mt-8.mb-4 4. {{ $t('terms.sections.changes.title') }}
          p.mb-6 {{ $t('terms.sections.changes.content') }}
      
      .text-center.mb-12
        Button.px-6.py-3.text-lg.font-medium(variant="neutral" @click="$router.push('/')") {{ $t('terms.back') }}
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Terms',
  components: {
    Button
  }
}
</script>
