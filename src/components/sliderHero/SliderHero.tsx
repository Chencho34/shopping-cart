import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SliderItem from '../sliderItem/SliderItem'
import { sliderItemsData } from '../../constants'
import { sliderItemsSettings } from '../../constants/sliderItems'

export default function SliderHero (): JSX.Element {
  return (
    <Slider {...sliderItemsSettings} className='h-full w-full object-contain rounded-b-3xl'>
      {
        sliderItemsData.map(({ paragraph,subtitle,title, image, buttons }, index) => (
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
