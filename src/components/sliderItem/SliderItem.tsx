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
    <section className='h-[370px] w-full overflow-hidden relative rounded-b-xl flex items-end bg-center bg-contain' style={{backgroundImage: `linear-gradient(to bottom, rgba(236 72 153), rgba(236 72 153 / 0.8)), url(${src})`}}>
      <article className='h-[calc(100%-70px)] w-[80%] mx-auto flex flex-col justify-center items-center gap-4'>
        <section className='text-center px-6'>
          <h2 className='text-2xl sm:text-5xl font-semibold text-purple-700'>{title}</h2>
          <h3 className='text-xl sm:text-3xl font-medium text-white'>{subtitle}</h3>
        </section>
        <p className='text-sm sm:text-base text-slate-100 text-center px-4'>{paragraph}</p>
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
