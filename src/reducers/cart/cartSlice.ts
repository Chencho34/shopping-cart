import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartProduct, CartState } from '../../types'

const initialState: CartState = {
  totalCount: 0,
  productsList: [],
  favoritesList: [],
  subTotal: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      const isProductInCart = state.productsList.some(product => product.id === action.payload.id)
      if (!isProductInCart) {
        // state.productsList = [...state.productsList, action.payload]
        state.productsList = [...state.productsList, {...action.payload, isInCart: true}]
        state.totalCount += 1
        state.subTotal += action.payload.total
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number | undefined>) => {
      const product = state.productsList.find(product => product.id === action.payload)
      if (product) {
        state.totalCount -= product.quantity
        state.subTotal -= product.total
        state.productsList = state.productsList.filter(product => product.id !== action.payload)
        const productToRemove = state.productsList.find(product => product.id === action.payload)
        if (productToRemove) {
          productToRemove.isInCart = false
        }
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
      state.subTotal = 0
    },
    addToFavorites: (state, action: PayloadAction<CartProduct>) => {
      const isProductInFavorites = state.favoritesList.some(product => product.id === action.payload.id)
      if (!isProductInFavorites) {
        // Agregamos el producto a la lista de favoritos y marcamos isFavorite como true
        state.favoritesList = [...state.favoritesList, { ...action.payload, isFavorite: true }]
      }
    },
    removeToFavorites: (state, action: PayloadAction<number | undefined>) => {
      state.favoritesList = state.favoritesList.filter(product => product.id !== action.payload)
      // Después de filtrar la lista, buscamos el producto eliminado y actualizamos su estado de isFavorite
      const productToRemove = state.favoritesList.find(product => product.id === action.payload)
      if (productToRemove) {
        productToRemove.isFavorite = false
      }
    }
  }
})

export const { addProductToCart, removeProductFromCart, addQuantity, subtractQuantity, emptyCart, addToFavorites, removeToFavorites } = cartSlice.actions
export default cartSlice.reducer
