import { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'

interface CardProps {
  img: string
  description: string
  title: string
  price: number
}

export default function Card ({ img, description, title, price }: CardProps): JSX.Element {
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
            <button className='bg-[#191919] rounded-full py-2 font-medium text-sm text-gray-200 flex flex-1 items-center justify-center gap-3 hover:bg-gray-800 transition-all'>
              Add Card <FaCartShopping size={14} />
            </button>
            <button onClick={addToFavorites} className='bg-[#191919] rounded-full px-2.5 py-2 font-medium text-sm hover:bg-gray-700 transition-all'>
              <GoHeartFill
                className='transition-colors'
                color={`${favorite ? 'rgb(220, 38,38)' : 'rgb(229, 231, 235)'}`}
                size={14}
              />
            </button>
          </section>
        </article>
      </section>
    </article>
  )
}
