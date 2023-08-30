<template>
  <div class="empty-layout">
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<style scoped lang="scss">
.empty-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  display: flex;
  align-items: center;
}
</style>
