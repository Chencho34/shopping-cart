import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SliderItem from '../sliderItem/SliderItem' 

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
      image: '/images/hero-01.jpg'
    },
    {
      title: 'Y&Y',
      subtitle: '¡Heladeria PetFriendly!',
      paragraph: 'No te pierdas nuestras helados.',
      image: '/images/hero-02.jpg',
      buttons: [
        { btn: 'Order Now', link: '#' }
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
    </Slider>
  )
}
