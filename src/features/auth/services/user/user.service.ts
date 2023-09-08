import { axiosProtectedInstance } from '../../../../services/axios/instances/axios-protected-instance'
import { join } from '../../../../utils'
import { User } from '../../types'
const axios = axiosProtectedInstance
export const getMe = async () => {
  return axios.get<User>(join('user','me'))
}