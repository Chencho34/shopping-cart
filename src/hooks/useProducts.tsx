import { useEffect, useState } from 'react'
import { createProduct, deleteProductById, getProducts } from '../services/api/products'

const useProducts = () => {
  const [products, setProducts] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred'
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()

  }, [])
  return { products, isLoading, error }
}

const useCreateProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const createNewProduct = async (product: object) => {
    try {
      setIsLoading(true)
      setError(null)
      setSuccess(null)

      const data = await createProduct(product)  

      setSuccess(data.message)
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, success, createNewProduct }
}

const useDeleteProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const deleteProduct = async (id: number) => {
    try {
      const data = await deleteProductById(id)
      setSuccess(data.message)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, success, deleteProduct }
}

export default { useCreateProduct, useProducts, useDeleteProduct }
