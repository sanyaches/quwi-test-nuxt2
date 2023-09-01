<script>
import { useLogin } from '@/modules/auth/useCases'
import { accessTokenKey } from '@/modules/auth/constants'

export default {
  layout: 'empty',
  data() {
    return {
      loginInput: '',
      passwordInput: ''
    }
  },
  methods: {
    ...useLogin(),

    onSuccessLogin(token) {
      this.$router.push('/home')
      this.$cookies.set(accessTokenKey, token, {
        maxAge: 60 * 60 * 24 * 7
      })
    },

    handleSubmit() {
      this.login(this.loginInput, this.passwordInput, this.onSuccessLogin)
    }
  }
}
</script>

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
