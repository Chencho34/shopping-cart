import { ProductsGallery } from '../../components'

export default function Home (): JSX.Element {
  return (
    <>
      <article className='h-[300px] w-full flex items-center  relative bg-[url("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-center bg-cover'>
        <article className='w-[80%] mx-auto'>
          <div>
            <span>All Electronics Collections</span>
            <h1>Makeup Which Enhance Your Natural Bauty</h1>
            <button className='py-1 px-6 bg-[#212121] text-gray-300 rounded-sm'>SHOP NOW</button>
          </div>
        </article>
      </article>
      <ProductsGallery />      
    </>
  )
}
