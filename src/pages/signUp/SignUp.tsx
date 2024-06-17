import { Button, Container, Input } from '../../components'

export default function SignUp () {
  return (
    <div className='bg-gradient-to-t from-[#212121] to-fuchsia-600'>
      <Container className='h-svh grid place-content-center'>
        <section className='bg-white/70 backdrop-blur-sm py-4 px-4 w-[300px] rounded-lg'>
          <article className='flex flex-col gap-9 mb-6'>
            <h1 className='text-6xl text-center font-semibold tracking-wider'>Login</h1>
            <p className=''>Please enter your details</p>
          </article>
          <form className='flex flex-col gap-6'>
            <section className='flex flex-col gap-2'>
              <label htmlFor=''>
                <Input type='text' placeholder='Name'/>
              </label>
              <label htmlFor=''>
                <Input type='email' placeholder='Email'/>
              </label>
              <label htmlFor=''>
                <Input type='password' placeholder='Password'/>
              </label>
            </section>
            <Button className='px-4'>Login</Button>
            <p className='text-xs'>Already have an account? <a href='' className='font-semibold'>Login</a></p>
          </form>
        </section>
      </Container>
    </div>
  )
}

