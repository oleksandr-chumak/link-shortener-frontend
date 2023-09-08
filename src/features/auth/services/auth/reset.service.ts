import { axiosInstance } from '../../../../services/axios/instances/axios-instance'
import { join } from '../../../../utils'
import { ResetPassword } from '../../types'

const axios = axiosInstance

export const resetPasswordRequest = (email: string) => {
  return axios.post(join('auth', 'reset', 'request-password-reset'), { email })
}
export const resetPassword = (data: ResetPassword) => {
  return axios.post(join('auth', 'reset', 'reset-password'), data)
}
export const checkToken = (token: string) => {
  return axios.post(join('auth','reset','check-token'), { token })
}