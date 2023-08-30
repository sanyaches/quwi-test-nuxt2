<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/" class="logo-link"> Q </NuxtLink>
    </div>
    <nav class="nav">
      <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
      <NuxtLink class="nav-link" @click="logout">Logout</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      // Implement your logout logic here
      // For example, clear authentication tokens, redirect, etc.
      console.log('Logging out...')

      // Redirect to the login page after logging out
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
}

.logo-link {
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.nav-link {
  margin-left: 20px;
  text-decoration: none;
  color: #fff;
}

/* Add more styling as needed */
</style>
