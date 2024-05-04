import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { productsData } from '../../constants'
import { Card, Container } from '../../components'
import { addProductToCart, removeProductFromCart } from '../../reducers/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CartState } from '../../types'

export default function ProductsGallery (): JSX.Element {
  const dispatch = useDispatch()
  const { productsList } = useSelector((state: { cart: CartState }) => state.cart)

  const handleAddProductToCartOrRemove = (productId: number) => {
    const product = productsData.find((product) => product.id === productId)
    if (!product) return 
    
    const isInCart = productsList.find((product) => product.id === productId)
    if (isInCart) {
      dispatch(removeProductFromCart(productId))
    } else {
      dispatch(addProductToCart(product))
    }
  }
  return (
    <Container>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5 }}>
        <Masonry gutter='1rem'>
          {
            productsData.map(({ description, img, price, title, id }, index) => (
              <Card
                id={id}
                onClick={() => handleAddProductToCartOrRemove(id)}
                key={index}
                description={description}
                img={img}
                price={price}
                title={title}
              />
            ))
          }
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  )
}
