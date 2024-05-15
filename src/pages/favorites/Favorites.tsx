import { IoIosArrowBack } from 'react-icons/io'
import { Button, Container } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CartState } from '../../types'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { FaCartShopping } from 'react-icons/fa6'

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
          <IoIosArrowBack size={30} className='text-purple-700' />

          <h3 className='text-2xl sm:text-3xl text-purple-700 tracking-wider'>Tus Helados Favoritos</h3>
        </Link>
      </section>
      {
        favoritesList.length > 0 ? (
          <ResponsiveMasonry >
            <Masonry gutter='1rem'>
              {
                favoritesList.map((product) => (
                  <article className='bg-slate-100 rounded-md overflow-hidden shadow-lg w-[300px]'>
                    <section className='flex flex-col'>
                      <figure>
                        <img loading='lazy' src={product.img} alt={product.title} />
                      </figure>
                      <article className='px-4 py-3 flex flex-col gap-4'>
                        <section>
                          <p className='text-lg group relative w-max'>
                            <h6 className='text-xl font-semibold tracking-wider mb-4 hover:text-indigo-600'>{product.title}</h6>
                            <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full'></span>
                          </p>
                          <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{product.description}</p>
                          <span className='text-sm font-bold text-gray-800'>${product.price}</span>
                        </section>
                      </article>
                    </section>
                  </article>
                ))
              }
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <section className='h-full flex w-auto xl:py-0 my-32 justify-center items-center'>
            <section className='grid place-items-center gap-6'>
              <article className='grid place-items-center'>
                <FaCartShopping size={24} color='rgb(126 34 206 / 0.7)' />
                <p className='text-xl text-purple-700/70'>Favoritos Vacio</p>
              </article>
              <Link to={'/'}><Button className='px-4' ><IoIosArrowBack size={16} />Continua Comprando</Button></Link>
            </section>
          </section>
        )
      }

    </Container>
  )
}
