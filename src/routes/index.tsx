import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { AdminDashboard, Cart, CreateNewProduct, Favorites, Home, Login, Product, SignUp, UserProfile, UserSettings } from '../pages'
import { AdminLayout, AuthLayout, PublicLayout } from '../layout'
import { ProtectedRoute } from '../components'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/user-profile' element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path='/user-settings' element={<ProtectedRoute><UserSettings /></ProtectedRoute>} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
      <Route path='/logindashboard' element={<AuthLayout />}>
        <Route index element={<Login />}/>
        <Route path='/logindashboard/signUp' element={<SignUp />}/>
      </Route>
      <Route path='/admindashboard' element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path='/admindashboard/createProduct' element={<CreateNewProduct />} />
      </Route>
    </>
))


