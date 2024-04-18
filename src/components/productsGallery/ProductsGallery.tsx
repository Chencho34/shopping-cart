import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { productsData } from '../../constants'
import { Card, Container } from '../../components'

export default function ProductsGallery (): JSX.Element {
  return (
    <Container>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5 }}>
        <Masonry gutter='1rem' className='px-4'>
          {
            productsData.map(({ description, img, price, title }, index) => (
              <Card
                key={index}
                description={description}
                img={img}
                price={price}
                title={title}
              />
            ))
          }
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  )
}
