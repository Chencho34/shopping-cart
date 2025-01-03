import { useState } from 'react'
import { createProduct } from '../services/api/products'

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

export default { useCreateProduct }
