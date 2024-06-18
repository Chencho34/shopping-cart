import { useState } from 'react'
import { Button, Container, Input } from '../../components'

export default function Login (): JSX.Element {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)

    try {
      getUsers()

    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  const getUsers = async () => {
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

    console.log('login succesfull', data)
  }

  return (
    <div className='bg-gradient-to-t from-[#212121] to-fuchsia-600'>
      <Container className='h-svh grid place-content-center'>
        <section className='bg-white/70 backdrop-blur-sm py-4 px-4 w-[300px] rounded-lg'>
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
              Login
            </Button>
            <p className='text-xs'>Don´t have an account? <a href='' className='font-semibold'>Sign up</a></p>
          </form>
        </section>
      </Container>
    </div>
  )
}
