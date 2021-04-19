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
      <div>
        <ul className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default CardProduct