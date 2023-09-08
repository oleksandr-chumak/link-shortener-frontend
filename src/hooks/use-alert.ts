import { addAndClearAlert, useAppDispatch } from '../store'
import { Alert } from '../store/interfaces'

export const useAlert = () => {
  const dispatch = useAppDispatch();

  const alert = (alertObj: Omit<Alert, 'id'>) => {
    dispatch(addAndClearAlert(alertObj))
  }
  return {alert}
}

