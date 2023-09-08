import axios from 'axios'
import { apiConfig } from '../../../common/config'

export const axiosInstance = axios.create({
  baseURL: apiConfig.url,
  withCredentials: true,
})