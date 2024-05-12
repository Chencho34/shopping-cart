import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import Button from '../button/Button'
import Container from '../container/Container'
import { IoLogoTiktok } from 'react-icons/io5'
import { Link } from 'react-router-dom'


export default function Footer () {
  return (
    <footer className='w-full h-auto bg-cover bg-pink-500'>
      <Container>
        <h2 className='text-3xl font-semibold text-white mb-3 md:text-start text-center tracking-widest'>Y&Y</h2>
        <article className='flex justify-between flex-wrap gap-6'>
          <section className='w-full lg:w-[200px]'>
            <form>
              <label htmlFor='' className='flex flex-col w-full mb-4'>
                <span  className='text-xl text-white tracking-wide'>CONTACTANOS</span>
                <input type='text' id=''  placeholder='@petfriendly'  className='rounded-full px-4 py-2 mt-2 focus:outline-none bg-gray-100 w-full' />
              </label>
              <Button className='border-[1px] border-white px-6 text-white rounded-full bg-transparent'>Enviar</Button>
            </form>
          </section>
          <article className='flex flex-wrap justify-between items-start gap-10'>
            <section className=''>
              <h4 className='text-xl text-white font-semibold mb-4 tracking-widest'>SERVICIOS</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><a href='#'>Servicio al cliente excepcional</a></li>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><a href='#'>Calidad garantizada</a></li>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><a href='#'>Personalizacion</a></li>
              </ul>
            </section>
            <section>
              <h4 className='text-lg text-white font-semibold mb-4 tracking-widest'>AYUDA</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><a href='#'>Preguntas frecuentes</a></li>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><a href='#'>Contacto</a></li>
              </ul>
            </section>
            <section>
              <h4 className='text-lg text-white font-semibold mb-4 tracking-widest'>COMPANIA</h4>
              <ul className='flex flex-col gap-1.5'>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><Link to='/about'>Acerca de nosotros</Link></li>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><Link to='/about'>Nuestro equipo</Link></li>
                <li className='text-sm text-gray-200 hover:opacity-70 tracking-wide w-max'><Link to='/about'>Politicas de privacidad</Link></li>
              </ul>
            </section>
            <section>
              <h4 className='text-lg text-white font-semibold mb-4 tracking-widest'>REDES</h4>
              <ul className='flex flex-row gap-2'>
                <li className='text-sm text-white hover:opacity-70'>
                  <a href='https://www.instagram.com/heladeriay_y?igsh=MXEwdmRiZWU1dDFrdw%3D%3D' target='_BLANK'>
                    <IoLogoInstagram size={26}/>
                  </a>
                </li>
                <li className='text-sm text-white hover:opacity-70'>
                  <a href='https://www.facebook.com/profile.php?id=61558698972474&mibextid=qi2Omg&rdid=jL5UYrEu2JWpyj5M&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F32YF8fhdf4fnnJRB%2F%3Fmibextid%3Dqi2Omg' target='_BLANK'>
                    <IoLogoFacebook size={26}/>
                  </a>
                </li>
                <li className='text-sm text-white hover:opacity-70'>
                  <a href='#' target='_BLANK'>
                    <IoLogoTiktok size={26}/>
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
          <p className='text-center tracking-wide text-gray-300 text-sm'>© Copyright 2024 <a href='#' className='hover:text-white'>Y&Y</a>. All Rights Reserved.</p>
        </article>
      </Container>
    </footer>
  )
}
