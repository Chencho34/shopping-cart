import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartProduct, CartState } from '../../types'

const initialState: CartState = {
  totalCount: 0,
  productsList: [],
  subTotal: 0
}

const cartSlice =  createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      const isProductInCart = state.productsList.some(product => product.id === action.payload.id)
      if (!isProductInCart) {
        state.productsList = [...state.productsList, action.payload]
        state.totalCount += 1
        state.subTotal += action.payload.total
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productToRemove = state.productsList.find(product => product.id === action.payload)
      if (productToRemove) {
        state.totalCount -= productToRemove.quantity
        state.subTotal -= productToRemove.total
        state.productsList = state.productsList.filter(product => product.id !== action.payload)
      }
    },
    addQuantity: (state, action: PayloadAction<number>) => {
      const product = state.productsList.find(product => product.id === action.payload)
      if (product && product.quantity < 10) {
        product.quantity += 1
        product.total = product.quantity * product.price
        state.totalCount += 1
        state.subTotal += product.price
      }      
    },
    subtractQuantity: (state, action: PayloadAction<number>) => {
      const product = state.productsList.find(product => product.id === action.payload)
      if (product && product.quantity > 1) {
        product.quantity -= 1
        product.total = product.quantity * product.price
        state.totalCount -= 1
        state.subTotal -= product.price
      }
    },
    emptyCart: (state) => {
      state.productsList = []
      state.totalCount = 0
      state.subTotal= 0
    }
  }
})

export const { addProductToCart, removeProductFromCart, addQuantity, subtractQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer
