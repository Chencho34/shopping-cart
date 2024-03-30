import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { FaStore } from 'react-icons/fa6'

interface PathsTypes {
  id: number
  item: string
  to: string
  icon: JSX.Element
}

export default function Nav () {
  const location = useLocation()
  const paths: PathsTypes[] = [
    { id: 1, item: 'Products', to: '/', icon: <FaStore /> },
    { id: 2, item: 'Cart', to: '/cart', icon: <FaCartShopping /> }
  ]

  return (
    <nav className='h-20 w-full bg-[#111111]'>
      <section className='h-full w-[80%] mx-auto flex items-center justify-between'>
        <article className='text-gray-400 flex items-center gap-3 space-y-2'>
          <Link to='/' className='text-2xl'>
            Shopping-Cart
          </Link>
          <p className=''>E-comerce</p>
        </article>
        <ul className='flex gap-6 text-gray-400'>
          {paths.map(({ icon, id, item, to }) => (
            <li key={id}>
              <NavLink
                className={`flex items-center gap-2 ${location.pathname === to ? 'text-orange-400' : ''
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
