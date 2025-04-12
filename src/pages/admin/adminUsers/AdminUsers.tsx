import useUsers from '../../../hooks/useUsers'

export default function AdminUsers (): JSX.Element {
  const { users } = useUsers.useUsers()
  return(
    <>
      <h3>Admin users</h3>
      <section className=''>

        {
          users.map(({ name, email }) => (
            <div className='bg-[#212121] text-white p-3 rounded-xl w-[230px]'>
              <h1>{name}</h1>
              <h1>{email}</h1>
            </div>
          ))
        }
      </section>
    </>
  )
}
