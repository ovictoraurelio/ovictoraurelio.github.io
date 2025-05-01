<template lang="pug">
.privacy-page.min-h-screen.flex.flex-col
  .container.mx-auto.px-4.py-16.flex-grow
    .max-w-3xl.mx-auto
      h1.text-4xl.font-bold.mb-8.text-center.mt-8 {{ $t('privacy.title') }}
      .bg-white.rounded-lg.shadow-md.p-8.mb-8
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
        button.px-6.py-3.bg-gray-800.text-white.rounded-lg.hover_bg-gray-700.transition-colors.text-lg.font-medium(@click="$router.push('/')") {{ $t('privacy.back') }}
</template>

<script>
export default {
  name: 'Privacy'
}
</script>
