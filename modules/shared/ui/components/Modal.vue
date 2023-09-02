<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  mounted() {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.closeModal()
      }
    })
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.closeModal()
      }
    })
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<template>
  <div v-if="showModal" class="modal" :class="{ 'is--shown': showModal }">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);

  &.is--shown {
    display: block;
  }
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 20px 1px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
