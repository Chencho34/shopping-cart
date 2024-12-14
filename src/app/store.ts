import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../reducers/cart/cartSlice'
import authSlice, { login } from '../reducers/auth/authSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice
  }
})

export function rehydrateAuthState () {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')

  if (token && user) {
    store.dispatch(
      login({
        user: JSON.parse(user),
        token
      })
    )
  }
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
