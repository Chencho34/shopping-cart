const API = import.meta.env.VITE_CART_APP_URL_API

const getProducts = async () => {
  try {
    const response = await fetch(`${API}/products`, {
      headers: {
        'ngrok-skip-browser-warning': '12312'
      }
    })

    if(!response.ok) {
      throw new Error(`Failed to fetch: ${response.url} Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Failed to connect to the server ${API}:`, error)
    throw error
  }
}

const getProductById = async (id: number) => {
  const response = await fetch(`${API}/product/${id}`)
  const data = await response.json()
  return data
}

const createProduct = async (product: object) => {
  try {
    const response = await fetch(`${API}/createProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '112e'
      },
      body: JSON.stringify(product)
    })
  
    if(!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Failed to connect to the server ${API}:`, error)
    throw error
  }
}

const deleteProductById = async (id: number) => {
  if (id === 0) return

  try {
    const response = await fetch(`${API}/product/${id}`, {
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

export {
  getProducts,
  getProductById,
  createProduct,
  deleteProductById
}
