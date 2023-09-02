<script>
import { ref, defineComponent, useRouter } from '@nuxtjs/composition-api'
import { useLogin } from '@/modules/auth/useCases'
import { accessTokenKey } from '@/modules/auth/constants'
import { useCookies } from '@/modules/shared/infrastructure/services'
import SharedButton from '@/modules/shared/ui/components/Button.vue'

export default defineComponent({
  components: {
    SharedButton,
  },
  layout: 'empty',

  setup() {
    const loginInput = ref('')
    const passwordInput = ref('')
    const { loading, login } = useLogin()
    const router = useRouter()
    const cookies = useCookies()

    const onSuccessLogin = (token) => {
      router.push('/home')
      cookies.set(accessTokenKey, token, {
        maxAge: 60 * 60 * 24 * 7,
      })
    }

    const handleSubmit = () => {
      login(loginInput.value, passwordInput.value, onSuccessLogin)
    }

    return {
      loginInput,
      passwordInput,
      loading,
      handleSubmit,
    }
  },
})
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
    <SharedButton :loading="loading" class="login-button" type="submit">
      Login
    </SharedButton>
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

.shareable-button.login-button {
  display: flex;
  margin: 0 auto;
  width: 10rem;
  font-size: 1.2rem;
  justify-content: center;
}
</style>
