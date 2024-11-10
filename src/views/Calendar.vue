<template lang="pug">
.grid.grid-cols-12(v-if="$isMobile()")
  .col-span-12
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white(class="hover:bg-gray-900" @click="$router.push('/')")
      | Voltar ao site
    iframe(src="https://calendar.google.com/calendar/u/0/appointments/AcZssZ17c0QXkjjkMQg8U6EkdtQeQXFN0Y1_LbmjKtY=" width="100%" height="900" frameborder="0" scrolling="no")
.grid.grid-cols-12.gap-y-5(v-else)
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white.rounded(class="hover:bg-gray-900" @click="$router.push('/')")
      | Voltar ao site
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    span --
    iframe(src="https://calendar.google.com/calendar/u/0/appointments/AcZssZ17c0QXkjjkMQg8U6EkdtQeQXFN0Y1_LbmjKtY=" width="100%" height="900" frameborder="0" scrolling="no")
</template>

<script>
// https://calendar.google.com/calendar/embed?src=ovictoraurelio%40gmail.com&ctz=America%2FSao_Paulo
export default {
  name: 'Calendar'
}
</script>
