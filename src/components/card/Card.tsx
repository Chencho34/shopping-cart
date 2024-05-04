import { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import Button from '../button/Button'

interface CardProps {
  img: string
  description: string
  title: string
  price: number
  onClick: () => void
}

export default function Card ({ img, description, title, price, onClick }: CardProps): JSX.Element {
  const [favorite, setFavorite] = useState<boolean>(false)
  const addToFavorites = () => setFavorite(!favorite)

  return (
    <article className='bg-slate-100 rounded-md overflow-hidden shadow-lg'>
      <section className='flex flex-col'>
        <figure>
          <img loading='lazy' src={img} alt={title} />
        </figure>
        <article className='px-4 py-3 flex flex-col gap-4'>
          <section>
            <h6 className='text-xl font-semibold tracking-wider mb-4'>{title}</h6>
            <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{description}</p>
            <span className='text-sm font-bold text-gray-800'>${price}</span>
          </section>
          <section className='flex justify-between gap-4'>
            <Button className='flex-1' onClick={onClick}>
              <span>Add to Cart</span>
              <FaCartShopping size={14} />
            </Button>
            <Button onClick={addToFavorites} className='px-2.5'>
              <GoHeartFill className='transition-colors' color={`${favorite ? 'rgb(220, 38,38)' : 'rgb(229, 231, 235)'}`} size={14} />
            </Button>
          </section>
        </article>
      </section>
    </article>
  )
}
