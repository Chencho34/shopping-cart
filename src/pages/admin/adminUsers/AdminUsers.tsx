import { Button } from '../../../components'
import useUsers from '../../../hooks/useUsers'

export default function AdminUsers (): JSX.Element {
  const { users } = useUsers.useUsers()
  return(
    <>
      <h3 className='text-2xl sm:text-3xl text-[#191919] tracking-wide mb-4'>Users</h3>
      <section className=''>

        {
          <table className='min-w-full text-left text-sm whitespace-nowrap'>
            <thead className='uppercase tracking-wider border-b-2 dark:border-neutral-600'>
              <tr>
                <th className='text-[#191919] text-base font-semibold px-6 py-4'>Id</th>
                <th className='text-[#191919] text-base font-semibold px-6 py-4'>Name</th>
                <th className='text-[#191919] text-base font-semibold px-6 py-4'>Email</th>
                <th className='text-[#191919] text-base font-semibold px-6 py-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(({ id, name, email }, index) => (
                  <tr key={index} className='border-b dark:border-neutral-600 '>
                    <th className='px-6 py-4 capitalize'>{id}</th>
                    <th className='px-6 py-4 capitalize'>{name}</th>
                    <td className='px-6 py-4'>{email}</td>
                    <td className='px-6 py-4 h-full'>
                      <section className='flex gap-1'>
                        <Button variant='secondary' className='px-4 flex-1'>Edit</Button>
                        <Button className='px-4 flex-1'>Delete</Button>
                      </section>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
         
        }
      </section>
    </>
  )
}
