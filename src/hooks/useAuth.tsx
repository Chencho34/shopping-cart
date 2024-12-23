import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/auth/authSlice'

export default function useAuth () {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    // todo install jwt decode
    // const decodeUser = jwtDecode(token)

    if(token && user) {
      dispatch(login({user: JSON.parse(user), token}))
    }     
  }, [dispatch])
}
