<template>
  <div class="error-container">
    <h1>An Error Occurred</h1>
    <p v-if="errorStatusCode === 404">
      The page you requested could not be found.
    </p>
    <p v-else-if="errorStatusCode === 500">
      An internal server error occurred.
    </p>
    <p v-else>An unexpected error occurred.</p>
    <NuxtLink class="link" to="/">Go back to the homepage</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    errorStatusCode: {
      type: Number,
      default: 500
    }
  },
  head() {
    return {
      title: 'Error',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'An error occurred on this page.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.error-container {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.link {
  font-size: 1.2rem;
  text-decoration: underline;
}
</style>
