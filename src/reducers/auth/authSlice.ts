import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '../../types'

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.user = action.payload.token
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    }
  }
})

export const { login, logout} = authSlice.actions

export default authSlice.reducer
