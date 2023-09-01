<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/" class="logo-link"> Q </NuxtLink>
    </div>
    <nav class="nav">
      <NuxtLink to="/home" class="nav-link">Projects</NuxtLink>
      <button class="nav-link" @click="logout">Logout</button>
    </nav>
  </header>
</template>

<script>
import { accessTokenKey } from '@/modules/auth/constants'

export default {
  methods: {
    logout() {
      this.$cookies.remove(accessTokenKey)
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
