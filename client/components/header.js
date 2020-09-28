import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const numberItemsCart = 0
  return (
    <div>
      <div>
        <Link to="/" id="brand-name">
          Simple ecommerce
        </Link>
      </div>
      <div>
        <Link to="/basket" id="order-count">Cart: { numberItemsCart }</Link>
      </div>

    </div>
  )
}

export default Header