const API = 'http://localhost:3000'

const getUsers = async () => {
  const response = await fetch(`${API}/users`)
  const data = await response.json()
  return data
}

const getUserByName = async (name: string) => {
  const response = await fetch(`${API}/user/${name}`)
  const data = await response.json()
  return data
}

const deleteUserByName = async (name: string) => {
  const response = await fetch(`${API}/user/${name}`, {
    method: 'DELETE'
  })
  const data = await response.json()
  return data
}

const registerUser = async (user: object) => {
  const response = await fetch(`${API}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const data = await response.json() 
  return data
}

export {
  getUsers,
  getUserByName,
  deleteUserByName,
  registerUser
}
