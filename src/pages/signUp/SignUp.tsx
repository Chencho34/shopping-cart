import { useState } from 'react'
import { Button, Container, Input } from '../../components'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp () {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error registering user')
      }

      console.log('User registered successfully:', data)
      navigate('/logindashboard')
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <div className='w-full h-auto bg-cover' style={{backgroundImage: 'linear-gradient(to bottom, rgba(45, 43, 43, 0.5), rgba(35, 32, 32, 0.7)), url("https://fashionista.com/.image/t_share/MTM5NDU0OTMzODExMzQwNDUy/kl1_0420jpg.jpg")' }}>
      <Container className='h-svh grid place-content-center'>
        <section className=' bg-white/30 backdrop-blur-sm py-8 px-6 w-[300px] rounded-lg'>
          <article className='flex flex-col gap-9 mb-6'>
            <h1 className='text-6xl text-center font-semibold tracking-wider'>SignUp</h1>
            <p className='text-sm tracking-wider'>Please enter your details</p>
          </article>
          <form onSubmit={handleRegister} className='flex flex-col gap-6'>
            <section className='flex flex-col gap-2'>
              <label htmlFor='name'>
                <Input 
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  type='text' 
                  placeholder='Name'
                />
              </label>
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
            </section>
            <Button type='submit' className='px-4'>SignUp</Button>
            <p className='text-xs'>Already have an account? <Link to='/logindashboard' className='font-semibold'>Login</Link></p>
          </form>
        </section>
      </Container>
    </div>
  )
}

