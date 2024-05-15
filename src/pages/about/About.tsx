import { Button, Container } from '../../components'
import { FaCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


export default function About () {
  return (
    <div>
      <Container>
        <section className='w-full py-12'>
          <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]'>
            <img
              src='/logo.svg'
              alt='Ice Cream'
              className='mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last'
              width='550'
              height='550'
            />
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-purple-800'>Deliciosos Helados</h1>
                <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Deléitese con nuestro helado premium elaborado con los ingredientes más frescos y naturales.
                </p>
              </div>
              <Link to='/'>
                <Button
                  className='bg-transparent border  border-purple-800  px-8 text-sm font-medium text-purple-800'
                >
                  Explora Ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='grid gap-10 lg:grid-cols-2 lg:gap-20'>
            <div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800'>Mision</h2>
              <p className='mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                En nuestra empresa de helados, estamos comprometidos a utilizar ingredientes de origen local de la más alta calidad para elaborar sabores de helado deliciosos e innovadores que deleiten a nuestros clientes. Nuestra misión es redefinir la experiencia del helado superando los límites de los sabores y técnicas tradicionales.
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800'>Vision</h2>
              <p className='mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Nuestra visión es convertirnos en un líder en la industria del helado artesanal, conocido por nuestra creatividad, dedicación al oficio y compromiso de utilizar los mejores ingredientes. Nuestro objetivo es inspirar la pasión por el helado en nuestra comunidad y más allá, y superar continuamente los límites de lo que es posible en el mundo de los postres helados.
              </p>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2'>
            <div>
              <h2 className='text-purple-800 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                Valores
              </h2>
              <ul className='mt-4  space-y-4 text-gray-500 dark:text-gray-400'>
                <li className='flex items-start gap-2'>
                  <FaCircleCheck size={40} color='green' />
                  <span>
                    <span className='font-bold'>Amor por las Mascotas:</span> Valoramos y respetamos a todos los seres vivos, y nos esforzamos por crear un ambiente acogedor donde las mascotas sean bienvenidas.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <FaCircleCheck size={40} color='green' />
                  <span>
                    <span className='font-bold'>Calidad y Naturalidad:</span> Utilizamos ingredientes de la más alta calidad y naturales en la elaboración de nuestros helados, garantizando así una experiencia deliciosa y saludable para nuestros clientes y sus mascotas.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <FaCircleCheck size={40} color='green' />
                  <span>
                    <span className='font-bold'>Compromiso con la Comunidad:</span> Nos comprometemos a ser parte activa de nuestra comunidad, apoyando eventos y causas relacionadas con el bienestar animal y promoviendo un estilo de vida saludable y activo para las personas y sus mascotas.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <FaCircleCheck size={40} color='green' />
                  <span>
                    <span className='font-bold'>Variedad de Sabores:</span> Nos enorgullecemos de ofrecer una amplia gama de sabores de helado, asegurando que tanto las personas como sus mascotas encuentren opciones que les encanten.

                  </span>
                </li>
              </ul>
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='/images/ice-08.webp'
                width='550'
                height='550'
                alt='Ice Cream'
                className='mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full'
              />
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='space-y-4 text-center '>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800'>Lo que dicen nuestros clientes</h2>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pb-6'>
              Escuche a nuestros clientes satisfechos hablar sobre nuestros deliciosos helados y paletas que disfrutaron.
            </p>
          </div>
          <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-6' data-v0-t='card'>
              <div className='flex items-center space-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  width='64'
                  height='64'
                  alt='Avatar'
                  className='h-16 w-16 rounded-full object-cover'
                // style='aspect-ratio: 64 / 64; object-fit: cover;'
                />
                <div>
                  <div className='font-semibold'>Jane Doe</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>Cliente</div>
                </div>
              </div>
              <div className='py-6'>
                <blockquote className='text-lg font-semibold leading-snug'>
                  “¡El helado en esta tienda es simplemente divino! Los sabores son tan ricos y cremosos, y es el perfecto
                  tratar en un día caluroso ".
                </blockquote>
              </div>
            </div>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-6' data-v0-t='card'>
              <div className='flex items-center space-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  width='64'
                  height='64'
                  alt='Avatar'
                  className='h-16 w-16 rounded-full object-cover'
                // style='aspect-ratio: 64 / 64; object-fit: cover;'
                />
                <div>
                  <div className='font-semibold'>John Smith</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>Cliente</div>
                </div>
              </div>
              <div className='py-6'>
                <blockquote className='text-lg font-semibold leading-snug'>
                  “Llevo años viniendo a esta heladería y nunca me han decepcionado. La calidad es
                  consistentemente excelente.”
                </blockquote>
              </div>
            </div>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-6' data-v0-t='card'>
              <div className='flex items-center space-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  width='64'
                  height='64'
                  alt='Avatar'
                  className='h-16 w-16 rounded-full object-cover'
                // style='aspect-ratio: 64 / 64; object-fit: cover;'
                />
                <div>
                  <div className='font-semibold'>Sarah Lee</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>Cliente</div>
                </div>
              </div>
              <div className='py-6'>
                <blockquote className='text-lg font-semibold leading-snug'>
                  “He probado muchas heladerías diferentes, pero esta es, con diferencia, la mejor. Los sabores son unicos
                  y el servicio es muy amigable”
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800'>Nuestro Equipo</h2>
              <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Las personas talentosas detrás de nuestro éxito.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              <div className='flex flex-col items-center justify-center space-y-2'>
                <figure className='relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full'>
                  <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </figure>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold'>Yareth Bravo</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Fundador</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center space-y-2'>
                <figure className='relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full'>
                  <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' alt='' />
                </figure>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold'>David Alejandro</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Fundador</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center space-y-2'>
                <figure className='relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full'>
                  <img src='/images/karime.jpeg' alt='' />
                </figure>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold'>Karime Torres</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Marketing</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center space-y-2'>
                <figure className='relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full'>
                  <img src='/images/armando.jpeg' alt='' />
                </figure>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold'>Armando Crescencio</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
