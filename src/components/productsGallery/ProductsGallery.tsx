import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { productsData } from '../../constants'
import { Card, Container } from '../../components'
import { addProductToCart, addToFavorites, removeToFavorites, removeProductFromCart } from '../../reducers/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CartProduct, CartState } from '../../types'

export default function ProductsGallery (): JSX.Element {
  const dispatch = useDispatch()
  const { productsList, favoritesList } = useSelector((state: { cart: CartState }) => state.cart)

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

  const handleAddToFavoritesOrRemove = (productId: number) => {
    const product = productsData.find((product) => product.id === productId)
    if (!product) {
      // Manejar el caso en el que no se encuentra el producto
      console.error('No se encontró el producto con el ID proporcionado')
      return
    }
    const isFavorite = favoritesList.find((product) => product.id === productId)
    if (isFavorite) {
      dispatch(removeToFavorites(productId))
    } else {
      dispatch(addToFavorites(product))
    }
    
  }

  const handleisFavorite = (productId: number) => favoritesList.some((fav: CartProduct) => fav.id === productId)
  const haddleIsInCart = (productId: number) => productsList.some((pro: CartProduct) => pro.id === productId )

  return (
    <Container>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5 }}>
        <Masonry gutter='1rem'>
          {
            productsData.map(({ description, img, price, title, id }, index) => (
              <Card
                id={id}
                addProductToCartOrRemove={() => handleAddProductToCartOrRemove(id)}
                addToFavoritesOrRemove={() => handleAddToFavoritesOrRemove(id)}
                isFavorite={handleisFavorite(id)}
                isInCart={haddleIsInCart(id)}
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
