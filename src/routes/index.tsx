import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Cart, Favorites, Home, Product } from '../pages'
import { PublicLayout } from '../layout'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PublicLayout />}>
      <Route index element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/favorites' element={<Favorites />} />
    </Route>
))
