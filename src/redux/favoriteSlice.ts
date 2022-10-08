import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFromLS, setToLS } from '../helpers/sessionStorageHelper'

type FavoriteState = {
  favorite: number[]
}
const LS_KEY = 'favorite'
// Define the initial state using that type
const initialState: FavoriteState = {
  favorite: getFromLS<number[]>(LS_KEY) || [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<number>) => {
      const startFavoriteLength = state.favorite.length
      state.favorite = state.favorite.filter((el) => el !== payload)

      if (startFavoriteLength === state.favorite.length) {
        state.favorite.push(payload)
      }

      setToLS(LS_KEY, state.favorite)
    },
  },
})

// Other code such as selectors can use the imported `RootState` type
export const { addFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
