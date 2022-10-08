import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'
import filmsReducer from './filmsSlice'
import favoriteReducer from './favoriteSlice'
import rateReducer from './rateSlice'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    favorite: favoriteReducer,
    rate: rateReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
