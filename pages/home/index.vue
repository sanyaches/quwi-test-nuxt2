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
  }
}
</script>

<template>
  <ProjectList :projects="projects" />
</template>
