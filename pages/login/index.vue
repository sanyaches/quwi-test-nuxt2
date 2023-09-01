<script>
import Login from '@/modules/auth/ui/Login.vue'

export default {
  components: {
    Login
  },
  layout: 'empty',
  auth: false
}
</script>

<template>
  <div class="auth-container">
    <h1>Login</h1>
    <Login />
  </div>
</template>

<style scoped lang="scss">
.auth-container {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
