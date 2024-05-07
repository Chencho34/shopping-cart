import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Container } from '../../components'
import { productsData } from '../../constants'
import { IoIosArrowBack } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { CartProduct, CartState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, addToFavorites, removeProductFromCart, removeToFavorites } from '../../reducers/cart/cartSlice'

export default function Product (): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  let currentId: number | undefined
  
  if (id) {
    const idParts = id.split(':')
    if (idParts.length > 1) currentId = parseInt(idParts[1])
  }
    
  const currentProduct = productsData.find((product) => product.id === currentId)

  const { favoritesList, productsList } = useSelector((state: { cart: CartState }) => state.cart)

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

  const isFavorite = favoritesList.some((fav: CartProduct) => fav.id === currentId)
  const isInCart = productsList.some((pro: CartProduct)  => pro.id === currentId)

  return (
    <Container className='pt-24'>
      <h1 className='text-2xl sm:text-3xl text-[#191919] tracking-wider'>Product Description</h1>
      <section className='w-full flex flex-col  md:flex-row gap-10 py-10'>
        <figure className='h-[350px] w-full md:w-[70%] overflow-hidden rounded-md'>
          <img src={currentProduct?.img} alt={currentProduct?.title} className='h-full w-full object-contain rounded-md' />
        </figure>
        <article className='w-full md:w-[30%] flex flex-col justify-between md:p-4 relative gap-6'>
          <Button className='absolute right-2 top-0 md:right-4 md:top-4 bg-transparent py-0 px-0' onClick={() => handleAddToFavoritesOrRemove(currentProduct?.id)}>
            {
              isFavorite ? <GoHeartFill color='red' size={22} /> : <GoHeart color='#191919' size={22}/> 
            }
          </Button>
          <section>
            <h3 className='text-xl font-semibold tracking-wider mb-4'>{currentProduct?.title}</h3>
            <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{currentProduct?.description}</p>
            <span className='text-2xl font-bold text-[#2a8703]'>${currentProduct?.price}</span>
          </section>
          <article className='w-full flex flex-col gap-6'>
            <h5 className='text-xl font-semibold tracking-wider'>Select Option</h5>
            <section className='flex  flex-row  gap-6'>
              <Button className='w-full'>Buy</Button>
              <Button className='w-full bg-transparent border-[1px] border-[#191919] text-[#191919]'>Buy in Installments</Button>
            </section>
            <Button className='flex' onClick={() => handleAddProductToCartOrRemove(currentProduct?.id)}>
              {
                isInCart ? <span>Remove from Cart</span> : <span>Add to Cart</span>
              }
              <FaCartShopping size={14} />
            </Button>
          </article>
        </article>
      </section>
      <Link 
        to='/' 
        onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }} 
        className='h-full w-full'>
        <Button className='px-4'>
          <IoIosArrowBack size={16} />
          Go Back 
        </Button>
      </Link>
    </Container>
  )
}
