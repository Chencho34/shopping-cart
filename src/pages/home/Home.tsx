import { ProductsGallery } from '../../components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { GrNext } from 'react-icons/gr'
// import { GrPrevious } from 'react-icons/gr'

export default function Home (): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  return (
    <>
      <Slider {...settings} arrows={false} className='h-full w-full object-contain rounded-b-3xl'>
        <figure className='h-[370px] w-full overflow-hidden'>
          <img src='https://picsum.photos/2000/1000' alt='' className='object-cover h-full w-full' />
        </figure>
        <figure className='h-[370px] w-full overflow-hidden'>
          <img src='https://picsum.photos/2000/900' alt='' className='object-cover h-full w-full ' />
        </figure>
        <figure className='h-[370px] w-full overflow-hidden'>
          <img src='https://picsum.photos/2000/950' alt='' className='object-cover h-full w-full ' />
        </figure>
        <figure className='h-[370px] w-full overflow-hidden'>
          <img src='https://picsum.photos/2000/980' alt='' className='object-cover h-full w-full ' />
        </figure>
        <figure className='h-[370px] w-full overflow-hidden'>
          <img src='https://picsum.photos/1000/980' alt='' className='object-cover h-full w-full ' />
        </figure>
        <figure className='h-[370px] w-full overflow-hidden'>
          <img src='https://picsum.photos/1200/980' alt='' className='object-cover h-full w-full ' />
        </figure>
      </Slider>
      <ProductsGallery />      
    </>
  )
}
