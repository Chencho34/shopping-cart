import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io'
import Button from '../button/Button'
import Container from '../container/Container'

export default function Footer () {
  return (
    <footer className='bg-[#191919] w-full'>
      <Container>
        <h2 className='text-3xl font-semibold text-white mb-3 md:text-start text-center tracking-widest'>CHENCHO</h2>
        <article className='flex justify-between flex-wrap gap-6'>
          <section className='w-full lg:w-[200px]'>
            <form>
              <label htmlFor='' className='flex flex-col w-full mb-4'>
                <span  className='text-xl text-gray-300 tracking-wide'>STAY IN TOUCH</span>
                <input type='text' id=''  placeholder='@chencho'  className='rounded-sm px-4 py-2 mt-2 focus:outline-none bg-gray-100 w-full' />
              </label>
              <Button className='border-[1px] border-white px-6 text-white rounded-sm'>Submit</Button>
            </form>
          </section>
          <article className='flex flex-wrap justify-between gap-10'>
            <section className=''>
              <h4 className='text-xl text-white font-semibold mb-4 tracking-widest'>SERVICES</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Fast and Reliable Shipping</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Exeptional Customer Service</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Quality Guarantee</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Customization</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Hassle-Free Returns</a></li>
              </ul>
            </section>
            <section>
              <h4 className='text-lg text-white font-semibold mb-4 tracking-widest'>HELP</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Frequenlty Asked Questions</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Size Guide</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Shipping Policy</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Return Policy</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Contact</a></li>
              </ul>
            </section>
            {/* <section>
              <h4 className='text-lg text-white font-semibold mb-4 tracking-widest'>COMPANY</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>About Us</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Our Team</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Our Stores</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>Privacy Policy</a></li>
                <li className='text-sm text-gray-300 hover:opacity-70 tracking-wide w-max'><a href='#'>News and Events</a></li>
              </ul>
            </section> */}
            <section>
              <h4 className='text-lg text-white font-semibold mb-4 tracking-widest'>SOCIAL</h4>
              <ul className='flex flex-row gap-2'>
                <li className='text-sm text-gray-300 hover:opacity-70'>
                  <a href='#'>
                    <IoLogoInstagram size={26}/>
                  </a>
                </li>
                <li className='text-sm text-gray-300 hover:opacity-70'>
                  <a href='#'>
                    <IoLogoFacebook size={26}/>
                  </a>
                </li>
                <li className='text-sm text-gray-300 hover:opacity-70'>
                  <a href='#'>
                    <IoLogoWhatsapp size={26}/>
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </article>
        <article>
          <div className='h-[0.5px] bg-gray-300/20 my-7'/>
        </article>
        <article>
          <p className='text-center tracking-wide text-gray-500 text-sm'>© Copyright 2024 <a href='https://github.com/Chencho34' target='_BLANCK' className='hover:text-white'>Chencho34</a>. All Rights Reserved.</p>
        </article>
      </Container>
    </footer>
  )
}
