import { useSelector } from 'react-redux'
import { AuthState } from '../../types'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute ({ children }: ProtectedRouteProps) {
  const isAuthenticated = useSelector((state: { auth: AuthState }) => state.auth.isAuthenticated)

  if (!isAuthenticated) return <Navigate to={'/logindashboard'}/>

  return children
}

