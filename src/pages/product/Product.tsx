import { Link, useParams } from 'react-router-dom'
import { Button, Container } from '../../components'
import { productsData } from '../../constants'
import { IoIosArrowBack } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'

export default function Product () {
  const { id } = useParams()
  let currentId: number | undefined
  
  if (id) {
    const idParts = id.split(':')
    if (idParts.length > 1) currentId = parseInt(idParts[1])
  }
    
  const currentProduct = productsData.find((product) => product.id === currentId)

  return (
    <Container className='pt-24'>
      <h1 className='text-2xl sm:text-3xl text-[#191919] tracking-wider'>Product Description</h1>
      <section className='w-full flex flex-row gap-10 py-10'>
        <figure className='h-[350px] w-[70%] overflow-hidden rounded-md'>
          <img src={currentProduct?.img} alt={currentProduct?.title} className='h-full w-full object-contain rounded-md' />
        </figure>
        <article className='w-[30%] flex flex-col justify-between bg-slate- p-4'>
          <section>
            <h3 className='text-xl font-semibold tracking-wider mb-4'>{currentProduct?.title}</h3>
            <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{currentProduct?.description}</p>
            <span className='text-sm font-bold text-gray-800'>Price: $ {currentProduct?.price}</span>
          </section>
          <article className='w-full flex flex-col gap-6'>
            <h5 className='text-xl font-semibold tracking-wider'>Select Option</h5>
            <section className='flex flex-row gap-6'>
              <Button className='w-full'>Buy</Button>
              <Button className='w-full bg-transparent border-[1px] border-[#191919] text-[#191919]'>Buy in Installments.</Button>
            </section>
            <Button className='flex'>
              Add to Cart
              <FaCartShopping size={14} />
            </Button>
          </article>
        </article>
      </section>
      <Link to='/' className='h-full w-full'>
        <Button className='px-4'>
          <IoIosArrowBack size={16} />
          Go Back 
        </Button>
      </Link>
    </Container>
  )
}
