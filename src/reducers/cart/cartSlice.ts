import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface cartState {
  totalCount: number
  productsList: CartProduct[]
  subTotal: number
}

interface CartProduct {
  id: number
  img: string
  title: string
  price: number
  quantity: number
  total: number
}

const initialState: cartState = {
  totalCount: 0,
  productsList: [],
  subTotal: 0
}

const cartSlice =  createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      // const existingProduct = state.productsList.find(product => product.id === action.payload)      
      // if (!existingProduct) {
        state.productsList = [...state.productsList, action.payload]
        state.totalCount += 1
        state.subTotal = state.productsList.reduce((acc, product) => acc + product.total, 0) 
      // }  else {
        // return
      // }  
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productToRemove = state.productsList.find(product => product.id === action.payload)
      if (productToRemove) {
        state.totalCount -= productToRemove.quantity
        state.productsList = state.productsList.filter(product => product.id !== action.payload)
        state.subTotal = state.productsList.reduce((acc, product) => acc + product.total, 0)
      }
    },
    addQuantity: (state, action: PayloadAction<number>) => {
      const product = state.productsList.find(product => product.id === action.payload)
      if (product) {
        product.quantity += 1
        product.total = product.quantity * product.price
        state.totalCount += 1
        state.subTotal = state.productsList.reduce((acc, product) => acc + product.total, 0)
      }      
    },
    subtractQuantity: (state, action: PayloadAction<number>) => {
      const subtractProduct = state.productsList.find(product => product.id === action.payload)
      if (subtractProduct && subtractProduct.quantity > 1) {
        subtractProduct.quantity -= 1
        subtractProduct.total = subtractProduct.quantity * subtractProduct.price
        state.totalCount -= 1
        state.subTotal = state.productsList.reduce((acc, product) => acc + product.total, 0)
      }
    }
  }
})

export const { addProductToCart, removeProductFromCart, addQuantity, subtractQuantity } = cartSlice.actions
export default cartSlice.reducer

