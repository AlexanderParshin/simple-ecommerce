import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import OneProductBasket from './one_product_basket'

const Basket = () => {

  const basketProductsId = useSelector((s) => s.basketProducts)
  console.log(basketProductsId)

  return (
    <div>
      <Header />
      basket
      <OneProductBasket />
    </div>
  )
}

export default Basket