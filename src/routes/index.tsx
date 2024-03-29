import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Cart, Home, Login } from '../pages'
import { PublicLayout } from '../layout'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PublicLayout />}>
      <Route index element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
    </Route>
))
