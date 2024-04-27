import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaCartShopping, FaStore } from 'react-icons/fa6'
import { GoHeartFill } from 'react-icons/go'
import { CgMenuRightAlt } from 'react-icons/cg'


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
    <>
      <nav className='h-[70px] w-full bg-[#bf3992]/70 backdrop-blur-sm fixed top-0 right-0 left-0 z-10 rounded-b-2xl'>
        <section className='h-full w-[80%] mx-auto flex items-center justify-between'>
          <article className='text-gray-300 flex items-center gap-3 space-y-2'>
            <Link to='/' className='text-2xl hover:text-white'>Y&Y</Link>
            <p className='hidden md:block'>Pet-Friendly</p>
          </article>
          <ul className='md:flex gap-6 text-gray-400 hidden'>
            {
              paths.map(({ icon, id, item, to }) => (
                <li key={id}>
                  <NavLink
                    className={`flex items-center gap-1.5 font-medium text-sm text-gray-300 ${
                      location.pathname === to ? 'text-slate-50' : ''
                    }`}
                    to={to}
                  >
                    {icon}
                    {item}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          {/* <CgMenuRightAlt size={24} className='text-gray-300 hover:text-white cursor-pointer'/> */}
        </section>
      </nav>
      {/* <section className='bg-[#191919]/70  fixed rounded-full px-1.5 py-1.5 top-24 right-6 z-30'>
        <article className='flex flex-col gap-4 items-center'>
          <div className='h-8 w-8 bg-[#191919] rounded-full'></div>
          <FaCartShopping size={24} color='white'/>
          <FaStore size={24} color='white'/>
          <GoHeartFill  size={24} color='white'/>
        </article>

      </section> */}
    </>
  )
}
