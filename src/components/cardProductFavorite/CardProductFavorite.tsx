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
  addToFavoritesOrRemove: () => void
}

export default function CardProductFavorite ({ id, title, description, img, price, isFavorite, addToFavoritesOrRemove }: CardProps): JSX.Element {
  return (
    <article className='bg-slate-100 rounded-md overflow-hidden shadow-lg'>
      <section className='flex flex-col'>
        <figure className='w-full h-full relative'>
          <img loading='lazy' src={img} alt={title} />
          <Button className='px-2.5 absolute top-2 right-2' onClick={addToFavoritesOrRemove}>
            <GoHeartFill className='transition-colors' color={isFavorite ? 'rgb(232, 22, 22)' : 'rgb(229, 231, 235)'} size={14} />
          </Button>
        </figure>
        <article className='px-4 py-3 flex flex-col gap-4'>
          <section>
            <Link to={`/product/:${id}`}>
              <p className='text-lg group relative w-max'>
                <h6 className='text-xl font-semibold tracking-wider mb-4 hover:text-indigo-600'>{title}</h6>
                <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full'></span>
              </p>
            </Link>
            <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{description}</p>
            <span className='text-sm font-bold text-gray-800'>${price}</span>
          </section>
        </article>
      </section>
    </article>
  )
}
