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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState<string | null>('')
  
  const signUpUser = async (user: object) => {
    try {
      setIsLoading(true)
      setSuccess(null)
      setError(null)
      const data = await registerUser(user)

      if (data.error){
        setError(data.error)
        return
      } 
      
      setSuccess('usuario creado correctamente')

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, success, signUpUser }
}




export default { useUsers, useUserByName, useCreateUser }

