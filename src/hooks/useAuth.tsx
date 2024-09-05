import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/auth/authSlice'
import { AuthState } from '../types'

export default function useAuth () {
  const dispatch = useDispatch()
  const {  isAuthenticated } = useSelector((state: { auth: AuthState }) => state.auth)
  console.log(isAuthenticated)
  // console.log(user)
  const user = {
    email: 'joshua@gmail.com',
    password: '12345678'
  }


  useEffect(() => {
    const token = localStorage.getItem('token')

    // todo install jwt decode
    // const decodeUser = jwtDecode(token)

    if(token) {
      dispatch(login(user))
    } 



    
  }, [dispatch])
}
