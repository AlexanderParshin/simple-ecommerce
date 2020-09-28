import React from 'react'
import { useSelector } from 'react-redux'

const CardProduct = () => {
  const productName = useSelector((s) => s.products.name)
  // const dispatch = useDispatch()
  return <div>{productName}</div>
}

export default CardProduct