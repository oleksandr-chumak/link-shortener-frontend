import { getApiUrl, join } from './utils'
import { Message } from './types'
import { saveToken } from './features/auth/services/auth/token.service'
import { axiosInstance } from './services/axios/instances/axios-instance'
import { LoginUser, RegisterUser } from './features'

const axios = axiosInstance
export const login = async (loginData: LoginUser): Promise<void> => {
  return axios.post(join('auth', 'login'), loginData)
}


export const register = async (registerData: RegisterUser): Promise<Message> => {
  const response =
    await axios.post<Message>(join('auth', 'register'), registerData)
  return response.data
}

export const clearCredentialsCookie = async () => {
  return axios.get(join('auth','logout'))
}
export const checkEmail = async (email: string) => {
  const response =
    await axios.post<Message>(join('auth', 'check-email'), { email })
  return response.data
}
export const refreshToken = async () => {
  const response =
    await axios.get<string>(join('auth', 'refresh'))
  const accessToken = response.data;
  saveToken(accessToken);
}
export const redirectToGoogleLogin = async () => {
  window.location.href = getApiUrl('auth','google','login');
}