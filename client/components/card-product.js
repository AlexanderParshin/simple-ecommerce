import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Product from './one-product'


import { getProductData } from '../redux/reducers/products'

const CardProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector((s) => s.products.list)

  useEffect(() => {
    dispatch(getProductData())
  }, [])

  return (
    <div>
      <div className="">
        <ul className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {products.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </ul>
      </div>

      <div>products - {products[0].id}</div>
      <div> ........................................................................ </div>
      <div> ........................................................................ </div>
      <div>productId - {JSON.stringify(products)}</div>
    </div>
  )
}

export default CardProduct