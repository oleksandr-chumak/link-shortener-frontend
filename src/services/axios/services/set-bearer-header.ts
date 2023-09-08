import {InternalAxiosRequestConfig} from 'axios'
import { getToken } from '../../../features/auth/services/auth/token.service'
export const setBearerHeader = (config:InternalAxiosRequestConfig) => {
  // set bearer token into Header
  const accessToken = getToken()
  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`
  }
  return config
}
