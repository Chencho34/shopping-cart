import { Button } from '../../../components'

export default function AdminDashboard () {
  return (
    <div className='flex justify-center flex-col flex-wrap gap-10'>
      <h1>Admin Dashboard</h1>
    <section className='flex justify-around'>
      <Button variant='secondary' className='flex flex-col w-[200px] h-[150px] rounded-lg'>
        <h1 className='text-lg '>Total users</h1>
        <span className='text-sm'>1000</span>
      </Button>
      <Button variant='secondary' className='flex flex-col w-[200px] h-[150px] rounded-lg'>
        <h1 className='text-lg '>Total prodcuts</h1>
        <span className='text-sm'>1000</span>
      </Button>
      <Button variant='secondary' className='flex flex-col w-[200px] h-[150px] rounded-lg'>
        <h1 className='text-lg '>Total orders</h1>
        <span className='text-sm'>1000</span>
      </Button>
    </section>

    </div>
  )
}
