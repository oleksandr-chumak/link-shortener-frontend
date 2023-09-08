import { createAsyncThunk } from '@reduxjs/toolkit'
import { Alert } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'
import { addAlert, clearAlert } from '../slices/alert-slice'

const CLEAR_INTERVAL = 3000

export const addAndClearAlert = createAsyncThunk(
  'alert/addAndClearAlert',
  async (alertData: Omit<Alert, 'id'>, thunkApi) => {
    const { dispatch } = thunkApi

    const id = uuidv4()

    dispatch(addAlert({ ...alertData, id }))

    await new Promise(resolve => setTimeout(resolve, CLEAR_INTERVAL))

    dispatch(clearAlert(id))
  },
)