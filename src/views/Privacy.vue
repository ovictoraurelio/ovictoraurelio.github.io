<template lang="pug">
.container.mx-auto.px-4.py-10
  .max-w-3xl.mx-auto
    h1.text-3xl.font-bold.mb-6 {{ $t('privacy.title') }}
    .bg-white.rounded-lg.shadow-md.p-6
      .prose.max-w-none
        p.mb-4 {{ $t('privacy.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 1. {{ $t('privacy.sections.collection.title') }}
        p.mb-4 {{ $t('privacy.sections.collection.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 2. {{ $t('privacy.sections.cookies.title') }}
        p.mb-4 {{ $t('privacy.sections.cookies.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 3. {{ $t('privacy.sections.thirdParty.title') }}
        p.mb-4 {{ $t('privacy.sections.thirdParty.content') }}
        
        h2.text-xl.font-semibold.mt-6.mb-3 4. {{ $t('privacy.sections.rights.title') }}
        p.mb-4 {{ $t('privacy.sections.rights.content') }}
        
    .mt-6.text-center
      button.px-4.py-2.bg-gray-800.text-white.rounded.hover_bg-gray-700.transition-colors(@click="$router.push('/')") {{ $t('privacy.back') }}
</template>

<script>
export default {
  name: 'Privacy'
}
</script>
