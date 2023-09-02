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
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  color: #333;
  font-family: sans-serif;
  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
    pointer-events: none;
  }
}

.logo-link {
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.nav-link {
  margin-left: 20px;
  text-decoration: none;
  color: #777;
  font-size: 1.1rem;
  text-transform: uppercase;
}

button.nav-link {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
