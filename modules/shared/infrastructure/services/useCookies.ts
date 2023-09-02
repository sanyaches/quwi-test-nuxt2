import { wrapProperty } from '@nuxtjs/composition-api'

export const useCookies = wrapProperty('$cookies', false)
