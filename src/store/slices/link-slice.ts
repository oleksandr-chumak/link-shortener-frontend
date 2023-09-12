import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LinkInitialState } from '../interfaces/link.types'
import { generateLinkThunks } from '../thunks/link.thunks'


const initialState: LinkInitialState = {
  links: [],
  loading: false,
  error: undefined,
  linksTotalNumber: 0,
  currentPage: 1,
}
export const { getLinks } = generateLinkThunks()

const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
    setPage: (state,action:PayloadAction<number>) =>{
      const numericPage = Number(action.payload);
      if (!Number.isNaN(numericPage) && numericPage >= 1 ){
        state.currentPage = numericPage
        return
      }
      state.currentPage = 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLinks.pending, (state) => {
      state.error = undefined
      state.loading = true
    })
    builder.addCase(getLinks.fulfilled, (state, action) => {
      state.loading = false
      state.linksTotalNumber = action.payload.linksTotalNumber
      state.links = action.payload.links
    })
    builder.addCase(getLinks.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})
export const {setPage} = linkSlice.actions
export default linkSlice.reducer