<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.project.is_active === 1
    },

    isActiveText() {
      return this.isActive ? 'Active' : 'Inactive'
    },

    isActiveClass() {
      return this.isActive ? 'is--active' : 'is--inactive'
    }
  }
}
</script>

<template>
  <div class="project-item" @click="$emit('show-project', project)">
    <div class="project-item__logo-container">
      <div class="project-item__image-container">
        <img
          v-if="project.logo_url"
          :src="project.logo_url"
          :alt="project.name"
          class="project-item__image"
        />
        <img
          v-else
          src="@/assets/images/placeholder.png"
          :alt="project.name"
          class="project-item__image"
        />
      </div>
      <h2 class="project-item__title" :title="project.name">
        {{ project.name }}
      </h2>
    </div>

    <p :class="['project-item__status', isActiveClass]">
      {{ isActiveText }}
    </p>

    <div class="project-item__times">
      <div>time this week</div>
      <div>00:00:00</div>
      <div>this month</div>
      <div>00:00:00</div>
      <div>total</div>
      <div>00:00:00</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #c0c0c0;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  &__logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__image-container {
    width: 100px;
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__title {
    font-size: 1.1rem;
    font-weight: 700;
    width: 180px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      width: 160px;
    }
  }

  &__status {
    font-size: 1.1rem;
    font-weight: 700;

    &.is--active {
      color: green;
    }

    &.is--inactive {
      color: gray;
    }
  }

  &__times {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 0.5rem;
  }
}
</style>
