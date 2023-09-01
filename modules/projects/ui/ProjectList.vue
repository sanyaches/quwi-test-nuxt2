<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <h1>Hello project list</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>
