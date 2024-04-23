import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaCartShopping, FaStore } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'

interface PathsTypes {
  id: number
  item: string
  to: string
  icon: JSX.Element
}

export default function Nav () {
  const location = useLocation()
  const paths: PathsTypes[] = [
    { id: 1, item: 'Products', to: '/', icon: <FaStore size={14} /> },
    { id: 2, item: 'Cart', to: '/cart', icon: <FaCartShopping size={14} /> },
    { id: 3, item: 'Favorites', to: '/favorites', icon: <GoHeartFill size={14} /> }
  ]

  return (
    <nav className='h-[70px] w-full bg-[#191919]/70 backdrop-blur-sm fixed top-0 right-0 left-0 z-10 rounded-b-2xl'>
      <section className='h-full w-[80%] mx-auto flex items-center justify-between'>
        <article className='text-gray-300 flex items-center gap-3 space-y-2'>
          <Link to='/' className='text-2xl'>
            Shopping-Cart
          </Link>
          <p className='hidden md:block'>E-comerce</p>
        </article>
        <ul className='md:flex gap-6 text-gray-400 hidden'>
          {paths.map(({ icon, id, item, to }) => (
            <li key={id}>
              <NavLink
                  className={`flex items-center gap-1.5 font-medium text-sm text-gray-300 ${location.pathname === to ? 'text-slate-50' : ''
                  }`}
                to={to}
              >
                {icon}
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}
