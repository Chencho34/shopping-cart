const API = import.meta.env.VITE_CART_APP_URL_API

const getProducts = async () => {
  const response = await fetch(`${API}/products`)
  const data = await response.json()
  return data
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
        'Content-Type': 'application/json'
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



export {
  getProducts,
  getProductById,
  createProduct
}
