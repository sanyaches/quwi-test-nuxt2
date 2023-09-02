<script>
import ProjectItem from './ProjectItem.vue'
import Modal from '@/modules/shared/ui/components/Modal.vue'

export default {
  components: {
    ProjectItem,
    Modal,
    ProjectDetailsModal: () => import('./ProjectDetailsModal.vue')
  },

  props: {
    projects: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    currentProject: null
  }),

  methods: {
    openModal() {
      this.$refs.modal.openModal()
    },
    closeModal() {
      this.$refs.modal.closeModal()
    },
    openProjectDetails(project) {
      this.openModal()
      this.currentProject = project
    }
  }
}
</script>

<template>
  <div class="project-list-container">
    <ul v-if="projects?.length">
      <li v-for="project in projects" :key="project.id">
        <ProjectItem :project="project" @show-project="openProjectDetails" />
      </li>
    </ul>
    <p v-else>There is no project, please create one to continue</p>

    <Modal ref="modal">
      <ProjectDetailsModal :project="currentProject" />
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
.project-list-container {
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 0 1rem;

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
