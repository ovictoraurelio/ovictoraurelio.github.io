<template lang="pug">
.container
  .flex.flex-col.mb-10.md_mb-12
    .col-span
      .text-3xl.md_text-4xl.font-light.tracking-tight.text-gray-900 {{ $t("skills.sectionTitle") }}
    .col-span.mt-4.text-gray-600
      p.text-lg {{ $t("skills.subtitle") }}
  .grid.grid-cols-12(v-for="(group, index) in groups")
    .col-span-12.text-left
      .mt-10.text-xs.uppercase.tracking-widest.text-primary-600.font-semibold {{group[0].type}}s
    .col-span-12.mt-6.pa-0
      .container
        .grid.grid-cols-2.sm_grid-cols-3.md_grid-cols-4.lg_grid-cols-5.gap-4
          .col-auto(v-for="(course, index) of group" :key="index")
            div(class="bg-white/60 backdrop-filter backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-glass border border-white/70 p-4 text-center h-full transform transition-all duration-300 hover_-translate-y-1")
              .text-center.mb-2
                iconify(style="font-size: 32px;" :icon='course.icon')
              .text-center
                div(class="text-sm font-medium text-gray-700 break-words leading-snug") {{course.text}}
</template>

<script>
import groupBy from 'lodash.groupby'
export default {
  data: () => ({
    groups: [],
    courses: [
      // Project Management
      { icon: 'logos-jira', type: 'Project Management', text: 'JIRA' },
      { icon: 'mdi:web', type: 'Project Management', text: 'itsdart.com' },
      { icon: 'simple-icons:notion', type: 'Project Management', text: 'Notion' },
      { icon: 'mdi:sprint', type: 'Project Management', text: 'Design Sprint' },
      { icon: 'mdi:scrum', type: 'Project Management', text: 'Agile Practices' },
      { icon: 'mdi:account-group', type: 'Project Management', text: 'Team Leadership' },

      // Automation and NCLC
      { icon: 'simple-icons:n8n', type: 'Automation and NCLC', text: 'n8n' },
      { icon: 'mdi:puzzle', type: 'Automation and NCLC', text: 'active pieces' },
      { icon: 'logos-puppeteer', type: 'Automation and NCLC', text: 'puppeteer' },
      { icon: 'logos-postman', type: 'Automation and NCLC', text: 'postman' },
      { icon: 'mdi:robot', type: 'Automation and NCLC', text: 'manus.im' },
      { icon: 'mdi:cloud', type: 'Automation and NCLC', text: 'quoti.cloud' },
      // Cloud Services
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
      {
        icon: 'mdi:monitor',
        type: 'Cloud Service',
        text: 'Monitoring'
      },
      {
        icon: 'mdi:file-document-outline',
        type: 'Cloud Service',
        text: 'Logging'
      },
      {
        icon: 'mdi:currency-usd',
        type: 'Cloud Service',
        text: 'Billing'
      },
      {
        icon: 'mdi:brain',
        type: 'Cloud Service',
        text: 'Vertex AI'
      },

      // Languages
      { icon: 'logos-c', type: 'Language', text: 'Linguagem C' },
      { icon: 'logos-java', type: 'Language', text: 'Java' },
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
      { icon: 'logos-typescript-icon', type: 'Language', text: 'TypeScript' },
      { icon: 'logos-webassembly', type: 'Language', text: 'WebAssembly' },
      { icon: 'logos-php', type: 'Language', text: 'Php' },
      { icon: 'logos-sass', type: 'Language', text: 'Sass' },

      // Frameworks
      { icon: 'logos-laravel', type: 'Framework', text: 'Laravel' },
      { icon: 'logos-nodejs', type: 'Framework', text: 'Express.JS' },
      { icon: 'logos-sequelize', type: 'Framework', text: 'Sequelize' },
      { icon: 'logos-firebase', type: 'Framework', text: 'Firebase' },
      { icon: 'logos-docker', type: 'Framework', text: 'Docker' },
      { icon: 'logos-vue', type: 'Framework', text: 'VueJS' },
      { icon: 'logos-vuetify', type: 'Framework', text: 'Vuetify' },
      { icon: 'logos-tailwindcss-icon', type: 'Framework', text: 'Tailwind' },

      // Databases
      { icon: 'logos-mysql', type: 'Database', text: 'My SQL' },
      { icon: 'logos-postgresql', type: 'Database', text: 'PostgreSQL' },
      { icon: 'logos-mariadb', type: 'Database', text: 'MariaDB' },
      { icon: 'logos-firebase', type: 'Database', text: 'Firestore' },
      { icon: 'logos-mongodb', type: 'Database', text: 'Mongo DB' },
      { icon: 'vscode-icons:file-type-sql', type: 'Database', text: 'SQL Lite' },
      { icon: 'logos-redis', type: 'Database', text: 'Redis' },
    ]
  }),
  created() {
    this.groups = groupBy(this.courses, 'type')
  }
}
</script>

<style scoped>
/* Some iconify "logo" icons are wide wordmarks (e.g. Firebase, MongoDB) -
   their SVG width/height attributes preserve the source aspect ratio, which
   can be 3-4x wider than tall and overflow the narrow skill cards. Cap the
   rendered width so wordmark icons shrink to fit instead of spilling into
   neighboring cards. */
.container :deep(svg) {
  max-width: 100%;
  max-height: 32px;
  width: auto;
  height: auto;
}
</style>
