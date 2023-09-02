<script>
import ProjectItem from './ProjectItem.vue'

export default {
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="project-list-container">
    <ul v-if="projects?.length">
      <li v-for="project in projects" :key="project.id">
        <ProjectItem :project="project" />
      </li>
    </ul>
    <p>There is no project, please create one to continue</p>
  </div>
</template>

<style lang="scss" scoped>
.project-list-container {
  max-width: 800px;
  margin: 3rem auto 0;

  ul {
    list-style: none;
    padding: 0;
  }

  ul > li:not(:last-child) {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
  }
}
</style>
