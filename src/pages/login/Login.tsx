import { useState } from 'react'
import { Button, Container, Input, Spinner } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/auth/authSlice'

export default function Login (): JSX.Element {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (isLoading) return

    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
  
      const data = await response.json()
      
      const token = data.token
      localStorage.setItem('token', token)

      dispatch(login(data.user))
  
      if (!response.ok) {
        throw new Error(data.error || 'Error logging in')
      }
  
      console.log('login succesfull', data)
      setSuccess('user registered successfully')
      
      setTimeout(() => {
        setIsLoading(false)
        navigate('/')
      }, 1000)
    } catch (error) {
      console.error('Error logging in:', error)
      setError(error.message)
      setIsLoading(false)
    } 
  }

  return (
    <div className='w-full h-auto bg-cover' style={{backgroundImage: 'linear-gradient(to bottom, rgba(45, 43, 43, 0.5), rgba(35, 32, 32, 0.7)), url("https://fashionista.com/.image/t_share/MTM5NDU0OTMzODExMzQwNDUy/kl1_0420jpg.jpg")' }}>
      <Container className='h-svh grid place-content-center'>
        <section className='py-8 px-6 w-[300px] rounded-lg bg-[#191919]/70 backdrop-blur-sm shadow-xl'>
          <article className='flex flex-col gap-9 mb-6'>
            <h1 className='text-6xl text-center font-semibold tracking-wider text-gray-300'>Login</h1>
            <p className='text-sm tracking-wider text-gray-300'>Log in to your account</p>
          </article>
          <form onSubmit={handleLogin} className='flex flex-col gap-6'>
            <section className='flex flex-col gap-2'>
              <label htmlFor='email'>
                <Input
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  type='email'
                  placeholder='Email'
                />
              </label>
              <label htmlFor='password'>
                <Input
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  type='password'
                  placeholder='Password'
                />
              </label>
              <a href='' className='text-end mb-4'>
                <span className='text-xs text-gray-300 hover:text-gray-100'>Forgot your password?</span>
              </a>
            </section>
            <Button type='submit' className='px-4 h-9'>
              {
                isLoading ? <Spinner /> : <span>Register</span>
              }
            </Button>
              {success && <p className='text-green-500 text-xs'>{success}</p>}
              {error && <p className='text-red-500 text-xs'>{error}</p>}
            <p className='text-xs text-gray-300'>Don´t have an account? <Link to='/logindashboard/signUp' className='font-semibold'>Sign up</Link></p>
          </form>
        </section>
      </Container>
    </div>
  )
}
