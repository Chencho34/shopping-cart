import { useState } from 'react'
import { Button, Container, Input } from '../../components'

export default function SignUp () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(formData)

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json() // Aquí se lee el cuerpo de la respuesta una vez

      if (!response.ok) {
        throw new Error(data.error || 'Error registering user')
      }

      console.log('User registered successfully:', data)
      // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito

    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <div className='bg-gradient-to-t from-[#212121] to-fuchsia-600'>
      <Container className='h-svh grid place-content-center'>
        <section className='bg-white/70 backdrop-blur-sm py-4 px-4 w-[300px] rounded-lg'>
          <article className='flex flex-col gap-9 mb-6'>
            <h1 className='text-6xl text-center font-semibold tracking-wider'>SignUp</h1>
            <p className=''>Please enter your details</p>
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
            <p className='text-xs'>Already have an account? <a href='' className='font-semibold'>Login</a></p>
          </form>
        </section>
      </Container>
    </div>
  )
}

