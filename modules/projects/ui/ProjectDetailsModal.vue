<script>
import { reactive } from '@nuxtjs/composition-api'
import SharedButton from '@/modules/shared/ui/components/Button.vue'
import { useSaveProject } from '@/modules/projects/useCases'

export default {
  components: {
    SharedButton
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const { loading, saveProject } = useSaveProject()
    const form = reactive({
      ...props.project
    })

    const handleSubmit = async () => {
      const success = await saveProject({ ...form })
      if (success) {
        emit('saved')
      }
    }

    return {
      loading,
      form,
      handleSubmit
    }
  }
}
</script>

<template>
  <div class="project-details">
    <h2>Project details</h2>

    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="project-name">Name</label>
        <input
          id="project-name"
          v-model="form.name"
          name="project-name"
          type="text"
          required
        />
      </div>
      <SharedButton :loading="loading" class="save-button" type="submit">
        Save
      </SharedButton>
    </form>
  </div>
</template>

<style lang="scss">
.project-details {
  font-family: sans-serif;
  padding: 0 20px;

  h2 {
    text-align: center;
  }

  .input-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }

  .save-button {
    min-width: 160px;
    margin: 0 auto;
  }
}
</style>
