import { ProductsGallery, SliderCategory, SliderHero } from '../../components'

export default function Home (): JSX.Element {
  window.scrollTo(0, 0)

  return (
    <>
      <SliderHero />
      <SliderCategory />
      <ProductsGallery />      
    </>
  )
}
