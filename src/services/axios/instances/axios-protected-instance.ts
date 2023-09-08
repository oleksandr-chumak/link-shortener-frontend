import axios from 'axios'
import { apiConfig } from '../../../common/config'
import { handleAuthorizationError, setBearerHeader } from '../services'


export const axiosProtectedInstance = axios.create({
  baseURL: apiConfig.url,
  withCredentials: true,
})

axiosProtectedInstance.interceptors.request.use(setBearerHeader, (error) => {
  return Promise.reject(error)
})

axiosProtectedInstance.interceptors.response.use(
  (response) => {
    return response
  },
  handleAuthorizationError
)
