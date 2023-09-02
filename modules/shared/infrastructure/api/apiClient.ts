import axios, { AxiosInstance } from 'axios'
import { baseURL, timeout } from '@/modules/shared/constants'

const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout,
})

export default apiClient
