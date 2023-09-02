<script>
import ProjectList from '@/modules/projects/ui/ProjectList.vue'
import { useLoadProjectList } from '~/modules/projects/useCases'

export default {
  name: 'HomePage',

  components: {
    ProjectList
  },

  middleware: 'authCheck',

  async asyncData() {
    const { loadProjectList } = useLoadProjectList()
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
      const { loadProjectList } = useLoadProjectList()
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
