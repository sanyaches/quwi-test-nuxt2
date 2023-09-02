<script>
import ProjectList from '@/modules/projects/ui/ProjectList.vue'
import { useLoadProjectList } from '~/modules/projects/useCases'

export default {
  name: 'HomePage',

  components: {
    ProjectList
  },

  middleware: 'authCheck',

  async asyncData({ $toast }) {
    const { loadProjectList } = useLoadProjectList((e) => {
      $toast?.error(`Error during load projects. ${e}`)
    })
    const projects = await loadProjectList()

    return {
      projects
    }
  },

  data() {
    return {
      projects: []
    }
  },

  methods: {
    async loadProjects() {
      const { loadProjectList } = useLoadProjectList((e) => {
        this.$toast?.error(`Error during load projects. ${e}`)
      })
      this.projects = await loadProjectList()
    },

    onSavedProject() {
      this.loadProjects()
    }
  }
}
</script>

<template>
  <ProjectList :projects="projects" @project-saved="onSavedProject" />
</template>
