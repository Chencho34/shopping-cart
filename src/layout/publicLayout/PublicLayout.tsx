import { Outlet } from 'react-router-dom'
import { Footer, Nav } from '../../components'
import useAuth from '../../hooks/useAuth'

export default function PublicLayout (): JSX.Element {
  useAuth()
  return (
    <>
      <Nav />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </>
  )
}
