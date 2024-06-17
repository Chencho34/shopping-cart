import { Button, Container, Input, Wrapper } from '../../components'

export default function Login () {
  return (
    // <Wrapper backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8g16f_OKhWFrh1wMOF9ZQsA00CPuoFx33EA&s'>

      <div className='bg-gradient-to-t from-[#212121] to-fuchsia-600'>
        <Container className='h-svh grid place-content-center'>
          <section className='bg-white/70 backdrop-blur-sm py-4 px-4 w-[300px] rounded-lg'>
            <article className='flex flex-col gap-9 mb-6'>
              <h1 className='text-6xl text-center font-semibold tracking-wider'>Login</h1>
              <p className=''>Log in to your account</p>
            </article>
            <form className='flex flex-col gap-3'>
              <label htmlFor=''>
                <Input type='email' placeholder='Email'/>
              </label>
              <label htmlFor=''>
                <Input type='password' placeholder='Password'/>
              </label>
              <a href='' className='text-end mb-4'>
                <span className='text-xs'>Forgot your password?</span>
              </a>
              <Button className='px-4'>Login</Button>
              <p className='text-xs'>Don´t have an account? <a href='' className='font-semibold'>Sign up</a></p>
            </form>
          </section>
        </Container>
      </div>
    // </Wrapper>
  )
}
