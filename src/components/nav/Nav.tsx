import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaCartShopping, FaStore } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { AuthState, CartState } from '../../types'
import Button from '../button/Button'
import { FaUser } from 'react-icons/fa'
import { logout } from '../../reducers/auth/authSlice'

interface PathsTypes {
  id: number
  item: string
  to: string
  icon: JSX.Element
}

export default function Nav (): JSX.Element {
  const { isAuthenticated, user } = useSelector((state: { auth: AuthState }) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  console.log(isAuthenticated)
  console.log(user)

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  // todo ADD: FUNCTIONNAL NAV IF USER IS LOGED OR NOT WITH TOKEN USING REDUX
  // const [isLogin, setIsLogin] = useState(false)
  const { totalCount } = useSelector((state: { cart: CartState}) => state.cart)
  const location = useLocation()
  const paths: PathsTypes[] = [
    { id: 1, item: 'Products', to: '/', icon: <FaStore size={14} /> },
    { id: 2, item: '', to: '/cart', icon: <FaCartShopping size={14} /> },
    { id: 3, item: '', to: '/favorites', icon: <GoHeartFill size={14} /> }
  ]

  return (
    <>
      <nav className='h-[70px] w-full bg-[#191919]/70 backdrop-blur-sm fixed top-0 right-0 left-0 z-10 rounded-b-2xl'>
        <section className='h-full w-[90%] mx-auto flex items-center justify-between'>
          <article className='text-gray-300 flex items-center gap-3 space-y-2'>
            <Link to='/' className='text-2xl hover:text-white tracking-widest'>Chencho</Link>
            <p className='hidden md:block tracking-wider'>E-shopping</p>
          </article>
          {
            isAuthenticated ? (
              <article className='flex gap-12'>
                <ul className='flex gap-6 text-gray-400'>
                  {
                    paths.map(({ icon, id, item, to }) => (
                      <li key={id}>
                        <NavLink
                          className={`flex items-center h-full  gap-1.5 font-normal text-sm text-gray-300 ${
                            location.pathname === to ? 'text-slate-50' : ''
                          }`}
                          to={to}
                        >
                          {icon}
                          {item}
                          {to === '/cart' && <span className='bg-[#191919] text-sm px-1 rounded-full'>{totalCount}</span>}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
                <Link onClick={handleLogout} to='/' className='py-2 px-2 bg-[#212121] rounded-full'>
                  <FaUser color='white' size={24}/>
                </Link>
              </article>
            ) : (
              <ul className='flex gap-4'>
                <li>
                  <NavLink to='/logindashboard'>
                    <Button className='px-4 bg-transparent text-slate-50'>
                      Login
                    </Button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/logindashboard/signUp'>
                    <Button className='px-4 bg-white text-[#1d1c1c] font-semibold'>
                      SignUp
                    </Button>
                  </NavLink>
                </li>
              </ul>
            )
          }
        </section>
      </nav>
    </>
  )
}
