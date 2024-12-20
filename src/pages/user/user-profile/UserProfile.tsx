import { Button, Input } from '../../../components'

export default function UserProfile () {
  return (
    <section className='mx-auto pb-10 md:px-11 px-4 min-h-screen flex-grow w-full max-w-7xl sm:px-6 lg:px-8 pt-24'>
      <section>
        <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wider'>User Settings</h3>
        <p className=''>General Information</p>
      </section>
      <section className='flex gap-4 sm:flex-row my-9  h-auto items-center flex-col'>
        <figure className='h-24 w-24 rounded-full overflow-hidden bg-red-600'>
          <img src='https://mighty.tools/mockmind-api/content/human/65.jpg' alt='user-img' className='w-full h-full object-cover' />
        </figure>
        <article>
          <p className='text-2xl'>Jose Armando Crescencio Rico</p>
          <p className='text-md text-gray-500'>armando@gmail.com</p>
        </article>
      </section>
      <article className='container mx-auto  bg- h-[100%] flex flex-col gap-6'>

        <section className='flex flex-col gap-4 '>
          <label htmlFor=''>
            <span>Name</span>
            <Input type='text' value='Jose Armando Crescencio Rico' className='text-gray-700' />
          </label>
          <label htmlFor=''>
            <span>Email</span>
            <Input type='text' value='Armando@gmail.com' className='text-gray-700' />
          </label>
        </section>

        <section>
          <Button className='px-6' >Logout</Button>
        </section>
        
      </article>
      <article className='container mx-auto  bg- h-[100%] flex flex-col gap-6'>


      </article>
    </section>
  )
}
