import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaCartShopping, FaStore } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { CartState } from '../../types'

interface PathsTypes {
  id: number
  item: string
  to: string
  icon?: JSX.Element
}

export default function Nav (): JSX.Element {
  const { totalCount } = useSelector((state: { cart: CartState}) => state.cart)
  const location = useLocation()
  const paths: PathsTypes[] = [
    { id: 1, item: 'Productos', to: '/', icon: <FaStore size={14} /> },
    { id: 2, item: '', to: '/cart', icon: <FaCartShopping size={14} /> },
    { id: 3, item: '', to: '/favorites', icon: <GoHeartFill size={14} /> }
  ]

  return (
    <>
      <nav className='h-[70px] w-full bg-pink-500/70 backdrop-blur-sm fixed top-0 right-0 left-0 z-10 rounded-b-2xl'>
        <section className='h-full w-[90%] mx-auto flex items-center justify-between'>
          <article className='text-white flex items-center gap-3 space-y-2'>
            <Link to='/' className='text-2xl hover:text-purple-700 tracking-widest'>Y&Y</Link>
            <p className='hidden md:block tracking-wider'>Pet Friendly</p>
          </article>
          <ul className='flex gap-6 text-gray-400 '>
            {
              paths.map(({ icon, id, item, to }) => (
                <li key={id}>
                  <NavLink
                    className={`flex items-center h-full  gap-1.5 font-normal text-sm text-white ${
                      location.pathname === to ? 'text-white' : ''
                    }`}
                    to={to}
                  >
                    {icon}
                    {item}
                    {to === '/cart' && <span className='bg-purple-700 text-sm  px-1 rounded-full'>{totalCount}</span>}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </section>
      </nav>
    </>
  )
}
