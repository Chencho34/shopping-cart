import { useState, useEffect } from 'react'
import { getUserByName, getUsers, registerUser } from '../services/api/users'

const useUsers = () => {
  const [users, setUsers] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      
      try {
        setIsLoading(true)
        const data = await getUsers()
        setUsers(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return {users, isLoading, error}
}

const useUserByName = (userName: string) => {
  const [user, setUser] = useState<object | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(null)
        setUser(null)
        setIsLoading(true)
        const data = await getUserByName(userName)
        setUser(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [userName])

  return { user, isLoading, error }
}

const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  const signUpUser = async (user: object) => {
    try {
      setIsLoading(true)
      setSuccess(null)
      setError(null)

      const data = await registerUser(user)

      setSuccess(data.message)  
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, success, signUpUser }
}

export default { useUsers, useUserByName, useCreateUser }
