import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { productsData } from '../../constants'
import { Card, Container } from '../../components'
import { addProductToCart } from '../../reducers/cart/cartSlice'
import { useDispatch } from 'react-redux'

export default function ProductsGallery (): JSX.Element {
  const dispatch = useDispatch()

  const handleAddProductToCart = (productId: number) => {
    const product = productsData.find((product) => product.id === productId)
    dispatch(addProductToCart(product))
  }

  return (
    <Container>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5 }}>
        <Masonry gutter='1rem'>
          {
            productsData.map(({ description, img, price, title, id }, index) => (
              <Card
                onClick={() => handleAddProductToCart(id)}
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
