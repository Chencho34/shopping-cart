export interface CartProduct {
  id: number
  img: string
  title: string
  price: number
  quantity: number
  total: number
}

export interface CartState {
  totalCount: number
  productsList: CartProduct[]
  subTotal: number
}
