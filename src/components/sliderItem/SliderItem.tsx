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

export default function SliderItem ({ src, title, subtitle, paragraph, children, buttons: buttonsGroup }: SliderItemProps): JSX.Element {
  return (
    <section className='h-[370px] w-full overflow-hidden relative rounded-b-xl flex items-end' style={{backgroundImage: `linear-gradient(to bottom, rgba(45, 43, 43, 0.624), rgba(35, 32, 32, 0.7)), url(${src})`}}>
      <article className='h-[calc(100%-70px)]  w-[80%] mx-auto flex flex-col justify-center items-center gap-4'>
        <section className='text-center'>
          <h2 className='text-lg sm:text-4xl font-semibold text-gray-300'>{title}</h2>
          <h3 className='text-base sm:text-xl font-medium text-gray-300' >{subtitle}</h3>
        </section>
        <p className='text-xs sm:text-sm text-gray-300 text-center'>{paragraph}</p>
        <section className='flex gap-6'>
          {
            buttonsGroup?.map(({ btn }, index) => (
              <Button className={`px-6 ${index === 1 ? 'bg-white text-[#191919]':''}`}>{btn}</Button>
            ))
          }
        </section>
        {children}
      </article>
    </section>
  )
}
