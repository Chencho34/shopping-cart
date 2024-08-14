import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function AuthLayout (): JSX.Element {
  useAuth()
  return (
    <main className='flex h-full'>
      <aside className='w-[50%] bg-[#191919]  lg:block hidden'>
        <article className='h-full w-full px-8 py-8 flex flex-col justify-end'>
          <h2 className='text-slate-300 font-semibold text-6xl flex flex-col mb-9'>
            Welcome to Shopping Cart
          </h2>
          <section className='text-gray-400 text-sm'>
            <p>We're excited to have you join our community. Please take a moment to sign in or create an account to get started.</p>
            <p>Explore a world of possibilities in fashion, tech, and more. Start your shopping journey with us today!</p>
          </section>
        </article>
      </aside>
      <Outlet />
    </main>
  )
}
