import { IoIosArrowBack } from 'react-icons/io'
import { Button, Container } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CartState } from '../../types'
import { GoHeartFill } from 'react-icons/go'

export default function Favorites (): JSX.Element {
  const { favoritesList } = useSelector((state: { cart: CartState }) => state.cart)
  const navigate = useNavigate()
  return (
    <Container className='pt-24'>
      <section className='flex'>
        <Link
          to='/' 
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }} 
          className='h-full flex items-center gap-2 mb-16'>
          {/* <Button className='px-4'> */}
            <IoIosArrowBack size={30} />
            
            <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wider'>Favorites Products</h3>
          {/* </Button> */}
        </Link>
      </section>
      <section className='flex gap-6'>
        {
          favoritesList.map((product) => (
            <article className='bg-slate-100 rounded-md overflow-hidden shadow-lg w-[300px]'>
            <section className='flex flex-col'>
              <figure>
                <img loading='lazy' src={product.img} alt={product.title} />
              </figure>
              <article className='px-4 py-3 flex flex-col gap-4'>
                <section>
                  {/* <Link to={`/product/:${id}`}> */}
                    <p className='text-lg group relative w-max'>
                      <h6 className='text-xl font-semibold tracking-wider mb-4 hover:text-indigo-600'>{product.title}</h6>
                      <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full'></span>
                    </p>
                  {/* </Link> */}
                  <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{product.description}</p>
                  <span className='text-sm font-bold text-gray-800'>${product.price}</span>
                </section>
                <section className='flex justify-between gap-4'>
                  {/* <Button className='flex-1' onClick={addProductToCartOrRemove}>
                    {
                      isInCart
                        ? <span>Remove from Cart</span>
                        : <span>Add to Cart</span>
                    }
                    <FaCartShopping size={14} />
                  </Button> */}
                  {/* <Button className='px-2.5' onClick={addToFavoritesOrRemove}>
                    <GoHeartFill className='transition-colors' color={isFavorite ? 'rgb(232, 22, 22)' : 'rgb(229, 231, 235)'} size={14} />
                  </Button> */}
                </section>
              </article>
            </section>
          </article>
          ))
        }
      </section>

    </Container>
  )
}
