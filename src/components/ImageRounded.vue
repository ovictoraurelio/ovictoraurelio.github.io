<template lang="pug">
div.flex.w-full.content-center(style="justify-content: center")
  img.rounded-full.border-2.shadow-md(
    @click="$openUrl('https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorImage.JPG?alt=media&token=b75cdcf7-236f-46b1-b4c7-ab6332a5a68d')"
    src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorAurelioGoogle.jpg?alt=media&token=e55b5657-647e-40ad-8408-a8c062416f65'
    alt='Pic'
    class='h-[140px] w-[140px]'
  )
</template>

<script>
export default {
  name: 'ImageRounded'
}
</script>
