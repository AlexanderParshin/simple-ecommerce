import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import OneProductBasket from './one_product_basket'

const Basket = () => {

  const basketProductsId = useSelector((s) => s.basketProducts.list)
  const listProduct = useSelector((s) => s.products.list)

  const basketProducts = listProduct.filter((item) => {
    return (basketProductsId[item.id] > 0)
  })

  console.log(basketProductsId)
  console.log(listProduct)
  console.log(basketProducts)

  return (
    <div>
      <Header />
      <div>
        {basketProducts.map((product) => {
          return (
            <OneProductBasket
              key={product.id}
              product={product}
              number={basketProductsId[product.id]}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Basket