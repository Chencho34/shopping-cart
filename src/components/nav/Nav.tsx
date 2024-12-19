import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaCartShopping, FaStore,  FaAlignRight } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { AuthState, CartState } from '../../types'
import Button from '../button/Button'
import { FaUser } from 'react-icons/fa'
import { logout } from '../../reducers/auth/authSlice'
import { useState } from 'react'

interface PathsTypes {
  id: number
  item: string
  to: string
  icon: JSX.Element
}

export default function Nav (): JSX.Element {
  const { isAuthenticated } = useSelector((state: { auth: AuthState }) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  const { totalCount } = useSelector((state: { cart: CartState}) => state.cart)
  const location = useLocation()
  const paths: PathsTypes[] = [
    { id: 1, item: 'Products', to: '/', icon: <FaStore size={14} /> },
    { id: 2, item: 'Cart', to: '/cart', icon: <FaCartShopping size={14} /> },
    { id: 3, item: 'Favorites', to: '/favorites', icon: <GoHeartFill size={14} /> }
  ]

  const userNavigation = [
    { id: 1, item: 'Your profile', to: '/user-profile', icon: <FaStore size={14} /> },
    { id: 2, item: 'Settings', to: '/user-settings', icon: <FaStore size={14} /> },
    { id: 3, item: 'Log out', to: '/', icon: <FaStore size={14} /> }
  ]

  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpen = () => setOpen(!open)
  const handleOpenMenu = () => setOpenMenu(!openMenu)

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
              <>
              <article className='sm:flex gap-12 hidden'>
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
                <button
                  onClick={handleOpen}
                  className='py-2 px-2 bg-[#212121] hover:opacity- rounded-full'
                >
                  <FaUser color='white' size={24}/>
                </button>
                {/* { */}
                  {/* open &&  */}
                <section  className={`absolute py-4 px-3 w-[200px] h-auto bg-[#191919] backdrop-blur-sm top-[60px] sm:right-4 md:right-8 xl:right-16 rounded-2xl shadow-[black]/70 shadow-sm 
                  transform transition-all  duration-300 ease-in-out ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                  <p className='px-2 text-lg text-gray-100 font-normal mb-2'>My Account</p>
                  <ul className='flex flex-col'>
                    {
                      userNavigation.map(({id,item,to}) => (
                        <li key={id}>
                          {
                            item === 'Log out' ? (
                              <button 
                                onClick={handleLogout}
                                className='flex items-center  gap-1.5 font-normal text-sm text-gray-200 px-2 py-1 hover:opacity-70 hover:bg-[#1c1b1b]/80 rounded-2xl w-full'>
                                {item}
                              </button>
                            ) : (
                              <NavLink 
                                to={to} 
                                className='flex items-center  gap-1.5 font-normal text-sm text-gray-300 px-2 py-1 hover:opacity-70 hover:bg-[#1c1b1b]/80 rounded-2xl'>
                                {item}
                              </NavLink>
                            )
                          }
                        </li>
                      ))
                    }
                  </ul>
                </section>
                {/* } */}
              </article>
              <article className='flex sm:hidden cursor-pointer hover:text-white text-gray-300'>
                <FaAlignRight size={24} onClick={handleOpenMenu} />
              </article>
              <section  className={`sm:hidden absolute py-4 px-3 w-[200px] h-auto bg-[#191919] backdrop-blur-sm top-[60px] right-2 rounded-2xl shadow-[black]/70 shadow-sm 
                  transform transition-all  duration-300 ease-in-out ${!openMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                  <p className='px-2 text-lg text-gray-100 font-normal mb-2'>My Account</p>
                  <ul className='flex flex-col gap-1.5 text-gray-400'>
                  {
                    paths.map(({ icon, id, item, to }) => (
                      <li key={id}>
                        <NavLink
                          className={`flex items-center h-full  gap-1.5 font-normal text-sm text-gray-300 px-2 py-1 ${
                            location.pathname === to ? 'text-slate-50' : ''
                          }`}
                          to={to}
                        >
                          {item}
                          {icon}
                          {to === '/cart' && <span className='bg-[#c5c4c4] text-[#212121] text-sm px-1 rounded-full'>{totalCount}</span>}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
                  <ul className='flex flex-col'>
                    {
                      userNavigation.map(({id,item,to}) => (
                        <li key={id}>
                          {
                            item === 'Log out' ? (
                              <button 
                                onClick={handleLogout}
                                className='flex items-center  gap-1.5 font-normal text-sm text-gray-200 px-2 py-1 hover:opacity-70 hover:bg-[#1c1b1b]/80 rounded-2xl w-full'>
                                {item}
                              </button>
                            ) : (
                              <NavLink 
                                to={to} 
                                className='flex items-center  gap-1.5 font-normal text-sm text-gray-300 px-2 py-1 hover:opacity-70 hover:bg-[#1c1b1b]/80 rounded-2xl'>
                                {item}
                              </NavLink>
                            )
                          }
                        </li>
                      ))
                    }
                  </ul>
                </section>
              </>
             
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
