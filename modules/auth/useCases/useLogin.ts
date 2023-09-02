import { ref } from '@nuxtjs/composition-api'
import { useAuth } from '@/modules/auth/infrastructure/services'
import { useAuthorizeHeader } from '@/modules/shared/infrastructure/api/useAuthorizeHeader'
import { useToast } from '@/modules/shared/infrastructure/services/useToast'

export const useLogin = () => {
  const { auth } = useAuth()
  const { setAuthorizationHeader } = useAuthorizeHeader()
  const loading = ref(false)
  const toast = useToast()

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
    } catch(e) {
      toast.error(`Error during login, check your login and password. ${e}`)
    } finally {
      loading.value = false
    }
  }

  return {
    login,
    loading,
  }
}
