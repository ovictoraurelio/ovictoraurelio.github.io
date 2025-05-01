<template lang="pug">
.container.mx-auto.px-4.py-10
  .max-w-3xl.mx-auto
    h1.text-3xl.font-bold.mb-6 {{ $t('terms.title') }}
    .bg-white.rounded-lg.shadow-md.p-6
      .prose.max-w-none
        p.mb-4 {{ $t('terms.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 1. {{ $t('terms.sections.use.title') }}
        p.mb-4 {{ $t('terms.sections.use.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 2. {{ $t('terms.sections.content.title') }}
        p.mb-4 {{ $t('terms.sections.content.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 3. {{ $t('terms.sections.liability.title') }}
        p.mb-4 {{ $t('terms.sections.liability.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 4. {{ $t('terms.sections.changes.title') }}
        p.mb-4 {{ $t('terms.sections.changes.content') }}
        
    .mt-6.text-center
      button.px-4.py-2.bg-gray-800.text-white.rounded.hover_bg-gray-700.transition-colors(@click="$router.push('/')") {{ $t('terms.back') }}
</template>

<script>
export default {
  name: 'Terms'
}
</script>
