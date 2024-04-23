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
      title: 'Descubre nuestras últimas ofertas',
      subtitle: '¡No te lo pierdas!',
      paragraph: 'Explora una amplia selección de productos a precios increíbles. ¡Encuentra lo que necesitas y ahorra!',
      image: 'https://picsum.photos/2000/1100'
    },
    {
      title: 'Nuevas llegadas',
      subtitle: 'Lo último en moda y tecnología',
      paragraph: 'Echa un vistazo a nuestras últimas incorporaciones. Desde moda hasta gadgets, tenemos lo que estás buscando.',
      image: 'https://picsum.photos/2000/1200'
    },
    {
      title: 'Ofertas especiales para ti',
      subtitle: '¡Solo por tiempo limitado!',
      paragraph: 'No te pierdas nuestras ofertas exclusivas. Productos seleccionados con descuentos especiales solo para ti.',
      image: 'https://picsum.photos/2000/1300'
    },
    {
      title: 'Descubre la colección de temporada',
      subtitle: '¡Renueva tu estilo!',
      paragraph: 'Renueva tu armario con las últimas tendencias de la temporada. Encuentra ropa, accesorios y más para cada ocasión.',
      image: 'https://picsum.photos/2000/1400',
      buttons: [
        { btn: 'Order Now', link: '#' }
      ]
    },
    {
      title: 'Tecnología de vanguardia',
      subtitle: '¡Descubre lo último en gadgets!',
      paragraph: 'Desde smartphones hasta dispositivos inteligentes, encuentra la tecnología más avanzada para simplificar tu vida diaria.',
      image: 'https://picsum.photos/2000/1500',
      buttons: [
        { btn: 'Go', link: '#' },
        { btn: 'Site', link: '#' }
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
