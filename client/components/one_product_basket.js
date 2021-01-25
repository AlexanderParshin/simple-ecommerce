import React from 'react'


const OneProductBasket = (props) => {
  return (
    <div className=".flex .flex-wrap .items-end">
      <div>{props.product.image}</div>
      <div>{props.product.title}</div>
      <div>{props.product.price}</div>
      <div>{props.number}</div>
    </div>
  )
}

export default OneProductBasket

