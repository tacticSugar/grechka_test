import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFromLS, setToLS } from '../helpers/sessionStorageHelper'

type Rate = {
  plot: number
  actor: number
  camera: number
  id: number
}

type RateState = {
  rate: Rate[]
}
const LS_KEY = 'ratings'
// Define the initial state using that type
const initialState: RateState = {
  rate: getFromLS<Rate[]>(LS_KEY) || [],
}

export const favoriteSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    addRate: (state, { payload }: PayloadAction<Rate>) => {
      state.rate = state.rate.filter((el) => el.id !== payload.id)
      state.rate.push(payload)

      setToLS(LS_KEY, state.rate)
    },
  },
})

// Other code such as selectors can use the imported `RootState` type
export const { addRate } = favoriteSlice.actions
export default favoriteSlice.reducer
