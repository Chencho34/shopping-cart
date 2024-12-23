import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../../components'
import { IoIosArrowBack } from 'react-icons/io'

export default function UserSettings () {
  const navigate = useNavigate()

  return (
    <Container className='pt-24 px-4 sm:px-6 md:px-11 lg:px-8 min-h-screen flex-grow w-full max-w-7xl'>
      <Link
        to='/' 
        onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }} 
        className='h-full items-center gap-2 mb-16 inline-flex hover:opacity-70 '
      >
        <IoIosArrowBack size={30} />
        <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wider'>User Settings</h3>
      </Link>
      <Container className='px-0 py-0 sm:px-6 lg:px-8 flex flex-col gap-8'>
        User Settings
      </Container>
    </Container>
  )
}
