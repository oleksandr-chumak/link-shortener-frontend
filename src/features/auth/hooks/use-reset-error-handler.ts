import { useNavigate } from 'react-router-dom'
import { useAlert } from '../../../hooks'
import { EXPIRED_LINK_ALERT, USER_NOT_FOUND_ALERT } from '../constants'
import { StatusCode } from '../../../types'

export const useResetErrorHandler = () => {
  const { alert } = useAlert()
  const navigate = useNavigate()
  const errorHandlers: Record<number, () => void> = {
    [StatusCode.UNAUTHORIZED]: handleExpiredLinkError,
    [StatusCode.NOT_FOUND]: handleUserNotFoundError,
  }

  function navigateToReset() {
    navigate('../reset')
  }

  function handleExpiredLinkError() {
    alert(EXPIRED_LINK_ALERT)
    navigateToReset()
  }

  function handleUserNotFoundError() {
    alert(USER_NOT_FOUND_ALERT)
    navigateToReset()
  }

  const handleError = (statusCode: number): (() => void) | undefined => {
    // return error handler function
    return errorHandlers[statusCode]
  }
  return {
    handleError,
  }

}