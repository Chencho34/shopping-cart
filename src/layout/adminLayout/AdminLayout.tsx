import { Link, NavLink, Outlet } from 'react-router-dom'
import { Button, Container } from '../../components'
import { useState } from 'react'
import { CgMenuLeftAlt } from 'react-icons/cg'


export default function AdminLayout () {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <>
      <main className='flex'>
        <nav className='w-[256px]  hidden md:block fixed py-7 h-svh bg-[#191919] backdrop-blur-sm top-0 left-0 rounded-r-lg  shadow-[0_0px_8px_4px_rgba(0,0,0,0.3)]'>
          <section className='h-full w-[90%] mx-auto flex flex-col gap-2 '>
            <article className='text-2xl text-white'>
              <Link to='/admindashboard'>
                <p>Admin Panel</p>
              </Link>
            </article>
            <article>
              <ul className='flex flex-col gap-0.5 text-gray-100'>
                <li>
                  <NavLink to='/admindashboard/createProduct'>
                    Create product
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/admindashboard'>
                    All users
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/admindashboard/products'>
                    All products
                  </NavLink>
                </li>
              </ul>
            </article>
          </section>
        </nav>
        <Container className='bg-slate-50 min-h-screen py-24 sm:py-10 md:ml-[256px]'>
          <Button onClick={handleOpen} className='block md:hidden py-0.5 px-0.5 fixed top-4 left-2 z-20'>
            <CgMenuLeftAlt size={24}></CgMenuLeftAlt>
          </Button>
          <section className={`px-3 block drop-shadow-lg bg-[#191919]/95 pt-4 w-64  shadow-md sm:hidden fixed inset-y-0 left-0 z-10 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-90 pointer-events-none'} md:relative md:translate-x-0`}>
            <p className='pt-11  text-lg text-gray-100 font-normal mb-2'>Admin Panel</p>
            <ul className='flex flex-col'>
              <li>
                <NavLink to='/admindashboard/createProduct'>
                  Create product
                </NavLink>
              </li>
              <li>
                <NavLink to='/admindashboard/'>
                  All users
                </NavLink>
              </li>
              <li>
                <NavLink to='/admindashboard/products'>
                  All products
                </NavLink>
              </li>
            </ul>
          </section>
          <Outlet />
        </Container>
      </main>
    </>
  )
}
