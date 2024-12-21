import { FaCartShopping } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

interface CardProps {
  id: number
  img: string
  description: string
  title: string
  price: number
  isFavorite: boolean
  isInCart: boolean
  addProductToCartOrRemove: () => void
  addToFavoritesOrRemove?: () => void
}

export default function Card ({ id, img, description, title, price, addProductToCartOrRemove, addToFavoritesOrRemove, isFavorite, isInCart }: CardProps): JSX.Element {
  return (
    <article className='bg-slate-100 rounded-md overflow-hidden shadow-lg'>
      <section className='flex flex-col'>
        <figure>
          <img loading='lazy' src={img} alt={title} />
        </figure>
        <article className='px-4 py-3 flex flex-col gap-4'>
          <section>
            <Link to={`/product/:${id}`}>
              <h6 className='group relative max-w-min inline-block mb-4'>
                <p className='text-xl font-semibold tracking-wider hover:text-indigo-600'>{title}</p>
                <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full'></span>
              </h6>
            </Link>
            <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{description}</p>
            <span className='text-sm font-bold text-gray-800'>${price}</span>
          </section>
          <section className='flex justify-between gap-4'>
            <Button className='flex-1' onClick={addProductToCartOrRemove}>
              { 
                isInCart 
                  ? <span>Remove from Cart</span> 
                  : <span>Add to Cart</span>
              }
              <FaCartShopping size={14} />
            </Button>
            <Button className='px-2.5' onClick={addToFavoritesOrRemove}>
              <GoHeartFill className='transition-colors' color={isFavorite ? 'rgb(232, 22, 22)' : 'rgb(229, 231, 235)'} size={14} />
            </Button>
          </section>
        </article>
      </section>
    </article>
  )
}
