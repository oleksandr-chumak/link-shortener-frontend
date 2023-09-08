import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Alert, AlertInitialStateInterface } from '../interfaces'


const initialState: AlertInitialStateInterface = {
  alerts: [],
}
const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
      addAlert: (state, action: PayloadAction<Alert>) => {
        state.alerts.unshift(action.payload)
      },
      clearAlert: (state, action: PayloadAction<string>) => {
        state.alerts = state.alerts.filter((el) => el.id !== action.payload)
      },
    },

  },
)
export const { addAlert, clearAlert } = alertSlice.actions
export default alertSlice.reducer