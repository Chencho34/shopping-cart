import { Outlet } from 'react-router-dom'

export default function AuthLayout (): JSX.Element {
  return (
    <>
      {/* <h1>Auth layout</h1>       */}
      <main>
        <Outlet />
      </main>
    </>
  )
}
