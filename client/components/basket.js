import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import OneProductBasket from './one_product_basket'

const Basket = () => {

  const basketProductsId = useSelector((s) => s.basketProducts.list)
  const listProduct = useSelector((s) => s.products.list)

  const basketProducts = listProduct.filter((item) => {
    return basketProductsId[item.id] > 0
  })

  console.log(basketProductsId)
  console.log(listProduct)
  console.log(basketProducts)

  return (
    <div>
      <Header />
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            {basketProducts.map((product) => {
              return (
                <OneProductBasket
                  key={product.id}
                  product={product}
                  number={basketProductsId[product.id]}
                />
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Total: </th>
              <th>
                {basketProducts.reduce((total, product) => {
                  return total + basketProductsId[product.id] * product.price
                }, 0)}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Basket