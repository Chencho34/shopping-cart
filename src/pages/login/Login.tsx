import { useState } from 'react'
import { Button, Container, Input } from '../../components'
import { Link, useNavigate } from 'react-router-dom'

export default function Login (): JSX.Element {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
  
      if (!response.ok) {
        throw new Error(data.error || 'Error logging in')
      }
  
      // console.log('login succesfull', data)
      setSuccess('user registered successfully')
      navigate('/')
    } catch (error) {
      console.error('Error logging in:', error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='w-full h-auto bg-cover' style={{backgroundImage: 'linear-gradient(to bottom, rgba(45, 43, 43, 0.5), rgba(35, 32, 32, 0.7)), url("https://fashionista.com/.image/t_share/MTM5NDU0OTMzODExMzQwNDUy/kl1_0420jpg.jpg")' }}>
      <Container className='h-svh grid place-content-center'>
        <section className='bg-white/30 backdrop-blur-sm py-8 px-6 w-[300px] rounded-lg'>
          <article className='flex flex-col gap-9 mb-6'>
            <h1 className='text-6xl text-center font-semibold tracking-wider'>Login</h1>
            <p className=''>Log in to your account</p>
          </article>
          <form onSubmit={handleLogin} className='flex flex-col gap-3'>
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
              <span className='text-xs'>Forgot your password?</span>
            </a>
            <Button type='submit' className='px-4'>
              {isLoading ? 'Registering...' : 'Register'}
            </Button>
            {success && <p className='text-green-500'>{success}</p>}
            {error && <p className='text-red-500'>{error}</p>}
            <p className='text-xs'>Don´t have an account? <Link to='/logindashboard/signUp' className='font-semibold'>Sign up</Link></p>
          </form>
        </section>
      </Container>
    </div>
  )
}
