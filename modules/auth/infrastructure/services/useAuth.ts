import apiClient from '@/modules/shared/infrastructure/api/apiClient'
import { loginEndpoint } from '@/modules/auth/constants'

type AuthData = { token: string }

export const useAuth = () => {
  const auth = (login: string, password: string) => {
    return apiClient.post<AuthData>(loginEndpoint, { email: login, password })
  }

  return {
    auth,
  }
}
