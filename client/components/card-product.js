import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { updeteProduct } from '../redux/reducers/products'

const CardProduct = () => {

  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/v1/products').then(({ data }) => {
      // console.log('axios.get: ', data)
      setProducts(data)
      dispatch(updeteProduct(data))
    })
  }, [])

  const productId = useSelector((s) => s.products)
  // return <div>{JSON.stringify(products)}</div>
  return (
    <div>
      <div>product - {productId.id}</div>
      <div>productId - {JSON.stringify(productId)}</div>
      <div> ........................................................................ </div>
      <div>{JSON.stringify(products)}</div>
    </div>
  )
}

export default CardProduct