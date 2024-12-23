import { useEffect, useState } from 'react'
import { Button, Container, Input, Spinner } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import useUsers from '../../hooks/useUsers'

export default function SignUp () {
  const { error, success, isLoading, signUpUser } = useUsers.useCreateUser()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      if (success) {
        navigate('/logindashboard')
      }
    }, 1000)
  }, [success])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoading) return

    await signUpUser(formData)
  }

  return (
    <div className='w-full h-auto bg-cover' style={{backgroundImage: 'linear-gradient(to bottom, rgba(45, 43, 43, 0.5), rgba(35, 32, 32, 0.7)), url("https://fashionista.com/.image/t_share/MTM5NDU0OTMzODExMzQwNDUy/kl1_0420jpg.jpg")' }}>
      <Container className='h-svh grid place-content-center'>
        <section className='py-8 px-6 w-[300px] rounded-lg bg-[#191919]/70 backdrop-blur-sm shadow-xl'>
          <article className='flex flex-col gap-9 mb-6'>
            <h1 className='text-6xl text-center font-semibold tracking-wider text-gray-300'>SignUp</h1>
            <p className='text-sm tracking-wider text-gray-300'>Please enter your details</p>
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
            <Button type='submit' className={`px-4 h-9 ${isLoading ? 'cursor-not-allowed' : ''}`}>
              { isLoading ? <Spinner /> : <span>SignUp</span> }
            </Button>
            {error && <p className='text-red-500 text-xs'>{error}</p>}
            {success && <p className='text-green-500 text-xs'>{success}</p>}
            <p className='text-xs text-gray-300'>Already have an account? <Link to='/logindashboard' className='font-semibold'>Login</Link></p>
          </form>
        </section>
      </Container>
    </div>
  )
}

