import { axiosProtectedInstance } from '../instances/axios-protected-instance'
import { Error, StatusCode, UrlEnum } from '../../../types'
import { removeCredentials } from '../../../features/auth/services/auth/token.service'
import { clearCredentialsCookie, refreshToken } from '../../../auth.service'

export const handleAuthorizationError = async (errorObj: any) => {
  const { statusCode, error } = errorObj.response.data
  const originalRequest = errorObj.config
  const { url } = originalRequest

  if (error === Error.INVALID_TOKEN &&
    statusCode === StatusCode.UNAUTHORIZED
  ) {
    try {
      await refreshToken()
      return axiosProtectedInstance(originalRequest)
    } catch (err) {
      return Promise.reject(err)
    }
  } else if (
    url === UrlEnum.REFRESH_TOKEN &&
    error === Error.INVALID_TOKEN
  ) {
    // remove credentials from cookie
    await clearCredentialsCookie()
    // remove credentials from local storage
    removeCredentials()
    window.location.href = '/'
  }
  return Promise.reject(errorObj)
}
