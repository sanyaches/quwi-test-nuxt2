import { useAuth } from "@/modules/auth/infrastructure/services"
import { useAuthorizeHeader } from "@/modules/shared/infrastructure/api/useAuthorizeHeader"

export const useLogin = () => {
  const { auth } = useAuth()
  const { setAuthorizationHeader } = useAuthorizeHeader()

  const login = async (
    login: string,
    password: string,
    onSuccess: (token: string) => void
  ) => {
    const response = await auth(login, password)

    if (response.data.token) {
      setAuthorizationHeader(response.data.token)
      onSuccess(response.data.token)
    }
  }

  return {
    login
  }
}
