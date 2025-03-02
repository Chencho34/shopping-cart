import { Button, Container } from '../../components'
import { MdAddCircle, MdRemoveCircle, MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeProductFromCart, subtractQuantity, emptyCart } from '../../reducers/cart/cartSlice'
import { FaCartShopping } from 'react-icons/fa6'
import { CartProduct, CartState } from '../../types'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

export default function Cart (): JSX.Element {
  const dispatch = useDispatch()
  const { productsList, totalCount, subTotal } = useSelector((state: { cart: CartState }) => state.cart)
  const handleRemoveFromCart = (productId: number) => dispatch(removeProductFromCart(productId)) 
  const handleAddQuantity = (productId: number) => dispatch(addQuantity(productId))
  const handleSubtractQuantity = (productId: number) => dispatch(subtractQuantity(productId))
  const handleEmptyCart = () => dispatch(emptyCart())
  
  return (
    // <div className='h-screen w-full bg-center bg-no-repeat fixed overflow-y-auto top-0 right-0 bottom-0 left-0 bg-cover bg-[url("https://fashionista.com/.image/t_share/MTM5NDU0OTMzODExMzQwNDUy/kl1_0420jpg.jpg")]'>
      <Container className='pt-24'>
        <h3 className='text-2xl sm:text-3xl text-[#191919] mb-10 tracking-wider'>Your Shopping Cart</h3>
        <section className='h-full w-full flex justify-between flex-wrap gap-6'>
          <article className='flex flex-col flex-1 gap-6'>
            {
              productsList.length > 0 ?
               ( productsList.map(({img, title, price, id, quantity, total}: CartProduct) => (
                  <article key={id} className='bg-slate-100/70 backdrop-blur-sm rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow ease-in-out'>
                    <section className='flex md:flex-row flex-col'>
                      <figure className='md:w-[120px] w-full h-[120px] object-cover'>
                        <img loading='lazy' src={img} alt={title} className='h-full w-full object-cover' />
                      </figure>
                      <article className='px-3 md:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4'>
                        <section className='md:w-44 w-full'>
                          <Link to={`/product/:${id}`}>
                            <h6 className='text-lg font-semibold tracking-wider hover:text-indigo-600'>{title}</h6>
                          </Link>
                          <p className='text-sm tracking-wide font-semibold text-gray-800'>No. {id}</p>
                        </section>
                        <section className='w-full flex flex-wrap gap-0 md:gap-6 items-center justify-between'>
                          <span className='text-sm font-bold text-gray-800'>${price}</span>
                          <section className='flex flex-row items-center gap-2'>
                            <button>
                              <MdAddCircle 
                                size={24} 
                                className='text-[#191919] hover:text-opacity-70' 
                                onClick={() => handleAddQuantity(id)}
                              />
                            </button>
                            <span className='text-sm font-bold text-gray-800'>{quantity}</span>
                            <button>
                              <MdRemoveCircle 
                                size={24} 
                                className='text-[#191919] hover:text-opacity-70' 
                                onClick={() => handleSubtractQuantity(id)} 
                              />
                            </button>
                          </section>
                          <span className='text-sm font-bold text-gray-800'>${total.toFixed(2)}</span>
                          <button>
                            <MdClose
                              size={24} 
                              className='text-[#0706064b] hover:text-[#191919]' 
                              onClick={() => handleRemoveFromCart(id)}
                            />
                          </button>
                        </section>
                      </article>
                    </section>
                  </article>
                ))
              ) : (
                <section className='h-full flex w-auto xl:py-0 py-16 justify-center items-center'>
                  <section className='grid place-items-center gap-6'>
                    <article className='grid place-items-center'>
                      <FaCartShopping size={24} color='#0706065e'/>
                      <p className='text-xl text-[#0706065e]'>Empty Cart</p>
                    </article>
                    <Link to={'/'}><Button className='px-4' ><IoIosArrowBack size={16} />Continue Shopping</Button></Link>
                  </section>
                </section>
              )
            }
            {
              productsList.length > 0 && <Button className='max-w-max px-6' onClick={handleEmptyCart}>Empty Cart</Button>
            }
          </article>
          <article className='h-min w-full xl:w-[370px] bg-[#191919]/70 backdrop-blur-sm rounded-md p-4'>
            <section className='flex flex-col gap-6'>
              <h3 className='text-xl md:text-3xl text-gray-300 tracking-wider'>Cart Details</h3>
              <article className='space-y-2 px-4' >
                <p className='text-gray-300 tracking-wider'>Products: {totalCount}</p>
                <p className='text-gray-300 tracking-wider'>Discount: $0</p>
                <p className='text-gray-300 tracking-wider'>Subtotal: ${subTotal.toFixed(2)}</p>
              </article>
              <article className='flex gap-6'>
                <Button className='w-full'>Check Out</Button>
                <Button className='w-full bg-transparent border-[1px]'>Pay With</Button>
              </article>
            </section>
          </article>
        </section>
      </Container>
    // {/* </div> */}
  )
}
