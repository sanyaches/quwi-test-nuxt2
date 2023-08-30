<template>
  <div class="layout">
    <header class="header">
      <!-- Your header content goes here -->
    </header>

    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

.header {
  /* Your header styles */
}
</style>
