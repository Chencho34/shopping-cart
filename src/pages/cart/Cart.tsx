import { Container } from '../../components'
import { MdAddCircle, MdRemoveCircle, MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart } from '../../reducers/cart/cartSlice'
import { FaCartShopping } from 'react-icons/fa6'

interface cartProduct {
  id: number
  img: string
  title: string
  price: number
}

export default function Cart (): JSX.Element {
  const dispatch = useDispatch()
  const { productsList, totalCount } = useSelector((state) => state.cart)

  const handleRemoveFromCart = (productId: number) => dispatch(removeProductFromCart(productId)) 
  
  return (
    <Container className='pt-24'>
      <h3 className='text-lg sm:text-3xl font-semibold text-[#191919] mb-6'>Your cart</h3>
      <section className='h-full grid grid-cols-12 grid-rows-10 gap-4'>
        <article className='h-full col-span-8 grid gap-4'>
          {
            totalCount > 0 ? 
             ( productsList.map(({img, title, price, id}: cartProduct) => (
                <article key={id} className='bg-slate-100 rounded-md overflow-hidden shadow-lg   w-full'>
                <section className='flex flex-row'>
                  <figure className='w-[120px] h-[120px] object-cover'>
                    <img loading='lazy' src={img} alt={title} className='h-full w-full object-cover' />
                  </figure>
                  <article className='px-6 py-3 flex flex-row items-center justify-between w-full gap-4'>
                    <section className='w-44'>
                      <h6 className='text-lg font-semibold tracking-wider'>{title}</h6>
                      <p className='text-sm tracking-wide font-semibold text-gray-800'>No. {id}</p>
                    </section>
                    <span className='text-sm font-bold text-gray-800'>${price}</span>
                    <section className='flex flex-row items-center gap-2'>
                      <button>
                        <MdAddCircle size={24} className='text-[#191919] hover:text-opacity-70' />
                      </button>
                      <span className='text-sm font-bold text-gray-800'>0</span>
                      <button>
                        <MdRemoveCircle size={24} className='text-[#191919] hover:text-opacity-70' />
                      </button>
                    </section>
                    <span className='text-sm font-bold text-gray-800'>$1000</span>
                    <button>
                      <MdClose onClick={() => handleRemoveFromCart(id)} size={24} className='text-[#0706064b] hover:text-[#191919]' />
                    </button>
                  </article>
                </section>
              </article>
              ))
            ) : (
              <section className='grid place-items-center'>
                <article>
                  <FaCartShopping size={24} color='#0706065e'/>
                  <p className='text-xl text-[#0706065e]'>Vacio</p> 
                </article>
              </section>
            )
          }
            
        </article>
        <article className='h-full col-span-4 row-span-4  right-0 col-start-9 bg-[#191919] rounded-md p-4'>
          <h3 className='text-lg md:text-3xl text-gray-300'>Total Products</h3>
          <p className='text-gray-300'>Total count: {totalCount}</p>
          <p className='text-gray-300'>Cart subtotal: $0</p>
        </article>
      </section>
    </Container>
  )
}
