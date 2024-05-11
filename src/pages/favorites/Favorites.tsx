import { IoIosArrowBack } from 'react-icons/io'
import { Container, FavoritesGallery } from '../../components'
import { Link, useNavigate } from 'react-router-dom'


export default function Favorites (): JSX.Element {
  const navigate = useNavigate()
  return (
    <Container className='pt-24'>
      <section className='flex'>
        <Link
          to='/' 
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }} 
          className='h-full flex items-center gap-2 mb-16'>
            <IoIosArrowBack size={30} />
            <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wider'>Favorites Products</h3>
        </Link>
      </section>
      <FavoritesGallery />
    </Container>
  )
}
