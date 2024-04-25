import { Container } from '../../components'
import { MdAddCircle, MdRemoveCircle, MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeProductFromCart, subtractQuantity } from '../../reducers/cart/cartSlice'
import { FaCartShopping } from 'react-icons/fa6'

interface cartProduct {
  id: number
  img: string
  title: string
  price: number
  quantity: number
  total: number
}

export default function Cart (): JSX.Element {
  const dispatch = useDispatch()
  const { productsList, totalCount } = useSelector((state) => state.cart)
  const handleRemoveFromCart = (productId: number) => dispatch(removeProductFromCart(productId)) 
  const handleAddQuantity = (productId: number) => dispatch(addQuantity(productId))
  const handleSubtractQuantity = (productId: number) => dispatch(subtractQuantity(productId))
  
  return (
    <div className='bg-cyan-800 h-screen w-full bg-center bg-no-repeat fixed overflow-y-auto top-0 right-0 bottom-0 left-0 bg-cover bg-[url("https://fashionista.com/.image/t_share/MTM5NDU0OTMzODExMzQwNDUy/kl1_0420jpg.jpg")]' style={{background: ''}}>
      <Container className='pt-24'>
        <h3 className='text-lg sm:text-3xl font-semibold text-[#191919] mb-10'>Your Shopping Cart</h3>
        <section className='h-full grid grid-cols-12 gap-4'>
          <article className='col-span-8 grid gap-4 items-center justify-center'>
            {
              totalCount > 0 ?
               ( productsList.map(({img, title, price, id, quantity, total}: cartProduct) => (
                  <article key={id} className='bg-slate-100/70 rounded-md overflow-hidden shadow-lg   w-full'>
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
                          <MdAddCircle size={24} className='text-[#191919] hover:text-opacity-70' onClick={() => handleAddQuantity(id)} />
                        </button>
                        <span className='text-sm font-bold text-gray-800'>{quantity}</span>
                        <button>
                          <MdRemoveCircle size={24} className='text-[#191919] hover:text-opacity-70' onClick={() => handleSubtractQuantity(id)} />
                        </button>
                      </section>
                      <span className='text-sm font-bold text-gray-800'>${total}</span>
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
          <article className='h-full col-span-4 right-0 col-start-9 bg-[#191919]/70 rounded-md p-4'>
            <h3 className='text-lg md:text-3xl text-gray-300'>Cart Details</h3>
            <p className='text-gray-300'>Products: {totalCount}</p>
            <p className='text-gray-300'>Subtotal: $0</p>
          </article>
        </section>
      </Container>
    </div>
  )
}
