import { ProductsGallery, SliderCategory, SliderHero } from '../../components'

export default function Home (): JSX.Element {
  return (
    <>
      <SliderHero />
      <SliderCategory />
      <ProductsGallery />      
    </>
  )
}
