<template lang="pug">
  v-container.mt-12(fluid fill-height)
    v-card(outlined)      
      v-container
        v-row          
          v-col.display-2.font-weight-thin skills and expertises        
        v-row.no-gutters(align="start" justify="start" v-for="(group, index) in groups")        
          v-col.no-gutters(xs=12 md=12)
            v-row.no-gutters.title.font-weight-thin {{group[0].type}}s
          v-col.no-gutters(xs=12 md=12)
            v-row.mt-0
              v-col(v-for="(course, index) of group" :key="index" cols="auto")
                v-card(max-width='344' outlined)
                  v-list-item
                    v-list-item-content
                      v-list-item-title.headline.mb-1 {{course.text}}                          
                      v-list-item-actions
                        .overline.mb-4 {{course.type}}
</template>

<script>
import _ from 'lodash'
export default {
  data: () => ({
    groups: [],
    courses: [
      { type: 'Language', text: "Linguagem C" },
      { type: 'Language',  text: "Java" },
      { type: 'Language', text: "Kotlin Android" },      
      { type: 'Language', text: "C++" },
      { type: 'Language', text: "Assembly Mips" },
      { type: 'Language', text: "Assembly x86" },
      { type: 'Language', text: "Javascript" },
      { type: 'Language', text: "WebAssembly" },      
      { type: 'Language', text: "Php" },
      { type: 'Language', text: "Sass" },
      { type: 'Framework', text: "Laravel" },
      { type: 'Framework', text: "Express.JS" },
      { type: 'Framework', text: "Sequelize" },
      { type: 'Framework', text: "Firebase" },
      { type: 'Framework', text: "Docker" },
      { type: 'Database', text: "My SQL" },
      { type: 'Database', text: "PostgreSQL" },
      { type: 'Database', text: "MariaDB" },
      { type: 'Database', text: "Firestore" },
      { type: 'Database', text: "Mongo DB" },
      { type: 'Database', text: "SQL Lite" }
    ]
  }),
  created () {
    this.groups = _.groupBy(this.courses, 'type')
    console.log(this.groups)
  }
};
</script>

<style>
</style>