<template>
  <span class="loader" style="`width: ${size}px; height: ${size}px;`" />
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 14,
    },
  },
}
</script>

<style scoped lang="scss">
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
