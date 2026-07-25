<template lang="pug">
div.flex.w-full.content-center(style="justify-content: center")
  .rounded-full.border-2.shadow-md.overflow-hidden.flex-shrink-0(
    @click="$openUrl('https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorPerfil2025Dezembro%20Quadrada.jpg?alt=media&token=ff56c069-6f81-4401-98d3-f081c60a8e47')"
    style="width: 140px; height: 140px;"
  )
    img(
      src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/VictorPerfil2025Dezembro%20Quadrada.jpg?alt=media&token=ff56c069-6f81-4401-98d3-f081c60a8e47'
      alt='Pic'
      style="width: 100%; height: 100%; object-fit: cover;"
    )
</template>

<script>
export default {
  name: 'ImageRounded'
}
</script>
