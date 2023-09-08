import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthInitialState } from '../interfaces'
import { User } from '../../features'
import { getMe } from '../../features/auth/services/user/user.service'
import { clearCredentialsCookie } from '../../auth.service'
import { removeCredentials } from '../../features/auth/services/auth/token.service'

const initialState: AuthInitialState = {
  user: undefined,
  isLoading: true,
  error: undefined,
}


export const fetchUserData = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMe()
      console.log(response)
      const data = response.data
      return data
    } catch (error) {
      return rejectWithValue('An error occurred while fetching user data.')
    }
  },
)
export const logout = createAsyncThunk(
  'auth/logout',
  async (_,ThunkApi) => {
    const {dispatch} = ThunkApi;
    // remove credentials from cookies
    await clearCredentialsCookie()
    // remove credentials from localstorage
    removeCredentials()
    dispatch(clearUserData())
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.user = undefined
      state.isLoading = false
      state.error = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.error = undefined
    })
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const {clearUserData} = authSlice.actions
export default authSlice.reducer


