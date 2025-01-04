import { useState } from 'react'
import { Button, Input, Spinner } from '../../../components'
import useProducts from '../../../hooks/useProducts'

export default function CreateNewProduct () {

  const { createNewProduct, error, isLoading, success } = useProducts.useCreateProduct()
  const [formProduct, setFormProduct] = useState({
    title: '',
    img: '',
    description: '',
    price: '',
    quantity: '',
    discount: '',
    category: ''
  })

  const product = {
    title: 'Lorem Ipsum Product', // Título de ejemplo
    img: 'https://http2.mlstatic.com/D_NQ_NP_971136-CBT81374525137_122024-O.webp', // Imagen de ejemplo (URL genérica)
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', // Descripción de ejemplo
    price: 100, // Precio en número
    quantity: 1, // Cantidad de productos (número)
    discount: 20 // Descuento en porcentaje
  }

  const totalWithDiscount = (discount: number, price: number) => {
    const montoDescuento = (price * discount) / 100
    const finalPrice = price - montoDescuento
    return Math.round(finalPrice)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormProduct({ ...formProduct, [name]: value })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormProduct((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoading) return

    await createNewProduct(formProduct)
    console.log(formProduct)
  }

  const resetForm = () => {
    setFormProduct({
      title: '',
      img: '',
      description: '',
      price: '',
      quantity: '',
      discount: '',
      category: ''
    })
  }

  return (
    <section className=''>
      <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wide'>Add new product</h3>
      <article className='flex flex-wrap'>
        <form onSubmit={onSubmit} className='py-8 px-6 w-[450PX] flex flex-col gap-4'>
          <label>
            <p className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>Product title</p>
            <Input
              value={formProduct.title}
              name='title'
              placeholder='Enter product name'
              type='text'
              className='text-[#191919]'
              onChange={handleChange}
            />
          </label>
          <label>
            <p className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>URL Image</p>
            <Input
              value={formProduct.img}
              name='img'
              placeholder='https://example.com/img/product1.jpg'
              type='text'
              className='text-[#191919]'
              onChange={handleChange}
            />
          </label>
          <label>
            <p className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>Product description</p>
            <Input
              value={formProduct.description}
              name='description'
              placeholder='Enter product description'
              type='text'
              className='text-[#191919]'
              onChange={handleChange}
            />
          </label>
          <label className='flex flex-col min-w-40 flex-1'>
            <p className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>Category</p>
            <select
              name='category'
              onClick={handleSelectChange}
              className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#f8fafb] focus:border-[#d1dde6] h-14 bg-[image:--select-button-svg] placeholder:text-[#507a95] p-2 rounded-full text-base font-normal leading-normal'
            >
              <option value=''></option>
              <option value='electronics'>Electronics</option>
              <option value='audio and video'>Audio and Video</option>
              <option value='gaming'>Gaming</option>
              <option value='office and work'>Oficce and Work</option>
              <option value='pc components'>PC Components</option>
              <option value='smart home'>Smart Home</option>
            </select>
          </label>
          <label>
            <span className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>Price</span>
            <Input
              value={formProduct.price}
              name='price'
              placeholder='$0.00'
              type='text'
              className='text-[#191919]'
              onChange={handleChange}
            />
          </label>
          <section className='flex gap-3'>
            <label>
              <span className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>Quantity</span>
              <Input
                value={formProduct.quantity}
                name='quantity'
                type='text'
                className='text-[#191919]'
                placeholder='0'
                onChange={handleChange}
              />
            </label>
            <label>
              <span className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>Discount</span>
              <Input
                value={formProduct.discount}
                name='discount'
                type='text'
                className='text-[#191919]'
                placeholder='10%'
                onChange={handleChange}
              />
            </label>
          </section>
          {error && <span className='text-red-600'>{error}</span>}
          {success && <span className='text-emerald-500'>{success}</span>}
          <section className='flex gap-4'>
            <Button type='submit' className='px-4 h-9 flex-1'>
              {
                isLoading ? <Spinner /> : <span>Add Product</span>
              }
            </Button>
            <Button onClick={resetForm} type='reset' variant='secondary' className='px-4 h-9 flex-1'>
               Clear Form
            </Button>
          </section>
        </form>
        <article className='mx-auto py-8 px-2'>
          <p className='text-[#0e161b] text-base font-medium leading-normal pb-2 tracking-wider'>Product Preview</p>
          <article className='bg-slate-50 rounded-md overflow-hidden shadow-lg w-[300px]'>
            <section className='flex flex-col w-full'>
              <figure className=''>
                <img className='h-full w-full mx-auto' loading='lazy' src={formProduct.img || product.img} alt={formProduct.title} />
              </figure>
              <article className='px-4 py-3 flex flex-col gap-4'>
                <section>
                  <span>
                    <h6 className='group relative inline-block mb-4'>
                      <p className='text-xl font-semibold tracking-wider hover:text-indigo-600'>{formProduct.title || product.title}</p>
                      <span className='absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full'></span>
                    </h6>
                  </span>
                  <p className='text-sm tracking-wide font-semibold text-gray-800 mb-2'>{formProduct.description || product.description}</p>
                  {
                    formProduct.discount
                      ? <span className=''>
                        <p className='line-through text-gray-400 text-base'>${formProduct.price}</p>
                        <p className='text-2xl font-medium text-[#191919]'>${totalWithDiscount(parseInt(formProduct.discount, 10), parseInt(formProduct.price, 10))} <span className='text-base text-green-600 font-normal'>{formProduct.discount}% OFF</span></p>
                      </span>
                      : <p className='text-2xl font-medium tex-[#191919]'>${formProduct.price || product.price}</p>
                  }
                </section>
              </article>
            </section>
          </article>
        </article>
      </article>
    </section>
  )
}
