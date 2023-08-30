import { useAuth } from "@/modules/auth/infrastructure/services"

export const useLogin = () => {
  const { auth } = useAuth()

  const login = async (login: string, password: string, onSuccess: () => void) => {
    const response = await auth(login, password)
    if (response.data.token) {
      console.log('token', response.data.token)
      onSuccess()
    }
  }

  return {
    login
  }
}
