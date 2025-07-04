<template lang="pug">
div.flex.w-full.content-center(style="justify-content: center")
  .rounded-full.border-2.shadow-md.overflow-hidden.flex-shrink-0(
    @click="$openUrl('https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorImage.JPG?alt=media&token=b75cdcf7-236f-46b1-b4c7-ab6332a5a68d')"
    style="width: 140px; height: 140px;"
  )
    img(
      src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorPerfilCorporativo2025-Curta.jpeg?alt=media&token=d6678beb-8876-4831-961a-6e813c7ce62f'
      alt='Pic'
      style="width: 100%; height: 100%; object-fit: cover;"
    )
</template>

<script>
export default {
  name: 'ImageRounded'
}
</script>
