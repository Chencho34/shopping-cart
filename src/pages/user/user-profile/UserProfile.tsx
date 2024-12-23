import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Input } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { AuthState } from '../../../types'
import { logout } from '../../../reducers/auth/authSlice'

export default function UserProfile () {
  const { user } = useSelector((state: {auth: AuthState}) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <Container className='pt-24 px-4 sm:px-6 md:px-11 lg:px-8 min-h-screen flex-grow w-full max-w-7xl'>
      <Link
          to='/' 
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }} 
          className='h-full items-center gap-2 mb-16 inline-flex hover:opacity-70 '>
          <IoIosArrowBack size={30} />
          <section className='flex items-end gap-3'>
            <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wider'>User Settings</h3>
            <p className='md:block hidden tracking-wider'>General Information</p>
          </section>
      </Link>
      <Container className='px-0 py-0 sm:px-6 lg:px-8 flex flex-col gap-8'>
        <section className='flex gap-4 sm:flex-row h-auto items-center flex-col'>
          <figure className='h-24 w-24 rounded-3xl overflow-hidden bg-red-600'>
            <img src='https://mighty.tools/mockmind-api/content/human/65.jpg' alt='user-img' className='w-full h-full object-cover' />
          </figure>
          <article>
            <p className='text-2xl'>{user?.name}</p>
            <p className='text-md text-gray-500'>{user?.email}</p>
          </article>
        </section>
        <article className='container mx-auto h-[100%] flex flex-col gap-6'>
          <section className='flex flex-col gap-4 '>
            <label htmlFor=''>
              <span>Name</span>
              <Input type='text' value={user?.name} className='text-gray-700' />
            </label>
            <label htmlFor=''>
              <span>Email</span>
              <Input type='text' value={user?.email} className='text-gray-700' />
            </label>
          </section>
        </article>
        <Button onClick={handleLogout} className='px-6 max-w-min'>Logout</Button>
      </Container>
    </Container>
  )
}
