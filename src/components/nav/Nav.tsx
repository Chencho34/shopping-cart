import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaCartShopping, FaStore } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { CartState } from '../../types'

interface PathsTypes {
  id: number
  item: string
  to: string
  icon: JSX.Element
}

export default function Nav (): JSX.Element {
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
          <ul className='flex gap-6 text-gray-400 '>
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
                    {to === '/cart' && <span className='bg-[#191919] text-sm  px-1 rounded-full'>{totalCount}</span>}
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
