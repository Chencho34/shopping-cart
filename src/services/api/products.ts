const API = 'http://localhost:3000'

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

export {
  getProducts,
  getProductById
}
