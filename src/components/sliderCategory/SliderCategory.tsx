import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Container from '../container/Container'

export default function SliderCategory (): JSX.Element {
  const settings = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
    nextArrow:<GrNext color='#191919'/>,
    prevArrow:<GrPrevious color='#191919'/>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const sliderProducts = [
    { category: 'Mango con chile', img: 'images/mang-chile.webp'},
    { category: 'Piña', img: 'images/piña.webp'},
    { category: 'Limon', img: 'images/limon.webp'},
    { category: 'Guanabana', img: 'images/guanabana.webp'},
    { category: 'Mango', img: 'images/mango.webp'},
    { category: 'Nanche', img: 'images/nanche.webp'},
    { category: 'Huevo Kinder', img: 'images/helado-kinder.webp'},
    { category: 'Nuez', img: 'images/helado-nuez.webp'}
  ]

  return (
    <Container className='space-y-6'>
      <h3 className='text-lg sm:text-3xl font-semibold text-purple-700'>Descubre nuestros nuevos productos</h3>
      <Slider {...settings}>
        {
          sliderProducts.map(({ category, img }, index) => (
            <article key={index} className='h-[180px] w-[180px] px-0.5'>
              <section className='h-full relative rounded-md overflow-hidden'>
                <img src={img} alt='img' className='absolute top-0 right-0 bottom-0 left-0 h-full w-full hover:opacity-80 object-cover hover:scale-150 ease-in-out duration-300' />
                <p className=' text-white font-semibold absolute left-0 bottom-0 bg-pink-500/70 backdrop-blur-sm w-full py-1.5 text-center text-sm'>{category}</p>
              </section>
            </article>
          ))
        }
      </Slider>
    </Container>
  )
}
