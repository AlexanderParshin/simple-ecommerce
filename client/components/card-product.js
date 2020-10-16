import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { getProductData } from '../redux/reducers/products'

const CardProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector((s) => s.products.list)

  useEffect(() => {
    dispatch(getProductData())
  }, [])

  return (
    <div>
      <div>products - {products[0].id}</div>
      <div> ........................................................................ </div>
      <div> ........................................................................ </div>
      <div>productId - {JSON.stringify(products)}</div>
    </div>
  )
}

export default CardProduct