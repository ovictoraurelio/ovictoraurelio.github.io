<template>
  <section
    id="projects"
    class="projects-section"
    aria-labelledby="projects-title">
    <div class="section site-shell">
      <div class="section-heading">
        <div>
          <p class="eyebrow">04 / {{ $t('ui.nav.projects') }}</p>
          <h2 id="projects-title">{{ $t('ui.projects.title') }}</h2>
        </div>
        <p>{{ $t('ui.projects.intro') }}</p>
      </div>
      <div class="project-grid">
        <article
          v-for="(project, index) in visibleProjects"
          :key="project.projectId"
          class="project-card">
          <div
            class="project-cover"
            :class="'project-cover-' + (index % 3)"
            aria-hidden="true">
            <span>0{{ index + 1 }}</span
            ><AppIcon :name="['spark', 'layers', 'code'][index % 3]" /><span>{{
              project.date || $t('ui.projects.archive')
            }}</span>
          </div>
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.subtitle }}</p>
            <div class="project-actions">
              <a
                v-if="project.url"
                class="text-link"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                >{{ $t('ui.projects.open') }}<AppIcon name="external" /></a
              ><button
                class="project-details-toggle"
                type="button"
                :aria-label="$t('ui.projects.details') + ': ' + project.title"
                :aria-expanded="expandedItems.has(project.projectId)"
                :aria-controls="project.projectId"
                @click="toggleDescription(project.projectId)">
                <AppIcon
                  :name="
                    expandedItems.has(project.projectId) ? 'minus' : 'plus'
                  " />
              </button>
            </div>
            <!-- Descriptions are authored in the bundled locale files. -->
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-show="expandedItems.has(project.projectId)"
              :id="project.projectId"
              class="project-description"
              v-html="project.content"></div>
            <!-- eslint-enable vue/no-v-html -->
          </div>
        </article>
      </div>
      <div class="projects-more">
        <button
          class="button button-outline"
          type="button"
          :aria-expanded="showAll"
          aria-controls="projects"
          @click="showAll = !showAll">
          {{ $t(showAll ? 'ui.projects.less' : 'ui.projects.more')
          }}<AppIcon :name="showAll ? 'minus' : 'plus'" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  components: { AppIcon },
  data: () => ({ expandedItems: new Set(), showAll: false }),
  computed: {
    projects() {
      const items = this.$tm('projects.items') || []
      return Object.values(items)
        .filter((item) => item.title)
        .map((item, index) => {
          const project = Object.fromEntries(
            Object.entries(item).map(([key, value]) => [key, this.$rt(value)])
          )
          return { ...project, projectId: 'project-' + index }
        })
    },
    visibleProjects() {
      if (this.showAll) return this.projects
      const featuredUrls = [
        'https://absens.com.br',
        'http://septomobile.com.br/nutricaototal/',
        'https://github.com/ovictoraurelio/neuralnetworkjs'
      ]
      return featuredUrls
        .map((url) => this.projects.find((project) => project.url === url))
        .filter(Boolean)
    }
  },
  methods: {
    toggleDescription(id) {
      if (this.expandedItems.has(id)) this.expandedItems.delete(id)
      else this.expandedItems.add(id)
    }
  }
}
</script>
