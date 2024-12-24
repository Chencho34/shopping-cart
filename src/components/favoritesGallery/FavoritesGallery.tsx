import { useDispatch, useSelector } from 'react-redux'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { CartProduct, CartState } from '../../types'
import Button from '../button/Button'
import { GoHeartFill } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { productsData } from '../../constants'
import { addToFavorites, removeToFavorites } from '../../reducers/cart/cartSlice'
import { IoIosArrowBack } from 'react-icons/io'
import CardProductFavorite from '../cardProductFavorite/CardProductFavorite'

export default function FavoritesGallery (): JSX.Element {
  const { favoritesList } = useSelector((state: { cart: CartState }) => state.cart)
  const dispatch = useDispatch()

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

  const isFavorite = (productId: number) => favoritesList.some((fav: CartProduct) => fav.id === productId)
  return (
    <>
      {
        favoritesList.length > 0 ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5 }}>
            <Masonry gutter='1rem'>
              {
                favoritesList.map(({ description, img, price, title, id }) => (
                  <CardProductFavorite
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    img={img}
                    price={price}
                    isFavorite={isFavorite(id)}
                    addToFavoritesOrRemove={() => handleAddToFavoritesOrRemove(id)}
                  />
                ))
              }
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <section className='h-full flex w-auto xl:py-0 py-16 justify-center items-center'>
            <section className='grid place-items-center gap-6'>
              <article className='grid place-items-center'>
                <GoHeartFill size={24} color='#0706065e'/>
                <p className='text-xl text-[#0706065e]'>Empty Favorites</p>
              </article>
              <Link to={'/'}>
                <Button className='px-4'>
                  <IoIosArrowBack size={16} />
                  Continue Looking
                </Button>
              </Link>
            </section>
          </section>
        )
      }
    </>
  )
}
