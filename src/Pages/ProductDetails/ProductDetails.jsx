import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const ProductDetails = () => {
  const { products, vendors } = useContext(AuthContext)
  const paramsId = useParams()
  console.log(paramsId)

  const product = products.find(product => product.name == paramsId.id)


  
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails