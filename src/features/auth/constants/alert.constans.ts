import { AlertWithoutId } from '../../../store/types'

export const EXPIRED_LINK_ALERT: AlertWithoutId = {
  type: 'error',
  header: 'Expired Reset Link',
  description: 'The reset link has expired. Please send a new one.',
}
export const USER_NOT_FOUND_ALERT: AlertWithoutId = {
  type: 'error',
  header: 'User not found',
  description: 'We cannot find user with this id'
}