import apiClient from './apiClient'

export const useAuthorizeHeader = () => {
  const setAuthorizationHeader = (token: string) => {
    apiClient.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  return { setAuthorizationHeader }
}
