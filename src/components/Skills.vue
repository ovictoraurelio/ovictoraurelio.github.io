<template lang="pug">
.container
  .flex
    .col-span
      .text-2xl.font-bold {{ $t("skills.sectionTitle") }}
  .grid.grid-cols-12(v-for="(group, index) in groups")
    .col-span-12.text-left
      .mt-8.text-left.text-lg.font-light.font-sen {{group[0].type}}s
    .col-span-12.mt-8.pa-0
      .container
        .grid.grid-cols-2.sm_grid-cols-4.md_grid-cols-6
          .mt-4.col-auto.text-center(v-for="(course, index) of group" :key="index")
            .text-center
              iconify(style="font-size: 35px;" :icon='course.icon')
            .text-center
              .headline {{course.text}}
            //- .flex
              .col-span
                .overline {{course.type}}
</template>

<script>
import groupBy from 'lodash.groupby'
export default {
  data: () => ({
    groups: [],
    courses: [
      {
        icon: 'logos-google-cloud',
        type: 'Cloud Service',
        text: 'Google Cloud'
      },
      {
        icon: 'vscode-icons:file-type-devcontainer',
        type: 'Cloud Service',
        text: 'Container'
      },
      {
        icon: 'carbon:load-balancer-local',
        type: 'Cloud Service',
        text: 'Load Balancing'
      },
      { icon: 'logos-kubernetes', type: 'Cloud Service', text: 'Kubernetes' },
      {
        icon: 'logos-google-cloud',
        type: 'Cloud Service',
        text: 'Compute Engine & EC2'
      },
      {
        icon: 'logos-google-cloud',
        type: 'Cloud Service',
        text: 'Cloud SQL & RDS'
      },
      {
        icon: 'logos-google-cloud-functions',
        type: 'Cloud Service',
        text: 'Cloud Functions & Lambda'
      },
      {
        icon: 'logos-google-cloud-run',
        type: 'Cloud Service',
        text: 'Cloud Run'
      },
      {
        icon: 'logos-firebase',
        type: 'Cloud Service',
        text: 'Firebase Hosting'
      },
      {
        icon: 'logos-firebase',
        type: 'Cloud Service',
        text: 'Firebase Firestore'
      },
      {
        icon: 'logos-firebase',
        type: 'Cloud Service',
        text: 'Firebase Extensions'
      },
      {
        icon: 'mdi-network',
        type: 'Cloud Service',
        text: 'Network & Firewall'
      },
      { icon: 'logos-c', type: 'Language', text: 'Linguagem C' },
      { icon: 'logos-java', type: 'Language', text: 'Java' },
      { icon: 'logos-kotlin', type: 'Language', text: 'Kotlin Android' },
      { icon: 'logos-c-plusplus', type: 'Language', text: 'C++' },
      {
        icon: 'file-icons:assembly-generic',
        type: 'Language',
        text: 'Assembly Mips'
      },
      {
        icon: 'file-icons:assembly-generic',
        type: 'Language',
        text: 'Assembly x86'
      },
      { icon: 'logos-javascript', type: 'Language', text: 'Javascript' },
      { icon: 'logos-webassembly', type: 'Language', text: 'WebAssembly' },
      { icon: 'logos-php', type: 'Language', text: 'Php' },
      { icon: 'logos-sass', type: 'Language', text: 'Sass' },
      { icon: 'logos-laravel', type: 'Framework', text: 'Laravel' },
      { icon: 'logos-nodejs', type: 'Framework', text: 'Express.JS' },
      { icon: 'logos-sequelize', type: 'Framework', text: 'Sequelize' },
      { icon: 'logos-firebase', type: 'Framework', text: 'Firebase' },
      { icon: 'logos-docker', type: 'Framework', text: 'Docker' },
      { icon: 'logos-mysql', type: 'Database', text: 'My SQL' },
      { icon: 'logos-postgresql', type: 'Database', text: 'PostgreSQL' },
      { icon: 'logos-mariadb', type: 'Database', text: 'MariaDB' },
      { icon: 'logos-firebase', type: 'Database', text: 'Firestore' },
      { icon: 'logos-mongodb', type: 'Database', text: 'Mongo DB' },
      { icon: 'vscode-icons:file-type-sql', type: 'Database', text: 'SQL Lite' }
    ]
  }),
  created() {
    this.groups = groupBy(this.courses, 'type')
  }
}
</script>

<style></style>
