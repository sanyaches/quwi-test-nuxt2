<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: '',
      editedName: '',
      editMode: false
    }
  },
  mounted() {
    this.name = this.project.name
  },
  methods: {
    saveName() {
      this.name = this.editedName
      this.editMode = false
    },
    cancelEdit() {
      this.editMode = false
      this.editedName = ''
    }
  }
}
</script>

<template>
  <div>
    <button @click="editMode = true">Edit Name</button>

    <div v-if="editMode">
      <input v-model="editedName" type="text" />
      <button @click="saveName">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>

    <div v-else>
      <p>Name: {{ name }}</p>
    </div>
  </div>
</template>
