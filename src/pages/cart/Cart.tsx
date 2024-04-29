import { Button, Container, Wrapper } from '../../components'
import { MdAddCircle, MdRemoveCircle, MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeProductFromCart, subtractQuantity } from '../../reducers/cart/cartSlice'
import { FaCartShopping } from 'react-icons/fa6'

interface CartProduct {
  id: number
  img: string
  title: string
  price: number
  quantity: number
  total: number
}

interface cartState {
  totalCount: number
  productsList: CartProduct[]
  subTotal: number
}

export default function Cart (): JSX.Element {
  const dispatch = useDispatch()
  const { productsList, totalCount, subTotal } = useSelector((state: { cart: cartState }) => state.cart)
  const handleRemoveFromCart = (productId: number) => dispatch(removeProductFromCart(productId)) 
  const handleAddQuantity = (productId: number) => dispatch(addQuantity(productId))
  const handleSubtractQuantity = (productId: number) => dispatch(subtractQuantity(productId))
  
  return (
    // <div className='h-screen w-full bg-center bg-no-repeat fixed overflow-y-auto top-0 right-0 bottom-0 left-0 bg-cover bg-[url("/images/hero-03.webp")]' style={{background: ''}}>
      // <Wrapper backgroundImage='https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg' className='fixed w-full h-full top-0 right-0 bottom-0 left-0' >
        <Container className='pt-24'>
          <h3 className='text-lg sm:text-4xl text-[#2e2d2d] font-bold mb-10 tracking-wider'>Your Shopping Cart</h3>
          <section className='h-full flex flex-wrap  gap-4 px-10'>
            <article className='col-span-8 flex flex-1 flex-col gap-6'>
              {
                totalCount > 0 ?
                 ( productsList.map(({img, title, price, id, quantity, total}: CartProduct) => (
                    <article key={id} className='bg-slate-100/70 backdrop-blur-sm rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow ease-in-out    w-full'>
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
                            <MdAddCircle size={24} className='text-[#bf3992] hover:text-opacity-70' onClick={() => handleAddQuantity(id)} />
                          </button>
                          <span className='text-sm font-bold text-gray-800'>{quantity}</span>
                          <button>
                            <MdRemoveCircle size={24} className='text-[#bf3992] hover:text-opacity-70' onClick={() => handleSubtractQuantity(id)} />
                          </button>
                        </section>
                        <span className='text-sm font-bold text-gray-800'>${total.toFixed(2)}</span>
                        <button>
                          <MdClose onClick={() => handleRemoveFromCart(id)} size={24} className='text-[#0706064b] hover:text-[#191919]' />
                        </button>
                      </article>
                    </section>
                  </article>
                  ))
                ) : (
                  <section className='grid place-items-center'>
                    {/* <article > */}
                      <FaCartShopping size={24} color='#0706065e'/>
                      <p className='text-xl text-[#0706065e]'>Empty Cart</p>
                    {/* </article> */}
                  </section>
                )
              }
        
            </article>
            <article className='h-min w-[300px] col-span-4 bg-[#bf3992]/70 backdrop-blur-sm rounded-md p-4'>
              <section className='flex flex-col gap-6'>
                <h3 className='text-xl md:text-3xl text-gray-300 tracking-wider'>Cart Details</h3>
                <article className='space-y-2 px-4' >
                  <p className='text-gray-300  tracking-wider'>Products: {totalCount}</p>
                  <p className='text-gray-300  tracking-wider'>Discount: $0</p>
                  <p className='text-gray-300  tracking-wider'>Subtotal: ${subTotal.toFixed(2)}</p>
                </article>
                <article className='flex gap-6'>
                  <Button className='px-4 w-full'>Check Out</Button>
                  <Button className='px-4 w-full bg-transparent border-[1px]'>Pay With</Button>
                </article>
              </section>
            </article>
          </section>
        </Container>
      // </Wrapper>
    // </div>
  )
}
