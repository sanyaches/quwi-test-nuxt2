import { wrapProperty } from '@nuxtjs/composition-api'

export const useToast = wrapProperty('$toast', false)
