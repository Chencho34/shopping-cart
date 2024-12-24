import Button from '../button/Button'

interface SliderItemProps {
  src: string 
  title: string
  subtitle: string
  paragraph: string
  children?: React.ReactNode
  buttons?: {
    btn: string
  }[]
}

export default function SliderItem ({ src, title, subtitle, paragraph, children, buttons }: SliderItemProps): JSX.Element {
  return (
    <section className='h-[370px] w-full overflow-hidden relative rounded-b-xl flex items-end bg-center' style={{backgroundImage: `linear-gradient(to bottom, rgba(45, 43, 43, 0.624), rgba(35, 32, 32, 0.7)), url(${src})`}}>
      <article className='h-[calc(100%-70px)] w-[80%] mx-auto flex flex-col justify-center items-center gap-4'>
        <section className='text-center px-6'>
          <h2 className='text-2xl sm:text-4xl font-semibold text-gray-200'>{title}</h2>
          <h3 className='text-xl sm:text-2xl font-medium text-gray-200'>{subtitle}</h3>
        </section>
        <p className='text-sm sm:text-base text-gray-300 text-center px-4'>{paragraph}</p>
        <section className='flex gap-6'>
          {
            buttons?.map(({ btn }, index) => (
              <Button key={index} className={`px-6 ${index === 1 ? 'bg-white text-[#191919]' : ''}`}>{btn}</Button>
            ))
          }
        </section>
        {children}
      </article>
    </section>
  )
}
