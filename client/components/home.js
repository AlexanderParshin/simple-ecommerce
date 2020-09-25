import React from 'react'
import { useSelector } from 'react-redux'

const Index = () => {
  const productName = useSelector((s) => s.products.name)
  return <div>{productName}</div>
}

export default Index