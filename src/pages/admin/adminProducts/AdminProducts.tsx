import { useEffect, useState } from 'react'
import { Button, Container, Spinner } from '../../../components'
import useProducts from '../../../hooks/useProducts'

export default function AdminProducts (): JSX.Element {
  const { products, isLoading } = useProducts.useProducts()
  const { deleteProduct } = useProducts.useDeleteProduct()

  const [updateP, setUpdateP] = useState<[]>(products)
  const [itemSearch, setItemSearch] = useState([])

  const testData = [
    {
      title: 'Mystic Orb',
      img: 'orb.png',
      description: 'A magical orb that glows in the dark.',
      price: '150',
      quantity: '50',
      discount: '10',
      category: 'magic'
    },
    {
      title: 'Dragon Egg',
      img: 'dragon_egg.jpg',
      description: 'A rare dragon egg from the mystical mountains.',
      price: '500',
      quantity: '5',
      discount: '50',
      category: 'fantasy'
    },
    {
      title: 'Invisibility Cloak',
      img: 'cloak.png',
      description: 'A cloak that grants temporary invisibility.',
      price: '300',
      quantity: '10',
      discount: '30',
      category: 'stealth'
    },
    {
      title: 'Potion of Strength',
      img: 'potion_strength.jpg',
      description: 'Increases your strength for an hour.',
      price: '120',
      quantity: '100',
      discount: '15',
      category: 'alchemy'
    },
    {
      title: 'Phoenix Feather',
      img: 'phoenix_feather.jpg',
      description: 'A feather from a legendary phoenix, grants good luck.',
      price: '200',
      quantity: '20',
      discount: '25',
      category: 'legendary'
    },
    {
      title: 'Time Turner',
      img: 'time_turner.png',
      description: 'Allows you to go back in time for a few hours.',
      price: '800',
      quantity: '3',
      discount: '100',
      category: 'time'
    }
  ]
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const serachInput = testData.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setItemSearch(serachInput)
    
  }
  

  useEffect(() => {
    setUpdateP(products)
  }, [products])

  const handleDelete = async (id: number) => {
    const updateProducts = updateP.filter((product) => product.id !== id)
    setUpdateP(updateProducts)
    await deleteProduct(id)
  }

  return (
    <>
      <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wide'>Products</h3>
      <div className='overflow-x-auto  dark:bg-neutral- h-full'>
        <div className='relative m-[2px] mb-3 mr-5 float-left'>
          <label className='sr-only'>Search </label>
          <input id='inputSearch' onChange={handleChange} type='text' placeholder='Search...' className='block w-64 rounded-lg border dark:border-none dark:bg-neutral- py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400' />
          <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='h-4 w-4 text-neutral-500 dark:text-neutral-200'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
            </svg>
          </span>
        </div>

        {
          isLoading ? (
            <Container className=' inset-0 flex items-center justify-center h-[50%]'>
              <Spinner />
            </Container>
          ) : (
            <table className='min-w-full text-left text-sm whitespace-nowrap'>
              <thead className='uppercase tracking-wider border-b-2 dark:border-neutral-600'>
                <tr>
                  <th className='text-[#191919] text-base font-semibold px-6 py-4'>Image</th>
                  <th className='text-[#191919] text-base font-semibold px-6 py-4'>Product</th>
                  <th className='text-[#191919] text-base font-semibold px-6 py-4'>Price</th>
                  <th className='text-[#191919] text-base font-semibold px-6 py-4'>Stock</th>
                  <th className='text-[#191919] text-base font-semibold px-6 py-4'>Category</th>
                  <th className='text-[#191919] text-base font-semibold px-6 py-4'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  itemSearch.map(({ id, title, price, img, quantity, category }, index) => (
                    <tr key={index} className='border-b dark:border-neutral-600 '>
                      <th className='px-6'><img className='w-14' src={img} alt='' /></th>
                      <th className='px-6 py-4 capitalize'>{title}</th>
                      <td className='px-6 py-4'>${price}</td>
                      <td className='px-6 py-4'>{quantity}</td>
                      <td className='px-6 py-4 capitalize'>{category}</td>
                      <td className='px-6 py-4 h-full'>
                        <section className='flex gap-1'>
                          <Button variant='secondary' className='px-4 flex-1'>Edit</Button>
                          <Button onClick={() => handleDelete(id)} className='px-4 flex-1'>Delete</Button>
                        </section>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
        }
      </div>
    </>
  )
}
