import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/auth/authSlice'

export default function useAuth () {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = {
      name: 'joshua',
      email: 'joshua@gmail.com',
      id: 1
    }

    if(token) {
      // const response = await fetch('http://localhost:3000/user/')
      dispatch(login(user))
    }

    
  }, [dispatch])
}
