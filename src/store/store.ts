import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authReducer from './slices/auth-slice'
import alertReducer from './slices/alert-slice'
import linkReducer from './slices/link-slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    link: linkReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store