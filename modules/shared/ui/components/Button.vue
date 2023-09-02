<template>
  <button
    class="shareable-button"
    :class="{ loading: loading }"
    :disabled="loading"
    :type="type"
    @click="handleClick"
  >
    <span v-if="loading" class="loader"></span>
    <span v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.shareable-button {
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
}

.shareable-button.loading {
  cursor: not-allowed;
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
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
