<template lang="pug">
  v-container.mt-12(fluid fill-height)
    v-card(outlined)      
      v-container
        v-row          
          v-col.display-2.font-weight-thin skills and expertises        
        v-row.no-gutters(align="start" justify="start" v-for="(group, index) in groups")        
          v-col.no-gutters(cols=12)
            v-row.no-gutters.title.font-weight-thin {{group[0].type}}s
          v-col.no-gutters(cols=12)
            v-row.mt-0
              v-col(v-for="(course, index) of group" :key="index" cols="auto")
                v-card(max-width='344' outlined)
                  v-card-title.headline {{course.text}}                          
                  v-card-subtitle.overline {{course.type}}
</template>

<script>
import _ from 'lodash'
export default {
  data: () => ({
    groups: [],
    courses: [
      { type: 'Cloud Service', text: "Google Cloud"},
      { type: 'Cloud Service', text: "Container"},
      { type: 'Cloud Service', text: "Load Balancing"},
      { type: 'Cloud Service', text: "Kubernetes"},
      { type: 'Cloud Service', text: "Compute Engine & EC2"},
      { type: 'Cloud Service', text: "Cloud SQL & RDS"},
      { type: 'Cloud Service', text: "Cloud Functions & Lambda"},
      { type: 'Cloud Service', text: "Cloud Run"},
      { type: 'Cloud Service', text: "Firebase Hosting"},
      { type: 'Cloud Service', text: "Firebase Firestore"},
      { type: 'Cloud Service', text: "Firebase Extensions"},
      { type: 'Cloud Service', text: "Network & Firewall"},
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