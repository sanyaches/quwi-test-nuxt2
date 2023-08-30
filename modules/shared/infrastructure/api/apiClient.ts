import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { baseURL, timeout } from '@/modules/shared/constants';

const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout,
});

apiClient.interceptors.request.use(
  (config) => {
    // Modify config if needed (e.g., add headers, authentication)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Process response data if needed
    return response;
  },
  (error: AxiosError) => {
    // Handle errors here (e.g., show notifications, redirect on unauthorized)
    return Promise.reject(error);
  }
);

export default apiClient;
