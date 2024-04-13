
interface CardProps {
  img: string
  description: string
  title: string
  price: number
}

export default function Card ({ img, description, title, price }: CardProps): JSX.Element {
  return (
    <article className='bg-slate-100 w-[240px] rounded-md'>
      <section className='flex flex-col'>
        <figure>
          <img src={img} alt={title} />
        </figure>
        <article className='px-4 py-3 flex flex-col gap-4'>
          <section>
            <h6 className='text-xl font-semibold tracking-wider mb-4'>{title}</h6>
            <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{description}</p>
            <span className='text-sm font-bold text-gray-800'>${price}</span>
          </section>
          <section className='flex justify-between'>
            <button className='bg-[#191919] rounded-sm px-6 py-0.5 font-medium text-sm text-white'>DETAIL</button>
            <button className='bg-[#191919] rounded-sm px-6 py-0.5 font-medium text-sm text-white'>ADD</button>
          </section>
        </article>
      </section>
    </article>
  )
}
