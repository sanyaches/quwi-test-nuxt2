import type { NuxtCookies } from 'cookie-universal-nuxt'
import { accessTokenKey } from '@/modules/auth/constants'
import { useAuthorizeHeader } from '@/modules/shared/infrastructure/api/useAuthorizeHeader'

export default function ({
  $cookies,
  redirect,
}: {
  $cookies: NuxtCookies
  redirect: Function
}) {
  const { setAuthorizationHeader } = useAuthorizeHeader()

  const token = $cookies.get(accessTokenKey)
  if (!token) {
    return redirect('/login')
  }

  setAuthorizationHeader(token)
}
