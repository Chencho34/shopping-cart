import { createSlice } from '@reduxjs/toolkit'

interface cartState {
  totalCount: number
  productsList: cartProduct[]
}

interface cartProduct {
  id: number
  img: string
  title: string
  price: number
}

const initialState: cartState = {
  totalCount: 0,
  productsList: []
}

const cartSlice =  createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload]
      state.totalCount += 1
    },
    removeProductFromCart: (state, action) => {
      state.productsList = state.productsList.filter(product => product.id !== action.payload)
      state.totalCount -= 1
    }
  }
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions
export default cartSlice.reducer

