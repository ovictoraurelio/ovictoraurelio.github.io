<template lang="pug">
  v-container
    v-row
      v-col(v-for="(course, index) of courses" :key="index" md=3)
        v-card.mx-auto(max-width='344' outlined='')
          v-list-item(three-line='')
            v-list-item-content
              .overline.mb-4 {{course.type}}
              v-list-item-title.headline.mb-1 {{course.text}}
              v-list-item-subtitle ...
            v-list-item-avatar(tile='' size='80' color='grey')
          v-card-actions
            v-btn(text='') Button
            v-btn(text='') Button
</template>

<script>
export default {
  data: () => ({
    courses: [
      { type: 'Language', text: "Linguagem C" },
      { type: 'Language', text: "Java" },
      { type: 'Language', text: "C" },
      { type: 'Language', text: "Android" },
      { type: 'Language', text: "HTML 5" },
      { type: 'Language', text: "Javascript" },
      { type: 'Language', text: "CSS" },
      { type: 'Language', text: "Sass" },
      { type: 'Language', text: "Php" },
      { type: 'Framework', text: "Laravel" },
      { type: 'Database', text: "My SQL" },
      { type: 'Database', text: "PostgreSQL" },
      { type: 'Database', text: "Mongo DB  " }
    ]
  })
};
</script>

<style>
</style>