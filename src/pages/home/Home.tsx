// import { Container, Wrapper } from '../../components'

import { Card } from '../../components'

export default function Home (): JSX.Element {

  const productsData = [
    { 
      img: 'https://picsum.photos/2000/1000',
      title: 'Smartphone',
      description: 'Teléfono inteligente con pantalla OLED de 6.5 pulgadas, cámara de 12MP y 256GB de almacenamiento.',
      price: 799.99
    },
    {
      img: 'https://picsum.photos/1000/1000',
      title: 'Laptop',
      description: 'Laptop ultradelgada con procesador Intel Core i7, 16GB de RAM y SSD de 512GB.',
      price: 1299.99
    },
    {
      img: 'https://picsum.photos/2000/3000',
      title: 'Smartwatch',
      description: 'Reloj inteligente con monitor de ritmo cardíaco, GPS integrado y resistencia al agua.',
      price: 199.99
    },
    {
      img: 'https://picsum.photos/1000/1200',
      title: 'Auriculares inalámbricos',
      description: 'Auriculares Bluetooth con cancelación de ruido activa y batería de larga duración.',
      price: 149.99
    }
  ]
  
  return (
    <>
      {/* <Wrapper> */}
        <article className='h-[300px] w-full flex items-center  relative bg-[url("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-center bg-cover'>
          <article className='w-[80%] mx-auto'>
            <div>
              <span>All Electronics Collections</span>
              <h1>Makeup Which Enhance Your Natural Bauty</h1>
              <button className='py-1 px-6 bg-[#212121] text-gray-300 rounded-sm'>SHOP NOW</button>
            </div>
          </article>
        </article>
        {
          productsData.map(({ description, img, price, title }) => (
            <Card 
              description={description} 
              img={img} 
              price={price} 
              title={title}/>
          ))
        }

    </>
  )
}
