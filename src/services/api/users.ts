const API = import.meta.env.VITE_CART_APP_URL_API

const getUsers = async () => {
  try {
    const response = await fetch(`${API}/users`)

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.url} Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Failed to connect to the server ${API}:`, error)
    throw error
  }
}

const getUserByName = async (name: string) => {
  if (name.length === 0) return

  try {
    const response = await fetch(`${API}/user/${name}`)

    if(!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Failed to fetch ${API}/user/${name}:`, error)
    throw error
  }
}

const deleteUserByName = async (name: string) => {
  if (name.length === 0) return

  try {
    const response = await fetch(`${API}/user/${name}`, {
      method: 'DELETE'
    })

    if(!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const registerUser = async (user: object) => {
  try {
    const response = await fetch(`${API}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error)
    }

    const data = await response.json() 
    return data
  } catch (error) {
    console.error('Internal server error', error)
    throw error
  }
}

const loginUser = async (user: object) => {
  const response = await fetch(`${API}/login`, {
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
  registerUser,
  loginUser
}
