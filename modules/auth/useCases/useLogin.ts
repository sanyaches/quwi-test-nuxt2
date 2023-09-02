import { ref } from '@nuxtjs/composition-api'
import { useAuth } from '@/modules/auth/infrastructure/services'
import { useAuthorizeHeader } from '@/modules/shared/infrastructure/api/useAuthorizeHeader'

export const useLogin = () => {
  const { auth } = useAuth()
  const { setAuthorizationHeader } = useAuthorizeHeader()
  const loading = ref(false)

  const login = async (
    login: string,
    password: string,
    onSuccess: (token: string) => void
  ) => {
    try {
      loading.value = true
      const response = await auth(login, password)

      if (response.data.token) {
        setAuthorizationHeader(response.data.token)
        onSuccess(response.data.token)
      }
    } finally {
      loading.value = false
    }
  }

  return {
    login,
    loading,
  }
}
