import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit'
import { Film } from '../components/CardList/CardList'

type FilmState = {
  status: 'none' | 'pending' | 'success'
  films: Film[]
  error?: SerializedError
}

export const getFilms = createAsyncThunk<{ data: Film[] }>(
  'films/getFilms',
  async () => {
    const url = 'https://run.mocky.io/v3/f41356c2-e1ee-4fe3-aad7-62e2c5bb68a4'
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error: response status:${response.status} not OK`)
    }
    return response.json()
  }
)

// Define the initial state using that type
const initialState: FilmState = {
  status: 'none',
  films: [],
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFilms.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(getFilms.fulfilled, (state, { payload }) => {
      state.films = payload.data
      state.status = 'success'
    })
    builder.addCase(getFilms.rejected, (state, action) => {
      state.error = action.error
    })
  },
})

// Other code such as selectors can use the imported `RootState` type

export default filmsSlice.reducer
