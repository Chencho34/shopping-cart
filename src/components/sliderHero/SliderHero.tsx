import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SliderItem from '../sliderItem/SliderItem' 
import Button from '../button/Button'
import { Link } from 'react-router-dom'

export default function SliderHero () {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  const sliderItems = [
    {
      title: 'Y&Y',
      subtitle: '¡Heladeria PetFriendly!',
      paragraph: 'No te pierdas nuestras helados. Productos con descuentos especiales solo para ti y tu peludo amigo.',
      image: '/images/hero-01.webp'
    },
    {
      title: 'Y&Y',
      subtitle: '¡Heladeria PetFriendly!',
      paragraph: 'No te pierdas nuestras helados.',
      image: '/images/hero-03.webp',
      buttons: [
        { btn: 'Ordena Ahora', link: '#' }
      ]
    }
  ]

  return (
    <Slider {...settings} arrows={false} className='h-full w-full object-contain rounded-b-3xl'>
      {
        sliderItems.map(({ paragraph,subtitle,title, image, buttons }, index) => (
          <SliderItem
            key={index} 
            buttons={buttons} 
            paragraph={paragraph} 
            src={image} 
            subtitle={subtitle} 
            title={title}
          />
        ))
      }
      <section className='h-[370px] w-full overflow-hidden relative rounded-b-xl flex items-end bg-center bg-contain bg-pink-500'>
        <article className='h-[calc(100%-70px)] pt-[70px] w-[80%] mx-auto flex flex-col justify-center items-center gap-4'>
          <section className='flex  justify-center flex-col px-6'>
            <h3 className='text-xl sm:text-4xl font-medium text-white py-3'>Pet Friendly</h3>
            <img src='/logo.svg' alt='' className='h-28' />
          </section>
          <section className='flex gap-6'>
            <Link to='/about'><Button className='px-6'>Sobre Nosotros</Button></Link>
          </section>
        </article>
      </section>
    </Slider>
  )
}
