import { Outlet } from 'react-router-dom'
import { Footer, Nav } from '../../components'

export default function PublicLayout (): JSX.Element {
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
