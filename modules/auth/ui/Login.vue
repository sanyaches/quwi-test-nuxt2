<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="login">Login</label>
      <input
        id="login"
        v-model="loginInput"
        autocomplete="username"
        type="text"
        required
      />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="passwordInput"
        autocomplete="current-password"
        type="password"
        required
      />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { useLogin } from '@/modules/auth/useCases'

export default Vue.extend({
  layout: 'empty',
  data() {
    return {
      loginInput: '',
      passwordInput: ''
    }
  },
  methods: {
    ...useLogin(),

    onSuccessLogin() {
      this.$router.push('/home')
    },

    handleSubmit() {
      this.login(this.loginInput, this.passwordInput, this.onSuccessLogin)
    }
  }
})
</script>

<style scoped lang="scss">
.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}
</style>
