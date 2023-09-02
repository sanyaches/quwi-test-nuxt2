import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { accessTokenKey } from '@/modules/auth/constants'
import { useAuthorizeHeader } from '@/modules/shared/infrastructure/api/useAuthorizeHeader'

export default defineNuxtPlugin(({ $cookies }) => {
  const { setAuthorizationHeader } = useAuthorizeHeader()

  const token = $cookies.get(accessTokenKey)
  if (!token) {
    return
  }

  setAuthorizationHeader(token)
})
