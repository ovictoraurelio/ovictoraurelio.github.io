<template lang="pug">
div.flex.w-full.content-center(style="justify-content: center")
  .rounded-full.border-2.shadow-md.overflow-hidden.flex-shrink-0(
    @click="$openUrl('https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorImage.JPG?alt=media&token=b75cdcf7-236f-46b1-b4c7-ab6332a5a68d')"
    style="width: 140px; height: 140px;"
  )
    img(
      src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorAurelioGoogle.jpg?alt=media&token=e55b5657-647e-40ad-8408-a8c062416f65'
      alt='Pic'
      style="width: 100%; height: 100%; object-fit: cover;"
    )
</template>

<script>
export default {
  name: 'ImageRounded'
}
</script>
